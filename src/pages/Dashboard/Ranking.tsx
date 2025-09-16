// components/Ranking.tsx
import React, { useEffect, useRef, useState } from 'react';
import { contextData } from '@/context/AuthContext';
import welcome from '../../assets/ranks/welcome.png';
import silver from '../../assets/ranks/silver.png';
import silverPro from '../../assets/ranks/silverPro.png';
import gold from '../../assets/ranks/gold.png';
import goldPro from '../../assets/ranks/goldPro.png';
import diamond from '../../assets/ranks/diamond.png';
import ambassador from '../../assets/ranks/ambassador.png';

interface RankData {
  level: number;
  name: string;
  minimumDeposit: number;
  directReferral: number;
  referralDeposits: number;
  bonus: number;
  imageSrc: string;
}

interface RankCardProps {
  rankData: RankData;
  isCurrentRank: boolean;
  isQualified: boolean;
}

const RankCard: React.FC<RankCardProps> = ({
  rankData,
  isCurrentRank,
  isQualified,
}) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const requiresReferrals =
    rankData.directReferral > 0 || rankData.referralDeposits > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setTooltip(false);
      }
    };

    if (tooltip) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [tooltip]);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        <div
          className={`w-30 h-30 p-7 bg-gray-900/40 rounded-3xl overflow-hidden transition-all duration-300 transform-gpu hover:scale-105 ${
            isCurrentRank
              ? 'ring-4 ring-blue-500 shadow-lg shadow-blue-500/50'
              : ''
          }`}
        >
          <img
            src={rankData.imageSrc}
            alt={rankData.name}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isQualified ? 'grayscale-0' : 'grayscale'
            } hover:grayscale-0`}
          />
          {isCurrentRank && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Current
            </div>
          )}
        </div>

        {/* Tooltip */}
        <div
          ref={tooltipRef}
          onClick={() => setTooltip(true)}
          className={`${
            tooltip ? 'opacity-1 visible' : 'invisible opacity-0'
          } absolute -left-16 top-[120px] z-10 inline-block w-64 text-sm text-white transition-opacity duration-300 bg-gray-800/30 border border-gray-700 rounded-lg shadow-sm dark:text-gray-500 dark:border-gray-200 dark:bg-white`}
        >
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              {rankData.name === 'silverPro' ? 'Silver Pro' : 
               rankData.name === 'goldPro' ? 'Gold Pro' : 
               rankData.name.charAt(0).toUpperCase() + rankData.name.slice(1)}
              {isCurrentRank && (
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                  Current
                </span>
              )}
              {!isQualified && !requiresReferrals && (
                <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded">
                  Locked
                </span>
              )}
              {requiresReferrals && (
                <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
                  Referrals Required
                </span>
              )}
            </h3>
          </div>
          <div className="px-3 py-2 flex flex-col gap-1">
            <p className="flex gap-3">
              <span className="font-bold">Level:</span>
              <span>{rankData.level}</span>
            </p>
            <p className="flex gap-3">
              <span className="font-bold">Minimum Deposit:</span>
              <span className="amount">
                ${rankData.minimumDeposit.toLocaleString('en-US')}
              </span>
            </p>
            <p className="flex gap-3">
              <span className="font-bold">Direct Referral:</span>
              <span>{rankData.directReferral}</span>
            </p>
            <p className="flex gap-3">
              <span className="font-bold">Referral Deposits:</span>
              <span className="amount">
                ${rankData.referralDeposits.toLocaleString('en-US')}
              </span>
            </p>
            <p className="flex gap-3">
              <span className="font-bold">Bonus:</span>
              <span className="amount">
                ${rankData.bonus.toLocaleString('en-US')}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Rank name and description */}
      <div className="mt-3 text-center">
        <h3
          className={`text-base font-satoshi font-medium capitalize ${
            isCurrentRank
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-800 dark:text-gray-100'
          }`}
        >
          {rankData.name === 'silverPro' ? 'Silver Pro' : 
           rankData.name === 'goldPro' ? 'Gold Pro' : 
           rankData.name.charAt(0).toUpperCase() + rankData.name.slice(1)}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          ${rankData.minimumDeposit.toLocaleString('en-US')} minimum
        </p>
        {rankData.bonus > 0 && (
          <p className="text-xs text-green-600 dark:text-green-400">
            ${rankData.bonus.toLocaleString('en-US')} bonus
          </p>
        )}
      </div>
    </div>
  );
};

const Ranking: React.FC = () => {
  const { user } = contextData();
  const userDeposit = user.deposit || 0;

  // Rank hierarchy with images
  const ranks: RankData[] = [
    {
      level: 1,
      name: 'welcome',
      minimumDeposit: 0,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 0,
      imageSrc: welcome,
    },
    {
      level: 2,
      name: 'silver',
      minimumDeposit: 5000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 200,
      imageSrc: silver,
    },
    {
      level: 3,
      name: 'silverPro',
      minimumDeposit: 25000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 1000,
      imageSrc: silverPro,
    },
    {
      level: 4,
      name: 'gold',
      minimumDeposit: 50000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 2000,
      imageSrc: gold,
    },
    {
      level: 5,
      name: 'goldPro',
      minimumDeposit: 100000,
      directReferral: 0,
      referralDeposits: 0,
      bonus: 3000,
      imageSrc: goldPro,
    },
    {
      level: 6,
      name: 'diamond',
      minimumDeposit: 500000,
      directReferral: 12,
      referralDeposits: 2550000,
      bonus: 20000,
      imageSrc: diamond,
    },
    {
      level: 7,
      name: 'ambassador',
      minimumDeposit: 1000000,
      directReferral: 12,
      referralDeposits: 2550000,
      bonus: 50000,
      imageSrc: ambassador,
    },
  ];

  // Get current rank from user data or calculate based on deposit
  const getCurrentRank = (): RankData => {
    // Always use the stored rank from user data (whether manual or auto)
    const userStoredRank = user.rank;
    
    // Find rank by exact name match
    let rankByName = ranks.find(r => r.name === userStoredRank);
    
    // If stored rank exists, use it (respects both manual and auto ranks)
    if (rankByName) {
      return rankByName;
    }
    
    // Fallback to deposit-based calculation if no stored rank found
    for (let i = ranks.length - 1; i >= 0; i--) {
      if (userDeposit >= ranks[i].minimumDeposit) {
        return ranks[i];
      }
    }
    return ranks[0];
  };

  const currentRank = getCurrentRank();

  return (
    <div className="flex items-center justify-center flex-wrap gap-14 p-5 mb-4 rounded-[40px] bg-gray-50 dark:bg-gray-900/20">
      {ranks.map((rankData) => (
        <RankCard
          key={rankData.level}
          rankData={rankData}
          isCurrentRank={currentRank.level === rankData.level}
          isQualified={userDeposit >= rankData.minimumDeposit}
        />
      ))}
    </div>
  );
};

export default Ranking;
