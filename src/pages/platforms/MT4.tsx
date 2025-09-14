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
  Clock
} from 'lucide-react';

// Hero Section
const MT4Hero = () => {
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
            MetaTrader <span className="text-orange-400">4</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            The world's most popular trading platform trusted by millions of traders
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download MT4</span>
            </button>
            <button className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300">
              Try Web Version
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Platform Features
const PlatformFeatures = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Charting",
      description: "Professional charting tools with 30+ technical indicators, multiple timeframes, and customizable chart types"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Expert Advisors (EAs)",
      description: "Automated trading systems and custom indicators to enhance your trading strategies and execution"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Trading",
      description: "Bank-level security with 128-bit encryption and secure connection protocols for safe trading"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Execution",
      description: "Ultra-low latency trade execution with instant order processing and real-time market data"
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
            MT4 Platform <span className="text-orange-600">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive trading tools designed for both beginner and professional traders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 hover:bg-slate-50 rounded-2xl transition-all duration-300"
            >
              <div className="text-orange-600 flex justify-center mb-6">
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
      title: "Desktop (Windows)",
      description: "Full-featured MT4 platform for Windows with all trading tools and capabilities",
      size: "15.2 MB",
      version: "Build 1380"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile (iOS/Android)",
      description: "Trade on the go with the mobile MT4 app featuring all essential trading functions",
      size: "25.8 MB",
      version: "Latest"
    },
    {
      icon: <Tablet className="w-12 h-12" />,
      title: "Web Terminal",
      description: "Access MT4 directly from your browser without downloading any software",
      size: "Browser Based",
      version: "Web 2024"
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
            Download <span className="text-orange-600">Options</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your preferred platform and start trading with MT4
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-orange-600 flex justify-center mb-6">
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

              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center space-x-2">
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

// Trading Tools Section
const TradingTools = () => {
  const tools = [
    {
      category: "Technical Analysis",
      items: [
        "30+ Built-in Technical Indicators",
        "9 Different Timeframes",
        "3 Chart Types (Bar, Candlestick, Line)",
        "Drawing Tools & Objects",
        "Custom Indicator Support"
      ]
    },
    {
      category: "Order Management",
      items: [
        "Market & Pending Orders",
        "Stop Loss & Take Profit",
        "Trailing Stops",
        "One-Click Trading",
        "Partial Order Closing"
      ]
    },
    {
      category: "Automation",
      items: [
        "Expert Advisors (EAs)",
        "MQL4 Programming Language",
        "Strategy Tester",
        "Custom Scripts",
        "Signal Services"
      ]
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
            Professional <span className="text-orange-600">Trading Tools</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need for successful trading in one comprehensive platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((toolGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {toolGroup.category}
              </h3>
              <div className="space-y-3">
                {toolGroup.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-slate-600">{item}</span>
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

// Platform Stats
const PlatformStats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "200M+",
      label: "Active Users",
      description: "Worldwide"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.6/5",
      label: "User Rating",
      description: "App stores"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "20+ Years",
      label: "Market Experience",
      description: "Proven reliability"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "0.1s",
      label: "Execution Speed",
      description: "Average latency"
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
            Why Choose <span className="text-orange-400">MT4?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join millions of traders who trust MetaTrader 4 for their trading needs
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
              <div className="text-orange-400 flex justify-center mb-4">
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
            Start Trading with <span className="text-orange-600">MT4 Today</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join millions of successful traders and experience the world's most trusted trading platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download MT4 Now</span>
            </button>
            <button className="border border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Try Demo Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function MT4() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <MT4Hero />
      <PlatformFeatures />
      <DownloadOptions />
      <TradingTools />
      <PlatformStats />
      <CTASection />
      <Footer />
    </main>
  );
}