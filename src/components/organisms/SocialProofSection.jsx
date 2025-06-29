import { motion } from 'framer-motion';

const SocialProofSection = () => {
  const companies = [
    { name: 'Artociti', logo: 'A' },
    { name: 'Pammsoft', logo: 'P' },
    { name: 'DaMensch', logo: 'D' },
    { name: 'Reepl', logo: 'R' },
    { name: 'Niamh Ventures', logo: 'N' }
  ];

  return (
    <section className="py-16 bg-dark-card/50 border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-display text-gray-300">
            Trusted by <span className="text-neon-green">50+ companies</span> across India and globally
          </h2>

          {/* Logo carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-lg flex items-center justify-center border border-neon-green/20 group-hover:border-neon-green/50 transition-all duration-300">
                  <span className="text-2xl font-display font-bold text-neon-green">
                    {company.logo}
                  </span>
                </div>
                
                {/* Company name tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 pt-8 border-t border-dark-border"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>Average 15X ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
              <span>6 months avg. payback</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>98% client satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;