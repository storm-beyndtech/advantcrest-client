import { useState, useEffect } from 'react';
import { ChevronDown, LogIn, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {
  companyDropDownLinks,
  marketDropDownLinks,
  toolsDropDownLinks,
  platformsDropDownLinks,
  mirrorTradingDropDownLinks,
} from '@/lib/utils';
import GTranslateProvider from './ui/GTranslateProvider';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle screen resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleDropdown = (name: any) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 z-999999 right-0 w-full">
      {/* Main Navigation */}
      <div
        className={`w-full transition-all duration-900 relative bg-bodydark border-b border-gray-800/20`}
      >
        <div className={`max-w-[1400px] mx-auto px-5 py-4`}>
          {isMobile ? (
            <div className="flex justify-between items-center">
              <Link to="/" className="">
                <img src={logo} alt="logo" className="w-26" />
              </Link>

              <div className="flex items-center space-x-4">
                <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
                  <GTranslateProvider />

                  <Link to="/login">
                    <button className="relative bg-gradient-to-r from-amber-300 to-blue-400 p-[1px] rounded-lg hover:from-amber-400 hover:to-blue-500 transition-all duration-300 group">
                      <div className="bg-bodydark px-6 py-2 rounded-lg flex items-center space-x-2 group-hover:bg-gray-800 transition-colors duration-300">
                        <span className="text-white/80 font-medium">Login</span>
                        <LogIn
                          className="w-4 h-4 text-white/80"
                          strokeWidth={1.5}
                        />
                      </div>
                    </button>
                  </Link>
                </div>
                <button
                  className="text-white/80 p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800">
                  <div className="p-4 flex flex-col space-y-4">
                    <div>
                      <button
                        className="flex justify-between items-center w-full py-2"
                        onClick={() => toggleDropdown('markets')}
                      >
                        <span className="text-white/80 font-medium">
                          MARKETS
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === 'markets' ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === 'markets' && (
                        <div className="ml-4 mt-2 space-y-2">
                          <p className="text-sm font-medium text-blue-400">
                            PRODUCTS
                          </p>
                          {marketDropDownLinks.map((link, i) => (
                            <Link
                              key={i}
                              to={link.to}
                              className="block text-sm text-white/80 hover:text-blue-400 py-1"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        className="flex justify-between items-center w-full py-2"
                        onClick={() => toggleDropdown('company')}
                      >
                        <span className="text-white/80 font-medium">
                          COMPANY
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === 'company' ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === 'company' && (
                        <div className="ml-4 mt-2 space-y-2">
                          {companyDropDownLinks.map((link, i) => (
                            <Link
                              key={i}
                              to={link.to}
                              className="block text-sm text-white/80 hover:text-blue-400 py-1"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        className="flex justify-between items-center w-full py-2"
                        onClick={() => toggleDropdown('tools')}
                      >
                        <span className="text-white/80 font-medium">TOOLS</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === 'tools' ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === 'tools' && (
                        <div className="ml-4 mt-2 space-y-2">
                          {toolsDropDownLinks.map((link, i) => (
                            <Link
                              key={i}
                              to={link.to}
                              className="block text-sm text-white/80 hover:text-blue-400 py-1"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        className="flex justify-between items-center w-full py-2"
                        onClick={() => toggleDropdown('platforms')}
                      >
                        <span className="text-white/80 font-medium">PLATFORMS</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === 'platforms' ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === 'platforms' && (
                        <div className="ml-4 mt-2 space-y-2">
                          {platformsDropDownLinks.map((link, i) => (
                            <Link
                              key={i}
                              to={link.to}
                              className="block text-sm text-white/80 hover:text-blue-400 py-1"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        className="flex justify-between items-center w-full py-2"
                        onClick={() => toggleDropdown('mirror-trading')}
                      >
                        <span className="text-white/80 font-medium">MIRROR TRADING</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === 'mirror-trading' ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === 'mirror-trading' && (
                        <div className="ml-4 mt-2 space-y-2">
                          {mirrorTradingDropDownLinks.map((link, i) => (
                            <Link
                              key={i}
                              to={link.to}
                              className="block text-sm text-white/80 hover:text-blue-400 py-1"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="py-2">
                      <Link
                        to="/recap"
                        className="block text-white/80 hover:text-blue-400 font-medium"
                      >
                        RECAP
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-between items-center">
              {/* Logo - Left */}
              <Link to="/" className="flex-shrink-0">
                <img src={logo} alt="logo" className="w-26" />
              </Link>

              {/* Navigation Links - Center */}
              <nav className="flex-1 flex justify-center">
                <ul className="flex gap-8 items-center">
                  <li className="relative group">
                    <button
                      className="flex items-center text-sm text-white/80 hover:text-blue-400 transition-colors font-medium"
                      onClick={() => toggleDropdown('company')}
                    >
                      COMPANY
                      <ChevronDown
                        className={`ml-0.5 h-4 w-4 opacity-50 transition-transform ${
                          activeDropdown === 'company' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === 'company' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-gray-900 border border-gray-800/40 p-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-blue-400 mb-3">
                                ABOUT US
                              </h4>
                              <ul className="space-y-2">
                                {companyDropDownLinks
                                  .slice(0, 6)
                                  .map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        to={link.to}
                                        className="text-white/80 hover:text-blue-400 transition-colors"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-400 mb-3">
                                More
                              </h4>
                              <ul className="space-y-2">
                                {companyDropDownLinks
                                  .slice(6, 12)
                                  .map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        to={link.to}
                                        className="text-white/80 hover:text-blue-400 transition-colors"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <h4 className="font-medium text-green-400 mb-2">
                              Trading Excellence
                            </h4>
                            <p className="text-sm text-gray-300">
                              With 15+ years in the market, we provide
                              innovative trading solutions to clients worldwide.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  <li className="relative group">
                    <button
                      className="flex items-center text-sm text-white/80 hover:text-blue-400 transition-colors font-medium"
                      onClick={() => toggleDropdown('markets')}
                    >
                      MARKETS
                      <ChevronDown
                        className={`ml-0.5 h-4 w-4 opacity-50 transition-transform ${
                          activeDropdown === 'markets' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === 'markets' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-gray-900 border border-gray-800/40 p-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-blue-400 mb-3">
                                PRODUCTS
                              </h4>
                              <ul className="space-y-2">
                                {marketDropDownLinks
                                  .slice(0, 5)
                                  .map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        to={link.to}
                                        className="text-white/80 hover:text-blue-400 transition-colors"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-transparent mb-3">
                                &nbsp;
                              </h4>
                              <ul className="space-y-2 mt-8">
                                {marketDropDownLinks
                                  .slice(5, 9)
                                  .map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        to={link.to}
                                        className="text-white/80 hover:text-blue-400 transition-colors"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <h4 className="font-medium text-green-400 mb-2">
                              Access The Global Forex Market
                            </h4>
                            <p className="text-sm text-gray-300">
                              Access 1000+ Instruments at up to 1000:1 Leverage
                              through our MT4 and PRO Trader platforms
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  <li className="relative group">
                    <button
                      className="flex items-center text-sm text-white/80 hover:text-blue-400 transition-colors font-medium"
                      onClick={() => toggleDropdown('platforms')}
                    >
                      PLATFORMS
                      <ChevronDown
                        className={`ml-0.5 h-4 w-4 opacity-50 transition-transform ${
                          activeDropdown === 'platforms' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === 'platforms' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-gray-900 border border-gray-800/40 p-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-blue-400 mb-3">
                                TRADING PLATFORMS
                              </h4>
                              <ul className="space-y-2">
                                {platformsDropDownLinks.map((link, i) => (
                                  <li key={i}>
                                    <Link
                                      to={link.to}
                                      className="text-white/80 hover:text-blue-400 transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-400 mb-3">
                                TOOLS
                              </h4>
                              <ul className="space-y-2">
                                {toolsDropDownLinks
                                  .slice(5, 8)
                                  .map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        to={link.to}
                                        className="text-white/80 hover:text-blue-400 transition-colors"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <h4 className="font-medium text-green-400 mb-2">
                              Advanced Trading Platforms
                            </h4>
                            <p className="text-sm text-gray-300">
                              Professional-grade platforms with advanced tools
                              for serious traders and institutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  <li className="relative group">
                    <button
                      className="flex items-center text-sm text-white/80 hover:text-blue-400 transition-colors font-medium"
                      onClick={() => toggleDropdown('mirror-trading')}
                    >
                      MIRROR TRADING
                      <ChevronDown
                        className={`ml-0.5 h-4 w-4 opacity-50 transition-transform ${
                          activeDropdown === 'mirror-trading'
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === 'mirror-trading' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-gray-900 border border-gray-800/40 p-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <div>
                              <h4 className="font-medium text-blue-400 mb-3">
                                COPY TRADING SERVICES
                              </h4>
                              <ul className="space-y-2">
                                {mirrorTradingDropDownLinks.map((link, i) => (
                                  <li key={i}>
                                    <Link
                                      to={link.to}
                                      className="text-white/80 hover:text-blue-400 transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <h4 className="font-medium text-green-400 mb-2">
                              Mirror Trading
                            </h4>
                            <p className="text-sm text-gray-300">
                              Copy successful traders automatically and grow
                              your portfolio with proven strategies.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/recap"
                      className="text-sm text-white/80 hover:text-blue-400 transition-colors font-medium"
                    >
                      RECAP
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Login Button - Right */}
              <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
                <GTranslateProvider />

                <Link to="/login">
                  <button className="relative bg-gradient-to-r from-amber-300 to-blue-400 p-[1px] rounded-lg hover:from-amber-400 hover:to-blue-500 transition-all duration-300 group">
                    <div className="bg-bodydark px-6 py-2 rounded-lg flex items-center space-x-2 group-hover:bg-gray-800 transition-colors duration-300">
                      <span className="text-white/80 font-medium">Login</span>
                      <LogIn
                        className="w-4 h-4 text-white/80"
                        strokeWidth={1.5}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
