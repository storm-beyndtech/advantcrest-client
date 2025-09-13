import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';
import {
  Shield,
  Lock,
  Building2,
  CheckCircle,
  Award,
  Users,
  Globe,
} from 'lucide-react';

const InsuranceSection = () => {
  const protectionFeatures = [
    {
      icon: Shield,
      title: 'Client Fund Segregation',
      description:
        'All client funds are held in segregated accounts with AA-rated global banks, ensuring complete separation from company operational funds.',
      coverage: 'Up to $1,000,000',
      badge: 'Tier 1 Banks',
      colorClasses: {
        bg: 'bg-blue-600/20',
        text: 'text-blue-400',
        badgeBg: 'bg-blue-600/20 border-blue-500/30',
        badgeText: 'text-blue-300',
      },
    },
    {
      icon: Lock,
      title: 'Negative Balance Protection',
      description:
        'Advanced risk management ensures you never lose more than your account balance, protecting you from extreme market volatility.',
      coverage: '100% Protection',
      badge: 'All Accounts',
      colorClasses: {
        bg: 'bg-emerald-600/20',
        text: 'text-emerald-400',
        badgeBg: 'bg-emerald-600/20 border-emerald-500/30',
        badgeText: 'text-emerald-300',
      },
    },
    {
      icon: Building2,
      title: 'Professional Indemnity Insurance',
      description:
        'Comprehensive professional indemnity insurance covers all client interactions, operational risks, and potential system failures.',
      coverage: 'Up to $10,000,000',
      badge: "Lloyd's of London",
      colorClasses: {
        bg: 'bg-purple-600/20',
        text: 'text-purple-400',
        badgeBg: 'bg-purple-600/20 border-purple-500/30',
        badgeText: 'text-purple-300',
      },
    },
    {
      icon: Globe,
      title: 'Multi-Jurisdictional Regulation',
      description:
        'Licensed and regulated across 10+ international jurisdictions with strict compliance standards and regular audits.',
      coverage: 'Global Compliance',
      badge: '10+ Regulators',
      colorClasses: {
        bg: 'bg-cyan-600/20',
        text: 'text-cyan-400',
        badgeBg: 'bg-cyan-600/20 border-cyan-500/30',
        badgeText: 'text-cyan-300',
      },
    },
  ];

  const complianceStats = [
    { label: 'Regulatory Jurisdictions', value: '12+', icon: Globe },
    { label: 'Client Protection Coverage', value: '$10M', icon: Shield },
    { label: 'Bank Credit Rating', value: 'AA', icon: Building2 },
    { label: 'Years of Compliance', value: '10+', icon: Award },
    { label: 'Security Audits Annually', value: '4', icon: Lock },
    { label: 'Protected Client Accounts', value: '1M+', icon: Users },
  ];

  const regulators = [
    { name: 'SEC', country: 'United States', code: 'us' },
    { name: 'ASIC', country: 'Australia', code: 'au' },
    { name: 'FCA', country: 'United Kingdom', code: 'gb' },
    { name: 'BAFIN', country: 'Germany', code: 'de' },
    { name: 'CIMA', country: 'Italy', code: 'it' },
    { name: 'MAS', country: 'Singapore', code: 'sg' },
    { name: 'FSA', country: 'Japan', code: 'jp' },
    { name: 'FINMA', country: 'Switzerland', code: 'ch' },
  ];

  return (
    <section className="relative py-20 lg:py-50 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">
              Fully Insured & Protected
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Your Security is Our
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Top Priority
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Trade with absolute confidence knowing your investments are
            protected by multiple layers of security, comprehensive insurance
            coverage, and strict regulatory oversight across global financial
            markets.
          </p>
        </div>

        {/* Protection Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {protectionFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 ${feature.colorClasses.bg} rounded-2xl flex items-center justify-center`}
                  >
                    <feature.icon
                      className={`w-8 h-8 ${feature.colorClasses.text}`}
                    />
                  </div>
                  <div
                    className={`${feature.colorClasses.badgeBg} border rounded-full px-4 py-2`}
                  >
                    <span
                      className={`${feature.colorClasses.badgeText} text-sm font-semibold`}
                    >
                      {feature.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Coverage Amount */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-semibold">
                      Coverage:
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    {feature.coverage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Statistics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Compliance & Protection by the Numbers
            </h3>
            <p className="text-lg text-slate-300">
              Our commitment to security and regulatory compliance in measurable
              terms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Official Certificate & Documentation
            </h3>
            <p className="text-lg text-slate-300">
              View our official insurance and compliance certificate
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              {/* Certificate Image */}
              <div className="relative h-64 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center border-b border-slate-700/50">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664475691319-488c3131ea17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww"
                  alt="AdvantCrest Insurance Certificate"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <div className="text-white font-semibold">
                      Insurance Certificate
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  Professional Indemnity & Client Protection Certificate
                </h4>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issued by:</span>
                    <span className="text-slate-300 font-medium">
                      Lloyd's of London
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage:</span>
                    <span className="text-green-400 font-medium">
                      $10,000,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Valid until:</span>
                    <span className="text-green-400 font-medium">
                      March 2025
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  Comprehensive professional indemnity insurance coverage
                  protecting all client funds and operations. This certificate
                  confirms our commitment to client security and regulatory
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Bodies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Global Regulatory Compliance
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {regulators.map((regulator, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={`https://flagcdn.com/96x72/${regulator.code}.png`}
                  alt={`${regulator.name} flag`}
                  className="w-12 h-9 mx-auto mb-3 rounded-sm"
                />
                <div className="text-xl font-bold text-white mb-2">
                  {regulator.name}
                </div>
                <div className="text-sm text-slate-400">
                  {regulator.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Insurance() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <InsuranceSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
