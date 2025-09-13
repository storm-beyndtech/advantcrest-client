import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import fxBg from '../assets/forex/forex-banner-bg.webp';

export const GBPUSDChart = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col items-center justify-center p-8">
      {/* Header Text */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Catch the next big GBPUSD
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          move with <span className="text-gray-400">Copyelite</span>
        </h2>
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/forex-graph-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Chart Container */}
      <div className="relative w-full max-w-6xl h-96 md:h-[500px]">
        {/* Chart Line */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/forex-graph-img1.webp')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Key Event Markers */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* March 2020 - Covid */}
          <div className="absolute left-[12%] top-[12%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">MARCH 2020</div>
              <div>Covid</div>
            </div>
          </div>

          {/* August 2020 - New Highs */}
          <div className="absolute left-[25%] top-[45%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">AUGUST 2020</div>
              <div>New Highs</div>
            </div>
          </div>

          {/* September 2022 - Economic Uncertainty */}
          <div className="absolute left-[70%] top-[25%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">
                SEPTEMBER 2022
              </div>
              <div>Economic Uncertainty</div>
            </div>
          </div>

          {/* What's Next? */}
          <div className="absolute right-[10%] top-[35%]">
            <div className="w-2 h-2 bg-white rounded-full mb-2"></div>
            <div className="text-xs text-white font-medium whitespace-nowrap">
              <div>What's next?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StartTradingSection: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
            variants={fadeInUp}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Start Trading Forex
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed text-lg"
            variants={fadeInUp}
          >
            With 45+ FX pairs to choose from, there is always an opportunity to
            capitalise on global volatility. The Forex market is among the most
            popular choices to take a view on future risk and awards trading
            capital by its capitulation on Free Education to trading via 1 click
            trading systems without the need for individual analysis through the
            innovative Copy.PRO Trader and MTF platforms.
          </motion.p>
          <motion.p
            className="text-gray-500 mb-10 text-lg font-medium"
            variants={fadeInUp}
          >
            Trade forex, your way!
          </motion.p>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-semibold transition-all text-lg shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Live Account
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export const ForexHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: fxBg,
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
          className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Forex
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Take Advantage of Easy Access to the Forex Market
        </motion.p>
      </div>
    </section>
  );
};

interface CurrencyData {
  symbol: string;
  name: string;
  flag1: string;
  flag2: string;
  bid: string;
  ask: string;
  spread: string;
  change: string;
  changePercent: string;
  marginRequired: string;
}

