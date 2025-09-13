import {
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: 24 },
    { id: 'account', name: 'Account & Registration', count: 6 },
    { id: 'trading', name: 'Trading & Platforms', count: 7 },
    { id: 'deposits', name: 'Deposits & Withdrawals', count: 5 },
    { id: 'security', name: 'Security & Regulation', count: 4 },
    { id: 'copytrading', name: 'Copy Trading', count: 2 },
  ];

  const faqItems = [
    {
      category: 'account',
      question: 'How do I open a trading account with AdvantCrest?',
      answer:
        "Opening an account is simple and takes just a few minutes. Click 'Open Account', fill in your personal details, verify your identity with required documents (ID and proof of address), make your initial deposit, and start trading. Our team will guide you through each step.",
    },
    {
      category: 'account',
      question: 'What documents do I need to verify my account?',
      answer:
        "You'll need a government-issued photo ID (passport, driver's license, or national ID card) and a proof of address document dated within the last 3 months (utility bill, bank statement, or government correspondence). Documents must be clear, in color, and show all four corners.",
    },
    {
      category: 'account',
      question: 'Can I have multiple trading accounts?',
      answer:
        'Yes, you can open multiple trading accounts under the same client profile. This allows you to test different strategies, separate your investments, or use different account types (DIRECT, PRIME, ULTRA) based on your trading needs.',
    },
    {
      category: 'account',
      question: 'What is the minimum age requirement?',
      answer:
        'You must be at least 18 years old to open a trading account with AdvantCrest. This is a regulatory requirement across all jurisdictions where we operate.',
    },
    {
      category: 'account',
      question: 'Can I change my account type after opening?',
      answer:
        'Yes, you can upgrade or change your account type at any time through your Client Portal. Simply contact our support team or submit a request through your dashboard. Note that ULTRA accounts require a minimum balance of $20,000.',
    },
    {
      category: 'account',
      question: 'How do I close my trading account?',
      answer:
        "To close your account, withdraw all funds, submit a written closure request through your Client Portal or email support, and confirm the closure via email. We'll process your request within 1-2 business days.",
    },

    {
      category: 'trading',
      question: 'What trading platforms are available?',
      answer:
        'We offer four powerful platforms: MetaTrader 4 (MT4) - the most popular platform with advanced charting, MetaTrader 5 (MT5) - enhanced features and more timeframes, AdvantCrest - our proprietary web-based platform, and AppTrader - mobile trading app for iOS and Android.',
    },
    {
      category: 'trading',
      question: 'What instruments can I trade?',
      answer:
        'You can trade 1000+ instruments including 44+ major and minor forex pairs, 16 global indices (US30, SPX500, NASDAQ, etc.), 10 commodities (Gold, Silver, Oil, etc.), 700+ share CFDs from global markets, 30+ cryptocurrency CFDs, 50+ ETFs, and 7 government bonds.',
    },
    {
      category: 'trading',
      question: 'What are the trading hours?',
      answer:
        'Forex markets are available 24/5 from Sunday 5pm ET to Friday 4pm ET. Stock CFDs follow their respective exchange hours. Cryptocurrencies are available 24/7. Commodities have specific trading hours based on the underlying market. Check your platform for specific instrument hours.',
    },
    {
      category: 'trading',
      question: 'Can I use Expert Advisors (EAs) and automated trading?',
      answer:
        'Yes, we fully support Expert Advisors on MetaTrader platforms. Our VPS hosting ensures your EAs run 24/7 with minimal latency. ECN accounts (PRIME/ULTRA) are ideal for algorithmic trading with fast execution and low spreads.',
    },
    {
      category: 'trading',
      question: 'What are the different order types available?',
      answer:
        'We support all standard order types: Market orders (instant execution), Limit orders (buy/sell at specific price), Stop orders (stop loss/take profit), Trailing stops (dynamic stop loss), and One-Cancels-Other (OCO) orders for advanced risk management.',
    },
    {
      category: 'trading',
      question: 'How do I calculate pip value and position size?',
      answer:
        'Pip value depends on your account currency, trade size, and currency pair. For EUR/USD, 1 pip on a standard lot (100,000 units) = $10. Use our built-in position size calculator or the formula: (Pip in decimal × Trade size × Exchange rate) / Account currency rate.',
    },
    {
      category: 'trading',
      question: 'What is slippage and how do you handle it?',
      answer:
        'Slippage occurs when your order executes at a different price than requested, usually during high volatility or low liquidity. We minimize slippage through our deep liquidity pools and advanced execution technology. ECN accounts have better fill rates during volatile markets.',
    },

    {
      category: 'deposits',
      question: 'What deposit methods do you accept?',
      answer:
        'We accept bank wire transfers (2-5 business days), credit/debit cards - Visa, Mastercard (instant), e-wallets - Skrill, Neteller, Perfect Money (instant), cryptocurrencies - Bitcoin, Ethereum, USDT (15-30 minutes), and local payment methods in various regions.',
    },
    {
      category: 'deposits',
      question: 'How long do deposits take to process?',
      answer:
        'Processing times vary by method: Card deposits and e-wallets are usually instant, bank transfers take 2-5 business days, cryptocurrency deposits take 15-30 minutes after network confirmation, and local payment methods vary by provider (usually same day).',
    },
    {
      category: 'deposits',
      question: 'Are there any deposit fees?',
      answer:
        "We don't charge deposit fees for most methods. However, your bank or payment provider may charge fees. Cryptocurrency deposits may incur network fees. Check with your payment provider for any applicable charges.",
    },
    {
      category: 'deposits',
      question: 'How do I withdraw my funds?',
      answer:
        "Log into your Client Portal, go to 'Withdraw Funds', select your preferred method, enter the amount, and submit your request. Withdrawals are processed to the same method used for deposits for security reasons. First-time withdrawals may require additional verification.",
    },
    {
      category: 'deposits',
      question: 'What are the withdrawal processing times and fees?',
      answer:
        'E-wallet withdrawals: 24 hours (usually free), card withdrawals: 3-5 business days (free), bank transfers: 3-7 business days (may incur fees), cryptocurrency: 24-48 hours (network fees apply). We process requests during business hours.',
    },

    {
      category: 'security',
      question: 'How are my funds protected?',
      answer:
        'Your funds are held in segregated accounts with AA-rated banks, completely separate from company funds. We provide negative balance protection, maintain professional indemnity insurance, and are regulated by multiple international authorities including SEC, ASIC, and FCA.',
    },
    {
      category: 'security',
      question: 'What security measures protect my account?',
      answer:
        'We use 256-bit SSL encryption, two-factor authentication (2FA), IP whitelisting, email notifications for account activities, secure login protocols, and regular security audits. Always use strong passwords and enable 2FA for maximum protection.',
    },
    {
      category: 'security',
      question: 'Is AdvantCrest regulated?',
      answer:
        "Yes, we're regulated by multiple authorities: U.S. Securities and Exchange Commission (SEC) - Registration No. 4342345462, Australian Securities and Investments Commission (ASIC), Financial Conduct Authority (FCA), and regulatory bodies in 10+ other jurisdictions.",
    },
    {
      category: 'security',
      question: 'What happens if AdvantCrest faces financial difficulties?',
      answer:
        'Client funds are fully protected through segregated accounts and cannot be used for company operations. In the unlikely event of financial difficulties, client funds would be returned in full through our comprehensive insurance coverage and regulatory protections.',
    },

    {
      category: 'copytrading',
      question: 'How does copy trading work?',
      answer:
        'Copy trading allows you to automatically replicate trades from experienced traders. Browse our 1200+ verified traders, review their performance history, risk levels, and trading style, then allocate funds to copy their trades proportionally to your account size.',
    },
    {
      category: 'copytrading',
      question: 'Can I control the risk when copy trading?',
      answer:
        "Yes, you have full control over risk settings: set maximum daily/monthly loss limits, adjust position sizes as a percentage of the trader's positions, choose which instruments to copy, set stop-loss levels, and pause copying at any time. You maintain complete control over your account.",
    },
  ];

  const filteredFAQs = faqItems.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: any) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Frequently Asked
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Find comprehensive answers to all your questions about trading with
            AdvantCrest. Our detailed FAQ covers everything from account setup to
            advanced trading strategies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <p className="text-xl text-slate-400">
                No questions found matching your search.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-slate-800/30 transition-colors duration-300"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="text-sm text-slate-400 capitalize">
                        {
                          faqCategories.find((cat) => cat.id === faq.category)
                            ?.name
                        }
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
                  </button>

                  {expandedFAQ === index && (
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-slate-700/50 bg-slate-800/20">
                      <div className="pt-6">
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our expert support team is available 24/5 to assist you with any
                questions or concerns. Get personalized help when you need it
                most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Live Chat
                </h4>
                <p className="text-slate-300 text-sm mb-4">
                  Instant support available 24/5
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Start Chat
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Email Support
                </h4>
                <p className="text-slate-300 text-sm mb-4">
                  Response within 2 hours
                </p>
                <button className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Send Email
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Phone Support
                </h4>
                <p className="text-slate-300 text-sm mb-4">
                  Dedicated support lines
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  Call Now
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-slate-300">
                <Clock className="w-5 h-5" />
                <span>
                  Support Hours: Monday - Friday, 24/5 Global Coverage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
