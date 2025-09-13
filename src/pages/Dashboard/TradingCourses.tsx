import React, { useState } from 'react';
import {
  Play,
  ArrowLeft,
  BookOpen,
  TrendingUp,
  BarChart3,
  DollarSign,
  Users,
  Brain,
  Smartphone,
  LineChart,
  PieChart,
  Target,
  Zap,
  Globe,
  Calculator,
} from 'lucide-react';

interface Lesson {
  title: string;
  duration: string;
  videoUrl: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  icon: React.ReactNode;
  color: string;
}

const courses: Course[] = [
  {
    id: 'forex',
    title: 'Forex Trading',
    description:
      'From calculating pips and leverage to managing positions – all you need to know about Forex trading.',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    lessons: [
      {
        title: 'Intro',
        duration: '00:36',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/645.mp4',
      },
      {
        title: 'Online Trading',
        duration: '00:50',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/646.mp4',
      },
      {
        title: 'Advantages',
        duration: '00:57',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/647.mp4',
      },
      {
        title: 'Pairs',
        duration: '00:55',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/648.mp4',
      },
      {
        title: 'Ask Bid',
        duration: '00:44',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/649.mp4',
      },
      {
        title: 'Pips',
        duration: '00:44',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/650.mp4',
      },
      {
        title: 'Pip Calculations',
        duration: '00:57',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/651.mp4',
      },
      {
        title: 'Spread',
        duration: '00:57',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/652.mp4',
      },
      {
        title: 'Leverage',
        duration: '01:10',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/653.mp4',
      },
      {
        title: 'Margin',
        duration: '01:00',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/654.mp4',
      },
      {
        title: 'Lots',
        duration: '00:58',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/655.mp4',
      },
      {
        title: 'Position Sizing',
        duration: '01:12',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/656.mp4',
      },
      {
        title: 'Orders',
        duration: '01:03',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/657.mp4',
      },
      {
        title: 'Stop Loss & Take Profit',
        duration: '01:04',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/658.mp4',
      },
      {
        title: 'Risk Management',
        duration: '01:10',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/659.mp4',
      },
      {
        title: 'Technical Analysis',
        duration: '01:20',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/660.mp4',
      },
      {
        title: 'Fundamental Analysis',
        duration: '01:15',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/661.mp4',
      },
      {
        title: 'Indicators',
        duration: '01:00',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/662.mp4',
      },
      {
        title: 'Trading Psychology',
        duration: '01:18',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/663.mp4',
      },
      {
        title: 'Strategies',
        duration: '01:25',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/664.mp4',
      },
      {
        title: 'Demo vs Live Trading',
        duration: '01:00',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/665.mp4',
      },
      {
        title: 'Choosing a Broker',
        duration: '01:05',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/666.mp4',
      },
      {
        title: 'Conclusion',
        duration: '00:45',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/145/667.mp4',
      },
    ],
  },
  {
    id: 'crypto',
    title: 'Crypto Trading',
    description:
      'Learn all the basics to start trading in the world of cryptocurrencies.',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-600',
    lessons: [
      {
        title: 'Intro and history',
        duration: '01:34',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/900.mp4',
      },
      {
        title: 'Blockchain and decentralization',
        duration: '01:17',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/904.mp4',
      },
      {
        title: 'Major cryptocurrencies',
        duration: '01:21',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/906.mp4',
      },
      {
        title: 'Other cryptos and stablecoins',
        duration: '01:50',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/907.mp4',
      },
      {
        title: 'NFT',
        duration: '01:17',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/908.mp4',
      },
      {
        title: 'Key drivers of the crypto market',
        duration: '01:21',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/909.mp4',
      },
      {
        title: 'How does crypto trading work?',
        duration: '01:03',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/910.mp4',
      },
      {
        title: 'Crypto trading tools',
        duration: '01:00',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/911.mp4',
      },
      {
        title: 'Diversification and timing',
        duration: '01:21',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/912.mp4',
      },
      {
        title: 'Crypto trading psychology and risk management',
        duration: '00:53',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/913.mp4',
      },
      {
        title: 'How to trade crypto',
        duration: '01:19',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/914.mp4',
      },
      {
        title: 'Conclusion',
        duration: '00:30',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/154/915.mp4',
      },
    ],
  },
  {
    id: 'stocks',
    title: 'Stocks',
    description:
      'Master the fundamentals of stock market trading and investment strategies.',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    lessons: [
      {
        title: 'What are stocks?',
        duration: '00:38',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/112.mp4',
      },
      {
        title: 'Different types of stocks',
        duration: '01:04',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/113.mp4',
      },
      {
        title: 'How stock trading works',
        duration: '00:52',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/114.mp4',
      },
      {
        title: 'Advantages of stock trading',
        duration: '00:51',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/115.mp4',
      },
      {
        title: 'Types of exchanges',
        duration: '01:07',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/116.mp4',
      },
      {
        title: 'Movement of stock prices',
        duration: '01:03',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/117.mp4',
      },
      {
        title: 'How to Read A Stock Table/Quote',
        duration: '00:44',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/118.mp4',
      },
      {
        title: 'Conclusion',
        duration: '00:36',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/10/119.mp4',
      },
    ],
  },
  {
    id: 'indices',
    title: 'Indices',
    description: 'Learn about trading stock market indices and index funds.',
    icon: <PieChart className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    lessons: [
      {
        title: 'What is an Index?',
        duration: '02:26',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/366/4186.mp4',
      },
      {
        title: 'Popular Indices',
        duration: '04:12',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/366/4187.mp4',
      },
      {
        title: 'What is a Tick?',
        duration: '01:44',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/366/4188.mp4',
      },
      {
        title: 'Why Trade Indices?',
        duration: '02:56',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/366/4189.mp4',
      },
      {
        title: 'Key Factors',
        duration: '03:33',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/366/4190.mp4',
      },
    ],
  },
  {
    id: 'commodity',
    title: 'Commodity Trading',
    description:
      'Explore the world of commodity trading including gold, oil, and agricultural products.',
    icon: <DollarSign className="w-8 h-8" />,
    color: 'from-yellow-500 to-yellow-600',
    lessons: [
      {
        title: 'History of Commodity Trading',
        duration: '01:22',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/280/1069.mp4',
      },
      {
        title: 'Types of Commodities',
        duration: '01:45',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/280/1070.mp4',
      },
      {
        title: 'Gold',
        duration: '01:29',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/280/1071.mp4',
      },
      {
        title: 'Oil and Gas',
        duration: '01:13',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/280/1072.mp4',
      },
      {
        title: 'Other popular commodities',
        duration: '01:11',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/280/1073.mp4',
      },
      {
        title: 'Conclusion',
        duration: '01:20',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/280/1074.mp4',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Trading',
    description:
      'Learn how to leverage social trading platforms and copy successful traders.',
    icon: <Users className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600',
    lessons: [
      {
        title: 'Into',
        duration: '01:07',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/165/998.mp4',
      },
      {
        title: 'Why do social trading?',
        duration: '00:59',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/165/999.mp4',
      },
      {
        title: 'Choose a provider',
        duration: '01:01',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/165/1000.mp4',
      },
      {
        title: 'Advantages and disadvantages',
        duration: '01:17',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/165/1001.mp4',
      },
      {
        title: 'Summary',
        duration: '00:48',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/165/1002.mp4',
      },
    ],
  },
  {
    id: 'trading-styles',
    title: 'Trading Styles',
    description:
      'Discover different trading styles and find the one that suits your personality.',
    icon: <Target className="w-8 h-8" />,
    color: 'from-indigo-500 to-indigo-600',
    lessons: [
      {
        title: 'Intro',
        duration: '00:47',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/359/3223.mp4',
      },
      {
        title: 'Scalping',
        duration: '02:15',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/359/3224.mp4',
      },
      {
        title: 'Day Trading',
        duration: '01:55',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/359/3225.mp4',
      },
      {
        title: 'Swing Trading',
        duration: '02:40',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/359/3226.mp4',
      },
      {
        title: 'Position Trading',
        duration: '01:45',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/359/3227.mp4',
      },
    ],
  },
  {
    id: 'psychology',
    title: 'Trading Psychology',
    description:
      'Master the mental aspects of trading and develop the right mindset for success.',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-red-500 to-red-600',
    lessons: [
      {
        title: 'Intro',
        duration: '01:22',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/356/2891.mp4',
      },
      {
        title: 'Battle of hope and fear',
        duration: '02:49',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/356/2892.mp4',
      },
      {
        title: 'Risk management',
        duration: '03:11',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/356/2893.mp4',
      },
      {
        title: 'The journey of a trader',
        duration: '04:01',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/356/2894.mp4',
      },
      {
        title: 'Traders diary',
        duration: '02:04',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/356/2895.mp4',
      },
    ],
  },
  {
    id: 'fundamental',
    title: 'Fundamental Analysis',
    description:
      'Learn how to analyze economic indicators and company fundamentals.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-teal-500 to-teal-600',
    lessons: [
      {
        title: 'Introduction to Fundamentals',
        duration: '01:02',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/357/3036.mp4',
      },
      {
        title: 'Fundamental Analysis for Currencies',
        duration: '06:17',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/357/3037.mp4',
      },
      {
        title: 'Fundamental Analysis for Commodities',
        duration: '05:24',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/357/3038.mp4',
      },
      {
        title: 'Fundamental Analysis for Stocks',
        duration: '02:40',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/357/3039.mp4',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Analysis',
    description:
      'Master chart patterns, trends, and technical indicators for better trading decisions.',
    icon: <LineChart className="w-8 h-8" />,
    color: 'from-cyan-500 to-cyan-600',
    lessons: [
      {
        title: 'Intro',
        duration: '01:40',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3181.mp4',
      },
      {
        title: 'Understanding Candlesticks',
        duration: '02:30',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3182.mp4',
      },
      {
        title: 'Support and Resistance',
        duration: '02:15',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3183.mp4',
      },
      {
        title: 'Moving Averages',
        duration: '03:20',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3184.mp4',
      },
      {
        title: 'RSI',
        duration: '02:38',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3185.mp4',
      },
      {
        title: 'Candlestick Patterns',
        duration: '02:42',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3418.mp4',
      },
      {
        title: 'Trendlines',
        duration: '02:35',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3419.mp4',
      },
      {
        title: 'Elliott Wave Theory',
        duration: '03:16',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3420.mp4',
      },
      {
        title: 'Fibonacci Retracement',
        duration: '03:20',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3421.mp4',
      },
      {
        title: 'Price Action',
        duration: '01:22',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/358/3422.mp4',
      },
    ],
  },
  {
    id: 'indicators',
    title: 'Technical Indicators',
    description:
      'Learn how to use popular technical indicators to enhance your trading strategies.',
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'from-emerald-500 to-emerald-600',
    lessons: [
      {
        title: 'Candlestick Charting',
        duration: '01:06',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/281.mp4',
      },
      {
        title: 'Candlestick Charting Part 1',
        duration: '01:31',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/282.mp4',
      },
      {
        title: 'Candlestick Patterns Part 2',
        duration: '01:08',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/283.mp4',
      },
      {
        title: 'Support And Resistance',
        duration: '01:06',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/564.mp4',
      },
      {
        title: 'Moving average',
        duration: '01:16',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/565.mp4',
      },
      {
        title: 'Bollinger Bands',
        duration: '00:51',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/566.mp4',
      },
      {
        title: 'Fibonacci Retracements',
        duration: '01:10',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/567.mp4',
      },
      {
        title: 'Relative Strength Index',
        duration: '01:16',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/64/568.mp4',
      },
    ],
  },
  {
    id: 'mt4',
    title: 'MT4 Course',
    description: 'Complete guide to using MetaTrader 4 platform for trading.',
    icon: <Calculator className="w-8 h-8" />,
    color: 'from-slate-500 to-slate-600',
    lessons: [
      {
        title: 'Intro',
        duration: '01:00',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/89.mp4',
      },
      {
        title: 'Charts',
        duration: '00:33',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/90.mp4',
      },
      {
        title: 'Open Trade',
        duration: '00:31',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/91.mp4',
      },
      {
        title: 'Close Trade',
        duration: '00:25',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/92.mp4',
      },
      {
        title: 'How to download MT4',
        duration: '01:04',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/125.mp4',
      },
      {
        title: 'Automated Trading',
        duration: '01:26',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/158.mp4',
      },
      {
        title: 'Pending Orders',
        duration: '01:24',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/159.mp4',
      },
      {
        title: 'Risk Management Tools',
        duration: '01:51',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/11/160.mp4',
      },
    ],
  },
  {
    id: 'mt4-mobile',
    title: 'MT4 Mobile Course',
    description: 'Learn how to trade on the go with MetaTrader 4 mobile app.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-gray-500 to-gray-600',
    lessons: [
      {
        title: 'Mobile Trading Complete Guide',
        duration: '03:32',
        videoUrl:
          'https://d2ikij6pcyb4st.cloudfront.net/files/videos/en/104/506.mp4',
      },
    ],
  },
];

const TradingCourses: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'course'>('list');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentLesson(course.lessons[0]);
    setCurrentView('course');
  };

  const handleBackToCourses = () => {
    setCurrentView('list');
    setSelectedCourse(null);
    setCurrentLesson(null);
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  if (currentView === 'list') {
    return (
      <div className="min-h-screen bg-gray-950/50 text-white rounded-2xl">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-10">
            <p className="text-gray-300 text-lg">
              Master the art of trading with our comprehensive courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseSelect(course)}
                className="bg-gray-900/50 rounded-xl p-6 cursor-pointer hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-600"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 text-white`}
                >
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {course.lessons.length} lessons
                  </span>
                  <div className="flex items-center text-blue-400 text-sm font-medium">
                    <Play className="w-4 h-4 mr-1" />
                    Start Course
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900/50 rounded-2xl text-white">
      <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={handleBackToCourses}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative">
                {currentLesson ? (
                  <video
                    key={currentLesson.videoUrl}
                    controls
                    className="w-full h-full"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Cg fill='%23374151'%3E%3Crect width='1200' height='675'/%3E%3C/g%3E%3C/svg%3E"
                  >
                    <source src={currentLesson.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 text-white/70" />
                    <p className="text-white/70">
                      Select a lesson to start watching
                    </p>
                  </div>
                )}
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-2">
                  {selectedCourse?.title.toUpperCase()}
                </h1>
                <p className="text-gray-400">{selectedCourse?.description}</p>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <h3 className="font-semibold">Course Content</h3>
                <span className="text-sm text-gray-400">
                  {selectedCourse?.lessons.length} lessons
                </span>
              </div>

              <div className="max-h-[600px] overflow-y-auto">
                {selectedCourse?.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    onClick={() => handleLessonSelect(lesson)}
                    className={`p-4 cursor-pointer border-b border-gray-700/50 hover:bg-gray-700 transition-colors ${
                      currentLesson === lesson
                        ? 'bg-blue-600/20 border-l-4 border-l-blue-500'
                        : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm ${
                          currentLesson === lesson
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-1">
                          {lesson.title}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {lesson.duration}
                        </span>
                      </div>
                      {currentLesson === lesson && (
                        <Play className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCourses;
