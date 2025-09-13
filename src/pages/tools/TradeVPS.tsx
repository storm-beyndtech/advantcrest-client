import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';
import { CheckCircle } from 'lucide-react';

const TradeVpsSections = () => {
  return (
    <section className="relative pb-0 py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <section
        className="relative min-h-180 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/forex-vps-banner-bg.webp')",
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
            Free Forex VPS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Keep your MT4 & MT5 running 24/7 with a free VPS
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-30">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Get free VPS hosting
          </h2>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-3">
            The Forex market runs 24/5, so to take advantage of the market that
            never sleeps, traders need the ultimate solution for speed,
            stability and platform uptime.
          </p>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            To keep your MetaTrader platform running 24 hours a day so you don’t
            miss a trade, we have partnered with HokoCloud to provide the
            fastest and most stable, automated VPS solution, perfect for serious
            traders!
          </p>
        </div>

        {/* Trade Macro Market Events */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-white leading-tight">
              Why use a Forex VPS?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Improved Execution Speed
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Keep your EA trading 24/5
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Log in through any computer or mobile device, anywhere,
                  anytime
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Avoid downtime due to computer issues
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Fast and easy to set up
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative max-w-100">
              <img
                src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/forex-vps-row1-img%EF%B9%96v=4.webp"
                alt="Economic Calendar Dashboard"
                className="w-full h-auto rounded-lg border border-slate-700/50 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TradeVps() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <TradeVpsSections />
      <StepsSection />
      <Footer />
    </main>
  );
}
