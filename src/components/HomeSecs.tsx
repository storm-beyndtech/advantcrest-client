import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Zap,
  Smartphone,
  CheckCircle,
  Star,
  Copy,
  DollarSign,
  Target,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  BookOpen,
  Headphones,
  Mail,
  Building,
} from 'lucide-react';

// Custom hook for intersection animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return {
    ref,
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };
};

// About/Why Choose Us Section
export const AboutSection = () => {
  const animation = useScrollAnimation();

  const features = [
    {
      icon: <Copy className="w-8 h-8" />,
      title: 'Copy Elite Traders',
      description:
        'Automatically replicate trades from verified professional traders',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Management',
      description:
        'Advanced risk controls & protection with customizable stop-loss',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Real-Time Analytics',
      description: 'Comprehensive performance tracking & detailed analytics',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Execution',
      description:
        'Lightning-fast trade execution & min slippage across markets',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Our{' '}
            <span className="text-blue-600">Copy Trading Platform</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Join thousands of investors who trust our platform to grow their
            wealth through professional copy trading
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center hover:bg-slate-50 p-6 rounded-2xl transition-all duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
export const HowItWorks = () => {
  const animation = useScrollAnimation();

  const steps = [
    {
      step: '01',
      icon: <Users className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Browse Top Traders',
      description: 'Explore traders with performance history and risk metrics',
    },
    {
      step: '02',
      icon: <Target className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Select & Allocate',
      description:
        'Choose traders that match your risk profile and allocate profits',
    },
    {
      step: '03',
      icon: <Copy className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Start Copying',
      description:
        'Trades are automatically executed in your account in real-time',
    },
    {
      step: '04',
      icon: <TrendingUp className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Track Performance',
      description:
        'Monitor your portfolio growth and adjust allocations as needed',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How Copy Trading <span className="text-amber-300">Works</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Start copy trading in 4 simple steps and let professional traders
            grow your portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-8 text-center group-hover:border-amber-300/30 transition-all duration-300">
                <div className="text-amber-300 text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <div className="text-amber-300 flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-300">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-amber-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Investment Rationale Section
export const InvestmentRationale = () => {
  const animation = useScrollAnimation();

  const stocks = [
    {
      company: 'Tesla',
      logo: 'TSLA',
      title: 'Revolutionizing the Automotive Industry',
      description:
        'Tesla continues to lead in electric vehicle technology and sustainable transport solutions. With expanding global presence and innovative battery technology, Tesla positions itself at the forefront of the automotive revolution.',
      color: 'from-red-500 to-red-600',
    },
    {
      company: 'Meta',
      logo: 'META',
      title: 'Shaping the Future of Social Connectivity',
      description:
        "Meta's focus on the metaverse and social connectivity continues to drive innovation in digital experiences. With investments in VR/AR and social platforms, Meta is building the next generation of human connection.",
      color: 'from-blue-500 to-blue-600',
    },
    {
      company: 'NVIDIA',
      logo: 'NVDA',
      title: 'Powering Computing Evolution',
      description:
        'NVIDIA leads in AI computing and graphics processing technology. With growing demand for AI infrastructure and data center solutions, NVIDIA continues to be essential for the future of computing.',
      color: 'from-green-500 to-green-600',
    },
    {
      company: 'Apple',
      logo: 'AAPL',
      title: 'Innovation and Reliability Leader',
      description:
        'Apple maintains its position as a premium technology leader with consistent innovation in consumer electronics. Strong ecosystem integration and brand loyalty drive sustainable growth.',
      color: 'from-gray-500 to-gray-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Investment Rationale for{' '}
            <span className="bg-gradient-to-r from-amber-300 to-blue-500 bg-clip-text text-transparent">
              Top Stocks
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Discover why our expert traders choose these market-leading
            companies for long-term growth and strategic positioning in emerging
            sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {stocks.map((stock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stock.color} rounded-xl flex items-center justify-center text-white font-bold mr-4`}
                >
                  {stock.logo.slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {stock.company}
                  </h3>
                  <p className="text-blue-600 font-semibold">{stock.title}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {stock.description}
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                View Analysis
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Security of Funds Section with improved TradingView widget
export const SecurityOfFunds = () => {
  const animation = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={animation.ref}
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Security of <span className="text-amber-300">Funds</span>
            </h2>
            <h3 className="text-2xl font-semibold text-slate-300 mb-6">
              $1 MILLION EXCESS LOSS INSURANCE PER ACCOUNT
            </h3>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our partners have grown along with Matrix Copy Trade Group in the
              past two decades, and our latest entity, MCT Atlantic, is taking
              our success a step further by offering unparalleled security to
              our traders.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-300/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-slate-300">
                  Protected by Lloyd's of London insurance
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-300/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-slate-300">
                  Up to $1M protection per account
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-300/20 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-slate-300">
                  Segregated client funds in tier-1 banks
                </span>
              </div>
            </div>

            <button className="bg-amber-300 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300 flex items-center space-x-2">
              <span>Learn More About Security</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-stone-900/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-800/50">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Protected Funds Overview
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-stone-800/50 rounded-xl p-4 backdrop-blur-sm">
                    <h5 className="text-amber-300 font-semibold text-sm">
                      Protected Funds
                    </h5>
                    <p className="text-2xl font-bold text-white">$2.8B+</p>
                  </div>
                  <div className="bg-stone-800/50 rounded-xl p-4 backdrop-blur-sm">
                    <h5 className="text-amber-300 font-semibold text-sm">
                      Active Accounts
                    </h5>
                    <p className="text-2xl font-bold text-white">500K+</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[350px] rounded-xl overflow-hidden">
                <TradingViewAdvancedWidget symbol="NASDAQ:TSLA" height="350" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// TradingView Advanced Chart Widget (for Security section)
const TradingViewAdvancedWidget = ({
  symbol = 'NASDAQ:AAPL',
  height = '400',
}) => {
  const containerId = `tradingview_adv_${symbol.replace(
    ':',
    '_',
  )}_${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [[symbol]],
      chartOnly: false,
      width: '100%',
      height: height,
      locale: 'en',
      colorTheme: 'dark',
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
      fontSize: '14',
      noTimeScale: false,
      valuesTracking: '1',
      changeMode: 'price-and-percent',
      chartType: 'area',
      backgroundColor: 'rgba(15, 20, 25, 1)',
      lineWidth: 2,
      lineType: 0,
      dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
      container_id: containerId,
    });

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol, containerId, height]);

  return (
    <div className="tradingview-widget-container w-full" style={{ height }}>
      <div id={containerId} className="w-full h-full">
        <div className="bg-stone-800 rounded-lg h-full flex items-center justify-center">
          <span className="text-stone-400">Loading Chart...</span>
        </div>
      </div>
    </div>
  );
};

// Trading Platforms Section
export const TradingPlatforms = () => {
  const animation = useScrollAnimation();

  const platforms = [
    {
      name: 'TradingView',
      logo: 'TV',
      description:
        "TradingView has a high reputation and is a trusted broker for stocks, bonds, funds, options, and ETFs. DEGIRO provides its clients access to more than four world's largest stock exchanges.",
      features: [
        'Advanced Charting',
        'Real-time Data',
        'Social Trading',
        'Custom Indicators',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Mastermind Traders',
      logo: 'MT',
      description:
        "Mastermind Traders is a stock trading training organization. This company's website is appealing since it is well-organized and simple to use.",
      features: [
        'Expert Training',
        'Live Sessions',
        'Market Analysis',
        'Community Support',
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      name: 'RoboForex',
      logo: 'RF',
      description:
        'RoboForex has been operating since 2009 and is regulated by the FSC. From the moment of its foundation, RoboForex has always been focused on providing best trading conditions.',
      features: [
        'Multi-Asset Trading',
        'Low Spreads',
        'Expert Advisors',
        'Copy Trading',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'cOption',
      logo: 'CO',
      description:
        'cOption is regulated by financial institutions FINRA and SIPC. The next trading instruments are available to the clients of the company: stocks, options, ETFs, bonds.',
      features: [
        'Options Trading',
        'Portfolio Analysis',
        'Risk Management',
        'Professional Tools',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'DEGIRO',
      logo: 'DG',
      description:
        "DEGIRO has a high reputation and is a trusted broker for stocks, bonds, funds, options, and ETFs. DEGIRO provides its clients access to more than four world's largest stock exchanges.",
      features: [
        'Low Fees',
        'Global Markets',
        'Advanced Platform',
        'Regulatory Protection',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'IQ Option',
      logo: 'IQ',
      description:
        'IQ Option has a high reputation and is a trusted broker for stocks, bonds, funds, options, and ETFs. Trading is carried out through a convenient platform.',
      features: [
        'User-friendly Interface',
        'Educational Resources',
        'Demo Account',
        'Mobile Trading',
      ],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trading{' '}
            <span className="bg-gradient-to-r from-amber-300 to-blue-500 bg-clip-text text-transparent">
              Platforms
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our curated selection of professional trading platforms,
            each offering unique advantages for different trading styles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 group"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4`}
                >
                  {platform.logo}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {platform.name}
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {platform.description}
              </p>

              <div className="space-y-2 mb-6">
                {platform.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-amber-300 text-slate-900 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Top Traders Section
export const TopTraders = () => {
  const animation = useScrollAnimation();

  const traders = [
    {
      name: 'Alex Thompson',
      roi: '+127.3%',
      followers: '2.4K',
      risk: 'Medium',
      avatar: 'AT',
    },
    {
      name: 'Sarah Chen',
      roi: '+89.7%',
      followers: '1.8K',
      risk: 'Low',
      avatar: 'SC',
    },
    {
      name: 'Mike Rodriguez',
      roi: '+156.2%',
      followers: '3.1K',
      risk: 'High',
      avatar: 'MR',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Top Performing <span className="text-blue-600">Traders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Follow and copy trades from our most successful verified traders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {traders.map((trader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {trader.avatar}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {trader.name}
                </h3>
                <div className="flex justify-center items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-300 fill-current" />
                  <span className="text-slate-600">Verified Trader</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">12M ROI</span>
                  <span className="text-green-600 font-semibold">
                    {trader.roi}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Followers</span>
                  <span className="font-semibold text-slate-900">
                    {trader.followers}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Risk Level</span>
                  <span
                    className={`font-semibold ${
                      trader.risk === 'Low'
                        ? 'text-green-600'
                        : trader.risk === 'Medium'
                          ? 'text-amber-300'
                          : 'text-red-600'
                    }`}
                  >
                    {trader.risk}
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Copy Trader
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trust & Security Section
export const TrustSecurity = () => {
  const animation = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted & <span className="text-blue-600">Regulated</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your investments are protected by industry-leading security and
            regulatory compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="bg-slate-100 rounded-2xl p-8 mb-4 flex items-center justify-center h-32">
              <span className="text-stone-400">CySEC Logo</span>
            </div>
            <h3 className="font-semibold text-slate-900">CySEC Regulated</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="bg-slate-100 rounded-2xl p-8 mb-4 flex items-center justify-center h-32">
              <span className="text-stone-400">FCA Licensed</span>
            </div>
            <h3 className="font-semibold text-slate-900">FCA Licensed</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="bg-slate-100 rounded-2xl p-8 mb-4 flex items-center justify-center h-32">
              <span className="text-stone-400">SSL Secured</span>
            </div>
            <h3 className="font-semibold text-slate-900">
              Bank-Level Security
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="bg-slate-100 rounded-2xl p-8 mb-4 flex items-center justify-center h-32">
              <span className="text-stone-400">Investor Protection</span>
            </div>
            <h3 className="font-semibold text-slate-900">€20K Protection</h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">500K+</h3>
            <p className="text-slate-600">Active Users Worldwide</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">$2.8B</h3>
            <p className="text-slate-600">Total Trading Volume</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">4.8★</h3>
            <p className="text-slate-600">Trustpilot Rating</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mobile App Section
export const MobileApp = () => {
  const animation = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={animation.ref}
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Copy Trade <span className="text-amber-300">On-The-Go</span>
            </h2>

            <p className="text-xl text-slate-300 mb-8">
              Monitor your copy trades, discover new traders, and manage your
              portfolio from anywhere with our mobile app
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="text-amber-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-slate-300">
                  Real-time trade notifications
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-amber-300">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-slate-300">
                  Trader discovery and analysis
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-amber-300">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-slate-300">
                  Biometric security access
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Download iOS</span>
                <ExternalLink className="w-5 h-5" />
              </button>

              <button className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-900 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Download Android</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-stone-900 rounded-3xl p-8 border border-stone-800">
              <div className="bg-stone-800 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-slate-500 text-lg">
                  Mobile App Interface
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Support Section
export const Support = () => {
  const animation = useScrollAnimation();

  const supportOptions = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      description: '24/7 instant support',
      cta: 'Start Chat',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Help Center',
      description: 'Comprehensive guides',
      cta: 'Browse Articles',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Get detailed assistance',
      cta: 'Send Email',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak with experts',
      cta: 'Call Now',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Need <span className="text-blue-600">Help?</span>
          </h2>
          <p className="text-xl text-slate-600">
            Our expert support team is here to help you succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-blue-600 flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {option.title}
              </h3>
              <p className="text-slate-600 mb-6">{option.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                {option.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
export const CTASection = () => {
  const animation = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={animation.ref}
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>No minimum deposit</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>Start with $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>Free demo account</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
