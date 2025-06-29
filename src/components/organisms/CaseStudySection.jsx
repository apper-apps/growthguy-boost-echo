import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import MetricCard from '@/components/molecules/MetricCard';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import Button from '@/components/atoms/Button';

const CaseStudySection = () => {
  const caseStudyMetrics = [
    { value: 25, suffix: 'X', label: 'Revenue Growth' },
    { value: 300, suffix: '%', label: 'Traffic Increase' },
    { value: 15, suffix: 'X', label: 'Customer LTV' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-card to-dark-bg">
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
            <ApperIcon name="FileText" size={16} />
            <span>Featured Case Study</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            How We Scaled Wall Art E-commerce from{' '}
            <span className="text-neon-red">2L</span> to{' '}
            <span className="text-gradient">45L Monthly Revenue</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Challenge */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-neon-red/20 rounded-lg flex items-center justify-center">
                  <ApperIcon name="AlertTriangle" size={16} className="text-neon-red" />
                </div>
                <h3 className="text-xl font-display text-neon-red">Challenge</h3>
              </div>
              <p className="text-gray-300 pl-10">
                Traditional artisan business struggling with online presence. 
                Limited to local sales with no digital marketing expertise or 
                scalable customer acquisition systems.
              </p>
            </div>

            {/* Strategy */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Target" size={16} className="text-neon-blue" />
                </div>
                <h3 className="text-xl font-display text-neon-blue">Strategy</h3>
              </div>
              <p className="text-gray-300 pl-10">
                Multi-channel approach with AI-powered automation. 
                Implemented strategic positioning, performance marketing, 
                and automated customer journey optimization.
              </p>
            </div>

            {/* Implementation */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-neon-yellow/20 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Zap" size={16} className="text-neon-yellow" />
                </div>
                <h3 className="text-xl font-display text-neon-yellow">Implementation</h3>
              </div>
              <ul className="text-gray-300 pl-10 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                  <span>Cross-platform marketing automation setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                  <span>Customer segmentation and personalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                  <span>Performance tracking and optimization systems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid gap-6">
              {caseStudyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-dark-card border border-neon-green/20 rounded-xl hover:border-neon-green/50 hover:shadow-card-hover transition-all duration-300 glow-on-hover"
                >
                  <MetricCard {...metric} delay={index * 0.1} />
                </motion.div>
              ))}
            </div>

            {/* Results timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 bg-gradient-to-r from-neon-green/10 to-neon-lime/5 border border-neon-green/20 rounded-xl"
            >
              <h4 className="text-lg font-display text-neon-green mb-4">Growth Timeline</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Month 1-3</span>
                  <span className="text-white">Foundation & Setup</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Month 4-8</span>
                  <span className="text-white">5X Revenue Growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Month 9-18</span>
                  <span className="text-neon-green font-semibold">25X Final Result</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <TestimonialCard
            testimonial="The strategic clarity Vikas brought transformed not just our revenue, but our entire approach to business growth. We went from hoping for sales to predicting them."
            author="Rajesh Kumar"
            company="Founder, Artisan Walls"
            rating={5}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button 
            variant="primary" 
            size="lg"
            icon="FileText"
          >
            Read Full Case Study
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;