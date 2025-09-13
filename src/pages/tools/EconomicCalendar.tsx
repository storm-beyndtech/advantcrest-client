import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';
import React, { useEffect, useRef } from 'react';

interface EconomicEvent {
  time: string;
  currency: string;
  impact: 'High' | 'Medium' | 'Low';
  event: string;
  forecast: string;
  previous: string;
}

const EconomicCalendarTable: React.FC = () => {
  const tradingViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView Economic Calendar widget
    if (tradingViewRef.current && !tradingViewRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: 'dark',
        isTransparent: true,
        width: '100%',
        height: '600',
        locale: 'en',
        importanceFilter: '-1,0,1',
        countryFilter: 'us,eu,gb,ca,jp,au,nz,ch',
      });
      tradingViewRef.current.appendChild(script);
    }
  }, []);

  const events: EconomicEvent[] = [
    {
      time: '08:30',
      currency: 'USD',
      impact: 'High',
      event: 'Non-Farm Payrolls',
      forecast: '185K',
      previous: '199K',
    },
    {
      time: '10:00',
      currency: 'USD',
      impact: 'Medium',
      event: 'Unemployment Rate',
      forecast: '3.7%',
      previous: '3.7%',
    },
    {
      time: '12:30',
      currency: 'EUR',
      impact: 'High',
      event: 'ECB Interest Rate Decision',
      forecast: '4.50%',
      previous: '4.50%',
    },
    {
      time: '14:00',
      currency: 'GBP',
      impact: 'Medium',
      event: 'GDP Growth Rate QoQ',
      forecast: '0.2%',
      previous: '0.6%',
    },
    {
      time: '15:30',
      currency: 'CAD',
      impact: 'High',
      event: 'Bank of Canada Rate Decision',
      forecast: '5.00%',
      previous: '5.00%',
    },
    {
      time: '16:45',
      currency: 'JPY',
      impact: 'Low',
      event: 'Manufacturing PMI',
      forecast: '49.2',
      previous: '48.9',
    },
    {
      time: '18:00',
      currency: 'AUD',
      impact: 'Medium',
      event: 'RBA Meeting Minutes',
      forecast: '-',
      previous: '-',
    },
  ];

  const getImpactColor = (impact: EconomicEvent['impact']): string => {
    const impactColors: Record<EconomicEvent['impact'], string> = {
      High: 'bg-red-500',
      Medium: 'bg-yellow-500',
      Low: 'bg-green-500',
    };
    return impactColors[impact];
  };

  const getCurrencyFlag = (currency: string): string => {
    const flags: Record<string, string> = {
      USD: '🇺🇸',
      EUR: '🇪🇺',
      GBP: '🇬🇧',
      CAD: '🇨🇦',
      JPY: '🇯🇵',
      AUD: '🇦🇺',
    };
    return flags[currency] || '🏳️';
  };

  return (
    <div className="space-y-8">
      {/* TradingView Economic Calendar Widget */}
      <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden">
        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-xl font-bold text-white">
            Live Economic Calendar
          </h3>
          <p className="text-slate-400 text-sm mt-1">Powered by TradingView</p>
        </div>
        <div className="tradingview-widget-container">
          <div
            ref={tradingViewRef}
            className="tradingview-widget-container__widget"
          ></div>
        </div>
      </div>

      {/* Custom Events Table */}
      <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden">
        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-xl font-bold text-white">Today's Key Events</h3>
          <p className="text-slate-400 text-sm mt-1">Friday, June 06, 2025</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/30 border-b border-slate-700/50">
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Time
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Currency
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Impact
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Event
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Forecast
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Previous
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event: EconomicEvent, index: number) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-sm text-white font-mono">
                    {event.time}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {getCurrencyFlag(event.currency)}
                      </span>
                      <span className="text-white font-semibold">
                        {event.currency}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getImpactColor(
                          event.impact,
                        )}`}
                      ></div>
                      <span className="text-sm text-slate-300">
                        {event.impact}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white max-w-xs">
                    {event.event}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-400 font-mono">
                    {event.forecast}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">
                    {event.previous}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-800/30 px-6 py-3 border-t border-slate-700/50">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>High Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span>Medium Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Low Impact</span>
            </div>
          </div>
        </div>
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
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/economic-calendar-home-bg.webp')",
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
            Economic Calendar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Keep an eye on market moving news events
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-30">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Explore upcoming global events <br />
            that impact the markets
          </h2>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-3">
            An important tool for short and long-term traders, and investors
            alike, the AdvantCrest economic calendar can help you decide
            whether to stay on the sidelines or whether to load up and take a
            position, capitalising on news-driven volatility.
          </p>
        </div>
        <EconomicCalendarTable />
      </div>
    </section>
  );
};

export default function EconomicCalendar() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <TradeVpsSections />
      <StepsSection />
      <Footer />
    </main>
  );
}
