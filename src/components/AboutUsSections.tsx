import {
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Award,
  Building2,
  Lock,
  DollarSign,
  Target,
} from 'lucide-react';

const AboutPageSections = () => {
  return (
    <div className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Leading CFD Broker
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Start Trading with
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    AdvantCrest
                  </span>
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Access global markets with unrivalled access to 1000+ of the
                  most popular tradable instruments. Built for precision trading
                  with lightning-fast execution.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      1000+ Instruments
                    </h3>
                    <p className="text-sm text-slate-400">
                      Global market access
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">24/5 Trading</h3>
                    <p className="text-sm text-slate-400">
                      Round-the-clock access
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Regulated & Secure
                    </h3>
                    <p className="text-sm text-slate-400">
                      AA-rated bank custody
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fast Execution</h3>
                    <p className="text-sm text-slate-400">
                      Lightning-speed trades
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  <span className="relative z-10">Start Trading Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>

                <button className="px-8 py-3 border-2 border-slate-600 rounded-lg font-semibold text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Visual/Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Mock Dashboard Header */}
                <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
                      <span className="font-semibold text-white">
                        AdvantCrest
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Mock Trading Interface */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">
                        Account Balance
                      </div>
                      <div className="text-2xl font-bold text-white">
                        $156,743
                      </div>
                      <div className="text-sm text-green-400">+18.67%</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">
                        Monthly Volume
                      </div>
                      <div className="text-2xl font-bold text-white">$2.8M</div>
                      <div className="text-sm text-blue-400">This Month</div>
                    </div>
                  </div>

                  {/* Mock Asset List */}
                  <div className="space-y-2">
                    {['EUR/USD', 'GBP/USD', 'GOLD', 'OIL'].map((asset, i) => (
                      <div
                        key={asset}
                        className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3"
                      >
                        <span className="text-white font-medium">{asset}</span>
                        <span
                          className={`text-sm font-semibold ${
                            i % 2 === 0 ? 'text-green-400' : 'text-red-400'
                          }`}
                        >
                          {i % 2 === 0 ? '+' : '-'}
                          {(Math.random() * 2 + 0.5).toFixed(2)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 lg:py-28 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                AdvantCrest
              </span>
              <span className="block text-white">in Numbers</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Start trading with a leading, trusted broker backed by years of
              experience and billions in trading volume.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Years Experience */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <p className="text-slate-400">Years in the industry</p>
              </div>
            </div>

            {/* Monthly Trades */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">1.5M+</div>
                <p className="text-slate-400">Trades per month</p>
              </div>
            </div>

            {/* Client Accounts */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">1M+</div>
                <p className="text-slate-400">Client accounts</p>
              </div>
            </div>

            {/* Trading Volume */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <DollarSign className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">$100B+</div>
                <p className="text-slate-400">Monthly traded volume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Trust Section */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">The Brand that</span>
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    Traders Trust
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  AdvantCrest leverages over 10-years' experience as a global
                  financial markets' specialist, handling an average trading
                  volume in excess of $100 billion, monthly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Fully Segregated Funds
                    </h3>
                    <p className="text-slate-500">
                      All client funds are fully segregated in a trust account
                      held with an AA-Rated Global Bank for maximum security and
                      protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Negative Balance Protection
                    </h3>
                    <p className="text-slate-500">
                      Client trading accounts are covered by our negative
                      balance protection, ensuring you never lose more than your
                      deposit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Regulatory Compliance
                    </h3>
                    <p className="text-slate-500">
                      Subject to strict regulatory compliance audits, regular
                      accounting audits and complete indemnity insurance for
                      your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Transparent Trading
                    </h3>
                    <p className="text-slate-500">
                      We place unrivalled emphasis on transparency and strive to
                      meet and exceed the highest expectations for a secure
                      trading environment.
                    </p>
                  </div>
                </div>
              </div>

              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <span className="relative z-10">Open Trading Account</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Platform Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Trading Platform Interface Mock */}
                <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <span className="text-sm text-blue-400 border-b-2 border-blue-400">
                        MT4
                      </span>
                      <span className="text-sm text-slate-300">MT5</span>
                      <span className="text-sm text-slate-300">AdvantCrest</span>
                      <span className="text-sm text-slate-300">AppTrader</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Connected</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Account Summary */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        $89,450
                      </div>
                      <div className="text-sm text-slate-400">
                        Account Equity
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">15.2%</div>
                      <div className="text-sm text-slate-400">
                        Monthly Return
                      </div>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-gradient-to-r from-emerald-600/10 to-blue-600/10 border border-emerald-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-300">
                        Account Protected
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Funds secured in AA-rated bank. Negative balance
                      protection active.
                    </p>
                  </div>

                  {/* Popular Instruments */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">
                        Popular Instruments
                      </span>
                      <span className="text-blue-400">View All 1000+</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { symbol: 'EUR/USD', spread: '0.6', status: 'Open' },
                        { symbol: 'GBP/JPY', spread: '1.2', status: 'Open' },
                        { symbol: 'GOLD', spread: '0.35', status: 'Open' },
                        { symbol: 'US30', spread: '2.0', status: 'Open' },
                      ].map((instrument) => (
                        <div
                          key={instrument.symbol}
                          className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-white">
                                {instrument.symbol.slice(0, 2)}
                              </span>
                            </div>
                            <span className="text-white font-medium">
                              {instrument.symbol}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-white text-sm">
                              {instrument.spread} spread
                            </div>
                            <div className="text-green-400 text-xs">
                              {instrument.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 lg:py-28 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Our</span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text ml-3">
              Mission
            </span>
          </h2>
          <p className="text-2xl text-slate-300 leading-relaxed mb-12">
            AdvantCrest has been established to pursue the vision of
            developing easy and transparent market access for retail clients
            world-wide. We believe everyone deserves access to
            professional-grade trading tools and the global financial markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 rounded-lg font-semibold text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageSections;