export const CurrencyPairsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Majors' | 'Minors' | 'Exotics'>(
    'Majors',
  );
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
        staggerChildren: 0.1,
      },
    },
  };

  const currencyData: Record<string, CurrencyData[]> = {
    Majors: [
      {
        symbol: 'EUR/USD',
        name: 'Euro vs US Dollar',
        flag1: 'https://flagcdn.com/w40/eu.png',
        flag2: 'https://flagcdn.com/w40/us.png',
        bid: '1.08431',
        ask: '1.08437',
        spread: '0.6',
        change: '+0.00012',
        changePercent: '+0.01%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'GBP/USD',
        name: 'British Pound vs US Dollar',
        flag1: 'https://flagcdn.com/w40/gb.png',
        flag2: 'https://flagcdn.com/w40/us.png',
        bid: '1.26701',
        ask: '1.26709',
        spread: '0.8',
        change: '-0.00045',
        changePercent: '-0.04%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'USD/JPY',
        name: 'US Dollar vs Japanese Yen',
        flag1: 'https://flagcdn.com/w40/us.png',
        flag2: 'https://flagcdn.com/w40/jp.png',
        bid: '149.542',
        ask: '149.547',
        spread: '0.5',
        change: '+0.123',
        changePercent: '+0.08%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'USD/CHF',
        name: 'US Dollar vs Swiss Franc',
        flag1: 'https://flagcdn.com/w40/us.png',
        flag2: 'https://flagcdn.com/w40/ch.png',
        bid: '0.87891',
        ask: '0.87898',
        spread: '0.7',
        change: '+0.00067',
        changePercent: '+0.08%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'AUD/USD',
        name: 'Australian Dollar vs US Dollar',
        flag1: 'https://flagcdn.com/w40/au.png',
        flag2: 'https://flagcdn.com/w40/us.png',
        bid: '0.65654',
        ask: '0.65662',
        spread: '0.8',
        change: '-0.00089',
        changePercent: '-0.14%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'USD/CAD',
        name: 'US Dollar vs Canadian Dollar',
        flag1: 'https://flagcdn.com/w40/us.png',
        flag2: 'https://flagcdn.com/w40/ca.png',
        bid: '1.39876',
        ask: '1.39884',
        spread: '0.8',
        change: '+0.00234',
        changePercent: '+0.17%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'NZD/USD',
        name: 'New Zealand Dollar vs US Dollar',
        flag1: 'https://flagcdn.com/w40/nz.png',
        flag2: 'https://flagcdn.com/w40/us.png',
        bid: '0.59432',
        ask: '0.59440',
        spread: '1.0',
        change: '-0.00156',
        changePercent: '-0.26%',
        marginRequired: '3.33%',
      },
    ],
    Minors: [
      {
        symbol: 'EUR/GBP',
        name: 'Euro vs British Pound',
        flag1: 'https://flagcdn.com/w40/eu.png',
        flag2: 'https://flagcdn.com/w40/gb.png',
        bid: '0.85542',
        ask: '0.85551',
        spread: '0.9',
        change: '+0.00023',
        changePercent: '+0.03%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'EUR/JPY',
        name: 'Euro vs Japanese Yen',
        flag1: 'https://flagcdn.com/w40/eu.png',
        flag2: 'https://flagcdn.com/w40/jp.png',
        bid: '162.145',
        ask: '162.157',
        spread: '1.2',
        change: '+0.234',
        changePercent: '+0.14%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'GBP/JPY',
        name: 'British Pound vs Japanese Yen',
        flag1: 'https://flagcdn.com/w40/gb.png',
        flag2: 'https://flagcdn.com/w40/jp.png',
        bid: '189.567',
        ask: '189.582',
        spread: '1.5',
        change: '+0.456',
        changePercent: '+0.24%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'CHF/JPY',
        name: 'Swiss Franc vs Japanese Yen',
        flag1: 'https://flagcdn.com/w40/ch.png',
        flag2: 'https://flagcdn.com/w40/jp.png',
        bid: '170.234',
        ask: '170.249',
        spread: '1.5',
        change: '-0.123',
        changePercent: '-0.07%',
        marginRequired: '3.33%',
      },
      {
        symbol: 'AUD/JPY',
        name: 'Australian Dollar vs Japanese Yen',
        flag1: 'https://flagcdn.com/w40/au.png',
        flag2: 'https://flagcdn.com/w40/jp.png',
        bid: '98.234',
        ask: '98.247',
        spread: '1.3',
        change: '+0.089',
        changePercent: '+0.09%',
        marginRequired: '3.33%',
      },
    ],
    Exotics: [
      {
        symbol: 'USD/TRY',
        name: 'US Dollar vs Turkish Lira',
        flag1: 'https://flagcdn.com/w40/us.png',
        flag2: 'https://flagcdn.com/w40/tr.png',
        bid: '32.4567',
        ask: '32.4823',
        spread: '25.6',
        change: '+0.2345',
        changePercent: '+0.72%',
        marginRequired: '10%',
      },
      {
        symbol: 'USD/ZAR',
        name: 'US Dollar vs South African Rand',
        flag1: 'https://flagcdn.com/w40/us.png',
        flag2: 'https://flagcdn.com/w40/za.png',
        bid: '18.7654',
        ask: '18.7891',
        spread: '23.7',
        change: '+0.1234',
        changePercent: '+0.66%',
        marginRequired: '10%',
      },
      {
        symbol: 'USD/MXN',
        name: 'US Dollar vs Mexican Peso',
        flag1: 'https://flagcdn.com/w40/us.png',
        flag2: 'https://flagcdn.com/w40/mx.png',
        bid: '17.2345',
        ask: '17.2456',
        spread: '11.1',
        change: '-0.0567',
        changePercent: '-0.33%',
        marginRequired: '5%',
      },
      {
        symbol: 'EUR/TRY',
        name: 'Euro vs Turkish Lira',
        flag1: 'https://flagcdn.com/w40/eu.png',
        flag2: 'https://flagcdn.com/w40/tr.png',
        bid: '35.1234',
        ask: '35.1567',
        spread: '33.3',
        change: '+0.4567',
        changePercent: '+1.32%',
        marginRequired: '10%',
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
            className="text-5xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight"
            variants={fadeInUp}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Trade 45+ Currency Pairs
          </motion.h2>

          {/* Tabs */}
          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
              {(['Majors', 'Minors', 'Exotics'] as const).map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-3 rounded-md font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-cyan-500 text-white shadow-lg'
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
              <table className="w-full">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">
                      Symbol
                    </th>
                    <th className="px-6 py-4 text-left text-gray-300 font-semibold">
                      Name
                    </th>
                    <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                      Bid
                    </th>
                    <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                      Ask
                    </th>
                    <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                      Spread
                    </th>
                    <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                      Change
                    </th>
                    <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                      Margin Required
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currencyData[activeTab].map((currency, index) => (
                    <motion.tr
                      key={currency.symbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex items-center mr-3">
                            <img
                              src={currency.flag1}
                              alt="Flag 1"
                              className="w-6 h-4 object-cover rounded-sm mr-1"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <img
                              src={currency.flag2}
                              alt="Flag 2"
                              className="w-6 h-4 object-cover rounded-sm"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <span className="text-white font-semibold">
                            {currency.symbol}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {currency.name}
                      </td>
                      <td className="px-6 py-4 text-center text-white font-mono">
                        {currency.bid}
                      </td>
                      <td className="px-6 py-4 text-center text-white font-mono">
                        {currency.ask}
                      </td>
                      <td className="px-6 py-4 text-center text-cyan-400 font-semibold">
                        {currency.spread}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={
                            currency.change.startsWith('+')
                              ? 'text-green-400'
                              : 'text-red-400'
                          }
                          font-semibold
                        >
                          {currency.changePercent}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300">
                        {currency.marginRequired}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
