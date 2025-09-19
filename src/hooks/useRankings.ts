import { useState, useEffect } from 'react';

interface Ranking {
  level: number;
  name: string;
  minimumDeposit: number;
  directReferral: number;
  referralDeposits: number;
  bonus: number;
  isActive?: boolean;
}

interface UseRankingsReturn {
  rankings: Ranking[];
  isCustom: boolean;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useRankings = (userEmail?: string): UseRankingsReturn => {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const fetchRankings = async () => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${url}/users/rankings/${userEmail}`);
      const data = await response.json();

      if (response.ok) {
        setRankings(data.rankings || []);
        setIsCustom(data.isCustom || false);
      } else {
        throw new Error(data.message || 'Failed to fetch rankings');
      }
    } catch (err: any) {
      console.error('Error fetching rankings:', err);
      setError(err.message);
      
      // Fallback to default rankings
      setRankings(getDefaultRankings());
      setIsCustom(false);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchRankings();
  };

  useEffect(() => {
    fetchRankings();
  }, [userEmail]);

  return {
    rankings,
    isCustom,
    loading,
    error,
    refetch
  };
};

// Fallback default rankings
function getDefaultRankings(): Ranking[] {
  return [
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
      name: 'silverPro',
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
      name: 'goldPro',
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
}