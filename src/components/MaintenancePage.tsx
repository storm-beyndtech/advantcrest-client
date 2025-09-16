import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Clock, ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';

interface MaintenancePageProps {
  message?: string;
}

const MaintenancePage: React.FC<MaintenancePageProps> = ({ 
  message = "We're currently performing maintenance. Please check back soon." 
}) => {
  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-950">
      {/* Left Side - Maintenance Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 dark:bg-emerald-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-red-600/5 to-yellow-600/10"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 py-16">
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <img src={logo} alt="AdvantCrest" className="h-12 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
            </Link>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Under Maintenance
              <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                Improving Your Experience
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              We're working hard to make AdvantCrest better for you. Our platform will be back online shortly.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">System upgrades in progress</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">Estimated downtime: Minimal</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Your data is safe and secure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Maintenance Message */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden text-center">
            <Link to="/" className="inline-block">
              <img src={logo} alt="AdvantCrest" className="h-8 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
            </Link>
          </div>

          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Settings className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                We'll be back soon!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {message}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What's happening?</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Improving platform performance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Updating trading features
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Enhancing security measures
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                Need immediate assistance?
              </p>
              <a 
                href="mailto:support@advantcrest.com" 
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Contact Support
              </a>
            </div>

            <div className="pt-4">
              <Link 
                to="/login" 
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;