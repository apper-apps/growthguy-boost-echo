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
<section className="py-20 bg-pastel-pink/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
className="absolute top-0 left-0 w-full h-full bg-pastel-pink/20 blur-3xl"
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
animate={{ boxShadow: ['0 0 10px #F8E8EE', '0 0 20px #F8E8EE', '0 0 10px #F8E8EE'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-pink/30 border border-pastel-pink/50 rounded-full text-pink-600 text-sm"
              >
                <ApperIcon name="Clock" size={16} />
                <span>Limited Availability</span>
              </motion.div>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-black leading-tight">
                Ready to Scale with{' '}
                <span className="text-primary">Strategic Excellence?</span>
              </h2>
              
<p className="text-xl text-gray-600">
                Limited slots available for Q1 2025. Premium growth strategies 
                for companies committed to <span className="text-primary font-semibold">10X results</span>.
              </p>
            </div>

            {/* Urgency indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
className="p-6 bg-pastel-pink/20 border border-pastel-pink/40 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
className="w-3 h-3 bg-pink-500 rounded-full"
                />
                <span className="text-pink-600 font-semibold">Only 3 slots remaining this quarter</span>
              </div>
<p className="text-gray-700 text-sm">
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
<div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <ApperIcon name="Check" size={14} className="text-neutral-black" />
                  </div>
<span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Guarantee badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-green/20 border border-pastel-green/40 rounded-full text-green-600 text-sm"
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
<div className="bg-neutral-card border-2 border-pastel-green/40 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center space-y-3">
<h3 className="text-2xl font-display text-neutral-black">
                    Book Your Free Strategy Call
                  </h3>
<p className="text-gray-600">
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
<label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Revenue Range
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
className="w-full px-4 py-3 bg-neutral-card border-2 border-neutral-border rounded-lg text-neutral-black focus:border-primary focus:outline-none transition-all duration-300"
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
<label className="block text-sm font-medium text-gray-700 mb-2">
                      Biggest Growth Challenge
                    </label>
                    <textarea
                      placeholder="Describe your main growth challenge..."
                      value={formData.challenge}
                      onChange={(e) => handleInputChange('challenge', e.target.value)}
                      rows={4}
className="w-full px-4 py-3 bg-neutral-card border-2 border-neutral-border rounded-lg text-neutral-black placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 resize-none"
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

<div className="text-center pt-4 border-t border-neutral-border">
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