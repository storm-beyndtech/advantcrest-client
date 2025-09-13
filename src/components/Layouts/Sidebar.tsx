import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { contextData } from '../../context/AuthContext';
import SidebarDropdown from './SidebarDropdown';
import {
  BarChart2,
  Coins,
  ListTree,
  LogOut,
  Menu,
  Landmark,
  Layers,
  Combine,
  Award,
} from 'lucide-react';
import { IoHome } from 'react-icons/io5';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation();
  const { pathname } = location;
  const { logout } = contextData();
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-999999 flex h-screen w-64 flex-col bg-white dark:bg-emerald-950/40 border-r border-gray-200 dark:border-emerald-800/50 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Fixed header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 flex-shrink-0 border-b border-gray-200 dark:border-emerald-800/30">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 filter dark:filter-none brightness-0 dark:brightness-100"
          />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-emerald-900/50 transition-colors"
        >
          <Menu className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <nav className="mt-5 py-4 px-3 lg:mt-9">
          <ul className="mb-10 flex flex-col gap-1.5">
            <li>
              <NavLink
                to="/dashboard"
                className={`group relative flex items-center gap-3 rounded-lg py-2.5 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 ${
                  pathname === '/dashboard'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-400/30 backdrop-blur-sm'
                    : 'hover:bg-gray-100 dark:hover:bg-emerald-900/30'
                }`}
              >
                <IoHome className="text-xl" />
                Dashboard
              </NavLink>
            </li>

            {/* Transactions drop down */}
            <SidebarDropdown
              title="Payments"
              icon={<Landmark strokeWidth={1.8} className={`text-xl`} />}
              links={[
                { label: 'Deposit', href: '/dashboard/deposit' },
                { label: 'Withdrawal', href: '/dashboard/withdrawal' },
              ]}
            />

            <li>
              <NavLink
                to="/dashboard/copytrading"
                className={`group relative flex items-center gap-3 rounded-lg py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 ${
                  pathname === '/dashboard/copytrading'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-400/30 backdrop-blur-sm'
                    : 'hover:bg-gray-100 dark:hover:bg-emerald-900/30'
                }`}
              >
                <BarChart2 strokeWidth={1.8} className="text-xl" />
                Copytrading
              </NavLink>
            </li>

            {/* Trade History drop down */}
            <SidebarDropdown
              title="Trade History"
              icon={<Layers strokeWidth={1.8} className={`text-xl`} />}
              links={[
                {
                  label: 'Copy Trade History',
                  href: '/dashboard/copy-trade-history',
                },
                {
                  label: 'Demo Trade History',
                  href: '/dashboard/demo-trade-history',
                },
              ]}
            />

            <li>
              <NavLink
                to="/dashboard/transactions"
                className={`group relative flex items-center gap-3 rounded-lg py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 ${
                  pathname.includes('transactions')
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-400/30 backdrop-blur-sm'
                    : 'hover:bg-gray-100 dark:hover:bg-emerald-900/30'
                }`}
              >
                <Coins strokeWidth={1.8} className="text-xl" />
                All Transactions
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-1.5">
            {/* Market tools drop down */}
            <SidebarDropdown
              title="Market Tools"
              icon={<Combine strokeWidth={1.8} className={`text-xl`} />}
              links={[
                {
                  label: 'Technical Insights',
                  href: '/dashboard/technical-insights',
                },
                {
                  label: 'Trading Courses',
                  href: '/dashboard/trading-courses',
                },
                {
                  label: 'Econimic Calendar',
                  href: '/dashboard/economic-calendar',
                },
              ]}
            />

            <li>
              <NavLink
                to="/dashboard/loyalty-status"
                className={`text-xs group relative flex items-center gap-2.5 rounded-2xl py-2.5 px-7.5 text-gray-300 font-montserrat duration-300 ease-in-out hover:bg-black dark:hover:bg-black ${
                  pathname.includes('affiliate') &&
                  'bg-[#14161e]/70 !text-cyan-400'
                }`}
              >
                <Award strokeWidth={1.8} className={`text-xl`} />
                Loyalty Status
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-1.5 pb-5">
            <SidebarDropdown
              title="More"
              icon={<ListTree strokeWidth={1.8} className={`text-xl`} />}
              links={[
                { label: 'Settings', href: '/dashboard/settings' },
                {
                  label: 'All Notifications',
                  href: '/dashboard/notifications',
                },
                {
                  label: 'Account Verification',
                  href: '/dashboard/kyc',
                },
                { label: 'Login History', href: '/dashboard/login-history' },
              ]}
            />

            <li
              className="cursor-pointer text-xs group relative flex items-center gap-2.5 rounded-2xl py-2.5 px-7.5 text-gray-300 font-montserrat duration-300 ease-in-out hover:bg-black dark:hover:bg-black"
              onClick={() => logout()}
            >
              <LogOut strokeWidth={1.8} className={`text-xl`} />
              Sign out
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
