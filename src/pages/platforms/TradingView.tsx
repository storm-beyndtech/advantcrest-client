import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Users,
  Share2,
  Eye,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  MessageSquare,
  Activity,
  Zap,
} from 'lucide-react';

// Hero Section
const TradingViewHero = () => {
  return (
    <section className="relative bg-slate-900 py-16 pt-48 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            TradingView <span className="text-purple-400">Platform</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Advanced charting platform with social trading and comprehensive
            analysis tools
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Start Charting</span>
            </button>
            <button className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300">
              View Features
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Key Features
const KeyFeatures = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Charting',
      description:
        'Professional charting tools with 100+ technical indicators, drawing tools, and customizable layouts',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Trading',
      description:
        'Follow top traders, share ideas, and learn from a community of 30+ million active traders',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Markets',
      description:
        'Access real-time data from 100+ exchanges covering stocks, forex, crypto, and commodities',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Data',
      description:
        'Lightning-fast market data with professional-grade charts and instant price updates',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Idea Sharing',
      description:
        'Publish trading ideas, analysis, and strategies to build your reputation in the community',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Chat & Alerts',
      description:
        'Built-in chat, customizable alerts, and notifications to stay connected with markets',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            TradingView <span className="text-purple-600">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need for professional trading and market analysis in
            one platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 hover:bg-slate-50 rounded-2xl transition-all duration-300"
            >
              <div className="text-purple-600 flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Charting Tools
const ChartingTools = () => {
  const toolCategories = [
    {
      title: 'Technical Analysis',
      icon: <TrendingUp className="w-8 h-8" />,
      tools: [
        '100+ Technical Indicators',
        'Advanced Drawing Tools',
        'Multi-Timeframe Analysis',
        'Custom Strategies',
        'Backtesting Tools',
        'Market Screening',
      ],
    },
    {
      title: 'Chart Types',
      icon: <BarChart3 className="w-8 h-8" />,
      tools: [
        'Candlestick Charts',
        'Bar Charts',
        'Line Charts',
        'Heikin Ashi',
        'Point & Figure',
        'Renko Charts',
      ],
    },
    {
      title: 'Social Features',
      icon: <Users className="w-8 h-8" />,
      tools: [
        'Trading Ideas',
        'Follow Top Traders',
        'Community Chat',
        'Idea Commenting',
        'Reputation System',
        'Educational Content',
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional <span className="text-purple-600">Tools</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive suite of tools for technical analysis and social
            trading
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="text-purple-600 mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Statistics Section
const StatisticsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: '30M+',
      label: 'Active Users',
      description: 'Worldwide community',
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: '4.9/5',
      label: 'User Rating',
      description: 'App stores',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '100+',
      label: 'Exchanges',
      description: 'Global coverage',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      value: '500K+',
      label: 'Daily Ideas',
      description: 'Published daily',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-purple-400">Millions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the world's largest community of traders and investors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-purple-400 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Start Charting with{' '}
            <span className="text-purple-600">TradingView</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join millions of traders who trust TradingView for advanced charting
            and social trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>Start Free</span>
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>View Pro Features</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function TradingView() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <TradingViewHero />
      <KeyFeatures />
      <ChartingTools />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
