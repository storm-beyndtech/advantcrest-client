import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';
import React, { useEffect, useRef } from 'react';

interface SentimentData {
  pair: string;
  longPercentage: number;
  shortPercentage: number;
  trend: 'Bullish' | 'Bearish' | 'Neutral';
  change24h: number;
}

const ForexSentimentWidget: React.FC = () => {
  const tradingViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView Technical Analysis widget for Forex sentiment
    if (tradingViewRef.current && !tradingViewRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval: '1D',
        width: '100%',
        isTransparent: true,
        height: '450',
        symbol: 'FX:EURUSD',
        showIntervalTabs: true,
        displayMode: 'single',
        locale: 'en',
        colorTheme: 'dark',
      });
      tradingViewRef.current.appendChild(script);
    }
  }, []);

  const sentimentData: SentimentData[] = [
    {
      pair: 'EUR/USD',
      longPercentage: 68,
      shortPercentage: 32,
      trend: 'Bullish',
      change24h: +2.4,
    },
    {
      pair: 'GBP/USD',
      longPercentage: 45,
      shortPercentage: 55,
      trend: 'Bearish',
      change24h: -1.8,
    },
    {
      pair: 'USD/JPY',
      longPercentage: 72,
      shortPercentage: 28,
      trend: 'Bullish',
      change24h: +3.2,
    },
    {
      pair: 'AUD/USD',
      longPercentage: 41,
      shortPercentage: 59,
      trend: 'Bearish',
      change24h: -2.1,
    },
    {
      pair: 'USD/CAD',
      longPercentage: 52,
      shortPercentage: 48,
      trend: 'Neutral',
      change24h: +0.3,
    },
    {
      pair: 'NZD/USD',
      longPercentage: 38,
      shortPercentage: 62,
      trend: 'Bearish',
      change24h: -2.7,
    },
    {
      pair: 'USD/CHF',
      longPercentage: 65,
      shortPercentage: 35,
      trend: 'Bullish',
      change24h: +1.9,
    },
    {
      pair: 'EUR/GBP',
      longPercentage: 49,
      shortPercentage: 51,
      trend: 'Neutral',
      change24h: -0.1,
    },
  ];

  const getTrendColor = (trend: SentimentData['trend']): string => {
    const trendColors: Record<SentimentData['trend'], string> = {
      Bullish: 'text-green-400',
      Bearish: 'text-red-400',
      Neutral: 'text-yellow-400',
    };
    return trendColors[trend];
  };

  const getTrendIcon = (trend: SentimentData['trend']): string => {
    const trendIcons: Record<SentimentData['trend'], string> = {
      Bullish: '↗️',
      Bearish: '↘️',
      Neutral: '➡️',
    };
    return trendIcons[trend];
  };

  const getChangeColor = (change: number): string => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getProgressBarColor = (percentage: number): string => {
    if (percentage >= 60) return 'bg-green-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-8">
      {/* TradingView Technical Analysis Widget */}
      <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden">
        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-xl font-bold text-white">Technical Analysis</h3>
          <p className="text-slate-400 text-sm mt-1">
            Real-time technical indicators and market sentiment
          </p>
        </div>
        <div className="tradingview-widget-container">
          <div
            ref={tradingViewRef}
            className="tradingview-widget-container__widget"
          ></div>
        </div>
      </div>

      {/* Custom Forex Sentiment Table */}
      <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden">
        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-xl font-bold text-white">
            Forex Market Sentiment
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Live trader positioning and sentiment analysis
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/30 border-b border-slate-700/50">
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Currency Pair
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Long/Short
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Sentiment
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  Trend
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-slate-300">
                  24h Change
                </th>
              </tr>
            </thead>
            <tbody>
              {sentimentData.map((data: SentimentData, index: number) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-sm font-semibold text-white">
                    {data.pair}
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-green-400">
                          Long {data.longPercentage}%
                        </span>
                        <span className="text-red-400">
                          Short {data.shortPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressBarColor(
                            data.longPercentage,
                          )}`}
                          style={{ width: `${data.longPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          data.longPercentage > data.shortPercentage
                            ? 'bg-green-500'
                            : data.longPercentage < data.shortPercentage
                              ? 'bg-red-500'
                              : 'bg-yellow-500'
                        }`}
                      ></div>
                      <span className="text-sm text-slate-300">
                        {data.longPercentage > data.shortPercentage
                          ? 'Bullish'
                          : data.longPercentage < data.shortPercentage
                            ? 'Bearish'
                            : 'Neutral'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {getTrendIcon(data.trend)}
                      </span>
                      <span
                        className={`text-sm font-medium ${getTrendColor(
                          data.trend,
                        )}`}
                      >
                        {data.trend}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-mono font-semibold ${getChangeColor(
                        data.change24h,
                      )}`}
                    >
                      {data.change24h > 0 ? '+' : ''}
                      {data.change24h.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-800/30 px-6 py-3 border-t border-slate-700/50">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Bullish Sentiment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>Bearish Sentiment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span>Neutral Sentiment</span>
            </div>
            <span className="ml-auto">Data updated every 15 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForexSentimentSections = () => {
  return (
    <section className="relative pb-0 py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <section
        className="relative min-h-125 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/forex-sentiment-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />

        {/* Main content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="max-w-5xl text-7xl font-bold text-white mb-6 tracking-tight">
            Technical Rating Indicator
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Boost your Edge with the AdvantCrest Technical Rating Indicator
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-30">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            View Buy or Sell Ratings Across <br />
            Thousands of Instruments
          </h2>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-3">
            ProTrader-Copy’ technical analysis ratings are a vital tool for any
            trader, because it combines a summary of buy and sell signals based
            on several technical indicators. Regardless of whether your like to
            trade FX, Indices, or any other markets, give your edge a boost with
            the ProTrader-Copy Technical Rating Indicator.
          </p>
        </div>

        <ForexSentimentWidget />
      </div>
    </section>
  );
};

export default function ForexSentiment() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <ForexSentimentSections />
      <StepsSection />
      <Footer />
    </main>
  );
}
