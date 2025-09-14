import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Award,
  Target,
  Clock,
  BarChart3,
  DollarSign
} from 'lucide-react';

// Hero Section for Recap
const RecapHero = () => {
  return (
    <section className="relative bg-slate-900 py-16 pt-48 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trading <span className="text-amber-400">Recap</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Comprehensive overview of your trading journey and performance metrics
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-300">
              View Your Recap
            </button>
            <button className="border border-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300">
              Download Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Performance Metrics Section
const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Total Return",
      value: "+247.5%",
      change: "+12.3% this month",
      color: "text-green-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Win Rate",
      value: "78.4%",
      change: "+3.2% improvement",
      color: "text-blue-400"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Profit/Loss",
      value: "$24,750",
      change: "+$3,200 this month",
      color: "text-amber-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Trades Executed",
      value: "1,247",
      change: "156 this month",
      color: "text-purple-400"
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
            Your Trading <span className="text-blue-600">Performance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Track your progress with detailed analytics and performance metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`${metric.color} flex justify-center mb-6`}>
                {metric.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                {metric.value}
              </h3>
              <p className="text-slate-600 font-medium mb-2">{metric.title}</p>
              <p className="text-sm text-slate-500">{metric.change}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Achievement Section
const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Top Performer",
      description: "Ranked in top 5% of traders this quarter",
      badge: "ELITE"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Trading Leader",
      description: "500+ followers copying your strategies",
      badge: "LEADER"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Risk Master",
      description: "Maintained optimal risk-reward ratio",
      badge: "EXPERT"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Consistency Champion",
      description: "90+ day profitable trading streak",
      badge: "CHAMPION"
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trading <span className="text-amber-400">Achievements</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Celebrate your milestones and recognize your trading excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 text-center hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="text-amber-400 flex justify-center mb-6">
                {achievement.icon}
              </div>
              <div className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                {achievement.badge}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {achievement.title}
              </h3>
              <p className="text-slate-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trading Timeline Section
const TradingTimeline = () => {
  const timelineEvents = [
    {
      month: "January 2024",
      title: "Trading Journey Started",
      description: "Registered and completed verification",
      type: "milestone"
    },
    {
      month: "March 2024",
      title: "First Profitable Month",
      description: "Achieved 15% monthly return",
      type: "achievement"
    },
    {
      month: "June 2024",
      title: "Risk Management Mastered",
      description: "Implemented advanced stop-loss strategies",
      type: "skill"
    },
    {
      month: "September 2024",
      title: "Social Trading Leadership",
      description: "Reached 500+ followers",
      type: "social"
    },
    {
      month: "December 2024",
      title: "Elite Status Achieved",
      description: "Top 5% performer recognition",
      type: "elite"
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
            Your Trading <span className="text-blue-600">Timeline</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trace your evolution from beginner to trading expert
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {event.month}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-600">{event.description}</p>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Recap() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <RecapHero />
      <PerformanceMetrics />
      <Achievements />
      <TradingTimeline />
      <Footer />
    </main>
  );
}