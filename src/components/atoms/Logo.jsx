import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 24, text: 'text-xl' },
    md: { icon: 32, text: 'text-2xl' },
    lg: { icon: 40, text: 'text-3xl' },
    xl: { icon: 48, text: 'text-4xl' }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <motion.div
animate={{ 
          boxShadow: [
            '0 0 20px #a9fb50',
            '0 0 30px #a9fb50, 0 0 40px #a9fb50',
            '0 0 20px #a9fb50'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-gradient-to-br from-neon-green to-neon-lime p-2 rounded-lg shadow-neon"
      >
        <ApperIcon 
          name="TrendingUp" 
          size={sizes[size].icon} 
          className="text-dark-bg" 
        />
      </motion.div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-white ${sizes[size].text}`}>
            Growth<span className="text-gradient">Guy</span>
          </span>
          <span className="text-xs text-gray-400 -mt-1">
            Fractional CMO
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;