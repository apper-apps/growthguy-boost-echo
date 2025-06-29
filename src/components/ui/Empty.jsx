import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  title = "Ready to Start Your Growth Journey?", 
  message = "No data to display yet, but that's about to change.", 
  actionText = "Begin Growth Strategy",
  onAction 
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 max-w-lg"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-full flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/30 to-transparent rounded-full animate-pulse" />
          <ApperIcon name="TrendingUp" size={64} className="text-neon-green relative z-10" />
        </motion.div>

        <div className="space-y-3">
          <h3 className="font-display text-3xl text-white">
            {title}
          </h3>
          <p className="text-gray-400 text-lg">
            {message}
          </p>
          <p className="text-sm text-gray-500">
            Every exponential growth story starts with a single strategic decision.
          </p>
        </div>

        {onAction && (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FF41" }}
            whileTap={{ scale: 0.95 }}
            onClick={onAction}
            className="btn-neon inline-flex items-center gap-2"
          >
            <ApperIcon name="Rocket" size={20} />
            {actionText}
          </motion.button>
        )}

        <div className="pt-6">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>25X Growth Potential</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
              <span>Strategic Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Empty;