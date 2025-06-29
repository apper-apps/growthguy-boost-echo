import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: 'Award',
      title: 'Sector Specialization',
      description: 'Deep expertise in SaaS, E-commerce & Real Estate',
      highlight: 'Not generic consulting'
    },
    {
      icon: 'TrendingUp',
      title: 'Proven Results',
      description: '25X growth track record with quantified outcomes',
      highlight: '15+ case studies'
    },
    {
      icon: 'Bot',
      title: 'AI-Powered Approach',
      description: 'Proprietary automation tools for 70% efficiency gains',
      highlight: 'Cutting-edge tech'
    },
    {
      icon: 'Target',
      title: 'Strategic + Tactical',
      description: 'Executive-level strategy with hands-on execution',
      highlight: 'End-to-end delivery'
    },
    {
      icon: 'Handshake',
      title: 'Skin in the Game',
      description: 'Success-based pricing options available',
      highlight: 'Aligned incentives'
    },
    {
      icon: 'Heart',
      title: 'Conscious Leadership',
      description: 'Business growth aligned with personal clarity',
      highlight: 'Holistic approach'
    }
  ];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm">
            <ApperIcon name="Zap" size={16} />
            <span>Competitive Advantage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Why Top Founders Choose{' '}
            <span className="text-gradient">Strategic Excellence</span>{' '}
            Over Generic Marketing
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The difference between exponential growth and incremental improvements 
            lies in the strategic partner you choose.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-6 bg-dark-card border border-neon-green/20 rounded-xl hover:border-neon-green/50 hover:shadow-card-hover transition-all duration-300 group overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Check mark */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-neon-green rounded-full flex items-center justify-center">
                <ApperIcon name="Check" size={14} className="text-dark-bg" />
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-neon transition-shadow duration-300"
              >
                <ApperIcon name={item.icon} size={28} className="text-neon-green" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-display text-white group-hover:text-neon-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full">
                    {item.highlight}
                  </span>
                </div>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                className="absolute inset-0 bg-neon-green rounded-xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 bg-gradient-to-r from-neon-green/10 to-neon-lime/5 border border-neon-green/20 rounded-2xl"
        >
          <h3 className="text-2xl font-display text-white mb-4">
            Experience the difference strategic excellence makes
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join the founders who chose strategic partnership over commodity marketing 
            and achieved results that competitors can't replicate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon inline-flex items-center gap-2"
            >
              <ApperIcon name="Calendar" size={20} />
              Book Strategic Assessment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon-outline inline-flex items-center gap-2"
            >
              <ApperIcon name="Download" size={20} />
              Download Comparison Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;