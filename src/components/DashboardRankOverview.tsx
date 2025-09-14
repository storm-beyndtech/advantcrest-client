// components/DashboardRankOverview.tsx
import React from 'react';
import { contextData } from '@/context/AuthContext';
import welcome from '../assets/ranks/welcome.png';
import silver from '../assets/ranks/silver.png';
import silverPro from '../assets/ranks/silverPro.png';
import gold from '../assets/ranks/gold.png';
import goldPro from '../assets/ranks/goldPro.png';
import diamond from '../assets/ranks/diamond.png';
import ambassador from '../assets/ranks/ambassador.png';

interface RankData {
  level: number;
  name: string;
  minimumDeposit: number;
  directReferral: number;
  referralDeposits: number;
  bonus: number;
}

const DashboardRankOverview: React.FC = () => {
  const { user } = contextData();
  const userDeposit = user.deposit || 0;

  // Rank hierarchy
  const ranks: RankData[] = [
    {
      level: 1,
      name: 'welcome',
      minimumDeposit: 0,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 0,
    },
    {
      level: 2,
      name: 'silver',
      minimumDeposit: 5000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 200,
    },
    {
      level: 3,
      name: 'silver pro',
      minimumDeposit: 25000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 1000,
    },
    {
      level: 4,
      name: 'gold',
      minimumDeposit: 50000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 2000,
    },
    {
      level: 5,
      name: 'gold pro',
      minimumDeposit: 100000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 3000,
    },
    {
      level: 6,
      name: 'diamond',
      minimumDeposit: 500000,
      directReferral: 12,
      referralDeposits: 2550000,
      bonus: 20000,
    },
    {
      level: 7,
      name: 'ambassador',
      minimumDeposit: 1000000,
      directReferral: 12,
      referralDeposits: 2550000,
      bonus: 50000,
    },
  ];

  const rankImages: Record<string, string> = {
    welcome,
    silver,
    'silver pro': silverPro,
    gold,
    'gold pro': goldPro,
    diamond,
    ambassador,
  };

  // Calculate current rank
  const getCurrentRank = (): RankData => {
    for (let i = ranks.length - 1; i >= 0; i--) {
      if (userDeposit >= ranks[i].minimumDeposit) {
        return ranks[i];
      }
    }
    return ranks[0];
  };

  // Get next rank
  const getNextRank = (currentRank: RankData): RankData | null => {
    const currentIndex = ranks.findIndex(
      (rank) => rank.level === currentRank.level,
    );
    return currentIndex < ranks.length - 1 ? ranks[currentIndex + 1] : null;
  };

  // Calculate progress
  const calculateProgress = (nextRank: RankData): number => {
    return Math.min(100, (userDeposit / nextRank.minimumDeposit) * 100);
  };

  const currentRank = getCurrentRank();
  const nextRank = getNextRank(currentRank);
  const isMaxRank = !nextRank;
  const progress = nextRank ? calculateProgress(nextRank) : 100;
  const nextRankRequiresReferrals =
    nextRank && (nextRank.directReferral > 0 || nextRank.referralDeposits > 0);

  if (isMaxRank) {
    return (
      <div className="bg-white dark:bg-emerald-950/10 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-amber-300/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Your Rank Status
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Level {currentRank.level}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-900 rounded-2xl p-3 flex-shrink-0">
            <img
              src={rankImages[currentRank.name]}
              alt={currentRank.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
              {currentRank.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Current bonus: ${currentRank.bonus.toLocaleString('en-US')}
            </p>
          </div>
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg">
          <div className="text-2xl mb-2">🎉</div>
          <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
            Maximum Rank Achieved!
          </h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            You've reached the highest rank available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-emerald-950/10 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-blue-400/20 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Your Rank Status
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Level {currentRank.level}
        </div>
      </div>

      {/* Current Rank */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-900 rounded-2xl p-3 flex-shrink-0">
          <img
            src={rankImages[currentRank.name]}
            alt={currentRank.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
            {currentRank.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Current bonus: ${currentRank.bonus.toLocaleString('en-US')}
          </p>
        </div>
      </div>

      {/* Next Rank Progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Next: {nextRank!.name} (Level {nextRank!.level})
          </span>
          <div className="w-12 h-12 bg-gray-900 rounded-xl p-2">
            <img
              src={rankImages[nextRank!.name]}
              alt={nextRank!.name}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          {/* Deposit Progress */}
          <div>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
              <span>Deposit Required</span>
              <span>
                ${userDeposit.toLocaleString('en-US')} / $
                {nextRank!.minimumDeposit.toLocaleString('en-US')}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-emerald-900/30 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Referral Requirements Notice */}
          {nextRankRequiresReferrals && (
            <div className="p-3 bg-yellow-50 dark:bg-gradient-to-r dark:from-amber-300/10 dark:to-yellow-400/10 rounded-lg border border-yellow-200 dark:border-amber-300/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">!</span>
                </div>
                <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Additional Requirements
                </span>
              </div>
              <div className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                {nextRank!.directReferral > 0 && (
                  <p>• {nextRank!.directReferral} direct referrals required</p>
                )}
                {nextRank!.referralDeposits > 0 && (
                  <p>
                    • ${nextRank!.referralDeposits.toLocaleString('en-US')} in
                    referral deposits required
                  </p>
                )}
                <p className="mt-2 italic">Referral system coming soon!</p>
              </div>
            </div>
          )}
        </div>

        {/* Next rank bonus */}
        <div className="text-center p-3 bg-gray-50 dark:bg-emerald-950/10 rounded">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Reach {nextRank!.name} to unlock
          </p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            ${nextRank!.bonus.toLocaleString('en-US')} bonus
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardRankOverview;
