import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

import { ExternalLink } from 'lucide-react';

const LeverageSection = () => {
  const assetClasses = [
    { class: 'FOREX', maxLeverage: 'UP TO 1000:1' },
    { class: 'INDICES', maxLeverage: 'UP TO 1000:1' },
    { class: 'ENERGY', maxLeverage: 'UP TO 500:1' },
    { class: 'SOFT COMMODITIES', maxLeverage: 'UP TO 50:1' },
    { class: 'PRECIOUS METALS', maxLeverage: 'UP TO 1000:1' },
    { class: 'SHARE CFDS', maxLeverage: 'UP TO 3:1' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* First Section - Choose Leverage */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Choose the leverage that suits
            <span className="block">your trading style</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Smart traders make smart decisions! No matter what your risk
            appetite, all AdvantCrest clients can adjust their leverage to
            suit their trading style or market conditions, quickly and simply
            from their Client Portal.
          </p>

          <p className="text-lg text-slate-300 font-semibold">
            Choose from 100:1 up to 1000:1 leverage on FX!
          </p>
        </div>

        {/* Second Section - Asset Classes Table */}
        <div className="text-center mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12 leading-tight">
            Unleash the power of leverage across
            <span className="block">a range of asset classes</span>
          </h3>

          {/* Asset Classes Table */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
              {/* Table Header */}
              <div className="bg-slate-800/50 border-b border-slate-700/50">
                <div className="grid grid-cols-2 py-4">
                  <div className="text-center">
                    <span className="text-lg font-semibold text-white">
                      Asset Class
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-white">
                      Max Leverage
                    </span>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              {assetClasses.map((asset, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 py-4 border-b border-slate-700/30 ${
                    index % 2 === 0 ? 'bg-slate-800/20' : 'bg-transparent'
                  }`}
                >
                  <div className="text-center">
                    <span className="text-slate-300 font-medium">
                      {asset.class}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-blue-400 font-semibold">
                      {asset.maxLeverage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Section - How to Change Leverage */}
        <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            How to change your account leverage
          </h3>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            To change the leverage of your AdvantCrest trading account,
            please log into your Client Portal, and then on the home screen
            select the leverage of the account they wish to change as per the
            image below.
          </p>

          {/* Dashboard Screenshot Placeholder */}
          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <img
                src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/leverage-change-img%EF%B9%96v=2.webp"
                alt="Client Portal Dashboard Screenshot"
                className="w-full h-auto border border-slate-700/50 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center space-x-3 bg-blue-600 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-2 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
            <span className="">Log in to Client Portal</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Leverage() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Leverage"
        subtitle="Trade with up to 1000:1 leverage on FX!"
        backgroundUrl="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/clients-leverage-banner.webp"
      />
      <LeverageSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
