import { contextData } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import PageLoader from '@/components/PageLoader';
import { GoInfo } from 'react-icons/go';
import Alert from '@/components/ui/Alert';
import { Copy } from 'lucide-react';

interface Coin {
  name: string;
  address: string;
  network: string;
  price: number;
  priceSource?: 'api' | 'fallback';
  lastPriceUpdate?: string;
  change24h?: number;
}

interface WireTransfer {
  bankName: string;
  accountName: string;
  accountNumber: string;
  routingNumber: string;
  swiftCode: string;
  instructions: string;
  isActive: boolean;
}

export default function Deposit() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState<string | number>(0);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState<Coin | undefined>();
  const [wireTransfer, setWireTransfer] = useState<WireTransfer | null>(null);
  const [depositMethod, setDepositMethod] = useState<'crypto' | 'wire'>(
    'crypto',
  );
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [depositConfirmed, setDepositConfirmed] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [pendingDeposit, setPendingDeposit] = useState<any>(null);
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const { user } = contextData();

  const fetchCoins = async () => {
    setFetching(true);
    try {
      // Fetch coins with live prices
      const [coinsRes, utilsRes] = await Promise.all([
        fetch(`${url}/utils/coins-with-prices`),
        fetch(`${url}/utils`),
      ]);
      
      const coinsData = await coinsRes.json();
      const utilsData = await utilsRes.json();
      
      if (coinsRes.ok && utilsRes.ok) {
        // Use coins with live prices if available, otherwise fallback to static prices
        const coinsWithPrices =
          coinsData.coins && coinsData.coins.length > 0
            ? coinsData.coins
            : utilsData.coins;

        setCoins(coinsWithPrices);
        setCoin(coinsWithPrices[0]);
        setWireTransfer(utilsData.wireTransfer || null);
      } else {
        // Fallback to just utils if coins-with-prices fails
        const fallbackRes = await fetch(`${url}/utils`);
        const fallbackData = await fallbackRes.json();
        if (fallbackRes.ok) {
          setCoins(fallbackData.coins);
          setCoin(fallbackData.coins[0]);
          setWireTransfer(fallbackData.wireTransfer || null);
        } else {
          throw new Error(fallbackData.message);
        }
      }
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to load deposit options. Please try again.',
      );
    } finally {
      setFetching(false);
    }
  };

  const checkPendingDeposit = async () => {
    if (!user) return;
    try {
      const res = await fetch(`${url}/deposits/user/${user.email}`);
      const data = await res.json();

      if (res.ok) {
        const pending = data.find(
          (deposit: any) =>
            deposit.status === 'pending' && deposit.type === 'deposit',
        );
        setPendingDeposit(pending || null);
      } else if (res.status === 401) {
        setError('Please sign in again to view your deposit status.');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to load deposit status.',
      );
    }
  };

  const cancelDeposit = async () => {
    if (!pendingDeposit) return;

    try {
      setLoading(true);
      const res = await fetch(`${url}/deposits/${pendingDeposit._id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setPendingDeposit(null);
        setSuccess(false);
        setShowWalletAddress(false);
        setDepositConfirmed(false);
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchCoins();
    checkPendingDeposit();
  }, [user]);

  const sendDeposit = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (amount < 1) return setError('The minimum transfer amount is $1');

    if (depositMethod === 'crypto') {
      // For crypto, just show wallet address first, don't create transaction yet
      setShowWalletAddress(true);
      return;
    }

    // For wire transfer, create transaction immediately
    setLoading(true);
    setSuccess(false);

    try {
      const payload = {
        id: user._id,
        amount,
        depositMethod: 'wire',
        wireTransferData: {
          bankName: wireTransfer?.bankName,
          accountName: wireTransfer?.accountName,
          accountNumber: wireTransfer?.accountNumber,
          routingNumber: wireTransfer?.routingNumber,
          swiftCode: wireTransfer?.swiftCode,
          instructions: wireTransfer?.instructions,
        },
      };

      const res = await fetch(`${url}/deposits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        checkPendingDeposit(); // Refresh pending deposit
      } else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const roundNumber = (number: number) => {
    if (number < 1 && Math.abs(number) % 1 > 1e-6) {
      return number.toFixed(6);
    }

    return number.toFixed(2);
  };

  const handleCoinChange = (e: any) => {
    const findCoin: Coin | any = JSON.parse(e.target.value);
    if (findCoin) setCoin(findCoin);

    if (findCoin) {
      setConvertedAmount(roundNumber(amount / findCoin.price));
    }
  };

  const handleAmountChange = (e: any) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);

    if (depositMethod === 'crypto' && coin) {
      setConvertedAmount(roundNumber(newAmount / coin.price));
    } else if (depositMethod === 'wire') {
      setConvertedAmount(newAmount); // For wire transfer, amount stays the same
    }
  };

  const copyToClipBoard = async (copyMe: string) => {
    await navigator.clipboard.writeText(copyMe);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  const handleDepositConfirmed = async () => {
    setLoading(true);
    setError(null);

    try {
      const payload = {
        id: user._id,
        amount,
        depositMethod: 'crypto',
        convertedAmount,
        coinName: coin?.name,
      };

      const res = await fetch(`${url}/deposits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setDepositConfirmed(true);
        checkPendingDeposit(); // Refresh pending deposit
      } else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user || fetching) return <PageLoader />;

  if (error && !coin) {
    return (
      <div className="w-full flex justify-center m-auto">
        <div className="w-full max-w-lg p-6 bg-white dark:bg-emerald-950/10 border border-gray-200 dark:border-emerald-800/30 rounded-xl shadow-lg">
          <Alert type="error" message={error} />
        </div>
      </div>
    );
  }

  // If user has pending deposit, show that instead of form
  if (pendingDeposit && !success && !showWalletAddress) {
    return (
      <div className="w-full flex justify-center m-auto">
        <div className="w-full max-w-lg p-6 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-200 dark:border-yellow-800/30 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">
                Pending Deposit
              </h3>
            </div>
            <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full font-medium">
              Awaiting Approval
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-yellow-700 dark:text-yellow-400">
                Method:
              </span>
              <span className="text-sm font-medium text-yellow-900 dark:text-yellow-200">
                {pendingDeposit.depositMethod === 'wire'
                  ? 'Wire Transfer'
                  : `${
                      pendingDeposit.walletData?.coinName || 'Crypto'
                    } Deposit`}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-yellow-700 dark:text-yellow-400">
                Amount:
              </span>
              <span className="text-lg font-bold text-yellow-900 dark:text-yellow-200">
                ${pendingDeposit.amount.toLocaleString()} USD
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-yellow-700 dark:text-yellow-400">
                Date:
              </span>
              <span className="text-sm font-medium text-yellow-900 dark:text-yellow-200">
                {new Date(pendingDeposit.date).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={cancelDeposit}
              disabled={loading}
              className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg font-medium transition-colors"
            >
              {loading ? 'Cancelling...' : 'Cancel Deposit'}
            </button>

            <button
              onClick={checkPendingDeposit}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors"
            >
              Refresh Status
            </button>
          </div>

          {error && <Alert type="error" message={error} />}
        </div>
      </div>
    );
  }

  return (
    coin && (
      <>
        {!success && !showWalletAddress ? (
          <div className="w-full flex  justify-center shadow-1 m-auto">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-emerald-950/10 dark:border-emerald-800/30 backdrop-blur-sm">
              <form className="space-y-6" action="#" onSubmit={sendDeposit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Start Deposit
                </h5>

                <div className="flex gap-5">
                  <div className="flex-auto">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Deposit Method
                    </label>
                    <div className="flex gap-2 mb-4">
                      <button
                        type="button"
                        onClick={() => setDepositMethod('crypto')}
                        className={`flex-1 py-1.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                          depositMethod === 'crypto'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        Cryptocurrency
                      </button>
                      {wireTransfer && wireTransfer.isActive && (
                        <button
                          type="button"
                          onClick={() => setDepositMethod('wire')}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                            depositMethod === 'wire'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          Wire Transfer
                        </button>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {depositMethod === 'crypto' && (
                        <div>
                          <label
                            htmlFor="coin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Choose Coin
                          </label>
                          <select
                            onChange={handleCoinChange}
                            id="coin"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-emerald-950/20 dark:border-emerald-800/30 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-400 dark:focus:border-emerald-400 capitalize"
                          >
                            {coins.map((c: Coin, i: number) => (
                              <option key={i} value={JSON.stringify(c)}>
                                {c.name} {c.network}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div>
                        <label
                          htmlFor="amount"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Amount In USD
                        </label>
                        <input
                          onChange={handleAmountChange}
                          value={amount === 0 ? '' : amount}
                          type="number"
                          id="amount"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-emerald-950/20 dark:border-emerald-800/30 dark:placeholder-gray-400 dark:text-white"
                          placeholder="$0.00"
                          required
                          min={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {depositMethod === 'crypto' && (
                  <div className="flex flex-col gap-5">
                    <div className="flex-auto">
                      <label
                        htmlFor="convertedAmount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                      >
                        Amount in {coin?.name}
                      </label>
                      <input
                        value={convertedAmount}
                        type="number"
                        id="convertedAmount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-emerald-950/20 dark:border-emerald-800/30 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        required
                      />
                    </div>

                    <div className="flex-auto">
                      <label
                        htmlFor="minDeposit"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Minimum Deposit
                      </label>
                      <input
                        value="$1"
                        type="text"
                        id="minDeposit"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-emerald-950/20 dark:border-emerald-800/30 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        required
                      />
                    </div>
                  </div>
                )}

                {depositMethod === 'wire' && wireTransfer && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Wire Transfer Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 dark:bg-emerald-950/20 rounded-lg">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Bank Name
                        </label>
                        <div className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                          {wireTransfer.bankName}
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-emerald-950/20 rounded-lg">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Account Name
                        </label>
                        <div className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                          {wireTransfer.accountName}
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-emerald-950/20 rounded-lg">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Account Number
                        </label>
                        <div className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                          {wireTransfer.accountNumber}
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-emerald-950/20 rounded-lg">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Routing Number
                        </label>
                        <div className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                          {wireTransfer.routingNumber}
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-emerald-950/20 rounded-lg">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          SWIFT Code
                        </label>
                        <div className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                          {wireTransfer.swiftCode}
                        </div>
                      </div>
                    </div>
                    {wireTransfer.instructions && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-lg">
                        <h5 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                          Important Instructions:
                        </h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          {wireTransfer.instructions}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading
                    ? 'Loading...'
                    : depositMethod === 'wire'
                      ? 'Submit Wire Transfer'
                      : 'Proceed to transfer'}
                </button>
                {error && <Alert type="error" message={error} />}
              </form>
            </div>
          </div>
        ) : showWalletAddress && !depositConfirmed ? (
          <div className="w-full flex  justify-center shadow-1 m-auto">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-emerald-950/10 dark:border-emerald-800/30 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-blue-400 mb-4">
                Crypto Deposit Instructions
              </h4>
              <h5 className="text-base font-semibold text-gray-900 dark:text-gray-300 mb-3 capitalize">
                {coin?.name} Payment
              </h5>

              <p className="text-sm font-light text-gray-900 dark:text-gray-300 mb-4">
                Your deposit order of{' '}
                <span className="text-blue-500 font-medium">{amount} USD</span>{' '}
                has been placed.
              </p>

              <p className="text-sm font-light text-gray-900 dark:text-gray-300 mb-4">
                Please send{' '}
                <span className="text-green-500 font-medium">
                  {convertedAmount} {coin?.name} ({coin?.network})
                </span>{' '}
                to the address below.
              </p>

              <div className="mt-4">
                <label className="text-gray-700 dark:text-gray-300 max-lg:text-white/30">
                  Deposit address
                </label>
                <div className="mt-2 p-3 lg:border rounded-lg flex items-center max-lg:gap-5 bg-gray-50 dark:border-emerald-800/30 dark:bg-emerald-950/20">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                      coin.address,
                    )}`}
                    alt="QR Code"
                    className="w-26 h-26 lg:w-16 lg:h-16 mr-4"
                  />
                  <div className="flex-1 max-lg:w-full">
                    <input
                      type="text"
                      readOnly
                      value={coin.address}
                      className="max-lg:break-all outline-none max-lg:w-full bg-transparent text-gray-600 dark:text-gray-300 font-medium text-sm"
                    />
                  </div>
                  <button
                    onClick={() => copyToClipBoard(coin.address)}
                    className="text-gray-600 max-lg:text-gray-400 px-3 flex flex-col items-center gap-1"
                  >
                    <Copy
                      size={18}
                      className={`${copySuccess ? 'text-brandblue' : ''}`}
                    />
                    <span
                      className={`${
                        copySuccess ? 'text-blue-300 text-[10px]' : ''
                      }`}
                    >
                      {copySuccess ? 'copied' : ''}
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleDepositConfirmed}
                  disabled={loading}
                  className="w-full text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-green-400 disabled:to-emerald-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? 'Confirming...' : "I've Completed the Deposit"}
                </button>
              </div>

              {error && <Alert type="error" message={error} />}

              <p className="flex text-[10px] gap-2 text-gray-800 dark:text-gray-400 leading-none mt-4">
                <GoInfo className="text-xl" /> Kindly make sure to check that
                you are sending to the above generated wallet address, to avoid
                loss of funds.
              </p>
            </div>
          </div>
        ) : (
          (success || depositConfirmed) && (
            <div className="w-full flex justify-center m-auto">
              <div className="w-full max-w-lg p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800/30 rounded-xl shadow-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
                  Deposit Request Submitted!
                </h3>

                <p className="text-sm text-green-700 dark:text-green-400 mb-6">
                  Your deposit of{' '}
                  <span className="font-semibold">
                    ${amount.toLocaleString()} USD
                  </span>{' '}
                  has been submitted and is now pending approval.
                  {depositMethod === 'wire'
                    ? ' Please complete the wire transfer using the banking details provided.'
                    : ' Thank you for confirming your cryptocurrency transaction.'}
                </p>

                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-4">
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Status:{' '}
                    <span className="font-semibold">Pending Approval</span>
                  </p>
                  <p className="text-xs text-green-500 dark:text-green-500 mt-1">
                    You will be notified once your deposit is processed.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSuccess(false);
                    setShowWalletAddress(false);
                    setDepositConfirmed(false);
                    checkPendingDeposit();
                  }}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )
        )}
      </>
    )
  );
}
