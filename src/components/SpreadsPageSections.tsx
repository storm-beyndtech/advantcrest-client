import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import spreadsBg from '../assets/spreads/spreads-and-commissions-banner-bg.webp';

export const SpreadsHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-150 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: spreadsBg,
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
          Spreads
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Start trading from 0.0 pips
        </motion.p>
      </div>
    </section>
  );
};

interface SpreadData {
  instrument: string;
  description: string;
  minSpread: string;
  avgSpread: string;
  commission: string;
  swapLong: string;
  swapShort: string;
  logo: string;
  logoText: string;
  logoBg: string;
}

const SpreadsTableSection: React.FC = () => {
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

  const spreadData: Record<string, SpreadData[]> = {
    Forex: [
      {
        instrument: 'EURUSD',
        description: 'Euro vs US Dollar',
        minSpread: '0.6',
        avgSpread: '0.8',
        commission: '$0',
        swapLong: '-0.58',
        swapShort: '-0.12',
        logo: '🇪🇺🇺🇸',
        logoText: 'EUR/USD',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'GBPUSD',
        description: 'British Pound vs US Dollar',
        minSpread: '0.8',
        avgSpread: '1.2',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '+0.23',
        logo: '🇬🇧🇺🇸',
        logoText: 'GBP/USD',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'USDJPY',
        description: 'US Dollar vs Japanese Yen',
        minSpread: '0.5',
        avgSpread: '0.7',
        commission: '$0',
        swapLong: '+0.12',
        swapShort: '-0.45',
        logo: '🇺🇸🇯🇵',
        logoText: 'USD/JPY',
        logoBg: 'bg-green-600',
      },
      {
        instrument: 'USDCHF',
        description: 'US Dollar vs Swiss Franc',
        minSpread: '0.7',
        avgSpread: '1.0',
        commission: '$0',
        swapLong: '+0.34',
        swapShort: '-0.78',
        logo: '🇺🇸🇨🇭',
        logoText: 'USD/CHF',
        logoBg: 'bg-gray-600',
      },
      {
        instrument: 'AUDUSD',
        description: 'Australian Dollar vs US Dollar',
        minSpread: '0.8',
        avgSpread: '1.1',
        commission: '$0',
        swapLong: '-0.23',
        swapShort: '-0.34',
        logo: '🇦🇺🇺🇸',
        logoText: 'AUD/USD',
        logoBg: 'bg-yellow-600',
      },
      {
        instrument: 'USDCAD',
        description: 'US Dollar vs Canadian Dollar',
        minSpread: '1.0',
        avgSpread: '1.4',
        commission: '$0',
        swapLong: '+0.45',
        swapShort: '-0.89',
        logo: '🇺🇸🇨🇦',
        logoText: 'USD/CAD',
        logoBg: 'bg-red-700',
      },
      {
        instrument: 'NZDUSD',
        description: 'New Zealand Dollar vs US Dollar',
        minSpread: '1.2',
        avgSpread: '1.8',
        commission: '$0',
        swapLong: '-0.34',
        swapShort: '-0.12',
        logo: '🇳🇿🇺🇸',
        logoText: 'NZD/USD',
        logoBg: 'bg-green-700',
      },
      {
        instrument: 'EURGBP',
        description: 'Euro vs British Pound',
        minSpread: '0.9',
        avgSpread: '1.3',
        commission: '$0',
        swapLong: '-0.45',
        swapShort: '+0.12',
        logo: '🇪🇺🇬🇧',
        logoText: 'EUR/GBP',
        logoBg: 'bg-purple-600',
      },
      {
        instrument: 'EURJPY',
        description: 'Euro vs Japanese Yen',
        minSpread: '1.1',
        avgSpread: '1.6',
        commission: '$0',
        swapLong: '-0.67',
        swapShort: '+0.23',
        logo: '🇪🇺🇯🇵',
        logoText: 'EUR/JPY',
        logoBg: 'bg-indigo-600',
      },
      {
        instrument: 'GBPJPY',
        description: 'British Pound vs Japanese Yen',
        minSpread: '1.8',
        avgSpread: '2.5',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '+0.34',
        logo: '🇬🇧🇯🇵',
        logoText: 'GBP/JPY',
        logoBg: 'bg-red-800',
      },
      {
        instrument: 'CHFJPY',
        description: 'Swiss Franc vs Japanese Yen',
        minSpread: '1.5',
        avgSpread: '2.2',
        commission: '$0',
        swapLong: '-0.56',
        swapShort: '+0.18',
        logo: '🇨🇭🇯🇵',
        logoText: 'CHF/JPY',
        logoBg: 'bg-gray-700',
      },
      {
        instrument: 'AUDNZD',
        description: 'Australian Dollar vs New Zealand Dollar',
        minSpread: '2.0',
        avgSpread: '3.0',
        commission: '$0',
        swapLong: '-0.23',
        swapShort: '-0.45',
        logo: '🇦🇺🇳🇿',
        logoText: 'AUD/NZD',
        logoBg: 'bg-teal-600',
      },
      {
        instrument: 'CADCHF',
        description: 'Canadian Dollar vs Swiss Franc',
        minSpread: '2.2',
        avgSpread: '3.5',
        commission: '$0',
        swapLong: '-0.34',
        swapShort: '-0.67',
        logo: '🇨🇦🇨🇭',
        logoText: 'CAD/CHF',
        logoBg: 'bg-orange-700',
      },
      {
        instrument: 'EURAUD',
        description: 'Euro vs Australian Dollar',
        minSpread: '1.8',
        avgSpread: '2.8',
        commission: '$0',
        swapLong: '-0.78',
        swapShort: '+0.12',
        logo: '🇪🇺🇦🇺',
        logoText: 'EUR/AUD',
        logoBg: 'bg-cyan-600',
      },
      {
        instrument: 'GBPAUD',
        description: 'British Pound vs Australian Dollar',
        minSpread: '2.5',
        avgSpread: '3.8',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '+0.23',
        logo: '🇬🇧🇦🇺',
        logoText: 'GBP/AUD',
        logoBg: 'bg-pink-600',
      },
    ],
    Indices: [
      {
        instrument: 'US30',
        description: 'Dow Jones Industrial Average',
        minSpread: '2.0',
        avgSpread: '4.0',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '-0.67',
        logo: 'DJ',
        logoText: 'Dow Jones',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'US500',
        description: 'S&P 500 Index',
        minSpread: '0.4',
        avgSpread: '0.8',
        commission: '$0',
        swapLong: '-0.78',
        swapShort: '-0.56',
        logo: 'S&P',
        logoText: 'S&P 500',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'US100',
        description: 'NASDAQ 100 Index',
        minSpread: '1.0',
        avgSpread: '2.0',
        commission: '$0',
        swapLong: '-0.93',
        swapShort: '-0.71',
        logo: 'NDX',
        logoText: 'NASDAQ',
        logoBg: 'bg-green-600',
      },
      {
        instrument: 'US2000',
        description: 'Russell 2000 Index',
        minSpread: '1.5',
        avgSpread: '3.0',
        commission: '$0',
        swapLong: '-0.67',
        swapShort: '-0.45',
        logo: 'RTY',
        logoText: 'Russell',
        logoBg: 'bg-purple-600',
      },
      {
        instrument: 'GER40',
        description: 'DAX 40 Index',
        minSpread: '1.2',
        avgSpread: '2.5',
        commission: '$0',
        swapLong: '-0.45',
        swapShort: '-0.23',
        logo: '🇩🇪',
        logoText: 'DAX',
        logoBg: 'bg-yellow-600',
      },
      {
        instrument: 'UK100',
        description: 'FTSE 100 Index',
        minSpread: '1.5',
        avgSpread: '3.0',
        commission: '$0',
        swapLong: '-0.34',
        swapShort: '-0.12',
        logo: '🇬🇧',
        logoText: 'FTSE',
        logoBg: 'bg-red-700',
      },
      {
        instrument: 'FRA40',
        description: 'CAC 40 Index',
        minSpread: '1.8',
        avgSpread: '3.5',
        commission: '$0',
        swapLong: '-0.56',
        swapShort: '-0.34',
        logo: '🇫🇷',
        logoText: 'CAC',
        logoBg: 'bg-blue-700',
      },
      {
        instrument: 'SPA35',
        description: 'IBEX 35 Index',
        minSpread: '6.0',
        avgSpread: '12.0',
        commission: '$0',
        swapLong: '-0.78',
        swapShort: '-0.45',
        logo: '🇪🇸',
        logoText: 'IBEX',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'ITA40',
        description: 'FTSE MIB Index',
        minSpread: '8.0',
        avgSpread: '15.0',
        commission: '$0',
        swapLong: '-0.67',
        swapShort: '-0.23',
        logo: '🇮🇹',
        logoText: 'FTSE MIB',
        logoBg: 'bg-green-700',
      },
      {
        instrument: 'JPN225',
        description: 'Nikkei 225 Index',
        minSpread: '6.0',
        avgSpread: '12.0',
        commission: '$0',
        swapLong: '-0.56',
        swapShort: '-0.34',
        logo: '🇯🇵',
        logoText: 'Nikkei',
        logoBg: 'bg-red-800',
      },
      {
        instrument: 'HK50',
        description: 'Hang Seng Index',
        minSpread: '8.0',
        avgSpread: '16.0',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '-0.67',
        logo: '🇭🇰',
        logoText: 'Hang Seng',
        logoBg: 'bg-purple-700',
      },
      {
        instrument: 'AUS200',
        description: 'ASX 200 Index',
        minSpread: '2.5',
        avgSpread: '5.0',
        commission: '$0',
        swapLong: '-0.45',
        swapShort: '-0.23',
        logo: '🇦🇺',
        logoText: 'ASX',
        logoBg: 'bg-green-800',
      },
      {
        instrument: 'CHN50',
        description: 'FTSE China A50 Index',
        minSpread: '12.0',
        avgSpread: '24.0',
        commission: '$0',
        swapLong: '-0.78',
        swapShort: '-0.56',
        logo: '🇨🇳',
        logoText: 'China A50',
        logoBg: 'bg-red-700',
      },
      {
        instrument: 'EU50',
        description: 'Euro Stoxx 50 Index',
        minSpread: '1.8',
        avgSpread: '3.5',
        commission: '$0',
        swapLong: '-0.34',
        swapShort: '-0.12',
        logo: '🇪🇺',
        logoText: 'Euro Stoxx',
        logoBg: 'bg-blue-800',
      },
      {
        instrument: 'VIX',
        description: 'CBOE Volatility Index',
        minSpread: '0.05',
        avgSpread: '0.12',
        commission: '$0',
        swapLong: '-2.34',
        swapShort: '-1.78',
        logo: 'VX',
        logoText: 'VIX',
        logoBg: 'bg-purple-800',
      },
    ],
    Commodities: [
      {
        instrument: 'XAUUSD',
        description: 'Gold vs US Dollar',
        minSpread: '0.35',
        avgSpread: '0.50',
        commission: '$0',
        swapLong: '-1.23',
        swapShort: '+0.45',
        logo: '🥇',
        logoText: 'Gold',
        logoBg: 'bg-yellow-600',
      },
      {
        instrument: 'XAGUSD',
        description: 'Silver vs US Dollar',
        minSpread: '0.03',
        avgSpread: '0.05',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '+0.23',
        logo: '🥈',
        logoText: 'Silver',
        logoBg: 'bg-gray-500',
      },
      {
        instrument: 'XPTUSD',
        description: 'Platinum vs US Dollar',
        minSpread: '2.5',
        avgSpread: '4.0',
        commission: '$0',
        swapLong: '-1.45',
        swapShort: '+0.67',
        logo: '⚪',
        logoText: 'Platinum',
        logoBg: 'bg-slate-400',
      },
      {
        instrument: 'XPDUSD',
        description: 'Palladium vs US Dollar',
        minSpread: '8.0',
        avgSpread: '15.0',
        commission: '$0',
        swapLong: '-2.34',
        swapShort: '+1.12',
        logo: '⚫',
        logoText: 'Palladium',
        logoBg: 'bg-gray-600',
      },
      {
        instrument: 'USOIL',
        description: 'US Crude Oil',
        minSpread: '0.03',
        avgSpread: '0.06',
        commission: '$0',
        swapLong: '-0.45',
        swapShort: '-0.67',
        logo: '🛢️',
        logoText: 'Oil',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'UKOIL',
        description: 'UK Brent Oil',
        minSpread: '0.04',
        avgSpread: '0.07',
        commission: '$0',
        swapLong: '-0.34',
        swapShort: '-0.56',
        logo: '🛢️',
        logoText: 'Brent',
        logoBg: 'bg-gray-700',
      },
      {
        instrument: 'NATGAS',
        description: 'Natural Gas',
        minSpread: '0.030',
        avgSpread: '0.050',
        commission: '$0',
        swapLong: '-0.78',
        swapShort: '-0.12',
        logo: '🔥',
        logoText: 'Gas',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'COPPER',
        description: 'Copper',
        minSpread: '0.003',
        avgSpread: '0.005',
        commission: '$0',
        swapLong: '-0.23',
        swapShort: '-0.45',
        logo: '🟤',
        logoText: 'Copper',
        logoBg: 'bg-orange-800',
      },
      {
        instrument: 'WHEAT',
        description: 'Wheat Futures',
        minSpread: '2.0',
        avgSpread: '4.0',
        commission: '$0',
        swapLong: '-0.56',
        swapShort: '-0.34',
        logo: '🌾',
        logoText: 'Wheat',
        logoBg: 'bg-amber-600',
      },
      {
        instrument: 'CORN',
        description: 'Corn Futures',
        minSpread: '1.5',
        avgSpread: '3.0',
        commission: '$0',
        swapLong: '-0.45',
        swapShort: '-0.23',
        logo: '🌽',
        logoText: 'Corn',
        logoBg: 'bg-yellow-700',
      },
      {
        instrument: 'SOYBEAN',
        description: 'Soybean Futures',
        minSpread: '3.0',
        avgSpread: '6.0',
        commission: '$0',
        swapLong: '-0.67',
        swapShort: '-0.45',
        logo: '🫘',
        logoText: 'Soybean',
        logoBg: 'bg-green-700',
      },
      {
        instrument: 'SUGAR',
        description: 'Sugar Futures',
        minSpread: '0.05',
        avgSpread: '0.10',
        commission: '$0',
        swapLong: '-0.34',
        swapShort: '-0.12',
        logo: '🍯',
        logoText: 'Sugar',
        logoBg: 'bg-pink-600',
      },
      {
        instrument: 'COFFEE',
        description: 'Coffee Futures',
        minSpread: '3.5',
        avgSpread: '7.0',
        commission: '$0',
        swapLong: '-0.78',
        swapShort: '-0.56',
        logo: '☕',
        logoText: 'Coffee',
        logoBg: 'bg-amber-800',
      },
      {
        instrument: 'COCOA',
        description: 'Cocoa Futures',
        minSpread: '4.0',
        avgSpread: '8.0',
        commission: '$0',
        swapLong: '-0.89',
        swapShort: '-0.67',
        logo: '🍫',
        logoText: 'Cocoa',
        logoBg: 'bg-yellow-900',
      },
      {
        instrument: 'COTTON',
        description: 'Cotton Futures',
        minSpread: '2.5',
        avgSpread: '5.0',
        commission: '$0',
        swapLong: '-0.45',
        swapShort: '-0.23',
        logo: '🌱',
        logoText: 'Cotton',
        logoBg: 'bg-green-700',
      },
    ],
    Crypto: [
      {
        instrument: 'BTCUSD',
        description: 'Bitcoin vs US Dollar',
        minSpread: '25.0',
        avgSpread: '45.0',
        commission: '$0',
        swapLong: '-15.67',
        swapShort: '-8.23',
        logo: '₿',
        logoText: 'Bitcoin',
        logoBg: 'bg-orange-500',
      },
      {
        instrument: 'ETHUSD',
        description: 'Ethereum vs US Dollar',
        minSpread: '1.50',
        avgSpread: '2.80',
        commission: '$0',
        swapLong: '-8.45',
        swapShort: '-4.12',
        logo: 'Ξ',
        logoText: 'Ethereum',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'LTCUSD',
        description: 'Litecoin vs US Dollar',
        minSpread: '0.50',
        avgSpread: '0.90',
        commission: '$0',
        swapLong: '-3.23',
        swapShort: '-1.67',
        logo: 'Ł',
        logoText: 'Litecoin',
        logoBg: 'bg-gray-500',
      },
      {
        instrument: 'ADAUSD',
        description: 'Cardano vs US Dollar',
        minSpread: '0.002',
        avgSpread: '0.004',
        commission: '$0',
        swapLong: '-1.89',
        swapShort: '-0.95',
        logo: '₳',
        logoText: 'Cardano',
        logoBg: 'bg-blue-700',
      },
      {
        instrument: 'DOTUSD',
        description: 'Polkadot vs US Dollar',
        minSpread: '0.05',
        avgSpread: '0.12',
        commission: '$0',
        swapLong: '-2.34',
        swapShort: '-1.23',
        logo: '●',
        logoText: 'Polkadot',
        logoBg: 'bg-pink-600',
      },
      {
        instrument: 'SOLUSD',
        description: 'Solana vs US Dollar',
        minSpread: '0.15',
        avgSpread: '0.30',
        commission: '$0',
        swapLong: '-4.56',
        swapShort: '-2.34',
        logo: '◎',
        logoText: 'Solana',
        logoBg: 'bg-purple-600',
      },
      {
        instrument: 'XRPUSD',
        description: 'XRP vs US Dollar',
        minSpread: '0.001',
        avgSpread: '0.002',
        commission: '$0',
        swapLong: '-1.23',
        swapShort: '-0.67',
        logo: '⚡',
        logoText: 'XRP',
        logoBg: 'bg-gray-600',
      },
      {
        instrument: 'BNBUSD',
        description: 'Binance Coin vs US Dollar',
        minSpread: '0.25',
        avgSpread: '0.50',
        commission: '$0',
        swapLong: '-3.45',
        swapShort: '-1.78',
        logo: 'B',
        logoText: 'BNB',
        logoBg: 'bg-yellow-500',
      },
      {
        instrument: 'LINKUSD',
        description: 'Chainlink vs US Dollar',
        minSpread: '0.08',
        avgSpread: '0.15',
        commission: '$0',
        swapLong: '-2.12',
        swapShort: '-1.05',
        logo: '🔗',
        logoText: 'LINK',
        logoBg: 'bg-blue-500',
      },
      {
        instrument: 'MATICUSD',
        description: 'Polygon vs US Dollar',
        minSpread: '0.003',
        avgSpread: '0.006',
        commission: '$0',
        swapLong: '-1.67',
        swapShort: '-0.89',
        logo: '◈',
        logoText: 'MATIC',
        logoBg: 'bg-purple-700',
      },
      {
        instrument: 'AVAXUSD',
        description: 'Avalanche vs US Dollar',
        minSpread: '0.12',
        avgSpread: '0.25',
        commission: '$0',
        swapLong: '-2.89',
        swapShort: '-1.45',
        logo: '▲',
        logoText: 'AVAX',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'UNIUSD',
        description: 'Uniswap vs US Dollar',
        minSpread: '0.04',
        avgSpread: '0.08',
        commission: '$0',
        swapLong: '-1.78',
        swapShort: '-0.89',
        logo: '🦄',
        logoText: 'UNI',
        logoBg: 'bg-pink-500',
      },
    ],
    Stocks: [
      {
        instrument: 'AAPL',
        description: 'Apple Inc',
        minSpread: '0.02',
        avgSpread: '0.05',
        commission: '$0.02/share',
        swapLong: '-0.89',
        swapShort: '-0.45',
        logo: '🍎',
        logoText: 'Apple',
        logoBg: 'bg-gray-800',
      },
      {
        instrument: 'TSLA',
        description: 'Tesla Inc',
        minSpread: '0.15',
        avgSpread: '0.30',
        commission: '$0.02/share',
        swapLong: '-1.23',
        swapShort: '-0.67',
        logo: '⚡',
        logoText: 'Tesla',
        logoBg: 'bg-red-700',
      },
      {
        instrument: 'MSFT',
        description: 'Microsoft Corporation',
        minSpread: '0.03',
        avgSpread: '0.07',
        commission: '$0.02/share',
        swapLong: '-0.78',
        swapShort: '-0.34',
        logo: '⊞',
        logoText: 'Microsoft',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'GOOGL',
        description: 'Alphabet Inc Class A',
        minSpread: '0.25',
        avgSpread: '0.50',
        commission: '$0.02/share',
        swapLong: '-0.95',
        swapShort: '-0.56',
        logo: 'G',
        logoText: 'Google',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'AMZN',
        description: 'Amazon.com Inc',
        minSpread: '0.08',
        avgSpread: '0.15',
        commission: '$0.02/share',
        swapLong: '-1.12',
        swapShort: '-0.78',
        logo: '📦',
        logoText: 'Amazon',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'META',
        description: 'Meta Platforms Inc',
        minSpread: '0.12',
        avgSpread: '0.25',
        commission: '$0.02/share',
        swapLong: '-0.67',
        swapShort: '-0.23',
        logo: 'f',
        logoText: 'Meta',
        logoBg: 'bg-blue-700',
      },
      {
        instrument: 'NFLX',
        description: 'Netflix Inc',
        minSpread: '0.35',
        avgSpread: '0.70',
        commission: '$0.02/share',
        swapLong: '-1.45',
        swapShort: '-0.89',
        logo: 'N',
        logoText: 'Netflix',
        logoBg: 'bg-red-800',
      },
      {
        instrument: 'NVDA',
        description: 'NVIDIA Corporation',
        minSpread: '0.45',
        avgSpread: '0.90',
        commission: '$0.02/share',
        swapLong: '-1.67',
        swapShort: '-1.23',
        logo: '🎮',
        logoText: 'NVIDIA',
        logoBg: 'bg-green-700',
      },
      {
        instrument: 'JPM',
        description: 'JPMorgan Chase & Co',
        minSpread: '0.08',
        avgSpread: '0.15',
        commission: '$0.02/share',
        swapLong: '-0.56',
        swapShort: '-0.34',
        logo: '🏦',
        logoText: 'JPMorgan',
        logoBg: 'bg-blue-800',
      },
      {
        instrument: 'JNJ',
        description: 'Johnson & Johnson',
        minSpread: '0.05',
        avgSpread: '0.10',
        commission: '$0.02/share',
        swapLong: '-0.45',
        swapShort: '-0.23',
        logo: '💊',
        logoText: 'J&J',
        logoBg: 'bg-red-500',
      },
      {
        instrument: 'KO',
        description: 'The Coca-Cola Company',
        minSpread: '0.04',
        avgSpread: '0.08',
        commission: '$0.02/share',
        swapLong: '-0.34',
        swapShort: '-0.12',
        logo: '🥤',
        logoText: 'Coca-Cola',
        logoBg: 'bg-red-600',
      },
      {
        instrument: 'DIS',
        description: 'The Walt Disney Company',
        minSpread: '0.06',
        avgSpread: '0.12',
        commission: '$0.02/share',
        swapLong: '-0.67',
        swapShort: '-0.45',
        logo: '🏰',
        logoText: 'Disney',
        logoBg: 'bg-blue-500',
      },
      {
        instrument: 'BAC',
        description: 'Bank of America Corp',
        minSpread: '0.03',
        avgSpread: '0.06',
        commission: '$0.02/share',
        swapLong: '-0.23',
        swapShort: '-0.12',
        logo: '🏛️',
        logoText: 'BofA',
        logoBg: 'bg-blue-900',
      },
      {
        instrument: 'WMT',
        description: 'Walmart Inc',
        minSpread: '0.04',
        avgSpread: '0.08',
        commission: '$0.02/share',
        swapLong: '-0.34',
        swapShort: '-0.18',
        logo: '🛒',
        logoText: 'Walmart',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'PG',
        description: 'Procter & Gamble Co',
        minSpread: '0.05',
        avgSpread: '0.10',
        commission: '$0.02/share',
        swapLong: '-0.45',
        swapShort: '-0.23',
        logo: '🧴',
        logoText: 'P&G',
        logoBg: 'bg-cyan-600',
      },
      {
        instrument: 'HD',
        description: 'The Home Depot Inc',
        minSpread: '0.12',
        avgSpread: '0.24',
        commission: '$0.02/share',
        swapLong: '-0.78',
        swapShort: '-0.45',
        logo: '🔨',
        logoText: 'Home Depot',
        logoBg: 'bg-orange-700',
      },
      {
        instrument: 'ASML',
        description: 'ASML Holding NV',
        minSpread: '0.85',
        avgSpread: '1.70',
        commission: '€0.02/share',
        swapLong: '-1.23',
        swapShort: '-0.89',
        logo: 'A',
        logoText: 'ASML',
        logoBg: 'bg-orange-600',
      },
      {
        instrument: 'SAP',
        description: 'SAP SE',
        minSpread: '0.45',
        avgSpread: '0.90',
        commission: '€0.02/share',
        swapLong: '-0.67',
        swapShort: '-0.34',
        logo: 'S',
        logoText: 'SAP',
        logoBg: 'bg-blue-600',
      },
      {
        instrument: 'NESN',
        description: 'Nestlé SA',
        minSpread: '0.35',
        avgSpread: '0.70',
        commission: 'CHF0.02/share',
        swapLong: '-0.56',
        swapShort: '-0.23',
        logo: '🍫',
        logoText: 'Nestlé',
        logoBg: 'bg-brown-600',
      },
      {
        instrument: 'LVMH',
        description: 'LVMH Moët Hennessy Louis Vuitton',
        minSpread: '2.50',
        avgSpread: '5.00',
        commission: '€0.02/share',
        swapLong: '-1.89',
        swapShort: '-1.23',
        logo: '👜',
        logoText: 'LVMH',
        logoBg: 'bg-yellow-700',
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
            Trading <span className="text-green-400">Spreads</span> & Costs
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
                      Min Spread
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Avg Spread
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Commission
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Swap Long
                    </th>
                    <th className="px-3 py-3 text-center text-gray-300 font-medium">
                      Swap Short
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {spreadData[activeTab].map((item, index) => (
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
                      <td className="px-3 py-3 text-center text-green-400 font-semibold text-xs">
                        {item.minSpread}
                      </td>
                      <td className="px-3 py-3 text-center text-yellow-400 font-semibold text-xs">
                        {item.avgSpread}
                      </td>
                      <td className="px-3 py-3 text-center text-cyan-400 text-xs">
                        {item.commission}
                      </td>
                      <td className="px-3 py-3 text-center text-xs">
                        <span
                          className={
                            item.swapLong.startsWith('+')
                              ? 'text-green-400'
                              : 'text-red-400'
                          }
                        >
                          {item.swapLong}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center text-xs">
                        <span
                          className={
                            item.swapShort.startsWith('+')
                              ? 'text-green-400'
                              : 'text-red-400'
                          }
                        >
                          {item.swapShort}
                        </span>
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

export default SpreadsTableSection;
