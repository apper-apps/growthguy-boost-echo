import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import ApperIcon from '@/components/ApperIcon';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Strategy call request submitted! We\'ll contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      revenue: '',
      challenge: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-green/10 to-neon-lime/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                animate={{ boxShadow: ['0 0 20px #FF0040', '0 0 40px #FF0040', '0 0 20px #FF0040'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-neon-red/10 border border-neon-red/30 rounded-full text-neon-red text-sm"
              >
                <ApperIcon name="Clock" size={16} />
                <span>Limited Availability</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Ready to Scale with{' '}
                <span className="text-gradient">Strategic Excellence?</span>
              </h2>
              
              <p className="text-xl text-gray-400">
                Limited slots available for Q1 2025. Premium growth strategies 
                for companies committed to <span className="text-neon-green font-semibold">10X results</span>.
              </p>
            </div>

            {/* Urgency indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-gradient-to-r from-neon-red/10 to-neon-yellow/5 border border-neon-red/30 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-neon-red rounded-full"
                />
                <span className="text-neon-red font-semibold">Only 3 slots remaining this quarter</span>
              </div>
              <p className="text-gray-300 text-sm">
                Due to the intensive nature of our strategic partnerships, we limit 
                engagements to ensure exceptional results for every client.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Free 60-minute strategic assessment',
                'Custom growth roadmap delivered',
                '30-day strategic clarity guarantee',
                'Success-based pricing options available'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center">
                    <ApperIcon name="Check" size={14} className="text-dark-bg" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Guarantee badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm"
            >
              <ApperIcon name="Shield" size={16} />
              <span>30-day strategic clarity guarantee or full refund</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-dark-card border-2 border-neon-green/30 rounded-2xl p-8 shadow-neon">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-display text-white">
                    Book Your Free Strategy Call
                  </h3>
                  <p className="text-gray-400">
                    Get a custom growth assessment and roadmap for your business
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      icon="User"
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      icon="Mail"
                      required
                    />
                  </div>

                  <Input
                    label="Company Name"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    icon="Building"
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Current Monthly Revenue Range
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-card border-2 border-dark-border rounded-lg text-white focus:border-neon-green focus:outline-none transition-all duration-300"
                      required
                    >
                      <option value="">Select revenue range</option>
                      <option value="0-10L">0 - 10L per month</option>
                      <option value="10L-1Cr">10L - 1Cr per month</option>
                      <option value="1Cr-5Cr">1Cr - 5Cr per month</option>
                      <option value="5Cr+">5Cr+ per month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Biggest Growth Challenge
                    </label>
                    <textarea
                      placeholder="Describe your main growth challenge..."
                      value={formData.challenge}
                      onChange={(e) => handleInputChange('challenge', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-card border-2 border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-neon-green focus:outline-none transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={isSubmitting ? "Loader2" : "Calendar"}
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Free Strategy Call'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      icon="Download"
                      className="flex-1"
                    >
                      Download Framework
                    </Button>
                  </div>
                </form>

                <div className="text-center pt-4 border-t border-dark-border">
                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to receive strategic insights and updates. 
                    No spam, only valuable content.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;