import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const ProblemSection = () => {
  const problems = [
    {
      icon: 'Zap',
      title: 'Fragmented marketing efforts across multiple agencies',
      description: 'Disconnected strategies leading to wasted budget and missed opportunities'
    },
    {
      icon: 'Target',
      title: 'Vanity metrics that don\'t translate to revenue',
      description: 'High traffic and engagement but low conversion rates and revenue growth'
    },
    {
      icon: 'Clock',
      title: 'Outdated strategies in AI-powered business landscape',
      description: 'Traditional approaches failing in the modern digital-first economy'
    },
    {
      icon: 'Users',
      title: 'Lack of strategic alignment between teams',
      description: 'Marketing, sales, and product teams working in silos without shared goals'
    },
    {
      icon: 'AlertTriangle',
      title: 'Reactive approach instead of predictable growth systems',
      description: 'Fire-fighting mode instead of systematic, scalable growth processes'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg to-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-neon-red/10 border border-neon-red/30 rounded-full text-neon-red text-sm"
              >
                <ApperIcon name="AlertTriangle" size={16} />
                <span>Critical Growth Challenge</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                <span className="text-neon-red">87%</span> of Growth Strategies 
                Become Outdated Within{' '}
                <span className="text-gradient">6 Months</span>
              </h2>
            </div>

            {/* Solution preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-neon-green/10 to-neon-lime/5 border border-neon-green/30 rounded-xl"
            >
              <h3 className="text-2xl font-display text-neon-green mb-3">
                What if you had a single strategic partner who owns your growth results?
              </h3>
              <p className="text-gray-300">
                Transform fragmented efforts into a unified growth engine that adapts and scales with market changes.
              </p>
            </motion.div>

            <Button 
              variant="primary" 
              size="lg"
              icon="ArrowRight"
              className="w-full sm:w-auto"
            >
              Discover The Solution
            </Button>
          </motion.div>

          {/* Right Column - Problem Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-dark-card border border-dark-border rounded-xl hover:border-neon-red/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-neon-red/10 rounded-lg flex items-center justify-center group-hover:bg-neon-red/20 transition-colors duration-300">
                  <ApperIcon name="X" size={20} className="text-neon-red" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white group-hover:text-neon-red transition-colors duration-300">
                    {problem.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;