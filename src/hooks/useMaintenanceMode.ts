import { useState, useEffect } from 'react';

interface MaintenanceModeData {
  enabled: boolean;
  message: string;
  updatedAt: string;
}

export const useMaintenanceMode = () => {
  const [maintenanceData, setMaintenanceData] = useState<MaintenanceModeData>({
    enabled: false,
    message: "We're currently performing maintenance. Please check back soon.",
    updatedAt: new Date().toISOString()
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const fetchMaintenanceStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/utils`);
      const data = await response.json();
      
      if (response.ok) {
        if (data.maintenanceMode) {
          setMaintenanceData(data.maintenanceMode);
        }
      } else {
        setError('Failed to fetch maintenance status');
      }
    } catch (error) {
      console.error('Error fetching maintenance status:', error);
      setError('Failed to fetch maintenance status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaintenanceStatus();
  }, []);

  return {
    maintenanceData,
    loading,
    error,
    refetch: fetchMaintenanceStatus
  };
};