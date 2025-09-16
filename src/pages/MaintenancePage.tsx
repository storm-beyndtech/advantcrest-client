import React, { useState } from 'react';
import { Wrench, Clock, Mail, RefreshCw } from 'lucide-react';

interface MaintenancePageProps {
  message?: string;
  onRefresh?: () => void;
}

const MaintenancePage: React.FC<MaintenancePageProps> = ({ 
  message = "We're currently performing maintenance. Please check back soon.",
  onRefresh
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true);
      await onRefresh();
      setTimeout(() => setRefreshing(false), 1000);
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-4">
            <Wrench className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Under Maintenance
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {message}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            Expected downtime: Minimal
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            <Mail className="w-4 h-4 mr-2" />
            For urgent matters, please contact support
          </div>
        </div>

        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="w-full mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Checking...' : 'Check Again'}
        </button>

        <div className="border-t pt-6">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Thank you for your patience
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            - AdvantCrest Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;