import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
whileHover={{ y: -8 }}
      className="card-neon group relative overflow-hidden hover-border-glow"
    >
      {/* Slanted corner decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-neon-green transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300" />
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center mb-6"
      >
        <ApperIcon name={service.icon} size={32} className="text-neon-green" />
      </motion.div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-display text-white">
          {service.title}
        </h3>
        
        <p className="text-gray-400">
          {service.subtitle}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Result badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
transition={{ delay: 0.5 + index * 0.2 }}
          className="bg-neon-green/20 border border-neon-green/30 rounded-lg p-3"
        >
          <div className="flex items-center gap-2 text-sm">
            <ApperIcon name="Trophy" size={16} className="text-neon-green" />
            <span className="text-neon-green font-semibold">Result:</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            {service.result}
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-6 border-t border-dark-border">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          icon="ArrowRight"
          iconPosition="right"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;