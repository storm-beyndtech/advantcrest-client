import React from 'react';
import { Loader2 } from 'lucide-react';
import logo from '../assets/logo.png';

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999999] bg-white dark:bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="AdvantCrest"
            className="h-12 w-auto filter brightness-0 dark:filter-none dark:brightness-100"
          />
          <div className="animate-spin">
            <Loader2 className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Loading AdvantCrest
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we prepare your dashboard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
