import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ShareBg from '../assets/shareCdfs/stocks-hero-kv-retina.png';

export const ShareCDFsChart = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col items-center justify-center p-8">
      {/* Header Text */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Trade Amazon's next big
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          move with AdvantCrest
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
            backgroundImage: `url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/indices-graph-img1%EF%B9%96v=2024012902.webp')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Key Event Markers */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* March 2020 - Covid */}
          <div className="absolute inset-0 top-[70%] text-center">
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <p className="text-xl">APRIL 2020</p>
              <p className="text-gray-300 text-[10px] mb-1">
                Amazon hits blue sky
              </p>
              <p className="text-sm text-blue-400 ">
                Following a two-year consolidation, Amazon breaks <br /> out
                into new highs, kick-starting its stage 2 bull run.
              </p>
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
            Trade 635+ UK, US, and European Share CFDs
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed text-lg"
            variants={fadeInUp}
          >
            Gain access to some of the largest companies in the world such as
            Apple, Deutsche Bank, Vodafone, Amazon, Google and more through
            AdvantCrest range of global Share CFDs. Now, you can take advantage
            of the price movement of the underlying share price in any market
            conditions by trading long or short, whether you trade intra-day,
            swing trade, or position trade.
          </motion.p>
          <motion.p
            className="text-gray-500 mb-10 text-lg font-medium"
            variants={fadeInUp}
          >
            Start trading Share CFDs today!
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

export const TradingFeaturesSection: React.FC = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {/* Top Section - Go long or short */}
          <motion.div
            className="bg-slate-900/40 border border-slate-700/30 rounded-2xl p-8 mb-8 relative overflow-hidden"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-4">
                  Go long or short
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Trade in both rising and falling prices of all available
                  cryptocurrencies CFDs.
                </p>
              </div>
              <div className="relative">
                {/* Placeholder for trader image */}
                <div className="w-full h-80 flex items-center justify-center">
                  <img
                    src="https://xtb.scdn5.secure.raxcdn.com/big_boxes_with_kv_module/0103/57/47277486-1e98-4e49-af06-2977c8ac9328/cfd-kv-big-06-retina.png"
                    alt="buy/sell"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Section - Two cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Leverage your positions */}
            <motion.div
              className="bg-slate-900/40 border border-slate-700/30 rounded-2xl pl-8 pt-8 overflow-hidden"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Leverage your positions
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 pr-4">
                Make use of the functionality that allows you to conduct
                transactions for amounts that exceed the capital invested. You
                should consider whether you understand how CFDs work and whether
                you can afford to take the high risk of losing your money.
              </p>
              <div className="flex justify-end items-end">
                {/* Placeholder for leverage image */}
                <div className="w-90 flex items-center justify-center">
                  <img
                    src="https://xtb.scdn5.secure.raxcdn.com/big_boxes_with_kv_module/0103/56/4be6c3cd-e4bf-46c4-9d4e-190118603bed/cfd-kv-small-retina.png"
                    alt="buy/sell"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Negative balance protection */}
            <motion.div
              className="bg-slate-900/40 border border-slate-700/30 rounded-2xl pl-8 pt-8 overflow-hidden"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Negative balance protection
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 pr-4">
                Be assured that you only invest the deposited money and the
                losses incurred will not be greater than your account balance.
              </p>
              <div className="flex justify-end items-end mt-20">
                {/* Placeholder for leverage image */}
                <div className="w-90 flex items-center justify-center">
                  <img
                    src="https://xtb.scdn5.secure.raxcdn.com/big_boxes_with_kv_module/0103/56/64a2d075-47ca-4726-8a13-4d0290abeae9/cfd-kv-small-02-retina.png"
                    alt="buy/sell"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Position Management Section */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <div className="inline-flex items-center bg-slate-800/50 border border-slate-700/30 rounded-full px-4 py-2 mb-6">
              <span className="text-gray-400 text-sm">Position management</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Keep your investments under control
            </h2>
          </motion.div>

          {/* Bottom Section - Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stop Loss */}
            <motion.div
              className="bg-slate-900/40 border border-slate-700/30 rounded-2xl pl-8 pt-8 overflow-hidden"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-white mb-4">Stop Loss</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                Setting controllable levels of possible loss and close positions
                automatically when a defined price is reached.
              </p>
              <div className="flex justify-end items-end mt-20">
                {/* Placeholder for leverage image */}
                <div className="w-90 flex items-center justify-center">
                  <img
                    src="https://xtb.scdn5.secure.raxcdn.com/three_boxes_with_kv_module/0103/57/a603cd24-af76-4041-9b34-9a572c6fa655/3boxes-01-retina.png"
                    alt="buy/sell"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Pending orders */}
            <motion.div
              className="bg-slate-900/40 border border-slate-700/30 rounded-2xl pl-8 pt-8 overflow-hidden"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Pending orders
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                Open a position automatically when the instrument reaches the
                price you set, without having to constantly watch charts.
              </p>
              <div className="flex justify-end items-end mt-20">
                {/* Placeholder for leverage image */}
                <div className="w-90 flex items-center justify-center">
                  <img
                    src="https://xtb.scdn5.secure.raxcdn.com/three_boxes_with_kv_module/0103/57/b14ea593-b0c7-4ee5-87ca-0604392d59a2/3boxes-02-retina.png"
                    alt="buy/sell"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Take Profit */}
            <motion.div
              className="bg-slate-900/40 border border-slate-700/30 rounded-2xl pl-8 pt-8 overflow-hidden"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-white mb-4">Take Profit</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                Make secure close your investments automatically at the
                determined price, without the need to continuously monitor the
                market.
              </p>
              <div className="flex justify-end items-end mt-20">
                {/* Placeholder for leverage image */}
                <div className="w-90 flex items-center justify-center">
                  <img
                    src="https://xtb.scdn5.secure.raxcdn.com/three_boxes_with_kv_module/0103/57/e1cbbc20-0f9b-4ac7-95ae-f68fcd041eff/3boxes-03-retina.png"
                    alt="buy/sell"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Trust Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={fadeInUp}
          >
            <div>
              <div className="inline-flex items-center bg-slate-800/50 border border-slate-700/30 rounded-full px-4 py-2 mb-6">
                <span className="text-gray-400 text-sm">Trust</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our clients are our top priority
              </h2>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start trading
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  1 million+
                </div>
                <div className="text-gray-400 text-sm">Clients worldwide</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  5 million+
                </div>
                <div className="text-gray-400 text-sm">Deposit insurance</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400 text-sm">Years on the market</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  2300+ CFD
                </div>
                <div className="text-gray-400 text-sm">
                  Instruments you can trade with
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const ShareCDFsHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: ShareBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Open leveraged long and short positions on your favorite stocks.
        </motion.p>
        <motion.h1
          className="text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Trade in CFDs on Apple, Tesla and many more stocks
        </motion.h1>
      </div>
    </section>
  );
};

interface ShareData {
  symbol: string;
  contract: string;
  type: string;
  contractSize: string;
  leverage: string;
  commission: string;
  minLot: string;
  maxLot: string;
  tradingHours: string;
  logo: string;
  logoText: string;
  logoBg: string;
}

export const ShareCFDsTabble: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'US Stocks' | 'European Stocks' | 'Asian Stocks'
  >('US Stocks');
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

  const shareData: Record<string, ShareData[]> = {
    'US Stocks': [
      {
        symbol: 'AAPL',
        contract: 'Apple Inc',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '🍎',
        logoText: 'Apple',
        logoBg: 'bg-gray-800',
      },
      {
        symbol: 'MSFT',
        contract: 'Microsoft Corporation',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '⊞',
        logoText: 'Microsoft',
        logoBg: 'bg-blue-600',
      },
      {
        symbol: 'GOOGL',
        contract: 'Alphabet Inc Class A',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: 'G',
        logoText: 'Google',
        logoBg: 'bg-red-600',
      },
      {
        symbol: 'AMZN',
        contract: 'Amazon.com Inc',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '📦',
        logoText: 'Amazon',
        logoBg: 'bg-orange-600',
      },
      {
        symbol: 'TSLA',
        contract: 'Tesla Inc',
        type: 'CFD',
        contractSize: '1',
        leverage: '10:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '500',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '⚡',
        logoText: 'Tesla',
        logoBg: 'bg-red-700',
      },
      {
        symbol: 'META',
        contract: 'Meta Platforms Inc',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: 'f',
        logoText: 'Meta',
        logoBg: 'bg-blue-700',
      },
      {
        symbol: 'NFLX',
        contract: 'Netflix Inc',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: 'N',
        logoText: 'Netflix',
        logoBg: 'bg-red-800',
      },
      {
        symbol: 'NVDA',
        contract: 'NVIDIA Corporation',
        type: 'CFD',
        contractSize: '1',
        leverage: '10:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '500',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '🎮',
        logoText: 'NVIDIA',
        logoBg: 'bg-green-700',
      },
      {
        symbol: 'JPM',
        contract: 'JPMorgan Chase & Co',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '🏦',
        logoText: 'JPMorgan',
        logoBg: 'bg-blue-800',
      },
      {
        symbol: 'JNJ',
        contract: 'Johnson & Johnson',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '💊',
        logoText: 'J&J',
        logoBg: 'bg-red-500',
      },
      {
        symbol: 'KO',
        contract: 'The Coca-Cola Company',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '🥤',
        logoText: 'Coca-Cola',
        logoBg: 'bg-red-600',
      },
      {
        symbol: 'DIS',
        contract: 'The Walt Disney Company',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 16:30-23:00',
        logo: '🏰',
        logoText: 'Disney',
        logoBg: 'bg-blue-500',
      },
    ],
    'European Stocks': [
      {
        symbol: 'ASML',
        contract: 'ASML Holding NV',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '€0.02/share',
        minLot: '0.01',
        maxLot: '500',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: 'A',
        logoText: 'ASML',
        logoBg: 'bg-orange-600',
      },
      {
        symbol: 'SAP',
        contract: 'SAP SE',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '€0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: 'S',
        logoText: 'SAP',
        logoBg: 'bg-blue-600',
      },
      {
        symbol: 'NESN',
        contract: 'Nestlé SA',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: 'CHF0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: '🍫',
        logoText: 'Nestlé',
        logoBg: 'bg-brown-600',
      },
      {
        symbol: 'LVMH',
        contract: 'LVMH Moët Hennessy Louis Vuitton',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '€0.02/share',
        minLot: '0.01',
        maxLot: '500',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: '👜',
        logoText: 'LVMH',
        logoBg: 'bg-yellow-700',
      },
      {
        symbol: 'NOVO',
        contract: 'Novo Nordisk A/S',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: 'DKK0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 09:00-17:00',
        logo: '💉',
        logoText: 'Novo Nordisk',
        logoBg: 'bg-red-700',
      },
      {
        symbol: 'SHEL',
        contract: 'Shell plc',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '£0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 08:00-16:30',
        logo: '🐚',
        logoText: 'Shell',
        logoBg: 'bg-yellow-600',
      },
      {
        symbol: 'ASME',
        contract: 'ASOS plc',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '£0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 08:00-16:30',
        logo: '👕',
        logoText: 'ASOS',
        logoBg: 'bg-black',
      },
      {
        symbol: 'VOW3',
        contract: 'Volkswagen AG',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '€0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: '🚗',
        logoText: 'Volkswagen',
        logoBg: 'bg-blue-700',
      },
      {
        symbol: 'SIE',
        contract: 'Siemens AG',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '€0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: '⚙️',
        logoText: 'Siemens',
        logoBg: 'bg-cyan-700',
      },
      {
        symbol: 'OR',
        contract: "L'Oréal SA",
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '€0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 09:00-17:30',
        logo: '💄',
        logoText: "L'Oréal",
        logoBg: 'bg-pink-600',
      },
    ],
    'Asian Stocks': [
      {
        symbol: 'TSM',
        contract: 'Taiwan Semiconductor Manufacturing',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 02:30-09:00',
        logo: '🔬',
        logoText: 'TSMC',
        logoBg: 'bg-blue-800',
      },
      {
        symbol: 'BABA',
        contract: 'Alibaba Group Holding Limited',
        type: 'CFD',
        contractSize: '1',
        leverage: '10:1',
        commission: '$0.02/share',
        minLot: '0.01',
        maxLot: '500',
        tradingHours: 'Monday-Friday 02:30-09:00',
        logo: '🛒',
        logoText: 'Alibaba',
        logoBg: 'bg-orange-700',
      },
      {
        symbol: 'TCEHY',
        contract: 'Tencent Holdings Limited',
        type: 'CFD',
        contractSize: '1',
        leverage: '10:1',
        commission: 'HK$0.02/share',
        minLot: '0.01',
        maxLot: '500',
        tradingHours: 'Monday-Friday 02:30-05:00, 06:00-09:00',
        logo: '🎮',
        logoText: 'Tencent',
        logoBg: 'bg-green-800',
      },
      {
        symbol: '7203',
        contract: 'Toyota Motor Corporation',
        type: 'CFD',
        contractSize: '100',
        leverage: '20:1',
        commission: '¥2/share',
        minLot: '1',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 01:00-03:00, 05:30-07:00',
        logo: '🚙',
        logoText: 'Toyota',
        logoBg: 'bg-red-800',
      },
      {
        symbol: '9984',
        contract: 'SoftBank Group Corp',
        type: 'CFD',
        contractSize: '100',
        leverage: '20:1',
        commission: '¥2/share',
        minLot: '1',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 01:00-03:00, 05:30-07:00',
        logo: '📱',
        logoText: 'SoftBank',
        logoBg: 'bg-yellow-800',
      },
      {
        symbol: '6758',
        contract: 'Sony Group Corporation',
        type: 'CFD',
        contractSize: '100',
        leverage: '20:1',
        commission: '¥2/share',
        minLot: '1',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 01:00-03:00, 05:30-07:00',
        logo: '🎵',
        logoText: 'Sony',
        logoBg: 'bg-gray-800',
      },
      {
        symbol: '005930',
        contract: 'Samsung Electronics Co Ltd',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '₩20/share',
        minLot: '1',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 01:00-07:30',
        logo: '📱',
        logoText: 'Samsung',
        logoBg: 'bg-blue-900',
      },
      {
        symbol: '2330',
        contract: 'Taiwan Semiconductor Manufacturing Co',
        type: 'CFD',
        contractSize: '1000',
        leverage: '20:1',
        commission: 'NT$0.02/share',
        minLot: '0.001',
        maxLot: '100',
        tradingHours: 'Monday-Friday 02:00-05:30',
        logo: '💻',
        logoText: 'TSM',
        logoBg: 'bg-purple-800',
      },
      {
        symbol: '1398',
        contract: 'Industrial and Commercial Bank of China',
        type: 'CFD',
        contractSize: '1000',
        leverage: '20:1',
        commission: 'HK$0.02/share',
        minLot: '0.001',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 02:30-05:00, 06:00-09:00',
        logo: '🏛️',
        logoText: 'ICBC',
        logoBg: 'bg-red-900',
      },
      {
        symbol: 'TCS',
        contract: 'Tata Consultancy Services Limited',
        type: 'CFD',
        contractSize: '1',
        leverage: '20:1',
        commission: '₹2/share',
        minLot: '1',
        maxLot: '1000',
        tradingHours: 'Monday-Friday 04:45-11:00',
        logo: '💼',
        logoText: 'TCS',
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
            Trade <span className="text-cyan-400">Share CFDs</span> Globally
          </motion.h2>

          {/* Tabs */}
          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
              {(['US Stocks', 'European Stocks', 'Asian Stocks'] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
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
                      Symbol
                    </th>
                    <th className="px-3 py-3 text-left text-gray-300 font-medium">
                      Contract
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Type
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Contract Size
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Leverage
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Commission
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Min Lot
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Max Lot
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Trading Hours
                      <br />
                      (GMT +3 time)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shareData[activeTab].map((share, index) => (
                    <motion.tr
                      key={share.symbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-6 rounded-sm ${share.logoBg} flex items-center justify-center mr-3 shadow-md border border-slate-600`}
                          >
                            <span className="text-white text-xs font-bold">
                              {share.logo}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-bold text-xs">
                              {share.symbol}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {share.logoText}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-300 text-xs max-w-xs">
                        <div className="truncate">{share.contract}</div>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {share.type}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {share.contractSize}
                      </td>
                      <td className="px-3 py-3 text-center text-cyan-400 font-semibold text-xs">
                        {share.leverage}
                      </td>
                      <td className="px-3 py-3 text-center text-yellow-400 text-xs">
                        {share.commission}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {share.minLot}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {share.maxLot}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs leading-tight">
                        {share.tradingHours}
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
