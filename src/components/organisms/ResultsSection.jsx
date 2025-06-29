import { motion } from 'framer-motion';
import MetricCard from '@/components/molecules/MetricCard';
import Button from '@/components/atoms/Button';

const ResultsSection = () => {
  const results = [
    { value: 25, suffix: 'X', label: 'Revenue Growth' },
    { value: 19, suffix: 'X', label: 'Facebook ROAS' },
    { value: 125, suffix: '%', label: 'Sales Increase' },
    { value: 40, suffix: '+', label: 'Properties Sold' },
    { value: 9, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Companies Helped' }
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-green/20 to-neon-lime/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-neon-lime/20 to-neon-green/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm">
            <span>Proven Results</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Numbers That Speak{' '}
            <span className="text-gradient">Louder Than Words</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real companies. Every metric represents a business 
            transformation and a founder's success story.
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-dark-card border border-neon-green/20 rounded-xl p-6 hover:border-neon-green/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="relative">
                <MetricCard {...result} delay={index * 0.1} />
                
                {/* Hover glow effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  className="absolute inset-0 bg-neon-green rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center space-y-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-full mx-auto flex items-center justify-center"
            >
              <div className="text-2xl">🏆</div>
            </motion.div>
            <h3 className="text-xl font-display text-white">Top 1% Results</h3>
            <p className="text-gray-400 text-sm">Consistently delivering results that place clients in the top percentile of their industries</p>
          </div>

          <div className="text-center space-y-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-full mx-auto flex items-center justify-center"
            >
              <div className="text-2xl">⚡</div>
            </motion.div>
            <h3 className="text-xl font-display text-white">Rapid Transformation</h3>
            <p className="text-gray-400 text-sm">Average 6-month timeline from strategy to measurable exponential growth</p>
          </div>

          <div className="text-center space-y-4">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-full mx-auto flex items-center justify-center"
            >
              <div className="text-2xl">🎯</div>
            </motion.div>
            <h3 className="text-xl font-display text-white">Predictable Systems</h3>
            <p className="text-gray-400 text-sm">Building sustainable growth engines that compound results over time</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 p-8 bg-gradient-to-r from-neon-green/10 to-neon-lime/5 border border-neon-green/20 rounded-2xl"
        >
          <h3 className="text-3xl font-display text-white">
            Ready to become our next success story?
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the companies that chose strategic excellence and achieved results 
            that their competitors still can't explain.
          </p>
          
          <Button 
            variant="primary" 
            size="lg"
            icon="Rocket"
          >
            Become Our Next Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;