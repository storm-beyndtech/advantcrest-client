import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import hoursBg from '../assets/our-trading-infrastructure-row3-img1.webp';

export const TradingHoursHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: hoursBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-8xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Trading Hours
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          With more than 1000+ FX pairs, Indices, Commodities, Share CFDs on
          offer, there's always a market for you to trade
        </motion.p>
      </div>
    </section>
  );
};

interface TradingHoursData {
  instrument: string;
  description: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  logo: string;
  logoText: string;
  logoBg: string;
}

export const TradingHoursTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'Forex' | 'Indices' | 'Commodities' | 'Crypto' | 'Stocks'
  >('Forex');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const tradingHoursData: Record<string, TradingHoursData[]> = {
    Forex: [
      {
        instrument: 'EURUSD',
        description: 'Euro vs US Dollar',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇪🇺🇺🇸',
        logoText: 'EUR/USD',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'GBPUSD',
        description: 'British Pound vs US Dollar',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇬🇧🇺🇸',
        logoText: 'GBP/USD',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'USDJPY',
        description: 'US Dollar vs Japanese Yen',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇺🇸🇯🇵',
        logoText: 'USD/JPY',
        logoBg: 'bg-green-600',
      },
      {
        instrument: 'AUDUSD',
        description: 'Australian Dollar vs US Dollar',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇦🇺🇺🇸',
        logoText: 'AUD/USD',
        logoBg: 'bg-yellow-600',
      },
      {
        instrument: 'USDCAD',
        description: 'US Dollar vs Canadian Dollar',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇺🇸🇨🇦',
        logoText: 'USD/CAD',
        logoBg: 'bg-red-700',
      },
    ],
    Indices: [
      {
        instrument: 'US30',
        description: 'Dow Jones Industrial Average',
        monday: '01:05-23:15',
        tuesday: '01:05-23:15',
        wednesday: '01:05-23:15',
        thursday: '01:05-23:15',
        friday: '01:05-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: 'DJ',
        logoText: 'Dow Jones',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'US500',
        description: 'S&P 500 Index',
        monday: '01:05-23:15',
        tuesday: '01:05-23:15',
        wednesday: '01:05-23:15',
        thursday: '01:05-23:15',
        friday: '01:05-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: 'S&P',
        logoText: 'S&P 500',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'GER40',
        description: 'DAX 40 Index',
        monday: '01:15-23:00',
        tuesday: '01:15-23:00',
        wednesday: '01:15-23:00',
        thursday: '01:15-23:00',
        friday: '01:15-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇩🇪',
        logoText: 'DAX',
        logoBg: 'bg-yellow-600',
      },
      {
        instrument: 'UK100',
        description: 'FTSE 100 Index',
        monday: '01:05-23:00',
        tuesday: '01:05-23:00',
        wednesday: '01:05-23:00',
        thursday: '01:05-23:00',
        friday: '01:05-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇬🇧',
        logoText: 'FTSE',
        logoBg: 'bg-red-700',
      },
      {
        instrument: 'JPN225',
        description: 'Nikkei 225 Index',
        monday: '01:05-07:30, 08:30-23:00',
        tuesday: '01:05-07:30, 08:30-23:00',
        wednesday: '01:05-07:30, 08:30-23:00',
        thursday: '01:05-07:30, 08:30-23:00',
        friday: '01:05-07:30, 08:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇯🇵',
        logoText: 'Nikkei',
        logoBg: 'bg-red-800',
      },
      {
        instrument: 'HK50',
        description: 'Hang Seng Index',
        monday: '03:15-06:00, 07:00-10:30, 12:15-18:00',
        tuesday: '03:15-06:00, 07:00-10:30, 12:15-18:00',
        wednesday: '03:15-06:00, 07:00-10:30, 12:15-18:00',
        thursday: '03:15-06:00, 07:00-10:30, 12:15-18:00',
        friday: '03:15-06:00, 07:00-10:30, 12:15-18:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🇭🇰',
        logoText: 'Hang Seng',
        logoBg: 'bg-purple-700',
      },
    ],
    Commodities: [
      {
        instrument: 'XAUUSD',
        description: 'Gold vs US Dollar',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🥇',
        logoText: 'Gold',
        logoBg: 'bg-yellow-600',
      },
      {
        instrument: 'XAGUSD',
        description: 'Silver vs US Dollar',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🥈',
        logoText: 'Silver',
        logoBg: 'bg-gray-500',
      },
      {
        instrument: 'USOIL',
        description: 'US Crude Oil',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🛢️',
        logoText: 'Oil',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'NATGAS',
        description: 'Natural Gas',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🔥',
        logoText: 'Gas',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'COPPER',
        description: 'Copper',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🟤',
        logoText: 'Copper',
        logoBg: 'bg-orange-800',
      },
      {
        instrument: 'WHEAT',
        description: 'Wheat Futures',
        monday: '01:05-23:55',
        tuesday: '01:05-23:55',
        wednesday: '01:05-23:55',
        thursday: '01:05-23:55',
        friday: '01:05-23:55',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🌾',
        logoText: 'Wheat',
        logoBg: 'bg-amber-600',
      },
    ],
    Crypto: [
      {
        instrument: 'BTCUSD',
        description: 'Bitcoin vs US Dollar',
        monday: '24/7',
        tuesday: '24/7',
        wednesday: '24/7',
        thursday: '24/7',
        friday: '24/7',
        saturday: '24/7',
        sunday: '24/7',
        logo: '₿',
        logoText: 'Bitcoin',
        logoBg: 'bg-orange-500',
      },
      {
        instrument: 'ETHUSD',
        description: 'Ethereum vs US Dollar',
        monday: '24/7',
        tuesday: '24/7',
        wednesday: '24/7',
        thursday: '24/7',
        friday: '24/7',
        saturday: '24/7',
        sunday: '24/7',
        logo: 'Ξ',
        logoText: 'Ethereum',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'LTCUSD',
        description: 'Litecoin vs US Dollar',
        monday: '24/7',
        tuesday: '24/7',
        wednesday: '24/7',
        thursday: '24/7',
        friday: '24/7',
        saturday: '24/7',
        sunday: '24/7',
        logo: 'Ł',
        logoText: 'Litecoin',
        logoBg: 'bg-gray-500',
      },
      {
        instrument: 'ADAUSD',
        description: 'Cardano vs US Dollar',
        monday: '24/7',
        tuesday: '24/7',
        wednesday: '24/7',
        thursday: '24/7',
        friday: '24/7',
        saturday: '24/7',
        sunday: '24/7',
        logo: '₳',
        logoText: 'Cardano',
        logoBg: 'bg-blue-700',
      },
      {
        instrument: 'DOTUSD',
        description: 'Polkadot vs US Dollar',
        monday: '24/7',
        tuesday: '24/7',
        wednesday: '24/7',
        thursday: '24/7',
        friday: '24/7',
        saturday: '24/7',
        sunday: '24/7',
        logo: '●',
        logoText: 'Polkadot',
        logoBg: 'bg-pink-600',
      },
      {
        instrument: 'SOLUSD',
        description: 'Solana vs US Dollar',
        monday: '24/7',
        tuesday: '24/7',
        wednesday: '24/7',
        thursday: '24/7',
        friday: '24/7',
        saturday: '24/7',
        sunday: '24/7',
        logo: '◎',
        logoText: 'Solana',
        logoBg: 'bg-purple-600',
      },
    ],
    Stocks: [
      {
        instrument: 'AAPL',
        description: 'Apple Inc',
        monday: '16:30-23:00',
        tuesday: '16:30-23:00',
        wednesday: '16:30-23:00',
        thursday: '16:30-23:00',
        friday: '16:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '🍎',
        logoText: 'Apple',
        logoBg: 'bg-gray-800',
      },
      {
        instrument: 'TSLA',
        description: 'Tesla Inc',
        monday: '16:30-23:00',
        tuesday: '16:30-23:00',
        wednesday: '16:30-23:00',
        thursday: '16:30-23:00',
        friday: '16:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '⚡',
        logoText: 'Tesla',
        logoBg: 'bg-red-700',
      },
      {
        instrument: 'MSFT',
        description: 'Microsoft Corporation',
        monday: '16:30-23:00',
        tuesday: '16:30-23:00',
        wednesday: '16:30-23:00',
        thursday: '16:30-23:00',
        friday: '16:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '⊞',
        logoText: 'Microsoft',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'GOOGL',
        description: 'Alphabet Inc Class A',
        monday: '16:30-23:00',
        tuesday: '16:30-23:00',
        wednesday: '16:30-23:00',
        thursday: '16:30-23:00',
        friday: '16:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: 'G',
        logoText: 'Google',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'AMZN',
        description: 'Amazon.com Inc',
        monday: '16:30-23:00',
        tuesday: '16:30-23:00',
        wednesday: '16:30-23:00',
        thursday: '16:30-23:00',
        friday: '16:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: '📦',
        logoText: 'Amazon',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'META',
        description: 'Meta Platforms Inc',
        monday: '16:30-23:00',
        tuesday: '16:30-23:00',
        wednesday: '16:30-23:00',
        thursday: '16:30-23:00',
        friday: '16:30-23:00',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: 'f',
        logoText: 'Meta',
        logoBg: 'bg-blue-700',
      },
      {
        instrument: 'ASML',
        description: 'ASML Holding NV',
        monday: '09:00-17:30',
        tuesday: '09:00-17:30',
        wednesday: '09:00-17:30',
        thursday: '09:00-17:30',
        friday: '09:00-17:30',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: 'A',
        logoText: 'ASML',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'SAP',
        description: 'SAP SE',
        monday: '09:00-17:30',
        tuesday: '09:00-17:30',
        wednesday: '09:00-17:30',
        thursday: '09:00-17:30',
        friday: '09:00-17:30',
        saturday: 'Closed',
        sunday: 'Closed',
        logo: 'S',
        logoText: 'SAP',
        logoBg: 'bg-blue-600',
      },
    ],
  };

  return (
    <section ref={ref} className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight"
            variants={fadeInUp}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Trading <span className="text-blue-400">Hours</span> Schedule
          </motion.h2>

          {/* Tabs */}
          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700 overflow-x-auto">
              {(
                ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks'] as const
              ).map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-md font-medium transition-all text-sm whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Table */}
          <motion.div
            className="bg-slate-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 max-w-7xl mx-auto shadow-2xl"
            variants={fadeInUp}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="px-3 py-3 text-left text-gray-300 font-medium">
                      Instrument
                    </th>
                    <th className="px-3 py-3 text-left text-gray-300 font-medium">
                      Description
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Monday
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Tuesday
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Wednesday
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Thursday
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Friday
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Saturday
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Sunday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tradingHoursData[activeTab].map((item, index) => (
                    <motion.tr
                      key={item.instrument}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-6 rounded-sm ${item.logoBg} flex items-center justify-center mr-3 shadow-md border border-slate-600`}
                          >
                            <span className="text-white text-xs font-bold">
                              {item.logo}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-bold text-xs">
                              {item.instrument}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {item.logoText}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-300 text-xs">
                        {item.description}
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.monday === 'Closed'
                              ? 'text-red-400'
                              : item.monday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.monday}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.tuesday === 'Closed'
                              ? 'text-red-400'
                              : item.tuesday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.tuesday}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.wednesday === 'Closed'
                              ? 'text-red-400'
                              : item.wednesday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.wednesday}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.thursday === 'Closed'
                              ? 'text-red-400'
                              : item.thursday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.thursday}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.friday === 'Closed'
                              ? 'text-red-400'
                              : item.friday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.friday}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.saturday === 'Closed'
                              ? 'text-red-400'
                              : item.saturday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.saturday}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs font-mono">
                        <span
                          className={
                            item.sunday === 'Closed'
                              ? 'text-red-400'
                              : item.sunday === '24/7'
                                ? 'text-green-400'
                                : 'text-white'
                          }
                        >
                          {item.sunday}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Timezone Note */}
          <motion.div className="text-center mt-6" variants={fadeInUp}>
            <p className="text-gray-400 text-sm">
              * All times are displayed in GMT+3 timezone
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Trading hours may vary during holidays and daylight saving time
              changes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
