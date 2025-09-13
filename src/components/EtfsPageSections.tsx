import React from 'react';
import { motion, useInView } from 'framer-motion';
import etfsBg from '../assets/etfs/etfs-banner-bg.webp';

interface ETFData {
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

export const ETFsTableSection: React.FC = () => {
  const ref = React.useRef(null);
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

  const etfData: ETFData[] = [
    {
      symbol: 'BLOK',
      contract: 'Amplify Transformational Data Sharing ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '📊',
      logoText: 'BLOK',
      logoBg: 'bg-cyan-600',
    },
    {
      symbol: 'BLON',
      contract: 'Siren ETF Trust Siren Nasdaq NexGen Economy ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '🌱',
      logoText: 'BLON',
      logoBg: 'bg-green-600',
    },
    {
      symbol: 'BITQ',
      contract: 'Bitwise Crypto Industry Innovators ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'B',
      logoText: 'Bitwise',
      logoBg: 'bg-purple-600',
    },
    {
      symbol: 'BKCH',
      contract: 'Global X Blockchain ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '✕',
      logoText: 'BKCH',
      logoBg: 'bg-orange-600',
    },
    {
      symbol: 'GOAU',
      contract: 'US Global GO Gold and Precious Metals ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '🏛️',
      logoText: 'GOAU',
      logoBg: 'bg-gray-600',
    },
    {
      symbol: 'JNUG',
      contract: 'Direxion Jr Miner Bull 3X',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'D',
      logoText: 'JNUG',
      logoBg: 'bg-blue-600',
    },
    {
      symbol: 'GLDM',
      contract: 'SPDR Gold MiniShares Trust',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'i',
      logoText: 'iShares',
      logoBg: 'bg-slate-700',
    },
    {
      symbol: 'SGDJ',
      contract: 'Sprott Junior Gold Miners ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'S',
      logoText: 'Sprott',
      logoBg: 'bg-cyan-700',
    },
    {
      symbol: 'SGDM',
      contract: 'Sprott Gold Miners ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'S',
      logoText: 'Sprott',
      logoBg: 'bg-yellow-700',
    },
    {
      symbol: 'SLVP',
      contract: 'iShares MSCI Global Silver Miners ETF',
      type: 'Real',
      contractSize: '1',
      leverage: '1:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'i',
      logoText: 'iShares',
      logoBg: 'bg-slate-600',
    },
    {
      symbol: 'XOP',
      contract: 'SPDR S&P Oil and Gas Exploration and Production ETF',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'S',
      logoText: 'SPDR',
      logoBg: 'bg-green-700',
    },
    {
      symbol: 'OIH',
      contract: 'VanEck Oil Services ETF',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'V',
      logoText: 'VanEck',
      logoBg: 'bg-blue-700',
    },
    {
      symbol: 'USL',
      contract: 'United States Oil Fund LP',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'U',
      logoText: 'USL',
      logoBg: 'bg-gray-700',
    },
    {
      symbol: 'BNO',
      contract: 'United States Brent Oil Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'B',
      logoText: 'BNO',
      logoBg: 'bg-blue-800',
    },
    {
      symbol: 'USO',
      contract: 'United States 12 Month Oil Fund LP',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'U',
      logoText: 'USOF',
      logoBg: 'bg-red-700',
    },
    {
      symbol: 'XLE',
      contract: 'Energy Select Sector SPDR Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'i',
      logoText: 'iShares',
      logoBg: 'bg-slate-800',
    },
    {
      symbol: 'ICLN',
      contract: 'First Trust NASDAQ Clean Edge Green Energy Index Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'F',
      logoText: 'ICLN',
      logoBg: 'bg-orange-700',
    },
    {
      symbol: 'TAN',
      contract: 'Invesco Solar ETF',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '☀️',
      logoText: 'TAN',
      logoBg: 'bg-yellow-600',
    },
    {
      symbol: 'GRID',
      contract:
        'First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'F',
      logoText: 'GRID',
      logoBg: 'bg-orange-800',
    },
    {
      symbol: 'DBC',
      contract: 'Invesco DB Commodity Index Tracking Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '📈',
      logoText: 'DBC',
      logoBg: 'bg-blue-900',
    },
    {
      symbol: 'GSG',
      contract: 'iShares S&P GSCI Commodity-Indexed Trust',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'i',
      logoText: 'iShares',
      logoBg: 'bg-slate-900',
    },
    {
      symbol: 'DJP',
      contract: 'Invesco DB DJ-UBS Commodity Index Tracking Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: '📊',
      logoText: 'DJP',
      logoBg: 'bg-indigo-800',
    },
    {
      symbol: 'VGT',
      contract: 'Vanguard Information Technology ETF',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'V',
      logoText: 'Vanguard',
      logoBg: 'bg-red-800',
    },
    {
      symbol: 'XLK',
      contract: 'Technology Select Sector SPDR Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'S',
      logoText: 'SPDR',
      logoBg: 'bg-green-800',
    },
    {
      symbol: 'IYW',
      contract: 'iShares U.S. Technology ETF',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'i',
      logoText: 'iShares',
      logoBg: 'bg-purple-800',
    },
    {
      symbol: 'FDN',
      contract: 'First Trust Dow Jones Internet Index Fund',
      type: 'CFD',
      contractSize: '1',
      leverage: '33:1',
      commission: '$0',
      minLot: '1',
      maxLot: '300',
      tradingHours: 'Monday-Friday 16:30-23:00',
      logo: 'F',
      logoText: 'FDN',
      logoBg: 'bg-orange-900',
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
            Access 50+ of the World's Biggest{' '}
            <span className="text-gray-400">ETFs!</span>
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
                  {etfData.map((etf, index) => (
                    <motion.tr
                      key={etf.symbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-6 rounded-sm ${etf.logoBg} flex items-center justify-center mr-3 shadow-md border border-slate-600`}
                          >
                            <span className="text-white text-xs font-bold">
                              {etf.logo}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-bold text-xs">
                              {etf.symbol}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {etf.logoText}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-300 text-xs max-w-xs">
                        <div className="truncate">{etf.contract}</div>
                      </td>
                      <td className="px-3 py-3 text-center text-white text-xs">
                        {etf.type}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {etf.contractSize}
                      </td>
                      <td className="px-3 py-3 text-center text-cyan-400 font-semibold text-xs">
                        {etf.leverage}
                      </td>
                      <td className="px-3 py-3 text-center text-green-400 text-xs">
                        {etf.commission}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {etf.minLot}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-mono text-xs">
                        {etf.maxLot}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-300 text-xs leading-tight">
                        {etf.tradingHours}
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

export const StartTradingSection: React.FC = () => {
  const ref = React.useRef(null);
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
            Diversify by Investing in Global ETFs
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed text-lg"
            variants={fadeInUp}
          >
            Enjoy access to 50+ Exchange Traded Funds from the world’s biggest
            providers, and gain exposure to a variety of different instruments
            and market sectors by trading a single product that contains a
            basket of assets on MT5 and AdvantCrest!
          </motion.p>
          <motion.p
            className="text-gray-500 mb-10 text-lg font-medium"
            variants={fadeInUp}
          >
            So, if you want to invest in markets such as bonds, technology,
            sustainability, blockchain, energy, gold, and more, now is the time
            to start trading ETFs with AdvantCrest!
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

export const EtfsHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: etfsBg,
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
          ETfs
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Access 50+ of the most popular Exchange Traded Funds!
        </motion.p>
      </div>
    </section>
  );
};
