import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

const AccountTypes = () => {
  const accountTypes = [
    {
      name: 'DIRECT',
      badge: 'STP',
      color: 'blue',
      platforms: ['PRO Trader', 'MetaTrader 4', 'MetaTrader 5', 'AppTrader'],
      executionType: 'STP',
      rangeOfMarkets:
        '44 FX Pairs | 16 Indices, 10 Commodities | 700+ Share CFDs',
      cryptoInfo: "30+ Crypto CFDs | 50+ ETF's 7 Bonds",
      minimumDeposit: '$50',
      minimumVolume: '0.01 Lot',
      leverage: 'Up to 1000:1',
      spreadsFrom: '1.2 Pips',
      commission: '$0',
      accountBaseCurrencies:
        'SAUD, SUSD, EQBP, EEUR, SSQD, SQAD, SNZD, XJPY, SHKD, SBRL',
      islamicAccount: 'YES',
      suitableFor: 'Beginners',
      stopOut: '50%',
      hedging: 'YES',
      buttonText: 'OPEN A LIVE ACCOUNT',
    },
    {
      name: 'PRIME',
      badge: 'ECN',
      color: 'blue',
      platforms: ['PRO Trader', 'MetaTrader 4', 'MetaTrader 5', 'AppTrader'],
      executionType: 'ECN',
      rangeOfMarkets:
        '44 FX Pairs | 16 Indices, 10 Commodities | 700+ Share CFDs',
      cryptoInfo: "30+ Crypto CFDs | 50+ ETF's 7 Bonds",
      minimumDeposit: '$50',
      minimumVolume: '0.01 Lot',
      leverage: 'Up to 1000:1',
      spreadsFrom: '0.0 Pips',
      commission: '$3 per lot per side',
      accountBaseCurrencies:
        'SAUD, SUSD, EQBP, EEUR, SSQD, SQAD, SNZD, XJPY, SHKD, SBRL',
      islamicAccount: 'YES',
      suitableFor: 'Scalpers and EAs',
      stopOut: '50%',
      hedging: 'YES',
      buttonText: 'OPEN A LIVE ACCOUNT',
    },
    {
      name: 'ULTRA',
      badge: 'ECN',
      color: 'blue',
      platforms: ['PRO Trader', 'MetaTrader 4', 'MetaTrader 5', 'AppTrader'],
      executionType: 'ECN',
      rangeOfMarkets:
        '44 FX Pairs | 16 Indices, 10 Commodities | 700+ Share CFDs',
      cryptoInfo: "30+ Crypto CFDs | 50+ ETF's 7 Bonds",
      minimumDeposit: '$20,000',
      minimumVolume: '0.01 Lot',
      leverage: 'Up to 500:1',
      spreadsFrom: '0.0 Pips',
      commission: '$1 per lot per side',
      accountBaseCurrencies:
        'SAUD, SUSD, EQBP, EEUR, SSQD, SQAD, SNZD, XJPY, SHKD, SBRL',
      islamicAccount: 'YES',
      suitableFor: 'Professional traders and money managers',
      stopOut: '50%',
      hedging: 'YES',
      buttonText: 'OPT IN',
    },
  ];

  const FeatureRow = ({ label, values, highlight = false }: any) => (
    <div
      className={`py-4 border-b border-slate-700/30 ${
        highlight ? 'bg-slate-800/20' : ''
      }`}
    >
      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="text-sm font-medium text-slate-400 px-4">{label}</div>
        {values.map((value: any) => (
          <div key={value} className="text-center">
            <span
              className={`text-sm ${
                highlight ? 'text-white font-semibold' : 'text-slate-300'
              }`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Trading accounts for traders of all
            <span className="block">styles</span>
          </h2>
        </div>

        {/* Account Types Comparison */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
          {/* Header Row */}
          <div className="bg-slate-800/50 border-b border-slate-700/50">
            <div className="grid grid-cols-4 gap-4 py-6">
              <div className="px-4"></div>
              {accountTypes.map((account, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-lg">
                      {account.name}
                      <span className="ml-2 bg-orange-500 text-xs px-2 py-1 rounded">
                        {account.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <FeatureRow
            label="Platform"
            values={accountTypes.map((acc) => acc.platforms.join(', '))}
          />

          {/* Execution Type */}
          <FeatureRow
            label="Execution Type"
            values={accountTypes.map((acc) => acc.executionType)}
            highlight={true}
          />

          {/* Range of Markets */}
          <FeatureRow
            label="Range of Markets"
            values={accountTypes.map((acc) => acc.rangeOfMarkets)}
          />

          {/* Crypto Info */}
          <div className="py-4 border-b border-slate-700/30">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="text-sm font-medium text-slate-400 px-4"></div>
              {accountTypes.map((account, index) => (
                <div key={index} className="text-center">
                  <span className="text-sm text-slate-300">
                    {account.cryptoInfo}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Minimum Deposit */}
          <FeatureRow
            label="Minimum Deposit"
            values={accountTypes.map((acc) => acc.minimumDeposit)}
            highlight={true}
          />

          {/* Minimum Volume */}
          <FeatureRow
            label="Minimum Volume"
            values={accountTypes.map((acc) => acc.minimumVolume)}
          />

          {/* Leverage */}
          <FeatureRow
            label="Leverage"
            values={accountTypes.map((acc) => acc.leverage)}
            highlight={true}
          />

          {/* Spreads From */}
          <FeatureRow
            label="Spreads From"
            values={accountTypes.map((acc) => acc.spreadsFrom)}
          />

          {/* Commission */}
          <FeatureRow
            label="Commission"
            values={accountTypes.map((acc) => acc.commission)}
            highlight={true}
          />

          {/* Account Base Currencies */}
          <FeatureRow
            label="Account Base Currencies"
            values={accountTypes.map((acc) => acc.accountBaseCurrencies)}
          />

          {/* Islamic Account */}
          <FeatureRow
            label="Islamic Account"
            values={accountTypes.map((acc) => acc.islamicAccount)}
            highlight={true}
          />

          {/* Suitable For */}
          <FeatureRow
            label="Suitable For"
            values={accountTypes.map((acc) => acc.suitableFor)}
          />

          {/* Stop Out */}
          <FeatureRow
            label="Stop Out"
            values={accountTypes.map((acc) => acc.stopOut)}
            highlight={true}
          />

          {/* Hedging */}
          <FeatureRow
            label="Hedging"
            values={accountTypes.map((acc) => acc.hedging)}
          />

          {/* Action Buttons */}
          <div className="bg-slate-800/30 border-t border-slate-700/50">
            <div className="grid grid-cols-4 gap-4 py-8">
              <div className="px-4"></div>
              {accountTypes.map((account, index) => (
                <div key={index} className="text-center px-4">
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105">
                    {account.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function CompareAcc() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Trading Accounts"
        subtitle="Choose our Direct STP, Prime ECN or Ultra ECN Accounts"
        backgroundUrl="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/clients-compare-accounts-banner.webp"
      />
      <AccountTypes />
      <StepsSection />
      <Footer />
    </main>
  );
}
