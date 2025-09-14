import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Copy,
  Shield,
  BarChart3,
  Clock,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Hero Section
const MirrorTradingHero = () => {
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
            Mirror <span className="text-purple-400">Trading</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Automatically replicate successful traders' strategies and grow your portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/mirror-trading/traders"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Browse Traders</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/mirror-trading/how-it-works"
              className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300"
            >
              How It Works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const MirrorTradingFeatures = () => {
  const features = [
    {
      icon: <Copy className="w-8 h-8" />,
      title: "Automatic Mirroring",
      description: "Every trade executed by your chosen trader is automatically replicated in your account in real-time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Set custom stop-loss levels, maximum investment amounts, and risk parameters to protect your capital"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track detailed performance metrics, ROI, and win rates of all traders before you start mirroring"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Execution",
      description: "Lightning-fast trade execution ensures minimal slippage and optimal entry/exit points"
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
            Mirror Trading <span className="text-purple-600">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced technology that makes copying professional traders simple and secure
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

// Top Traders Preview
const TopTradersPreview = () => {
  const topTraders = [
    {
      name: "Alexander Chen",
      avatar: "AC",
      roi: "+189.7%",
      followers: "2.1K",
      winRate: "84%",
      risk: "Medium",
      specialty: "Forex & Commodities"
    },
    {
      name: "Sarah Williams", 
      avatar: "SW",
      roi: "+156.3%",
      followers: "1.8K",
      winRate: "78%",
      risk: "Low",
      specialty: "Stock Indices"
    },
    {
      name: "Marcus Rodriguez",
      avatar: "MR", 
      roi: "+234.1%",
      followers: "3.2K",
      winRate: "71%",
      risk: "High",
      specialty: "Crypto & Tech Stocks"
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
            Top Performing <span className="text-purple-600">Traders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Mirror the strategies of our most successful traders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topTraders.map((trader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {trader.avatar}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {trader.name}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{trader.specialty}</p>
                <div className="flex justify-center items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm text-slate-600">Verified</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">12M ROI</span>
                  <span className="text-green-600 font-semibold">{trader.roi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Win Rate</span>
                  <span className="font-semibold text-slate-900">{trader.winRate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Followers</span>
                  <span className="font-semibold text-slate-900">{trader.followers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Risk Level</span>
                  <span className={`font-semibold ${
                    trader.risk === 'Low' ? 'text-green-600' :
                    trader.risk === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {trader.risk}
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                Mirror Trader
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/mirror-trading/traders"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>View All Traders</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const MirrorTradingBenefits = () => {
  const benefits = [
    "No trading experience required",
    "Diversify across multiple strategies",
    "Transparent performance history",
    "Full control over risk parameters",
    "Start with as little as $100",
    "24/7 automated trading"
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-purple-400">Mirror Trading?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Access professional trading strategies without the years of experience 
              typically required for successful trading.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-stone-900/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-800">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Mirror Trading Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15K+</div>
                  <div className="text-slate-300 text-sm">Active Mirror Traders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$2.1B</div>
                  <div className="text-slate-300 text-sm">Total Mirrored Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">847</div>
                  <div className="text-slate-300 text-sm">Expert Traders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                  <div className="text-slate-300 text-sm">User Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function MirrorTrading() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <MirrorTradingHero />
      <MirrorTradingFeatures />
      <TopTradersPreview />
      <MirrorTradingBenefits />
      <Footer />
    </main>
  );
}