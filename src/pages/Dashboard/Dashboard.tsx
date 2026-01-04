import { useEffect, useState } from 'react';
import NoDepositAlert from '@/components/NoDepositAlert';
import PageLoader from '@/components/PageLoader';
import TraderGrid from '@/components/TraderGrid';
import { contextData } from '@/context/AuthContext';
import Balance from '@/components/Balance';
import NoKycAlert from '@/components/NoKycAlert';
import StockChart from '@/components/StockChart';
import RecentTrades from '@/components/RecentTrades';
import RecentTransactions from '@/components/RecentTransactions';
import MiniBals from '@/components/MiniBals';
import CopyTraderErrorModal from '@/components/CopyTraderErrorModal';
import DashboardRankOverview from '@/components/DashboardRankOverview';
import { Link, useNavigate } from 'react-router-dom';
import { Trader } from '@/types/types';
import { apiGet, apiPut } from '@/utils/api';

const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

export default function Dashboard() {
  const { user, fetchUser } = contextData();
  const [traders, setTraders] = useState([]);
  const [trades, setTrades] = useState([]);
  const [copiedTraderId, setCopiedTraderId] = useState<string | null>(
    user.traderId,
  );
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCopyError = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
  };

  const combinedBalance = user.deposit + user.interest + user.bonus || 0;
  const balancePlusWithdraw = combinedBalance + (user.withdraw || 0);

  const fetchTrades = async () => {
    try {
      if (!user?.traderId) {
        setTrades([]);
        return;
      }

      const res = await apiGet(
        `${url}/trades/user/${user._id}/trader/${user.traderId}`,
      );
      const data = await res.json();

      if (res.ok) {
        const filteredTrades = data.filter(
          (trade: any) => new Date(trade.date) > new Date(user.createdAt),
        );
        setTrades(filteredTrades || []);
      }
    } catch (error) {
      console.error('Error fetching traders:', error);
    }
  };

  const fetchTraders = async () => {
    try {
      const res = await apiGet(`${url}/trader/public`, false);
      if (!res.ok) throw new Error('Failed to fetch traders');
      const data = await res.json();
      setTraders(data || []);
    } catch (error) {
      console.error('Error fetching traders:', error);
    }
  };

  const copyTrader = async (trader: Trader) => {
    try {
      const action = trader._id === copiedTraderId ? 'uncopy' : 'copy';
      if (action === 'copy') {
        if (trader.minimumCopyAmount > user.deposit) {
          handleCopyError(
            `Insufficient balance. You need at least $${trader.minimumCopyAmount} to copy this trader.`,
          );
          return false;
        }
      }

      const response = await apiPut(`${url}/users/update-user-trader`, {
        traderId: trader._id,
        action,
        userId: user._id,
      });

      if (response.ok) {
        setCopiedTraderId(action === 'copy' ? trader._id : null);
        fetchUser(user._id);
        return true;
      }
      return false;
    } catch (error: any) {
      handleCopyError(`Error copying trader ${error.message}.`);
      return false;
    }
  };

  useEffect(() => {
    fetchTraders();
    fetchTrades();
  }, [user?.traderId]);

  if (!user) return <PageLoader />;

  return (
    <>
      <CopyTraderErrorModal
        isOpen={showError}
        message={errorMessage}
        onClose={() => setShowError(false)}
        onDeposit={() => {
          navigate('/dashboard/deposit');
          setShowError(false);
        }}
      />

      {/* Mobile alerts - show first on mobile */}
      <div className="block lg:hidden mb-5">
        {balancePlusWithdraw === 0 && <NoDepositAlert />}
        {!user.documentNumber && <NoKycAlert />}
      </div>

      {/* Main grid layout */}
      <div className="flex flex-col-reverse lg:flex-row gap-5 my-5">
        {/* Left column - 70% on desktop */}
        <div className="w-full lg:w-[70%] space-y-10">
          {/* Desktop alerts */}
          <div className="hidden lg:block">
            {balancePlusWithdraw === 0 && <NoDepositAlert />}
            {!user.documentNumber && <NoKycAlert />}
          </div>

          {/* Traders Grid - limit to 3 cards */}
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-5">
              <h4 className="text-gray-600 dark:text-gray-100 font-medium">
                Copy Traders
              </h4>

              <Link
                to="/dashboard/copytrading"
                className="text-xs px-4 py-1.5 border border-brandblue dark:text-gray-400 text-gray-600 max-sm:hidden rounded bg-transparent font-semibold"
              >
                All Traders
              </Link>
            </div>
            <TraderGrid
              traders={traders.slice(0, 3)}
              onCopyTrader={copyTrader}
            />
          </div>

          {/* Mini Balances */}
          <div>
            <MiniBals />
          </div>

          <div className="sm:hidden">
            <DashboardRankOverview />
          </div>

          {/* Stock Chart */}
          <div className="h-125 w-full rounded-xl shadow-lg bg-white dark:bg-emerald-950/10 border border-gray-100 dark:border-emerald-800/20 p-4 backdrop-blur-sm">
            <StockChart />
          </div>
        </div>

        {/* Right column - 30% on desktop */}
        <div className="w-full lg:w-[30%] space-y-10">
          {/* Main Balance */}
          <div className="flex-shrink-0">
            <Balance user={user} trades={trades.length} />
          </div>
          {/* Transaction Tables Row */}
          <div className="flex flex-col gap-5">
            <div className="flex-1">
              <RecentTrades />
            </div>
            <div className="flex-1">
              <RecentTransactions />
            </div>
          </div>

          {/* Rank Overview */}
          <div className="max-sm:hidden">
            <DashboardRankOverview />
          </div>
        </div>
      </div>
    </>
  );
}
