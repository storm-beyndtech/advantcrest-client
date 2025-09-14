import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  Users,
  Shield,
  BarChart3,
  Copy,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

// Hero Section
const TradersHero = () => {
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
            Professional <span className="text-green-400">Traders</span>
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Browse verified professional traders with proven track records
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Filters Section
const FiltersSection = () => {
  const [selectedRisk, setSelectedRisk] = useState('All');
  const [selectedPerformance, setSelectedPerformance] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search traders by name or strategy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:border-green-500"
              >
                <option value="All">All Risk Levels</option>
                <option value="Low">Low Risk</option>
                <option value="Medium">Medium Risk</option>
                <option value="High">High Risk</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            </div>

            <div className="relative">
              <select
                value={selectedPerformance}
                onChange={(e) => setSelectedPerformance(e.target.value)}
                className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:border-green-500"
              >
                <option value="All">All Performance</option>
                <option value="Top">Top Performers</option>
                <option value="Rising">Rising Stars</option>
                <option value="Consistent">Most Consistent</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Traders Grid
const TradersGrid = () => {
  const traders = [
    {
      name: "Alexander Chen",
      avatar: "AC",
      verified: true,
      roi: "+189.7%",
      monthlyRoi: "+12.4%",
      followers: "2.1K",
      winRate: "84%",
      risk: "Medium",
      maxDrawdown: "8.2%",
      totalTrades: "1,247",
      specialty: "Forex & Commodities",
      description: "15+ years experience in currency markets with focus on major pairs and gold trading.",
      strategies: ["Swing Trading", "Trend Following", "Risk Management"],
      status: "online",
      trend: "up"
    },
    {
      name: "Sarah Williams",
      avatar: "SW",
      verified: true,
      roi: "+156.3%",
      monthlyRoi: "+8.9%",
      followers: "1.8K",
      winRate: "78%",
      risk: "Low",
      maxDrawdown: "4.1%",
      totalTrades: "892",
      specialty: "Stock Indices",
      description: "Conservative approach with emphasis on blue-chip stocks and dividend strategies.",
      strategies: ["Value Investing", "Dividend Growth", "Index Trading"],
      status: "online",
      trend: "up"
    },
    {
      name: "Marcus Rodriguez",
      avatar: "MR",
      verified: true,
      roi: "+234.1%",
      monthlyRoi: "+18.7%",
      followers: "3.2K",
      winRate: "71%",
      risk: "High",
      maxDrawdown: "15.3%",
      totalTrades: "2,156",
      specialty: "Crypto & Tech Stocks",
      description: "Aggressive growth strategy focusing on high-potential crypto and technology stocks.",
      strategies: ["Growth Trading", "Momentum", "Crypto Arbitrage"],
      status: "online",
      trend: "up"
    },
    {
      name: "Emma Thompson",
      avatar: "ET",
      verified: true,
      roi: "+124.8%",
      monthlyRoi: "+7.2%",
      followers: "1.5K",
      winRate: "82%",
      risk: "Low",
      maxDrawdown: "5.8%",
      totalTrades: "743",
      specialty: "Bonds & Fixed Income",
      description: "Stable income generation through government and corporate bond trading.",
      strategies: ["Fixed Income", "Yield Trading", "Duration Management"],
      status: "offline",
      trend: "up"
    },
    {
      name: "David Kim",
      avatar: "DK",
      verified: true,
      roi: "+178.2%",
      monthlyRoi: "+11.3%",
      followers: "2.7K",
      winRate: "75%",
      risk: "Medium",
      maxDrawdown: "9.7%",
      totalTrades: "1,534",
      specialty: "Commodities & Energy",
      description: "Expert in oil, gas, and precious metals with deep market knowledge.",
      strategies: ["Commodity Trading", "Energy Markets", "Precious Metals"],
      status: "online",
      trend: "down"
    },
    {
      name: "Lisa Anderson",
      avatar: "LA",
      verified: true,
      roi: "+201.5%",
      monthlyRoi: "+14.6%",
      followers: "2.9K",
      winRate: "73%",
      risk: "High",
      maxDrawdown: "12.4%",
      totalTrades: "1,823",
      specialty: "Options & Derivatives",
      description: "Advanced options strategies with focus on income generation and hedging.",
      strategies: ["Options Trading", "Volatility Trading", "Derivatives"],
      status: "online",
      trend: "up"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traders.map((trader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {trader.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      trader.status === 'online' ? 'bg-green-400' : 'bg-slate-400'
                    }`}></div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-slate-900">{trader.name}</h3>
                      {trader.verified && (
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{trader.specialty}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <span className={`text-lg font-bold ${
                      trader.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {trader.roi}
                    </span>
                    {trader.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500">12M ROI</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {trader.description}
              </p>

              {/* Strategies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {trader.strategies.slice(0, 2).map((strategy, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                  >
                    {strategy}
                  </span>
                ))}
                {trader.strategies.length > 2 && (
                  <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                    +{trader.strategies.length - 2} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{trader.winRate}</div>
                  <div className="text-xs text-slate-500">Win Rate</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{trader.followers}</div>
                  <div className="text-xs text-slate-500">Followers</div>
                </div>
                <div>
                  <div className={`text-sm font-semibold ${
                    trader.risk === 'Low' ? 'text-green-600' :
                    trader.risk === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {trader.risk}
                  </div>
                  <div className="text-xs text-slate-500">Risk Level</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{trader.maxDrawdown}</div>
                  <div className="text-xs text-slate-500">Max DD</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-sm flex items-center justify-center space-x-2">
                  <Copy className="w-4 h-4" />
                  <span>Mirror</span>
                </button>
                <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                  <BarChart3 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
            Load More Traders
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "847",
      label: "Professional Traders",
      description: "Verified experts"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "78.4%",
      label: "Average Win Rate",
      description: "Across all traders"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: "92%",
      label: "User Satisfaction",
      description: "Mirror trading success"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: "$2.1B",
      label: "Total Volume",
      description: "Successfully mirrored"
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
            Mirror Trading <span className="text-green-400">Statistics</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of successful investors who trust our platform
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
              <div className="text-green-400 flex justify-center mb-4">
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

export default function Traders() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <TradersHero />
      <FiltersSection />
      <TradersGrid />
      <StatsSection />
      <Footer />
    </main>
  );
}