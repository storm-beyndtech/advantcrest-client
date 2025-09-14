import React from 'react';
import { Loader2 } from 'lucide-react';
import logo from '../assets/logo.png';

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="AdvantCrest"
            className="h-12 w-auto"
          />
          <div className="animate-spin">
            <Loader2 className="h-8 w-8 text-sky-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
