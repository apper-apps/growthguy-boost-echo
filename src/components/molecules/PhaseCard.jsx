import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const PhaseCard = ({ phase, index, isActive = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative p-6 rounded-lg border-2 transition-all duration-500 ${
        isActive 
          ? 'border-neon-green bg-neon-green/5 shadow-neon' 
          : 'border-dark-border bg-dark-card hover:border-neon-green/50'
      }`}
    >
      {/* Phase number */}
      <motion.div
        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
        className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold ${
          isActive 
            ? 'bg-gradient-to-br from-neon-green to-neon-lime text-dark-bg shadow-neon' 
            : 'bg-dark-card border-2 border-dark-border text-gray-400'
        }`}
      >
        {phase.number}
      </motion.div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isActive 
          ? 'bg-neon-green/20 text-neon-green' 
          : 'bg-dark-border/20 text-gray-400'
      }`}>
        <ApperIcon name={phase.icon} size={24} />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className={`text-xl font-display ${
          isActive ? 'text-neon-green' : 'text-white'
        }`}>
          {phase.title}
        </h3>
        
        <p className="text-gray-400">
          {phase.description}
        </p>

        <ul className="space-y-2">
          {phase.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                isActive ? 'bg-neon-green' : 'bg-gray-500'
              }`} />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Progress indicator */}
      {isActive && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-green to-neon-lime rounded-b-lg"
        />
      )}
    </motion.div>
  );
};

export default PhaseCard;