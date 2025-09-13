import { Globe, DollarSign, BarChart3 } from 'lucide-react';

const InfrastructurePageSections = () => {
  const partnerLogos = [
    {
      name: 'Goldman Sachs',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img1.webp',
    },
    {
      name: 'JP Morgan',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img2.webp',
    },
    {
      name: 'Credit Suisse',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img3.webp',
    },
    {
      name: 'UBS',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img4.webp',
    },
    {
      name: 'Bank of America',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img5.webp',
    },
    {
      name: 'Deutsche Bank',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img6.webp',
    },
    {
      name: 'Nomura',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img7.webp',
    },
    {
      name: 'Barclays',
      src: 'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row1-img8.webp',
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-150 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-banner-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Main content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            About us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Start Trading with a leading CFD Broker
          </p>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
              Get Fast and Stable Access to
              <span className="block">Global Markets</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Gain access to the deepest liquidity and the best available prices
              on every trade! Due to the high trading volume that we pass to our
              liquidity providers, we are able to negotiate the best prices,
              which we then pass to trade directly to our clients.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/20">
                  <img
                    src={`${partner.src}`}
                    alt={partner.name}
                    className="h-12 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Execution Centers */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
              Experience Even Faster
              <span className="block">Trade Execution!</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-4">
              We connect you to the deepest liquidity pool via One-click
              next-generation pricing engine, to provide you with the{' '}
              <strong>fastest</strong> possible trade execution.
            </p>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              With trading servers all around the world connected via fiber
              optics to Tier 1 liquidity providers, your orders are
              automatically sent to the order nearest to you, so you get the
              best and executed instantly at our Equinix servers around the
              world.
            </p>
          </div>
        </div>

        {/* map */}
        <img
          src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row3-img1.webp"
          alt="map"
          className="w-full"
        />
      </section>

      {/* Trading Conditions Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row4-img2%EF%B9%96v=1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-white">
            Access Industry Leading <br /> Trading Conditions
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Low Cost */}
            <div className="text-center">
              <div className="w-24 h-24 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Low Cost</h3>
              <p className="text-slate-300">
                Competitive spreads starting from 0.0 pips
              </p>
            </div>

            {/* Deep Liquidity - Center */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Deep Liquidity
              </h3>
              <p className="text-slate-300">
                Access to institutional-grade liquidity pools
              </p>
            </div>

            {/* Transparency */}
            <div className="text-center">
              <div className="w-24 h-24 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Transparency
              </h3>
              <p className="text-slate-300">
                Full transparency in pricing and execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Partners Section */}
      <section className="relative py-20 lg:py-32 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
              True Tech leaders in Financial Services
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We partner with technological giants so you can have advantage of
              the most innovative trading infrastructure available. Our robust
              technology stack ensures optimal performance and reliability.
            </p>
          </div>

          {/* Tech Partner Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center max-w-2xl mx-auto">
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/20">
                <img
                  src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row5-img01%EF%B9%96v=1.webp"
                  alt="OneZero"
                  className="h-16 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/20">
                <img
                  src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/our-trading-infrastructure-row5-img02%EF%B9%96v=1.webp"
                  alt="Equinix"
                  className="h-16 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePageSections;
