import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Download,
  Monitor,
  Smartphone,
  Tablet,
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Target,
  Activity,
  Database
} from 'lucide-react';

// Hero Section
const MT5Hero = () => {
  return (
    <section className="relative bg-slate-900 py-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            MetaTrader <span className="text-blue-400">5</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Next generation multi-asset platform with advanced features and superior performance
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download MT5</span>
            </button>
            <button className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300">
              Try Web Platform
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// MT5 vs MT4 Comparison
const ComparisonSection = () => {
  const features = [
    {
      feature: "Trading Assets",
      mt4: "Forex, CFDs",
      mt5: "Forex, Stocks, Futures, Options, CFDs",
      advantage: "mt5"
    },
    {
      feature: "Order Types",
      mt4: "4 Order Types",
      mt5: "6 Order Types + Market Depth",
      advantage: "mt5"
    },
    {
      feature: "Timeframes",
      mt4: "9 Timeframes",
      mt5: "21 Timeframes",
      advantage: "mt5"
    },
    {
      feature: "Technical Indicators",
      mt4: "30 Indicators",
      mt5: "38 Indicators",
      advantage: "mt5"
    },
    {
      feature: "Programming Language",
      mt4: "MQL4",
      mt5: "MQL5 (Advanced)",
      advantage: "mt5"
    },
    {
      feature: "Strategy Tester",
      mt4: "Basic Testing",
      mt5: "Multi-currency & Multi-threaded",
      advantage: "mt5"
    }
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
            MT5 vs MT4 <span className="text-blue-600">Comparison</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the enhanced capabilities and advanced features of MetaTrader 5
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-slate-100 font-semibold text-slate-900">
              <div>Feature</div>
              <div className="text-center">MetaTrader 4</div>
              <div className="text-center">MetaTrader 5</div>
              <div className="text-center">Advantage</div>
            </div>
            
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 gap-4 p-6 border-b border-slate-200 last:border-b-0"
              >
                <div className="font-semibold text-slate-900">{item.feature}</div>
                <div className="text-center text-slate-600">{item.mt4}</div>
                <div className="text-center text-slate-600">{item.mt5}</div>
                <div className="text-center">
                  {item.advantage === 'mt5' && (
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      MT5
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Advanced Features
const AdvancedFeatures = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Market Depth (DOM)",
      description: "View real-time order book with Level II pricing data to make more informed trading decisions"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Multi-Threading",
      description: "Enhanced performance with multi-threaded strategy testing and optimization capabilities"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hedging System",
      description: "Advanced position management allowing multiple positions in the same instrument"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Economic Calendar",
      description: "Built-in economic calendar with market impact analysis and news integration"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "More Timeframes",
      description: "21 different timeframes including 2, 3, 4, 6, 8, and 12-hour charts for detailed analysis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Advanced encryption and security protocols with two-factor authentication support"
    }
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
            Advanced <span className="text-blue-600">MT5 Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Next-generation trading technology with enhanced capabilities
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-6">
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

// Download Options
const DownloadOptions = () => {
  const platforms = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Desktop (Windows/Mac)",
      description: "Full-featured MT5 platform with all advanced trading tools and multi-asset support",
      size: "28.5 MB",
      version: "Build 4220",
      features: ["Multi-asset trading", "38 Technical indicators", "MQL5 support"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile (iOS/Android)",
      description: "Complete mobile trading solution with advanced charting and order management",
      size: "45.2 MB",
      version: "Latest",
      features: ["Touch charts", "Push notifications", "One-tap trading"]
    },
    {
      icon: <Tablet className="w-12 h-12" />,
      title: "Web Terminal",
      description: "Browser-based MT5 platform with full functionality without software installation",
      size: "Cloud Based",
      version: "Web 2024",
      features: ["No download required", "Cross-platform", "Instant access"]
    }
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
            Choose Your <span className="text-blue-600">Platform</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access MetaTrader 5 on any device, anywhere, anytime
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-6">
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {platform.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {platform.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Size:</span>
                  <span className="font-semibold text-slate-900">{platform.size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Version:</span>
                  <span className="font-semibold text-slate-900">{platform.version}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {platform.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Platform Statistics
const PlatformStats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "150M+",
      label: "Global Users",
      description: "Growing rapidly"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.8/5",
      label: "User Rating",
      description: "Highest rated"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "0.05s",
      label: "Execution Speed",
      description: "Ultra-fast"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "500+",
      label: "Trading Instruments",
      description: "Multi-asset"
    }
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
            MT5 Platform <span className="text-blue-400">Statistics</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The most advanced trading platform trusted by professionals worldwide
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
              <div className="text-blue-400 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-300 font-semibold mb-1">{stat.label}</div>
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
            Experience the Future with <span className="text-blue-600">MT5</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Upgrade to MetaTrader 5 and unlock advanced trading capabilities with multi-asset support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download MT5 Free</span>
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Open Demo Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function MT5() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <MT5Hero />
      <ComparisonSection />
      <AdvancedFeatures />
      <DownloadOptions />
      <PlatformStats />
      <CTASection />
      <Footer />
    </main>
  );
}