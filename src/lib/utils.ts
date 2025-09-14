import bond1 from '../assets/bonds/popular-bonds-img01.webp';
import bond2 from '../assets/bonds/popular-bonds-img2.webp';
import bond3 from '../assets/bonds/popular-bonds-img3.webp';
import bond4 from '../assets/bonds/popular-bonds-img4.webp';

import commodities1 from '../assets/commodities/popular-commodities-icon1﹖v=1.webp';
import commodities2 from '../assets/commodities/popular-commodities-icon2﹖v=1.webp';
import commodities3 from '../assets/commodities/popular-commodities-icon3﹖v=1.webp';
import commodities4 from '../assets/commodities/popular-commodities-icon4﹖v=1.webp';

import forex1 from '../assets/forex/popular-forex-icon1.webp';
import forex2 from '../assets/forex/popular-forex-icon2.webp';
import forex3 from '../assets/forex/popular-forex-icon3.webp';
import forex4 from '../assets/forex/popular-forex-icon4.webp';

import etfs1 from '../assets/etfs/popular-etfs-icon1.webp';
import etfs2 from '../assets/etfs/popular-etfs-icon2.webp';
import etfs3 from '../assets/etfs/popular-etfs-icon3.webp';
import etfs4 from '../assets/etfs/popular-etfs-icon4.webp';

import share1 from '../assets/shareCdfs/popular-shares-icon1.webp';
import share2 from '../assets/shareCdfs/popular-shares-icon2.webp';
import share3 from '../assets/shareCdfs/popular-shares-icon3.webp';
import share4 from '../assets/shareCdfs/popular-shares-icon4.webp';

import indices1 from '../assets/indices/popular-indices-icon1.webp';
import indices2 from '../assets/indices/popular-indices-icon2.webp';
import indices3 from '../assets/indices/popular-indices-icon3.webp';
import indices4 from '../assets/indices/popular-indices-icon4.webp';

// Logo spinning animation
export const logoAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 10,
    ease: 'linear',
    repeat: Infinity,
  },
};

// Logo spinning animation
export const logoAnimation2 = {
  rotate: [0, 360],
  transition: {
    duration: 2,
    ease: 'linear',
    repeat: Infinity,
  },
};

