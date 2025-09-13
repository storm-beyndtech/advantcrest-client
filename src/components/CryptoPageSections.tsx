import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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

export const CryptoHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://xtb.scdn5.secure.raxcdn.com/header_classic_module/0103/55/752bbef4-342c-41e8-9d3d-b5610abe292a/crypto-hero-kv-retina.png')",
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
          Go long and short with 1:2 leverage on dozens of crypto CFDs.
        </motion.p>
        <motion.h1
          className="text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Trade CFDs on Bitcoin, Ethereum, Tether and many more cryptocurrencies
        </motion.h1>
      </div>
    </section>
  );
};

interface CryptoData {
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

export const CryptoCFDsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'Major Coins' | 'Altcoins' | 'DeFi Tokens'
  >('Major Coins');
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

  const cryptoData: Record<string, CryptoData[]> = {
    'Major Coins': [
      {
        platformSymbol: 'BTCUSD',
        type: 'Bitcoin CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 BTC',
        usdValue: 'USD$0.01',
        tick: '67850.12 → 67850.13',
        margin: '10% x (0.01 BTC x market price)',
        currency: 'USD',
        maxLeverage: '10:1',
        minVolume: '0.01',
        maxVolume: '100',
        icon: '₿',
        iconBg: 'bg-orange-500',
      },
      {
        platformSymbol: 'ETHUSD',
        type: 'Ethereum CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 ETH',
        usdValue: 'USD$0.01',
        tick: '3570.45 → 3570.46',
        margin: '10% x (0.01 ETH x market price)',
        currency: 'USD',
        maxLeverage: '10:1',
        minVolume: '0.01',
        maxVolume: '100',
        icon: 'Ξ',
        iconBg: 'bg-blue-600',
      },
      {
        platformSymbol: 'BNBUSD',
        type: 'Binance Coin CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 BNB',
        usdValue: 'USD$0.01',
        tick: '245.67 → 245.68',
        margin: '15% x (0.01 BNB x market price)',
        currency: 'USD',
        maxLeverage: '6.67:1',
        minVolume: '0.01',
        maxVolume: '50',
        icon: 'B',
        iconBg: 'bg-yellow-500',
      },
      {
        platformSymbol: 'ADAUSD',
        type: 'Cardano CFD',
        market: 'Crypto',
        size: '0.1 = 0.1 ADA',
        usdValue: 'USD$0.001',
        tick: '0.452 → 0.453',
        margin: '15% x (0.1 ADA x market price)',
        currency: 'USD',
        maxLeverage: '6.67:1',
        minVolume: '0.1',
        maxVolume: '1000',
        icon: '₳',
        iconBg: 'bg-blue-700',
      },
      {
        platformSymbol: 'SOLUSD',
        type: 'Solana CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 SOL',
        usdValue: 'USD$0.01',
        tick: '142.80 → 142.81',
        margin: '15% x (0.01 SOL x market price)',
        currency: 'USD',
        maxLeverage: '6.67:1',
        minVolume: '0.01',
        maxVolume: '100',
        icon: '◎',
        iconBg: 'bg-purple-600',
      },
      {
        platformSymbol: 'XRPUSD',
        type: 'Ripple CFD',
        market: 'Crypto',
        size: '1 = 1 XRP',
        usdValue: 'USD$0.001',
        tick: '0.6234 → 0.6235',
        margin: '15% x (1 XRP x market price)',
        currency: 'USD',
        maxLeverage: '6.67:1',
        minVolume: '1',
        maxVolume: '10000',
        icon: '⚡',
        iconBg: 'bg-gray-600',
      },
    ],
    Altcoins: [
      {
        platformSymbol: 'DOTUSD',
        type: 'Polkadot CFD',
        market: 'Crypto',
        size: '0.1 = 0.1 DOT',
        usdValue: 'USD$0.001',
        tick: '6.789 → 6.790',
        margin: '20% x (0.1 DOT x market price)',
        currency: 'USD',
        maxLeverage: '5:1',
        minVolume: '0.1',
        maxVolume: '500',
        icon: '●',
        iconBg: 'bg-pink-600',
      },
      {
        platformSymbol: 'LINKUSD',
        type: 'Chainlink CFD',
        market: 'Crypto',
        size: '0.1 = 0.1 LINK',
        usdValue: 'USD$0.001',
        tick: '14.567 → 14.568',
        margin: '20% x (0.1 LINK x market price)',
        currency: 'USD',
        maxLeverage: '5:1',
        minVolume: '0.1',
        maxVolume: '500',
        icon: '🔗',
        iconBg: 'bg-blue-500',
      },
      {
        platformSymbol: 'MATICUSD',
        type: 'Polygon CFD',
        market: 'Crypto',
        size: '1 = 1 MATIC',
        usdValue: 'USD$0.001',
        tick: '0.8912 → 0.8913',
        margin: '20% x (1 MATIC x market price)',
        currency: 'USD',
        maxLeverage: '5:1',
        minVolume: '1',
        maxVolume: '5000',
        icon: '◈',
        iconBg: 'bg-purple-700',
      },
      {
        platformSymbol: 'LTCUSD',
        type: 'Litecoin CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 LTC',
        usdValue: 'USD$0.01',
        tick: '89.45 → 89.46',
        margin: '15% x (0.01 LTC x market price)',
        currency: 'USD',
        maxLeverage: '6.67:1',
        minVolume: '0.01',
        maxVolume: '100',
        icon: 'Ł',
        iconBg: 'bg-gray-500',
      },
      {
        platformSymbol: 'AVAXUSD',
        type: 'Avalanche CFD',
        market: 'Crypto',
        size: '0.1 = 0.1 AVAX',
        usdValue: 'USD$0.001',
        tick: '34.567 → 34.568',
        margin: '20% x (0.1 AVAX x market price)',
        currency: 'USD',
        maxLeverage: '5:1',
        minVolume: '0.1',
        maxVolume: '500',
        icon: '▲',
        iconBg: 'bg-red-600',
      },
    ],
    'DeFi Tokens': [
      {
        platformSymbol: 'UNIUSD',
        type: 'Uniswap CFD',
        market: 'Crypto',
        size: '0.1 = 0.1 UNI',
        usdValue: 'USD$0.001',
        tick: '7.123 → 7.124',
        margin: '25% x (0.1 UNI x market price)',
        currency: 'USD',
        maxLeverage: '4:1',
        minVolume: '0.1',
        maxVolume: '200',
        icon: '🦄',
        iconBg: 'bg-pink-500',
      },
      {
        platformSymbol: 'AAVEUSD',
        type: 'Aave CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 AAVE',
        usdValue: 'USD$0.01',
        tick: '89.45 → 89.46',
        margin: '25% x (0.01 AAVE x market price)',
        currency: 'USD',
        maxLeverage: '4:1',
        minVolume: '0.01',
        maxVolume: '50',
        icon: '👻',
        iconBg: 'bg-indigo-600',
      },
      {
        platformSymbol: 'COMPUSD',
        type: 'Compound CFD',
        market: 'Crypto',
        size: '0.01 = 0.01 COMP',
        usdValue: 'USD$0.01',
        tick: '54.321 → 54.322',
        margin: '25% x (0.01 COMP x market price)',
        currency: 'USD',
        maxLeverage: '4:1',
        minVolume: '0.01',
        maxVolume: '50',
        icon: '🏛️',
        iconBg: 'bg-green-600',
      },
      {
        platformSymbol: 'MKRUSD',
        type: 'Maker CFD',
        market: 'Crypto',
        size: '0.001 = 0.001 MKR',
        usdValue: 'USD$0.001',
        tick: '1234.56 → 1234.57',
        margin: '25% x (0.001 MKR x market price)',
        currency: 'USD',
        maxLeverage: '4:1',
        minVolume: '0.001',
        maxVolume: '10',
        icon: 'Ⓜ️',
        iconBg: 'bg-teal-600',
      },
      {
        platformSymbol: 'SNXUSD',
        type: 'Synthetix CFD',
        market: 'Crypto',
        size: '0.1 = 0.1 SNX',
        usdValue: 'USD$0.001',
        tick: '2.456 → 2.457',
        margin: '25% x (0.1 SNX x market price)',
        currency: 'USD',
        maxLeverage: '4:1',
        minVolume: '0.1',
        maxVolume: '1000',
        icon: '⚗️',
        iconBg: 'bg-cyan-600',
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
            Trade in 40+ Crypto CFDs
          </motion.h2>

          {/* Tabs */}
          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
              {(['Major Coins', 'Altcoins', 'DeFi Tokens'] as const).map(
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
            className="bg-slate-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/30 max-w-7xl mx-auto shadow-2xl"
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
                      Margin Required
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
                  {cryptoData[activeTab].map((crypto, index) => (
                    <motion.tr
                      key={crypto.platformSymbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center">
                          <div
                            className={`w-6 h-6 rounded-md ${crypto.iconBg} flex items-center justify-center mr-2 shadow-md`}
                          >
                            <span className="text-white text-xs font-bold">
                              {crypto.icon}
                            </span>
                          </div>
                          <div className="text-white font-bold text-xs">
                            {crypto.platformSymbol}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-300 text-xs">
                        {crypto.type}
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {crypto.market}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {crypto.size}
                      </td>
                      <td className="px-3 py-3 text-center text-cyan-400 text-xs">
                        {crypto.usdValue}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs">
                        {crypto.tick}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs leading-tight">
                        {crypto.margin}
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {crypto.currency}
                      </td>
                      <td className="px-3 py-3 text-center text-green-400 font-semibold text-xs">
                        {crypto.maxLeverage}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {crypto.minVolume}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {crypto.maxVolume}
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
