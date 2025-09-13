import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

const RegulatorySection = () => {
  const regulators = [
    // Row 1
    { flagCode: 'us', code: 'SEC', name: 'Securities and Exchange Commission' },
    {
      flagCode: 'au',
      code: 'ASIC',
      name: 'Australian Securities and Investments Commission',
    },
    {
      flagCode: 'au',
      code: 'AUSTRAC',
      name: 'Australian Transaction Reports and Analysis Centre',
    },
    {
      flagCode: 'de',
      code: 'BAFIN',
      name: 'Federal Financial Supervisory Authority',
    },
    {
      flagCode: 'it',
      code: 'CIMA',
      name: 'Commissione Nazionale per le Società e la Borsa',
    },
    {
      flagCode: 'ae',
      code: 'ESCA',
      name: 'Emirates Securities and Commodities Authority',
    },

    // Row 2
    { flagCode: 'nz', code: 'FSC', name: 'Financial Services Commission' },
    { flagCode: 'at', code: 'FMA', name: 'Financial Market Authority' },
    { flagCode: 'sg', code: 'MAS', name: 'Monetary Authority of Singapore' },
    { flagCode: 'cn', code: 'TFG', name: 'The Finance Group' },
    {
      flagCode: 'vu',
      code: 'VFSC',
      name: 'Vanuatu Financial Services Commission',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Regulatory Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {regulators.map((regulator, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
            >
              <img
                src={`https://flagcdn.com/24x18/${regulator.flagCode}.png`}
                alt={`${regulator.code} flag`}
                className="w-6 h-4 object-cover rounded-sm"
              />
              <span className="text-white font-semibold text-sm">
                {regulator.code}
              </span>
            </div>
          ))}
        </div>

        {/*LTD Section */}
        <div className="text-center mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              AdvantCrest LTD
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              AdvantCrest is authorised and regulated by the U.S Securities And
              Exchange Commission ("SEC") with Registration No. 4342345462.
            </p>
          </div>
        </div>

        {/* Information Sections */}
        <div className="space-y-16">
          {/* Segregation of Client Funds */}
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Segregation of Client Funds
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-5xl mx-auto">
              When funding your trading account your funds are held in client
              segregated accounts with top tier banking institutions.
              AdvantCrest complies with the Securities Act and the Securities
              (Conduct of Business) Regulations and employs strict policies and
              procedures regarding the maintenance and operation of these
              accounts.
            </p>
          </div>

          {/* Anti-Money Laundering */}
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Anti-Money Laundering
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-5xl mx-auto">
              In accordance with the FSA Anti-Money Laundering and Counter
              Terrorism Financial Act, AdvantCrest has in place policies and
              procedures to ensure compliance with the law. These policies and
              procedures are designed to prevent money laundering activities
              from occurring. AdvantCrest Anti-Money Laundering policy
              outlines the documents that you must provide us before opening an
              account.
            </p>
          </div>

          {/* Licence */}
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Licence
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-5xl mx-auto">
              AdvantCrest, is authorised by the Seychelles Financial Services
              Authority as a Security Dealer for the provision of financial
              services under License NO SD018.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Regulations() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Regulations"
        subtitle="AdvantCrest Legal License"
        backgroundUrl="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/regulation-banner-bg.webp"
      />
      <RegulatorySection />
      <StepsSection />
      <Footer />
    </main>
  );
}
