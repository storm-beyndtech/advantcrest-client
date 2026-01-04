import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import EditTransaction from './EditTransaction';
import Alert from './ui/Alert';
import { ITransaction } from '@/types/transaction';
import { apiPut } from '@/utils/api';

export default function ManageDepositModal({
  toggleModal,
  deposit,
}: {
  toggleModal: (e: boolean) => void;
  deposit: null | ITransaction;
}) {
  const [error, setError] = useState<null | string>(null);
  const [successLoading, setSuccessLoading] = useState(false);
  const [failedLoading, setFailedLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const ToggleModal = (e: boolean) => {
    setEdit(e);
  };

  const convertDate = (date: string) => {
    return new Date(date).toLocaleString();
  };

  const startUpdate = async (status: string) => {
    setError(null);
    setSuccess(false);

    if (status === 'success') setSuccessLoading(true);
    else setFailedLoading(true);

    try {
      const res = await apiPut(`${url}/deposits/${deposit?._id}`, {
        status,
        email: deposit?.user.email,
        amount: deposit?.amount,
      });

      const data = await res.json();

      if (res.ok) setSuccess(data.message);
      else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setSuccessLoading(false);
      setFailedLoading(false);
    }
  };

  const refetch = (e: boolean) => {
    toggleModal(e);
  };

  return (
    deposit && (
      <div className="w-screen h-screen fixed left-0 top-0 z-9999 flex items-center justify-center backdrop-blur px-2">
        {!edit && (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-emerald-950/10 dark:border-emerald-800/30 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="flex items-center justify-between mb-10 pb-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {deposit.depositMethod === 'wire' 
                    ? 'Wire Transfer Deposit' 
                    : `Deposit Via ${deposit.walletData?.coinName || 'Crypto'}`
                  }
                </h3>
                <button
                  onClick={() => toggleModal(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <GrClose />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="flex justify-between">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Date
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {convertDate(deposit.date)}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Name
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {deposit.user.name}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Method
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {deposit.depositMethod === 'wire' 
                    ? 'Wire Transfer' 
                    : deposit.walletData?.coinName || 'Crypto'
                  }
                </p>
              </div>

              {deposit.depositMethod === 'wire' && deposit.wireTransferData && (
                <>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Bank
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {deposit.wireTransferData.bankName}
                    </p>
                  </div>
                  
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Account Name
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {deposit.wireTransferData.accountName}
                    </p>
                  </div>
                </>
              )}

              {deposit.depositMethod === 'crypto' && deposit.walletData && (
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    In {deposit.walletData.coinName}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {deposit.walletData.convertedAmount}
                  </p>
                </div>
              )}

              <div className="flex justify-between">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Amount
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  ${deposit.amount.toLocaleString()} USD
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Status
                </p>
                <p className={`text-sm font-medium ${deposit.status} truncate`}>
                  {deposit.status}
                </p>
              </div>

              {deposit.status === 'pending' && (
                <div className="flex gap-5 max-xsm:gap-2">
                  <a
                    href="#"
                    onClick={() => startUpdate('success')}
                    className="w-full text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {successLoading ? 'Loading...' : 'Approve'}
                  </a>

                  <a
                    href="#"
                    onClick={() => setEdit(true)}
                    className="w-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Edit
                  </a>

                  <a
                    href="#"
                    onClick={() => startUpdate('failed')}
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {failedLoading ? 'Loading...' : 'Reject'}
                  </a>
                </div>
              )}
              {error && <Alert type="error" message={error} />}
              {success && <Alert type="success" message={success as any} />}
            </form>
          </div>
        )}

        {edit && (
          <EditTransaction
            amountInUSD={deposit.amount}
            amountInCRYPTO={deposit.walletData?.convertedAmount || deposit.amount}
            coinName={deposit.walletData?.coinName || (deposit.depositMethod === 'wire' ? 'USD' : 'Crypto')}
            id={deposit._id}
            ToggleModal={ToggleModal}
            refetch={refetch}
          />
        )}
      </div>
    )
  );
}
