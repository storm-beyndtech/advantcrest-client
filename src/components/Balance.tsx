import { ArrowUpRight, ArrowDownLeft, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BalanceProps {
  user: {
    deposit: number;
    interest: number;
    bonus: number;
    username: string;
  };
  trades: number;
}

export default function Balance({
  trades,
  user = {
    deposit: 0,
    interest: 0,
    bonus: 0,
    username: 'user',
  },
}: BalanceProps) {
  const navigate = useNavigate();
  const totalBal = user?.deposit + user?.interest;
  const formattedNumber = (num: number) => num?.toLocaleString('en-US') || '0';

  // Using onClick handlers instead of router links
  const handleWithdraw = () => {
    navigate('/dashboard/withdrawal');
  };

  const handleDeposit = () => {
    navigate('/dashboard/deposit');
  };

  return (
    <div className="w-full max-w-96 h-56 rounded-3xl overflow-hidden shadow-xl dark:bg-emerald-950/10 backdrop-blur-sm ring-1 ring-gradient-to-r ring-from-amber-300/30 ring-to-blue-400/30 border border-transparent">
      <div className="h-full w-full p-6 relative">
        {/* Glass-like pattern overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-20 z-0"></div>

        {/* Balance display */}
        <div className="w-full z-10 relative flex justify-between">
          <div className="flex flex-col items-baseline mb-1">
            <p className="text-xs text-gray-400 font-light">Total Balance</p>
            <h1 className="text-4xl font-semibold dark:text-white text-gray-700 tracking-tight">
              {formattedNumber(totalBal)}
              <span className="text-lg font-mono dark:text-gray-300 ml-1">
                $
              </span>
            </h1>
          </div>

          <img
            src="/fav.svg"
            alt="logo"
            className="w-8 filter dark:filter-none brightness-0 dark:brightness-100"
          />
        </div>

        {/* Stats section */}
        <div className="flex justify-between mt-5 mb-6 z-10 relative">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-gray-400">Deposit</span>
            </div>
            <span className="text-sm font-medium dark:text-white text-gray-600">
              ${formattedNumber(user?.deposit)}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              <span className="text-xs text-gray-400">Interest</span>
            </div>
            <span className="text-sm font-medium dark:text-white text-gray-600">
              ${formattedNumber(user?.interest)}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              <Activity size={12} className="text-gray-400" />
              <span className="text-xs text-gray-400">Trades</span>
            </div>
            <span className="text-sm font-medium dark:text-white text-gray-600">
              {trades}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between z-10 relative">
          <button
            onClick={handleWithdraw}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-300 border border-white/30"
          >
            <ArrowUpRight size={12} />
            <span className="text-xs font-medium">Withdraw</span>
          </button>

          <button
            onClick={handleDeposit}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-600 to-sky-600 hover:from-emerald-600 hover:to-cyan-600 text-white transition-all duration-300"
          >
            <ArrowDownLeft size={12} />
            <span className="text-xs font-medium">Deposit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
