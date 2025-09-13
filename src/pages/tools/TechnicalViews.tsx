import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

const NewsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <section
        className="relative min-h-180 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/economic-calendar-banner-img.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />

        {/* Main content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="max-w-5xl text-7xl font-bold text-white mb-6 tracking-tight">
            Technical Views
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Access real-time, expert trading ideas
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-30 pb-20">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            GET LIVE TRADING SETUPS AND
            <span className="block">IDEAS!</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Technical views provide actionable trading plans that combine
            algorithmic pattern recognition with senior market technical views.
            To unlock your access to technical Views, simply open a live account
            and fund it with $500 or more!
          </p>
        </div>

        {/* Trade Macro Market Events */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              ACCESS EXPERT
              <br />
              TRADE IDEAS
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed">
              Covering over 8000 tradable products, technical Views are
              developed from quantitative pattern recognition algos and senior
              market analysts.
            </p>
          </div>

          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/technical-views-row2-img1.webp"
                alt="Economic Calendar Dashboard"
                className="w-full h-auto rounded-lg border border-slate-700/50 relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Access News in Your Local Time */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/technical-views-row2-img2.webp"
                alt="Local Time News Dashboard"
                className="w-full h-auto rounded-lg border border-slate-700/50 relative z-10"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              MULTIPLE SETUPS
              <br />
              EACH DAY
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed">
              With multiple intraday and longer term trade setups, trendlines
              and an in-depth analysis of each trade, you can choose the setups
              that are suited to you.
            </p>
          </div>
        </div>

        {/* Customize Your News Feed */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              TOTAL RISK
              <br />
              MANAGEMENT
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed">
              With clearly defined profit targets and stop loss zones for each
              trade, you can choose the best R:R setups to help manage your risk
              like the professionals.
            </p>
          </div>

          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-violet-500/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/technical-views-row2-img3.webp"
                alt="News Feed Customization"
                className="w-full h-auto rounded-lg border border-slate-700/50 relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Learn From Past Events */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-34">
          <div className="order-2 lg:order-1 relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/technical-views-row2-img4.webp"
                alt="Historical Data Analysis"
                className="w-full h-auto rounded-lg border border-slate-700/50 relative z-10"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              TRADE YOUR FAVOURITE
              <br />
              INSTRUMENTS
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed">
              Whether you like to trade the major FX pairs, Exotics, Cryptos and
              more, you can find trade ideas for your preferred products with
              the easy search feature!
            </p>
          </div>
        </div>

        {/* More Trading Tools */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-16">
            MORE MONETA MARKETS TRADING TOOLS
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Market Buzz */}
          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-blue-500/15 rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50">
              <div className="relative h-64 p-10">
                <img
                  src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/trade-tools-row3-img1.webp"
                  alt="Market Buzz Tool"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-4">
                  MARKET BUZZ
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  Access news coverage and media content covering 35,000+
                  tradeable assets.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded text-sm transition-colors duration-300">
                  FIND OUT MORE
                </button>
              </div>
            </div>
          </div>

          {/* Featured Ideas */}
          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50">
              <div className="relative h-64 p-10">
                <img
                  src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/trade-tools-row3-img3.webp"
                  alt="Featured Ideas Tool"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-4">
                  FEATURED IDEAS
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  View actionable trading setups and follow their progress in
                  real time.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded text-sm transition-colors duration-300">
                  FIND OUT MORE
                </button>
              </div>
            </div>
          </div>

          {/* Economic Calendar */}
          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50">
              <div className="relative h-64 p-10">
                <img
                  src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/trade-tools-row3-img3.webp"
                  alt="Featured Ideas Tool"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-4">
                  Economic Calendar
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  Enjoy around the clock real-time economic data from across the
                  globe.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded text-sm transition-colors duration-300">
                  FIND OUT MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TechnicalViews() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <NewsSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
