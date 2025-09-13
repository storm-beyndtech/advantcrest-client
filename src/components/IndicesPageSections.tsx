import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import indicesBg from '../assets/indices/indices-banner-bg.webp';

export const IndicesChart = () => {
  return (
    <div className="relative w-full bg-transparent flex flex-col items-center justify-center p-8">
      {/* Header Text */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Trade the DJIA's next big
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
          <div className="absolute left-[34%] top-[16%]">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
            <div className="text-xs text-red-400 font-medium whitespace-nowrap">
              <div className="text-red-300 text-[10px] mb-1">
                Covid Pandemic Trigger &
              </div>
              <div>Market Plumet</div>
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
            Start Trading Indices
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed text-lg"
            variants={fadeInUp}
          >
            Access the most liquid Indices in the world through our wide range
            of Index CFDs. Through our powerful MT4 and PRO Trader platforms,
            you can take advantage of countless trade opportunities across the
            globe, via 15 of the world's largest Indices markets such as the
            SP500, FTSE, DAX, NIKKEI, HANG SENG and more.
          </motion.p>
          <motion.p
            className="text-gray-500 mb-10 text-lg font-medium"
            variants={fadeInUp}
          >
            Start trading the world's major Indices today!
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

export const IndicesHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: indicesBg,
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
          Indices
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Leverage fast and easy access to global indices
        </motion.p>
      </div>
    </section>
  );
};

interface IndexData {
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

export const IndicesTableSection: React.FC = () => {
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

  const indexData: IndexData[] = [
    {
      symbol: 'US30',
      contract: 'Dow Jones Industrial Average',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: 'DJ',
      logoText: 'Dow Jones',
      logoBg: 'bg-blue-600',
    },
    {
      symbol: 'US500',
      contract: 'S&P 500 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: 'S&P',
      logoText: 'S&P 500',
      logoBg: 'bg-red-600',
    },
    {
      symbol: 'US100',
      contract: 'NASDAQ 100 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: 'NDX',
      logoText: 'NASDAQ',
      logoBg: 'bg-green-600',
    },
    {
      symbol: 'US2000',
      contract: 'Russell 2000 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: 'RTY',
      logoText: 'Russell',
      logoBg: 'bg-purple-600',
    },
    {
      symbol: 'UK100',
      contract: 'FTSE 100 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇬🇧',
      logoText: 'FTSE',
      logoBg: 'bg-red-700',
    },
    {
      symbol: 'GER40',
      contract: 'DAX 40 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇩🇪',
      logoText: 'DAX',
      logoBg: 'bg-yellow-600',
    },
    {
      symbol: 'FRA40',
      contract: 'CAC 40 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇫🇷',
      logoText: 'CAC',
      logoBg: 'bg-blue-700',
    },
    {
      symbol: 'SPA35',
      contract: 'IBEX 35 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇪🇸',
      logoText: 'IBEX',
      logoBg: 'bg-orange-600',
    },
    {
      symbol: 'ITA40',
      contract: 'FTSE MIB Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇮🇹',
      logoText: 'FTSE MIB',
      logoBg: 'bg-green-700',
    },
    {
      symbol: 'NED25',
      contract: 'AEX Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇳🇱',
      logoText: 'AEX',
      logoBg: 'bg-orange-700',
    },
    {
      symbol: 'SWI20',
      contract: 'SMI Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇨🇭',
      logoText: 'SMI',
      logoBg: 'bg-red-800',
    },
    {
      symbol: 'EU50',
      contract: 'Euro Stoxx 50 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇪🇺',
      logoText: 'Euro Stoxx',
      logoBg: 'bg-blue-800',
    },
    {
      symbol: 'JPN225',
      contract: 'Nikkei 225 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '🇯🇵',
      logoText: 'Nikkei',
      logoBg: 'bg-red-900',
    },
    {
      symbol: 'HK50',
      contract: 'Hang Seng Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 03:15-10:00, 11:00-18:00',
      logo: '🇭🇰',
      logoText: 'Hang Seng',
      logoBg: 'bg-purple-700',
    },
    {
      symbol: 'AUS200',
      contract: 'ASX 200 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 00:50-07:30, 08:10-22:00',
      logo: '🇦🇺',
      logoText: 'ASX',
      logoBg: 'bg-green-800',
    },
    {
      symbol: 'CHN50',
      contract: 'FTSE China A50 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 03:00-04:30, 05:00-10:15',
      logo: '🇨🇳',
      logoText: 'China A50',
      logoBg: 'bg-red-700',
    },
    {
      symbol: 'IND50',
      contract: 'NIFTY 50 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 04:45-11:00',
      logo: '🇮🇳',
      logoText: 'NIFTY',
      logoBg: 'bg-orange-800',
    },
    {
      symbol: 'RSA40',
      contract: 'FTSE/JSE Top 40 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 09:00-17:00',
      logo: '🇿🇦',
      logoText: 'JSE Top 40',
      logoBg: 'bg-yellow-800',
    },
    {
      symbol: 'BRA50',
      contract: 'Bovespa Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 14:00-21:00',
      logo: '🇧🇷',
      logoText: 'Bovespa',
      logoBg: 'bg-green-900',
    },
    {
      symbol: 'MEX35',
      contract: 'IPC Mexico Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 15:30-22:00',
      logo: '🇲🇽',
      logoText: 'IPC',
      logoBg: 'bg-red-600',
    },
    {
      symbol: 'VIX',
      contract: 'CBOE Volatility Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '50:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '100',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: 'VX',
      logoText: 'VIX',
      logoBg: 'bg-purple-800',
    },
    {
      symbol: 'DXY',
      contract: 'US Dollar Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 01:00-23:00',
      logo: '💵',
      logoText: 'DXY',
      logoBg: 'bg-green-600',
    },
    {
      symbol: 'CAN60',
      contract: 'S&P/TSX 60 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 15:30-22:00',
      logo: '🇨🇦',
      logoText: 'TSX',
      logoBg: 'bg-red-500',
    },
    {
      symbol: 'NOR25',
      contract: 'OBX Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 09:00-17:25',
      logo: '🇳🇴',
      logoText: 'OBX',
      logoBg: 'bg-blue-500',
    },
    {
      symbol: 'SWE30',
      contract: 'OMX Stockholm 30 Index',
      type: 'CFD',
      contractSize: '1',
      leverage: '100:1',
      commission: '$0',
      minLot: '0.01',
      maxLot: '500',
      tradingHours: 'Monday-Friday 09:00-17:25',
      logo: '🇸🇪',
      logoText: 'OMX30',
      logoBg: 'bg-yellow-500',
    },
  ];

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
            Trade Global <span className="text-cyan-400">Stock Indices</span>
          </motion.h2>

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
                  {indexData.map((index, idx) => (
                    <motion.tr
                      key={index.symbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.02 }}
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-6 rounded-sm ${index.logoBg} flex items-center justify-center mr-3 shadow-md border border-slate-600`}
                          >
                            <span className="text-white text-xs font-bold">
                              {index.logo}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-bold text-xs">
                              {index.symbol}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {index.logoText}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-300 text-xs max-w-xs">
                        <div className="truncate">{index.contract}</div>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {index.type}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {index.contractSize}
                      </td>
                      <td className="px-3 py-3 text-center text-cyan-400 font-semibold text-xs">
                        {index.leverage}
                      </td>
                      <td className="px-3 py-3 text-center text-green-400 text-xs">
                        {index.commission}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {index.minLot}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {index.maxLot}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs leading-tight">
                        {index.tradingHours}
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
