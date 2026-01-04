import { contextData } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { Wallet, CreditCard, TrendingUp, BarChart3 } from 'lucide-react';
import { apiGet } from '@/utils/api';

export default function MiniBals() {
  const [trades, setTrades] = useState([]);
  const { user } = contextData();

  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  // Function to fetch trades for the signed-in user/trader
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
        setTrades(filteredTrades);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error fetching trades:', error);
    }
  };

  // Fetch trades on component mount
  useEffect(() => {
    fetchTrades();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
      <div className="flex items-center justify-between gap-2 p-3 text-right rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-emerald-950/30 dark:to-gray-950/50 border border-blue-100 dark:border-emerald-800/30 shadow-sm hover:shadow-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-emerald-900/60 dark:hover:to-gray-900/80 transition-all duration-300">
        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-lg opacity-20"></div>
          <Wallet
            className="w-6 h-6 text-emerald-600 dark:text-emerald-400 relative z-10"
            strokeWidth={1.5}
          />
        </div>

        <div className="space-y-1">
          <p className="text-[8px] leading-tight uppercase font-medium text-gray-500 dark:text-gray-400">
            Deposit
          </p>
          <h2 className="text-lg leading-tight font-semibold text-gray-800 dark:text-gray-100">
            {user?.deposit?.toLocaleString('en-US')}
            <span className="font-mono font-normal text-base ml-1">$</span>
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 p-3 text-right rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-emerald-950/30 dark:to-gray-950/50 border border-purple-100 dark:border-emerald-800/30 shadow-sm hover:shadow-lg hover:from-purple-100 hover:to-pink-100 dark:hover:from-emerald-900/60 dark:hover:to-gray-900/80 transition-all duration-300">
        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-lg opacity-20"></div>
          <CreditCard
            className="w-6 h-6 text-lime-600 dark:text-lime-400 relative z-10"
            strokeWidth={1.5}
          />
        </div>

        <div className="space-y-1">
          <p className="text-[8px] leading-tight uppercase font-medium text-gray-500 dark:text-gray-400">
            Withdrawal
          </p>

          <h2 className="text-lg leading-tight font-semibold text-gray-800 dark:text-gray-100">
            {user?.withdraw?.toLocaleString('en-US')}
            <span className="font-mono font-normal text-base ml-1">$</span>
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 p-3 text-right rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-emerald-950/30 dark:to-gray-950/50 border border-green-100 dark:border-emerald-800/30 shadow-sm hover:shadow-lg hover:from-green-100 hover:to-emerald-100 dark:hover:from-emerald-900/60 dark:hover:to-gray-900/80 transition-all duration-300">
        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg opacity-20"></div>
          <TrendingUp
            className="w-6 h-6 text-cyan-600 dark:text-cyan-400 relative z-10"
            strokeWidth={1.5}
          />
        </div>

        <div className="space-y-1">
          <p className="text-[8px] leading-tight uppercase font-medium text-gray-500 dark:text-gray-400">
            Interest
          </p>
          <h2 className="text-lg leading-tight font-semibold text-gray-800 dark:text-gray-100">
            {user?.interest?.toLocaleString('en-US')}
            <span className="font-mono font-normal text-base ml-1">$</span>
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 p-3 text-right rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-emerald-950/30 dark:to-gray-950/50 border border-orange-100 dark:border-emerald-800/30 shadow-sm hover:shadow-lg hover:from-orange-100 hover:to-amber-100 dark:hover:from-emerald-900/60 dark:hover:to-gray-900/80 transition-all duration-300">
        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg opacity-20"></div>
          <BarChart3
            className="w-6 h-6 text-emerald-600 dark:text-emerald-400 relative z-10"
            strokeWidth={1.5}
          />
        </div>

        <div className="space-y-1">
          <p className="text-[8px] leading-tight uppercase font-medium text-gray-500 dark:text-gray-400">
            Trades
          </p>
          <h2 className="text-lg leading-tight font-semibold text-gray-800 dark:text-gray-100">
            {trades.length || '0'}
          </h2>
        </div>
      </div>
    </div>
  );
}