// Infinite bounce animation
export const bounceAnimation = {
  y: [0, -20, 0], // move up then down
  transition: {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

export interface MenuItem {
  label: string;
  to: string;
}

export const marketDropDownLinks: MenuItem[] = [
  {
    label: 'Bonds',
    to: '/bonds',
  },
  {
    label: 'Commodities',
    to: '/commodities',
  },
  {
    label: 'Crypto',
    to: '/crypto',
  },
  {
    label: 'ETFs',
    to: '/etfs',
  },
  {
    label: 'Forex',
    to: '/fx',
  },
  {
    label: 'Indices',
    to: '/indices',
  },
  {
    label: 'Share CFDs',
    to: '/share-cfds',
  },
  {
    label: 'Spreads',
    to: '/spreads',
  },
  {
    label: 'Trading Hours',
    to: '/trading-hours',
  },
];

export const companyDropDownLinks: MenuItem[] = [
  {
    label: 'About Us',
    to: '/about',
  },
  {
    label: 'Why Choose Us',
    to: '/why-choose-us',
  },
  {
    label: 'Our Infrastructure',
    to: '/trading-infrastructure',
  },
  {
    label: 'Awards',
    to: '/awards',
  },
  {
    label: 'Careers',
    to: '/careers',
  },
  {
    label: 'Regulations',
    to: '/regulations',
  },
  {
    label: 'Support',
    to: '/contact',
  },
  {
    label: 'Compare Account',
    to: '/compare-account',
  },
  {
    label: 'Expert Trader',
    to: '/expert-trader',
  },
  {
    label: 'FAQ',
    to: '/faq',
  },
  {
    label: 'Insurance',
    to: '/insurance',
  },
  {
    label: 'Leverage',
    to: '/leverage',
  },
];

export const toolsDropDownLinks: MenuItem[] = [
  {
    label: 'AI Market Buzz',
    to: '/ai-market-buzz',
  },
  {
    label: 'Economic Canledar',
    to: '/economic-canledar',
  },
  {
    label: 'Forex Sentiment',
    to: '/forex-sentiment',
  },
  {
    label: 'Market News',
    to: '/market-news',
  },
  {
    label: 'Premium Economic Canledar',
    to: '/premium-economic-canledar',
  },
  {
    label: 'Technical Views',
    to: '/technical-views',
  },
  {
    label: 'Trade Signals',
    to: '/trade-signals',
  },
  {
    label: 'Trade Vps',
    to: '/trade-vps',
  },
];

export const platformsDropDownLinks: MenuItem[] = [
  {
    label: 'MetaTrader 4',
    to: '/platforms/mt4',
  },
  {
    label: 'MetaTrader 5',
    to: '/platforms/mt5',
  },
  {
    label: 'TradingView',
    to: '/platforms/tradingview',
  },
];

export const mirrorTradingDropDownLinks: MenuItem[] = [
  {
    label: 'Mirror Trading',
    to: '/mirror-trading',
  },
  {
    label: 'How It Works',
    to: '/mirror-trading/how-it-works',
  },
  {
    label: 'Browse Traders',
    to: '/mirror-trading/traders',
  },
];

export const bonds = {
  title: 'Popular Bonds',
  type: 'bonds',
  markets: [
    {
      symbol: 'FGBL',
      name: 'Euro-Bund Futures',
      exchange: 'Euro-Bund Futures',
      image: bond1,
    },
    {
      symbol: 'FLG',
      name: 'Euronext',
      exchange: 'Euronext',
      image: bond2,
    },
    {
      symbol: 'TY',
      name: 'CBOT',
      exchange: 'CBOT',
      image: bond3,
    },
    {
      symbol: 'FEI',
      name: 'ICE',
      exchange: 'ICE',
      image: bond4,
    },
  ],
};

export const shareCFDs = {
  title: 'Popular Share CFDs',
  type: 'shareCFDs',
  markets: [
    {
      symbol: 'AAPL',
      name: 'Apple',
      exchange: 'Apple',
      image: share1,
    },
    {
      symbol: 'GOOGL',
      name: 'Google',
      exchange: 'Google',
      image: share2,
    },
    {
      symbol: 'META',
      name: 'Meta',
      exchange: 'Meta',
      image: share3,
    },
    {
      symbol: 'NFLX',
      name: 'Netflix',
      exchange: 'Netflix',
      image: share4,
    },
  ],
};

export const forex = {
  title: 'Popular Forex Pairs',
  type: 'forex',
  markets: [
    {
      symbol: 'EURUSD',
      name: 'EUR/USD',
      exchange: 'EUR / USD',
      image: forex1,
    },
    {
      symbol: 'AUDUSD',
      name: 'AUD/USD',
      exchange: 'AUD / USD',
      image: forex2,
    },
    {
      symbol: 'GBPUSD',
      name: 'GBP/USD',
      exchange: 'GBP / USD',
      image: forex3,
    },
    {
      symbol: 'USDJPY',
      name: 'USD/JPY',
      exchange: 'USD / JPY',
      image: forex4,
    },
  ],
};

export const commodity = {
  title: 'Popular Commodity Markets',
  type: 'commodity',
  markets: [
    {
      symbol: 'XAUUSD',
      name: 'Gold',
      exchange: 'Gold',
      image: commodities1,
    },
    {
      symbol: 'CL-OIL',
      name: 'Oil',
      exchange: 'Oil',
      image: commodities2,
    },
    {
      symbol: 'XAGUSD',
      name: 'Silver',
      exchange: 'Silver',
      image: commodities3,
    },
    {
      symbol: 'NATGAS',
      name: 'Natural Gas',
      exchange: 'Natural Gas',
      image: commodities4,
    },
  ],
};

export const crypto = {
  title: 'Popular Crypto Markets',
  type: 'crypto',
  markets: [
    {
      symbol: 'BTCUSD',
      name: 'Bitcoin',
      exchange: 'Bitcoin',
      image: 'https://assets.coincap.io/assets/icons/btc@2x.png',
    },
    {
      symbol: 'ETHUSD',
      name: 'Ethereum',
      exchange: 'Ethereum',
      image: 'https://assets.coincap.io/assets/icons/eth@2x.png',
    },
    {
      symbol: 'LTCUSD',
      name: 'Litecoin',
      exchange: 'Litecoin',
      image: 'https://assets.coincap.io/assets/icons/ltc@2x.png',
    },
    {
      symbol: 'XRPUSD',
      name: 'Ripple',
      exchange: 'Ripple',
      image: 'https://assets.coincap.io/assets/icons/xrp@2x.png',
    },
  ],
};

export const indices = {
  title: 'Popular Indices',
  type: 'indices',
  markets: [
    {
      symbol: 'US500',
      name: 'S&P 500',
      exchange: 'S&P 500',
      image: indices1,
    },
    {
      symbol: 'NASDAQ',
      name: 'NASDAQ',
      exchange: 'NASDAQ',
      image: indices2,
    },
    {
      symbol: 'UK100',
      name: 'FTSE 100',
      exchange: 'FTSE 100',
      image: indices3,
    },
    {
      symbol: 'GER40',
      name: 'DAX',
      exchange: 'DAX',
      image: indices4,
    },
  ],
};

export const etfs = {
  title: 'Popular ETFs',
  type: 'etfs',
  markets: [
    {
      symbol: 'SPY',
      name: 'SPDR S&P 500',
      exchange: 'SPDR S&P 500',
      image: etfs1,
    },
    {
      symbol: 'QQQ',
      name: 'Invesco QQQ',
      exchange: 'Invesco QQQ',
      image: etfs2,
    },
    {
      symbol: 'GLD',
      name: 'SPDR Gold',
      exchange: 'SPDR Gold',
      image: etfs3,
    },
    {
      symbol: 'VTI',
      name: 'Vanguard Total',
      exchange: 'Vanguard Total',
      image: etfs4,
    },
  ],
};

export const standardPlan = [
  {
    pips: {
      min: 20,
      max: 25,
    },
    title: 'STANDARD',
    truepoints: [
      'Minimum: ﹩3,000',
      'Maximum: ﹩4,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 25,
      max: 30,
    },
    title: 'MASTER',
    truepoints: [
      'Minimum: ﹩5,000',
      'Maximum: ﹩9,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 30,
      max: 35,
    },
    title: 'PREMIUM',
    truepoints: [
      'Minimum: ﹩10,000',
      'Maximum: ﹩19,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    title: 'ULTIMATE',
    pips: {
      min: 35,
      max: 40,
    },
    truepoints: [
      'Minimum: ﹩20,000',
      'Maximum: ﹩49,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 40,
      max: 45,
    },
    title: 'CORPORATE',
    truepoints: [
      'Minimum: ﹩50,000',
      'Maximum: Unlimited',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
];

export const advancedPlan = [
  {
    pips: {
      min: 30,
      max: 40,
    },
    title: 'STANDARD',
    truepoints: [
      'Minimum: ﹩1,000',
      'Maximum: ﹩9,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 40,
      max: 45,
    },
    title: 'MASTER PLUS',
    truepoints: [
      'Minimum: ﹩10,000',
      'Maximum: ﹩19,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 50,
      max: 60,
    },
    title: 'PREMIUM',
    truepoints: [
      'Minimum: ﹩20,000',
      'Maximum: ﹩49,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    title: 'ULTIMATE',
    pips: {
      min: 60,
      max: 70,
    },
    truepoints: [
      'Minimum: ﹩50,000',
      'Maximum: ﹩99,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 70,
      max: 80,
    },
    title: 'CORPORATE',
    truepoints: [
      'Minimum: ﹩100,000',
      'Maximum: Unlimited',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
];

export const NFP = [
  {
    pips: {
      min: 100,
      max: 124,
    },
    title: 'STARTER',
    truepoints: [
      'Minimum: ﹩50,000',
      'Maximum: ﹩99,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 150,
      max: undefined,
    },
    title: 'PREMIUM',
    truepoints: [
      'Minimum: ﹩100,000',
      'Maximum: ﹩149,999',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 200,
      max: undefined,
    },
    title: 'ULTIMATE',
    truepoints: [
      'Minimum: ﹩150,000',
      'Maximum: Unlimited',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
];

export const BTC = [
  {
    pips: {
      min: 65,
      max: 70,
    },
    title: 'BASIC',
    truepoints: ['1 - 1.5 BTC', '10% Trade Commission', '24/7 active support'],
  },
  {
    pips: {
      min: 70,
      max: 75,
    },
    title: 'STANDARD',
    truepoints: ['5 - 14.9 BTC', '10% Trade Commission', '24/7 active support'],
  },
  {
    pips: {
      min: 80,
      max: 85,
    },
    title: 'PREMIUM',
    truepoints: [
      '15 - 29.9 BTC',
      '10% Trade Commission',
      '24/7 active support',
    ],
  },
  {
    pips: {
      min: 90,
      max: 95,
    },
    title: 'PRO',
    truepoints: ['30+ BTC', '10% Trade Commission', '24/7 active support'],
  },
];

export const testimonies = [
  {
    title: 'Product Manager | Capsule',
    name: 'Josh Tyson',
    imgUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message:
      "AdvantCrest has made navigating the complex world of finance a breeze. Their extensive range of services reflects their expertise. AdvantCrest's friendly demeanor and organized approach have made managing my investments effortless. For all things related to copy trading and financial planning, they're the ones I trust.",
  },
  {
    title: 'Senior Director of Operations | Fitbit',
    name: 'Luisa',
    imgUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message:
      "AdvantCrest epitomizes excellence in copy trading services. Their unwavering dedication to ensuring customer satisfaction sets them apart. With a secure approach, authentic insights, and swift responsiveness, every interaction is seamless. If you're looking for a copy trading platform that delivers results, I wholeheartedly recommend AdvantCrest!",
  },
  {
    title: 'Financial Analyst | Nova',
    name: 'Alisa Williams',
    imgUrl:
      'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
    message:
      "I've had the privilege of working with AdvantCrest for some time now, and their professionalism and knowledge continue to impress me. They provide thoughtful advice tailored to my financial goals and risk tolerance. AdvantCrest's commitment to their clients' success is truly remarkable.",
  },
  {
    title: 'Tech Entrepreneur | Quantum',
    name: 'Michael',
    imgUrl:
      'https://images.pexels.com/photos/3932542/pexels-photo-3932542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message:
      "AdvantCrest's financial expertise has been a game-changer for me. Their insights into market trends and their ability to explain complex concepts in simple terms have empowered me to make better financial decisions. Their services have exceeded my expectations in every way.",
  },
  {
    title: 'Investment Strategist | Luna',
    name: 'Sarah Thompson',
    imgUrl: 'https://source.unsplash.com/320x320/?woman',
    message:
      "AdvantCrest's commitment to their clients is truly commendable. Their dedication to achieving financial goals is evident in every interaction. Their insights have helped me navigate volatile markets with confidence, and their friendly approach makes discussing finances a breeze.",
  },
  {
    title: 'Wealth Manager | Quantum',
    name: 'Anderson',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1682000321215-a061fd738095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "Working with AdvantCrest has been enlightening. Their advice extends beyond mere financial matters; they're a holistic wealth advisor. Their personalized approach and genuine care for their clients' financial well-being are what set them apart. I'm grateful for their guidance.",
  },
  {
    title: 'Entrepreneur | Happy customer',
    name: 'Clark',
    imgUrl:
      'https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "AdvantCrest's expertise stands out in a crowded financial landscape. Their knowledge of investment opportunities and risk management is unparalleled. They've not only helped me make informed decisions but also educated me along the way. I highly recommend their services.",
  },
  {
    title: 'Crypto Enthusiast | Cosmos',
    name: 'Miller',
    imgUrl:
      'https://images.unsplash.com/photo-1514851947871-97fd1e04b2e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "AdvantCrest is a financial wizard. Their ability to foresee market trends and recommend timely actions is remarkable. I've achieved significant growth in my investments under their guidance. They're not just financial advisors; they're strategic partners in wealth-building.",
  },
  {
    title: 'Retirement Planner | Nebula',
    name: 'Yousaf',
    imgUrl:
      'https://images.unsplash.com/photo-1610611803787-7cd04238196f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message:
      "I've been a client of AdvantCrest for years, and their dedication to my financial success has never wavered. Their well-rounded expertise covers everything from retirement planning to tax-efficient investing. They're an invaluable asset in securing my financial future.",
  },
  {
    title: 'Socially Responsible Investor | Quantum',
    name: 'Nathan',
    imgUrl:
      'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBtYWxlfGVufDB8fDB8fHww',
    message:
      "AdvantCrest's commitment to ethical financial practices is inspiring. Their recommendations are always aligned with my values, and their transparency in explaining financial strategies is refreshing. With their guidance, I've been able to achieve my financial goals while staying socially responsible.",
  },
];
