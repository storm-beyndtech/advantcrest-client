import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Search,
  Target,
  Copy,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  BarChart3,
  Settings
} from 'lucide-react';

// Hero Section
const HowItWorksHero = () => {
  return (
    <section className="relative bg-slate-900 py-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How Mirror Trading <span className="text-blue-400">Works</span>
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Master automated trading by following successful traders in 4 simple steps
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Steps Section
const StepsSection = () => {
  const steps = [
    {
      step: '01',
      icon: <Search className="w-12 h-12" />,
      title: 'Discover Top Traders',
      description: 'Browse our marketplace of verified professional traders with transparent performance histories, risk profiles, and detailed analytics.',
      details: [
        'Filter by performance, risk level, and trading style',
        'View detailed trading history and statistics',
        'Read trader profiles and strategies',
        'Check real-time performance metrics'
      ]
    },
    {
      step: '02',
      icon: <Target className="w-12 h-12" />,
      title: 'Select & Configure',
      description: 'Choose traders that match your investment goals and set your risk parameters, investment amounts, and trading preferences.',
      details: [
        'Set maximum investment per trade',
        'Configure stop-loss and take-profit levels',
        'Choose proportional or fixed copy amounts',
        'Select specific trading instruments to mirror'
      ]
    },
    {
      step: '03',
      icon: <Copy className="w-12 h-12" />,
      title: 'Start Mirroring',
      description: 'Activate automatic mirroring and watch as every trade made by your chosen trader is replicated in your account instantly.',
      details: [
        'Real-time trade execution with minimal latency',
        'Automatic scaling based on your settings',
        'Continuous monitoring and risk management',
        'Instant notifications for all copied trades'
      ]
    },
    {
      step: '04',
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Monitor & Optimize',
      description: 'Track performance, analyze results, and optimize your mirror trading portfolio for maximum returns with detailed analytics.',
      details: [
        'Real-time portfolio performance tracking',
        'Detailed profit/loss analysis per trader',
        'Performance comparison and benchmarking',
        'Easy adjustment of trading parameters'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Simple <span className="text-blue-600">4-Step Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get started with mirror trading in minutes and start copying successful strategies
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 text-3xl font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {step.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-slate-50 rounded-2xl p-8 h-80 flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-600">
                        {step.icon}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm">Step {step.step} Illustration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Key Features Section
const KeyFeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Advanced risk controls with customizable stop-loss, take-profit, and maximum drawdown settings"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Comprehensive performance tracking with detailed charts, statistics, and portfolio analysis"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Flexible Configuration",
      description: "Customize copy ratios, trade sizes, and specific instruments to match your trading preferences"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Features",
      description: "Connect with traders, follow performance updates, and access exclusive trading insights"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Advanced <span className="text-blue-600">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional tools and features designed to maximize your mirror trading success
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
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "What is Mirror Trading?",
      answer: "Mirror Trading is an automated investment strategy where your account automatically replicates the trades of successful professional traders in real-time."
    },
    {
      question: "How much do I need to start?",
      answer: "You can start mirror trading with as little as $100. However, we recommend starting with at least $500 for better diversification across multiple traders."
    },
    {
      question: "Can I stop mirroring a trader anytime?",
      answer: "Yes, you have full control. You can stop mirroring any trader instantly, and you can also close existing positions or let them run according to the trader's strategy."
    },
    {
      question: "What are the fees for mirror trading?",
      answer: "We charge a performance fee only when you make profits. There are no subscription fees or setup costs - you only pay when mirror trading generates returns."
    },
    {
      question: "How do I choose the right trader to mirror?",
      answer: "Consider factors like historical performance, risk level, trading style, maximum drawdown, and consistency. Our platform provides detailed analytics to help you make informed decisions."
    },
    {
      question: "Is my capital at risk?",
      answer: "Yes, like all trading, mirror trading involves risk. However, you can manage risk through stop-loss settings, position sizing, and diversifying across multiple traders."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start <span className="text-blue-400">Mirror Trading?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of investors who are already growing their wealth through mirror trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Start Mirror Trading</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-colors duration-300">
              View All Traders
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <HowItWorksHero />
      <StepsSection />
      <KeyFeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}