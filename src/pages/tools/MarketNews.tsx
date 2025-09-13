import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';
import React, { useEffect, useRef } from 'react';

const MarketNewsWidget: React.FC = () => {
  const marketNewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView Market News widget
    if (marketNewsRef.current && !marketNewsRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: 'all_symbols',
        colorTheme: 'dark',
        isTransparent: true,
        displayMode: 'regular',
        width: '100%',
        height: '600',
        locale: 'en',
      });
      marketNewsRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden">
      <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
        <h3 className="text-xl font-bold text-white">Market News & Analysis</h3>
        <p className="text-slate-400 text-sm mt-1">
          Real-time financial news and market insights
        </p>
      </div>
      <div className="tradingview-widget-container">
        <div
          ref={marketNewsRef}
          className="tradingview-widget-container__widget"
        ></div>
      </div>
    </div>
  );
};

const TradeVpsSections = () => {
  return (
    <section className="relative pb-0 py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <section
        className="relative min-h-180 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/market-news-bg.webp')",
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
            Market News
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Daily Coverage of Global Financial Markets
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-30">
        <MarketNewsWidget />
      </div>
    </section>
  );
};

export default function MarketNews() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <TradeVpsSections />
      <StepsSection />
      <Footer />
    </main>
  );
}
