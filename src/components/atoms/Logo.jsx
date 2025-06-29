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
            '0 0 10px #E2FF65',
            '0 0 20px #E2FF65',
            '0 0 10px #E2FF65'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-primary p-2 rounded-lg"
      >
        <ApperIcon 
          name="TrendingUp" 
          size={sizes[size].icon} 
className="text-neutral-black"
        />
      </motion.div>
      
      {showText && (
        <div className="flex flex-col">
<span className={`font-display font-bold text-neutral-black ${sizes[size].text}`}>
            Growth<span className="text-primary">Guy</span>
          </span>
<span className="text-xs text-gray-600 -mt-1">
            Fractional CMO
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;