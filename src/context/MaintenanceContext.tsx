import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { apiGet, apiPut } from '@/utils/api';

interface MaintenanceContextType {
  isMaintenanceMode: boolean;
  maintenanceMessage: string;
  checkMaintenanceStatus: () => Promise<void>;
  toggleMaintenanceMode: (enabled: boolean, message?: string) => Promise<boolean>;
}

const MaintenanceContext = createContext<MaintenanceContextType | undefined>(undefined);

interface MaintenanceProviderProps {
  children: ReactNode;
}

export const MaintenanceProvider: React.FC<MaintenanceProviderProps> = ({ children }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState<boolean>(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState<string>('');
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const checkMaintenanceStatus = async () => {
    try {
      const response = await apiGet(`${url}/utils/maintenance-status`, false);
      const data = await response.json();
      
      setIsMaintenanceMode(data.enabled || false);
      setMaintenanceMessage(data.message || "We're currently performing maintenance. Please check back soon.");
    } catch (error) {
      console.error('Failed to check maintenance status:', error);
      // Default to operational if check fails
      setIsMaintenanceMode(false);
    }
  };

  const toggleMaintenanceMode = async (enabled: boolean, message?: string): Promise<boolean> => {
    try {
      const response = await apiPut(
        `${url}/utils/maintenance-mode`,
        { 
          enabled, 
          message: message || "We're currently performing maintenance. Please check back soon." 
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsMaintenanceMode(data.maintenanceMode.enabled);
        setMaintenanceMessage(data.maintenanceMode.message);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to toggle maintenance mode:', error);
      return false;
    }
  };

  // Check maintenance status on app load and periodically
  useEffect(() => {
    checkMaintenanceStatus();
    
    // Check every 5 minutes
    const interval = setInterval(checkMaintenanceStatus, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const contextValue: MaintenanceContextType = {
    isMaintenanceMode,
    maintenanceMessage,
    checkMaintenanceStatus,
    toggleMaintenanceMode,
  };

  return (
    <MaintenanceContext.Provider value={contextValue}>
      {children}
    </MaintenanceContext.Provider>
  );
};

export const useMaintenance = (): MaintenanceContextType => {
  const context = useContext(MaintenanceContext);
  if (context === undefined) {
    throw new Error('useMaintenance must be used within a MaintenanceProvider');
  }
  return context;
};
