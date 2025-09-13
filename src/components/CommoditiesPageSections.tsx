import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import commodityBg from '../assets/commodities/commodities-banner-bg.webp';

export const CommoditiesChart = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col items-center justify-center p-8">
      {/* Header Text */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Don't miss the next Gold rush,
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          trade with AdvantCrest
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
            backgroundImage: `url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/commodities-graph-img1.webp')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Key Event Markers */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* March 2019 - Gold */}
          <div className="absolute left-[14%] top-[50%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">june 2019</div>
              <div>Gold</div>
            </div>
          </div>

          {/* March 2020 - Covid */}
          <div className="absolute left-[34%] top-[16%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">MARCH 2020</div>
              <div>Covid</div>
            </div>
          </div>

          {/* September 2023 - Global Conflict */}
          <div className="absolute left-[70%] bottom-[22%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">DECEMBER 2023</div>
              <div>Global Conflit</div>
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
            Start Trading Commodities
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed text-lg"
            variants={fadeInUp}
          >
            With 15 of the most liquid and widely traded commodity markets on
            offer, there are countless opportunities to capitalize on major
            market cycles and seasonal trading conditions.
          </motion.p>
          <motion.p
            className="text-gray-500 mb-10 text-lg font-medium"
            variants={fadeInUp}
          >
            When you trade commodities through AdvantCrest, you gain access to
            markets such as Oil, Gold, Gas, Coffee, Orange Juice and more, via
            CFDs priced on physical assets! Start trading commodities today!
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

export const CommoditiesHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: commodityBg,
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
          Commodities
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Enjoy Fast Access to Major Commodity Markets
        </motion.p>
      </div>
    </section>
  );
};

interface CommodityData {
  platformSymbol: string;
  type: string;
  market: string;
  size: string;
  usdValue: string;
  tick: string;
  margin: string;
  currency: string;
  maxLeverage: string;
  minVolume: string;
  maxVolume: string;
  icon: string;
  iconBg: string;
}

export const CommoditiesTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'Energy' | 'Precious Metals' | 'Soft Commodities'
  >('Energy');
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

  const commodityData: Record<string, CommodityData[]> = {
    Energy: [
      {
        platformSymbol: 'COIL',
        type: 'CFD Oil',
        market: 'Nymex/ CME',
        size: '0.01 = 10 barrels',
        usdValue: 'USD$0.10',
        tick: '99.56 → 99.57',
        margin: '1% x (10 x market price)',
        currency: 'USD',
        maxLeverage: '333:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🛢️',
        iconBg: 'bg-orange-600',
      },
      {
        platformSymbol: 'NG',
        type: 'CFD Natural Gas',
        market: 'Nymex/ CME',
        size: '0.01 = 100 MMBtu',
        usdValue: 'USD$0.1',
        tick: '1.635 → 1.636',
        margin: '1% x (100 MMBtu x price per MMBtu)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.10',
        maxVolume: '20',
        icon: '🔥',
        iconBg: 'bg-blue-600',
      },
      {
        platformSymbol: 'GAS',
        type: 'CFD Gasoline',
        market: 'Nymex/ CME',
        size: '0.01 = 420 Gallon',
        usdValue: 'USD$0.042',
        tick: '1.0156 → 1.0159',
        margin: '1% x (420 Gallon x price per gallon)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '⛽',
        iconBg: 'bg-red-600',
      },
      {
        platformSymbol: 'HEAT',
        type: 'CFD Heating Oil',
        market: 'Nymex/ CME',
        size: '0.01 = 420 Gallon',
        usdValue: 'USD$0.042',
        tick: '2.1234 → 2.1235',
        margin: '1% x (420 Gallon x price per gallon)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🔥',
        iconBg: 'bg-orange-700',
      },
      {
        platformSymbol: 'BRENT',
        type: 'CFD Brent Oil',
        market: 'ICE',
        size: '0.01 = 10 barrels',
        usdValue: 'USD$0.10',
        tick: '85.42 → 85.43',
        margin: '1% x (10 x market price)',
        currency: 'USD',
        maxLeverage: '333:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🛢️',
        iconBg: 'bg-gray-700',
      },
    ],
    'Precious Metals': [
      {
        platformSymbol: 'XAUUSD',
        type: 'CFD Gold',
        market: 'Market Cash',
        size: '0.01 = 10 Metric Tonnes',
        usdValue: 'USD$0.1',
        tick: '2458.24 → 2458.25',
        margin: '1% x (10 Metric Tonnes x price per metric tonne)',
        currency: 'USD',
        maxLeverage: '100:1',
        minVolume: '0.1',
        maxVolume: '20',
        icon: '🥇',
        iconBg: 'bg-yellow-600',
      },
      {
        platformSymbol: 'XAGUSD',
        type: 'CFD Silver',
        market: 'Market Cash',
        size: '0.01 = 10 Barrels',
        usdValue: 'USD$0.10',
        tick: '29.50 → 29.51',
        margin: '1% x (10 x Market price)',
        currency: 'USD',
        maxLeverage: '333:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🥈',
        iconBg: 'bg-gray-500',
      },
      {
        platformSymbol: 'XPTUSD',
        type: 'CFD Platinum',
        market: 'Market Cash',
        size: '1',
        usdValue: 'USD$0.001',
        tick: '965.731 → 965.732',
        margin: '1% x (10 x Market price)',
        currency: 'USD',
        maxLeverage: '333:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '⚪',
        iconBg: 'bg-slate-400',
      },
      {
        platformSymbol: 'XPDUSD',
        type: 'CFD Palladium',
        market: 'Market Cash',
        size: '1',
        usdValue: 'USD$0.001',
        tick: '1245.50 → 1245.51',
        margin: '1% x (10 x Market price)',
        currency: 'USD',
        maxLeverage: '333:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '⚫',
        iconBg: 'bg-gray-600',
      },
      {
        platformSymbol: 'COPPER',
        type: 'CFD Copper',
        market: 'COMEX',
        size: '0.01 = 2500 lbs',
        usdValue: 'USD$0.25',
        tick: '4.1234 → 4.1235',
        margin: '1% x (2500 lbs x price per lb)',
        currency: 'USD',
        maxLeverage: '50:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🟤',
        iconBg: 'bg-orange-800',
      },
    ],
    'Soft Commodities': [
      {
        platformSymbol: 'WHEAT',
        type: 'CFD Wheat',
        market: 'CBOT',
        size: '0.01 = 50 Bushels',
        usdValue: 'USD$0.125',
        tick: '6.50 → 6.5025',
        margin: '1% x (50 Bushels x price per bushel)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🌾',
        iconBg: 'bg-amber-600',
      },
      {
        platformSymbol: 'CORN',
        type: 'CFD Corn',
        market: 'CBOT',
        size: '0.01 = 50 Bushels',
        usdValue: 'USD$0.125',
        tick: '4.85 → 4.8525',
        margin: '1% x (50 Bushels x price per bushel)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🌽',
        iconBg: 'bg-yellow-700',
      },
      {
        platformSymbol: 'SUGAR',
        type: 'CFD Sugar',
        market: 'ICE',
        size: '0.01 = 1120 lbs',
        usdValue: 'USD$0.112',
        tick: '20.50 → 20.51',
        margin: '1% x (1120 lbs x price per lb)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🍯',
        iconBg: 'bg-pink-600',
      },
      {
        platformSymbol: 'COFFEE',
        type: 'CFD Coffee',
        market: 'ICE',
        size: '0.01 = 375 lbs',
        usdValue: 'USD$0.375',
        tick: '1.45 → 1.4505',
        margin: '1% x (375 lbs x price per lb)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '☕',
        iconBg: 'bg-amber-800',
      },
      {
        platformSymbol: 'COCOA',
        type: 'CFD Cocoa',
        market: 'ICE',
        size: '0.01 = 10 metric tons',
        usdValue: 'USD$0.10',
        tick: '2750 → 2751',
        margin: '1% x (10 metric tons x price per ton)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🍫',
        iconBg: 'bg-yellow-900',
      },
      {
        platformSymbol: 'COTTON',
        type: 'CFD Cotton',
        market: 'ICE',
        size: '0.01 = 500 lbs',
        usdValue: 'USD$0.05',
        tick: '0.7234 → 0.7235',
        margin: '1% x (500 lbs x price per lb)',
        currency: 'USD',
        maxLeverage: '20:1',
        minVolume: '0.01',
        maxVolume: '20',
        icon: '🌱',
        iconBg: 'bg-green-700',
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
            Trade over 15 Commodities
          </motion.h2>

          {/* Tabs */}
          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
              {(['Energy', 'Precious Metals', 'Soft Commodities'] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-md font-medium transition-all text-sm ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ),
              )}
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
                      Platform Symbol
                    </th>
                    <th className="px-3 py-3 text-left text-gray-300 font-medium">
                      Type
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Market
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Size/ Volume
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      USD value/ per tick
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      E.g for tick value per tick
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      1% Margin
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Currency
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Max Leverage
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Min Volume
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Max Volume
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commodityData[activeTab].map((commodity, index) => (
                    <motion.tr
                      key={commodity.platformSymbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center">
                          <div
                            className={`w-6 h-6 rounded-md ${commodity.iconBg} flex items-center justify-center mr-2 shadow-md`}
                          >
                            <span className="text-white text-xs">
                              {commodity.icon}
                            </span>
                          </div>
                          <div className="text-white font-bold text-xs">
                            {commodity.platformSymbol}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-300 text-xs">
                        {commodity.type}
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {commodity.market}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {commodity.size}
                      </td>
                      <td className="px-3 py-3 text-center text-cyan-400 text-xs">
                        {commodity.usdValue}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs">
                        {commodity.tick}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs leading-tight">
                        {commodity.margin}
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {commodity.currency}
                      </td>
                      <td className="px-3 py-3 text-center text-green-400 font-semibold text-xs">
                        {commodity.maxLeverage}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {commodity.minVolume}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {commodity.maxVolume}
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
