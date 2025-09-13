import React, { useState } from 'react';
import {
  X,
  User,
  Settings,
  CreditCard,
  History,
  Shield,
  Badge,
} from 'lucide-react';
import { IoHome } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { MdWorkHistory } from 'react-icons/md';
import { CgMenuRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      id: 'dashboard',
      icon: IoHome,
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      id: 'copytrading',
      icon: FaUsers,
      label: 'Copytrading',
      href: '/dashboard/copytrading',
    },
    {
      id: 'transactions',
      icon: MdWorkHistory,
      label: 'Transactions',
      href: '/dashboard/transactions',
    },
    {
      id: 'more',
      icon: CgMenuRight,
      label: 'More',
      href: '#',
    },
  ];

  const moreMenuItems = [
    { icon: User, label: 'Profile', href: '/dashboard/settings' },
    { icon: CreditCard, label: 'Deposit', href: '/dashboard/deposit' },
    { icon: CreditCard, label: 'Withdraw', href: '/dashboard/withdrawal' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    { icon: History, label: 'Trade History', href: '/dashboard/copy-trade-history' },
    { icon: Shield, label: 'Account Verification', href: '/dashboard/kyc' },
    { icon: Badge, label: 'Loyalty Status', href: '/dashboard/loyalty-status' },
  ];

  const handleTabClick = (tabId: string, link: string) => {
    if (tabId === 'more') {
      setShowMoreMenu(!showMoreMenu);
    } else {
      setActiveTab(tabId);
      setShowMoreMenu(false);
      navigate(link);
    }
  };

  const handleMoreItemClick = (href: string) => {
    setShowMoreMenu(false);
    navigate(href);
  };

  return (
    <>
      {/* Overlay */}
      {showMoreMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setShowMoreMenu(false)}
        />
      )}

      {/* More Menu */}
      {showMoreMenu && (
        <div className="fixed bottom-20 right-4 w-64 bg-slate-950 rounded-xl border border-slate-800 shadow-2xl z-50 overflow-hidden">
          <div className="p-2">
            <div className="flex items-center justify-between px-3 py-2 mb-1">
              <h3 className="text-white font-medium text-sm">Menu</h3>
              <button
                onClick={() => setShowMoreMenu(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-1">
              {moreMenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleMoreItemClick(item.href)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-colors text-left"
                  >
                    <IconComponent size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black z-999999">
        <div className="flex items-center justify-around px-4 py-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            const isMoreActive = item.id === 'more' && showMoreMenu;

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id, item.href)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  isActive || isMoreActive
                    ? 'bg-slate-950 text-brandblue'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="relative">
                  <IconComponent
                    size={20}
                    className={`transition-colors ${
                      isActive || isMoreActive
                        ? 'text-brandblue'
                        : 'text-gray-400'
                    }`}
                  />
                  {item.id === 'more' && showMoreMenu && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </div>

                {(isActive || isMoreActive) && (
                  <span className="text-xs text-brandblue font-semibold whitespace-nowrap animate-in slide-in-from-left-2 duration-200">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
