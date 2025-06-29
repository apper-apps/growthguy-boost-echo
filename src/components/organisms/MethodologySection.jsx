import { motion } from 'framer-motion';
import { useState } from 'react';
import PhaseCard from '@/components/molecules/PhaseCard';
import Button from '@/components/atoms/Button';

const MethodologySection = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      number: 1,
      icon: 'Search',
      title: 'AUDIT',
      description: 'Deep-dive analysis of current state',
      points: [
        'Growth barriers identification',
        'Competitive positioning analysis',
        'Revenue optimization opportunities'
      ]
    },
    {
      number: 2,
      icon: 'Target',
      title: 'ALIGNMENT',
      description: 'Strategic clarity & team synchronization',
      points: [
        'Vision & messaging alignment',
        'Team structure optimization',
        'Success metrics definition'
      ]
    },
    {
      number: 3,
      icon: 'Zap',
      title: 'AUTOMATION',
      description: 'AI-powered workflow implementation',
      points: [
        'Marketing automation setup',
        'Lead scoring & nurturing',
        'Performance tracking systems'
      ]
    },
    {
      number: 4,
      icon: 'TrendingUp',
      title: 'SCALE',
      description: 'Predictable revenue growth execution',
      points: [
        'System optimization',
        'Performance monitoring',
        'Continuous improvement'
      ]
    }
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
        ></motion.div>

        {/* Phase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              onMouseEnter={() => setActivePhase(phase.number)}
              className="cursor-pointer"
            >
              <PhaseCard 
                phase={phase} 
                index={index} 
                isActive={activePhase === phase.number}
              />
            </motion.div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-green via-neon-lime to-neon-green transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`w-4 h-4 rounded-full ${
                  activePhase >= phase.number 
                    ? 'bg-neon-green shadow-neon' 
                    : 'bg-dark-border'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <span>Week 1-2</span>
            <span>Week 3-4</span>
            <span>Week 5-8</span>
            <span>Ongoing</span>
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
            Ready to start your transformation?
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the companies that have achieved predictable, scalable growth through 
            our proven 4-phase methodology.
          </p>
          
          <Button 
            variant="primary" 
            size="lg"
            icon="Rocket"
          >
            Start Your Transformation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;