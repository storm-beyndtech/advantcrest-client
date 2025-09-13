import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BondData {
  symbol: string;
  description: string;
  exchange: string;
  contractSize: string;
  margin: string;
  minLot: string;
  maxLot: string;
  tradingHours: string;
  icon: string;
  iconBg: string;
}

export const BondMarketsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const bondData: BondData[] = [
    {
      symbol: "FGBL",
      description: "Euro - Bund Futures",
      exchange: "EUREX",
      contractSize: "1",
      margin: "1.0%",
      minLot: "1",
      maxLot: "500",
      tradingHours: "Monday-Friday 03:15-23:00",
      icon: "📈",
      iconBg: "bg-blue-600"
    },
    {
      symbol: "FGBM",
      description: "Euro - BOBL Futures",
      exchange: "EUREX", 
      contractSize: "1",
      margin: "1.0%",
      minLot: "1",
      maxLot: "500",
      tradingHours: "Monday-Friday 03:15-23:00",
      icon: "📊",
      iconBg: "bg-green-600"
    },
    {
      symbol: "FGBX",
      description: "Euro - BUXL Futures",
      exchange: "EUREX",
      contractSize: "1", 
      margin: "1.0%",
      minLot: "1",
      maxLot: "500",
      tradingHours: "Monday-Friday 03:15-23:00",
      icon: "📉",
      iconBg: "bg-purple-600"
    },
    {
      symbol: "FGBS",
      description: "Euro - Schatz Futures",
      exchange: "EUREX",
      contractSize: "1",
      margin: "1.0%", 
      minLot: "1",
      maxLot: "500",
      tradingHours: "Monday-Friday 03:15-23:00",
      icon: "📋",
      iconBg: "bg-orange-600"
    },
    {
      symbol: "FLG",
      description: "UK Long Gilt Futures",
      exchange: "Euronext",
      contractSize: "1",
      margin: "1.0%",
      minLot: "1", 
      maxLot: "500",
      tradingHours: "Monday-Friday 10:00-20:00",
      icon: "🇬🇧",
      iconBg: "bg-red-600"
    },
    {
      symbol: "FEI",
      description: "EURIBOR Futures",
      exchange: "ICE",
      contractSize: "1",
      margin: "1.0%",
      minLot: "1",
      maxLot: "500", 
      tradingHours: "Monday-Friday 03:00-23:00",
      icon: "💶",
      iconBg: "bg-indigo-600"
    },
    {
      symbol: "TY",
      description: "US 10 YR T-Note Futures Denominated",
      exchange: "CBOT",
      contractSize: "1",
      margin: "1.0%",
      minLot: "1",
      maxLot: "500",
      tradingHours: "Monday-Friday 03:00-23:00", 
      icon: "🇺🇸",
      iconBg: "bg-blue-700"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-2 tracking-tight"
            variants={fadeInUp}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Access 7 of the World's Most
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
            variants={fadeInUp}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Popular Bond Markets
          </motion.h3>

          {/* Table */}
          <motion.div
            className="bg-slate-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 max-w-7xl mx-auto shadow-2xl"
            variants={fadeInUp}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Symbol</th>
                    <th className="px-4 py-3 text-left text-gray-300 font-medium text-sm">Description</th>
                    <th className="px-4 py-3 text-center text-gray-300 font-medium text-sm">Exchange</th>
                    <th className="px-4 py-3 text-center text-gray-300 font-medium text-sm">Contract Size</th>
                    <th className="px-4 py-3 text-center text-gray-300 font-medium text-sm">Margin %</th>
                    <th className="px-4 py-3 text-center text-gray-300 font-medium text-sm">Min Lot</th>
                    <th className="px-4 py-3 text-center text-gray-300 font-medium text-sm">Max Lot</th>
                    <th className="px-4 py-3 text-center text-gray-300 font-medium text-sm">Trading Hours<br/>(GMT +3 time)</th>
                  </tr>
                </thead>
                <tbody>
                  {bondData.map((bond, index) => (
                    <motion.tr
                      key={bond.symbol}
                      className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-md ${bond.iconBg} flex items-center justify-center mr-3 shadow-md`}>
                            <span className="text-white text-sm font-bold">
                              {bond.icon}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">{bond.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-300 text-sm">{bond.description}</td>
                      <td className="px-4 py-3 text-center text-white font-medium text-sm">{bond.exchange}</td>
                      <td className="px-4 py-3 text-center text-white font-mono text-sm">{bond.contractSize}</td>
                      <td className="px-4 py-3 text-center text-cyan-400 font-medium text-sm">{bond.margin}</td>
                      <td className="px-4 py-3 text-center text-white font-mono text-sm">{bond.minLot}</td>
                      <td className="px-4 py-3 text-center text-white font-mono text-sm">{bond.maxLot}</td>
                      <td className="px-4 py-3 text-center text-gray-300 text-xs leading-tight">{bond.tradingHours}</td>
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
            Diversify by investing in Treasuries and Bonds
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6 leading-relaxed text-lg"
            variants={fadeInUp}
          >
Now you can access 7 popular new derivatives of bonds issued by some of the world’s leading economies, and gain exposure to one of the largest market sectors, whether trading them independently or as a hedge to currency trends on the powerful MT4, MT5 and PRO Trader platforms!
          </motion.p>
          <motion.p
            className="text-gray-500 mb-10 text-lg font-medium"
            variants={fadeInUp}
          >
            So, if you want to take advantage of macroeconomic trends and government-related events, now is the perfect time to start trading bonds and treasuries with AdvantCrest.
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