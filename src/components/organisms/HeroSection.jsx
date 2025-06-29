import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import MetricCard from '@/components/molecules/MetricCard';
import ApperIcon from '@/components/ApperIcon';

const HeroSection = () => {
  const keyResults = [
    { value: 25, suffix: 'X', label: 'Revenue Growth' },
    { value: 19, suffix: 'X', label: 'Facebook ROAS' },
    { value: 125, suffix: '%', label: 'Sales Increase' },
    { value: 40, suffix: '+', label: 'Properties Sold' }
  ];

  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-pastel-blue/10 to-pastel-sage/10">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pastel-sage/20 to-pastel-peach/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-pastel-peach/20 to-pastel-sage/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
<span className="text-gray-800">Fractional CMO Who Delivered</span>{' '}
                <span className="text-gradient">25X Revenue Growth</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
className="text-xl md:text-2xl text-gray-600 max-w-2xl"
              >
                Strategic excellence for SaaS, E-commerce & Real Estate companies 
                ready to scale from <span className="text-green-700 font-semibold">10L to 50Cr+ revenue</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                size="lg"
                icon="Calendar"
                className="w-full sm:w-auto"
              >
                Book Your Growth Strategy Call
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon="FileText"
                className="w-full sm:w-auto"
              >
                View Case Studies
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
className="flex flex-wrap items-center gap-6 pt-6 border-t border-light-border"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ApperIcon name="Shield" size={16} className="text-green-700" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ApperIcon name="Users" size={16} className="text-green-700" />
                <span>50+ companies helped</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ApperIcon name="Award" size={16} className="text-green-700" />
                <span>9+ years experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Professional photo placeholder with growth charts overlay */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
className="aspect-square bg-gradient-to-br from-light-card to-pastel-blue/20 rounded-2xl border-2 border-pastel-sage/40 p-8 shadow-lg"
              >
                {/* Placeholder for professional photo */}
<div className="w-full h-2/3 bg-gradient-to-br from-pastel-sage/20 to-pastel-peach/10 rounded-xl flex items-center justify-center mb-6">
                  <ApperIcon name="User" size={120} className="text-green-600/60" />
                </div>
                
                {/* Growth chart overlay */}
                <div className="absolute inset-0 flex items-end justify-center p-8 pointer-events-none">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 1 }}
className="h-16 bg-gradient-to-r from-pastel-sage to-pastel-peach rounded-lg opacity-80 flex items-center justify-center"
                  >
                    <ApperIcon name="TrendingUp" size={32} className="text-gray-800" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 grid grid-cols-2 gap-4">
                {keyResults.map((result, index) => (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
className="bg-light-card border border-pastel-sage/40 rounded-lg p-4 shadow-md backdrop-blur-sm"
                  >
                    <MetricCard {...result} delay={index * 0.1} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-sm">Scroll to explore</span>
          <ApperIcon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;