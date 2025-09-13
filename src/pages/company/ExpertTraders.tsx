import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

import { TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';

const TopTraders = () => {
  const traders = [
    {
      name: 'RODNEY STEVE',
      winRate: '92.3%',
      avatar:
        'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/market-transaction-animation.webp',
      description:
        'Globally licensed and regulated trader with over 18 years knowledge in the market. General market Quote fear of making lost and FOMO blurs vision dealing with the market, major rules a proper control of emotions to win and make the best out from the market.',
      clientBase:
        '230+ clients mirroring and following live sessions to grow practically and improve general strategy in the market.',
      commissionDemands: '10% of any profit made on account when trading.',
      accountRiskLevel:
        "10% and giving clients the general impression you won't loose more than 10% of trading capital mirroring and growing from my trades, no matter how bad the market gets, account capital cannot go below 80%",
    },
    {
      name: 'Theresa Williams',
      winRate: '82.3%',
      avatar:
        'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/market-transaction-animation.webp',
      description:
        'I lead a cross-functional team of seven, building unique products and creating services that are helping people achieve more in their desired life. Deeply passionate about creating loved and trusted income that help people navigate their careers and achieve their career goals.',
      competencies:
        'Python, Hadoop, Big Data, Hive, SQL, PySpark, Keras, machine learning, TensorFlow, Technology intelligence, Tableau.',
      clientBase:
        '190+ clients mirroring and following live sessions to grow practically and improve general strategy in the market.',
      commissionDemands: '10.1% of any profit made on account when trading.',
      accountRiskLevel:
        "10% and giving clients the general impression you won't loose more than 10% of trading capital mirroring and growing from my trades, no matter how bad the market gets, account capital cannot go below 80%",
    },
    {
      name: 'Ishan Sandhu',
      winRate: '91.3%',
      avatar:
        'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/market-transaction-animation.webp',
      description:
        'Chief Executive officer at Equity Investors, leading a great team set on improving general trading habit and growing investors in the market. Focusing mainly on creating a community veteran investors who know how to make more and are willing to learn and grow, Experience speaks and attaining Top notch level is never a doubt.',
      clientBase:
        '1000+ clients mirroring and following live sessions to grow practically and improve general strategy in the market.',
      commissionDemands: '10.1% of any profit made on account when trading.',
      accountRiskLevel:
        "10% and giving clients the general impression you won't loose more than 10% of trading capital mirroring and growing from my trades, no matter how bad the market gets, account capital cannot go below 80%",
    },
    {
      name: 'Sarah Sniper',
      winRate: '98.3%',
      avatar:
        'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/market-transaction-animation.webp',
      description:
        "A registered and regulated trader, I'm more passionate about leading the coming generation through the path of financial freedom and success, most especially assisting members seeking good retirement goals grow on a good back and, improve returns generally in the market.",
      note: "P.S: If you're young and passionate about creating tech-focused products to provide unique solution and improve goals & statistics and passive income means, we can be a great team.",
      clientBase:
        '100+ clients mirroring and following live sessions to grow practically and improve general strategy in the market.',
      commissionDemands: '10.1% of any profit made on account when trading.',
      accountRiskLevel:
        "10% and giving clients the general impression you won't loose more than 10% of trading capital mirroring and growing from my trades, no matter how bad the market gets, account capital cannot go below 80%",
    },
    {
      name: 'Champ W. (The trading Champ)',
      winRate: '99.3%',
      avatar:
        'https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/market-transaction-animation.webp',
      description:
        "I'm an Owner/Founder of Optixians - and most importantly a happily married trader. I'm am a full time trader & love what I do for a living. I'm currently alert Swing Trades on my Discord Family to 650+ members group, I am also a content creator with over 100,000 followers on TikTok.",
      lifestyle:
        'I love travelling & meeting new people, I have a golden/poodle named Ollie who sleeps 16 hours a day, I enjoy going to the gym & playing basketball, tennis & love creating content daily.',
      goal: 'Major life goal is to assist the younger generation learn and understand the importance of trading and being in the market, and the positive effects to the entire universe.',
      clientBase:
        '500+ clients mirroring and following live sessions to grow practically and improve general strategy in the market.',
      commissionDemands: '10% of any profit made on account when trading.',
      accountRiskLevel:
        "10% and giving clients the general impression you won't loose more than 10% of trading capital mirroring and growing from my trades, no matter how bad the market gets, account capital cannot go below 80%",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Check out AdvantCrest Top Traders
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            When you enroll on AdvantCrest platform, you unlock exclusive
            access to over 1200 expert traders and automatically copy their
            trades with just a single tap. Simply choose the traders that suit
            your preferred style, follow expert trader instructions, and enjoy
            copy trading on the go!
          </p>
        </div>

        {/* Traders Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {traders.map((trader, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Trader Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={trader.avatar}
                    alt={trader.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-slate-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {trader.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-400">
                      Average Win Rate:
                    </span>
                    <span className="text-lg font-bold text-green-400">
                      {trader.winRate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                <p>{trader.description}</p>

                {trader.competencies && (
                  <p>
                    <span className="text-blue-400 font-semibold">
                      Competencies:
                    </span>{' '}
                    {trader.competencies}
                  </p>
                )}

                {trader.note && (
                  <p>
                    <span className="text-blue-400 font-semibold">P.S:</span>{' '}
                    {trader.note}
                  </p>
                )}

                {trader.lifestyle && <p>{trader.lifestyle}</p>}

                {trader.goal && (
                  <p>
                    <span className="text-blue-400 font-semibold">
                      Major life goal:
                    </span>{' '}
                    {trader.goal}
                  </p>
                )}
              </div>

              {/* Statistics */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-blue-400 font-semibold">
                      Client base:
                    </span>
                    <span className="text-slate-300 ml-1">
                      {trader.clientBase}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-green-400 font-semibold">
                      Commission demands:
                    </span>
                    <span className="text-slate-300 ml-1">
                      {trader.commissionDemands}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-orange-400 font-semibold">
                      Account risk level:
                    </span>
                    <span className="text-slate-300 ml-1">
                      {trader.accountRiskLevel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-lg text-slate-300 mb-6 max-w-4xl mx-auto">
            Explore our most earning traders and pick trough their profiles to
            learn about their trading habits, strategies, and risks they take.
            Explore the News Feed to chat with other traders.
          </p>

          <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors duration-300">
            <span>+1233 MORE TRADERS</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function ExpertTraders() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Expert Traders"
        subtitle="The AdvantCrest experts are one of the most competitive traders in the world. Making the most profit on AdvantCrest Market is an admirable title, getting it takes time, brains and patience."
        backgroundUrl="https://protradercopy.com/wp-content/themes/Moneta/images/copytrader-banner-bg.webp"
      />
      <TopTraders />
      <StepsSection />
      <Footer />
    </main>
  );
}
