import { motion } from 'framer-motion';
import ServiceCard from '@/components/molecules/ServiceCard';
import Button from '@/components/atoms/Button';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Rocket',
      title: 'SaaS Growth',
      subtitle: 'Product positioning & go-to-market mastery',
      features: [
        'Strategic positioning workshops',
        'Growth system design',
        'AI-powered automation'
      ],
      result: 'Helped Ripple.io achieve product-market fit',
      link: '#'
    },
    {
      icon: 'ShoppingCart',
      title: 'E-Commerce Scaling',
      subtitle: 'Performance marketing & conversion optimization',
      features: [
        'Cross-channel attribution',
        'Conversion rate optimization',
        'Automated workflows'
      ],
      result: '25X growth for artisan e-commerce',
      link: '#'
    },
    {
      icon: 'Building',
      title: 'Real Estate Leads',
      subtitle: 'Quality lead generation & sales automation',
      features: [
        'Lead generation systems',
        'Campaign automation',
        'Sales enablement'
      ],
      result: 'Multiple property sellouts in Pune',
      link: '#'
    }
  ];

  return (
<section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
<div className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-blue/20 border border-pastel-blue/50 rounded-full text-blue-600 text-sm">
            <span>Strategic Services</span>
          </div>
          
<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-black leading-tight">
            <span className="text-primary">3 High-ROI Sectors.</span><br />
            <span className="text-primary">1 Strategic Approach.</span>
          </h2>
          
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized expertise in the sectors that demand the highest growth standards 
            and deliver the most predictable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
className="text-center space-y-6 p-8 bg-pastel-green/20 border border-pastel-green/40 rounded-2xl"
        >
<h3 className="text-2xl md:text-3xl font-display text-neutral-black">
            Ready to discover which sector strategy fits your business?
          </h3>
          
<p className="text-gray-600 max-w-2xl mx-auto">
            Book a strategic assessment call to identify your highest-impact growth opportunities 
            and the exact approach that will deliver 10X+ results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              icon="Target"
            >
              Discover Your Growth Opportunity
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon="FileText"
            >
              Download Strategy Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;