import {
  Users,
  TrendingUp,
  Shield,
  Globe,
  Clock,
  BarChart3,
  Zap,
  FileText,
} from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUsSections = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-150 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/why-moneta-markets-banner-bg.webp')",
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
            Why Choose Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Enjoy fast and easy access to global markets
          </motion.p>
        </div>
      </section>

      {/* Traders of All Levels Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Traders of All Levels Prefer
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Mirrorcaps
              </span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Mirrorcaps has been constructed from the bottom up to offer
                simple and agile access to global Forex and CFD markets.
              </p>
              <p>
                We have spent years listening to and understanding what traders
                really look for when choosing a Forex broker. That's why we have
                built Mirrorcaps from the ground up to offer traders of all
                levels easy access to a wide variety of trading instruments via
                our powerful MetaTrader 4, MetaTrader 5, Mirrorcaps and AppTrader
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You Spoke We Listened Section */}
      <section className="relative py-20 lg:py-32 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              You Spoke. We Listened.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              All Mirrorcaps clients gain access to what really matters from
              a world-class Forex Broker.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Easy Account Opening
                </h3>
                <p className="text-slate-400">
                  Quick and simple registration process to get you trading in
                  minutes
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Fast Deposits & Withdrawals
                </h3>
                <p className="text-slate-400">
                  Lightning-fast processing for all your financial transactions
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Powerful MT4 and PRO Trader platforms
                </h3>
                <p className="text-slate-400">
                  Professional trading tools designed for optimal performance
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Up to 1000:1 Leverage
                </h3>
                <p className="text-slate-400">
                  Maximize your trading potential with flexible leverage options
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  1000+ Tradable Instruments
                </h3>
                <p className="text-slate-400">
                  Access a vast selection of forex, commodities, and CFDs
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-green-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <FileText className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Regulated Broker
                </h3>
                <p className="text-slate-400">
                  Fully licensed and regulated for your security and peace of
                  mind
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-3xl font-bold text-blue-400">0.0</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Low Trading Costs
                </h3>
                <p className="text-slate-400">
                  Competitive spreads and minimal fees to maximize your profits
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-teal-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-teal-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Clock className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  24/5 Multi-lingual Support
                </h3>
                <p className="text-slate-400">
                  Round-the-clock customer service in multiple languages
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-8 text-center hover:border-violet-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-violet-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Negative Balance Protection
                </h3>
                <p className="text-slate-400">
                  Never lose more than your initial investment with our
                  protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsSections;
