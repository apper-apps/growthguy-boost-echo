import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-lg"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 mx-auto bg-neon-red/20 rounded-full flex items-center justify-center"
        >
          <ApperIcon name="AlertTriangle" size={48} className="text-neon-red" />
        </motion.div>

        <div className="space-y-3">
          <h2 className="font-display text-4xl text-white">
            Oops! Growth Interrupted
          </h2>
          <p className="text-gray-400 text-lg">
            {message}
          </p>
          <p className="text-sm text-gray-500">
            Even the best growth strategies encounter obstacles. Let's get back on track.
          </p>
        </div>

        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetry}
            className="btn-neon inline-flex items-center gap-2"
          >
            <ApperIcon name="RefreshCw" size={20} />
            Retry Growth Strategy
          </motion.button>
        )}

        <div className="pt-6 border-t border-dark-border">
          <p className="text-sm text-gray-500">
            Need immediate assistance? 
            <br />
            <span className="text-neon-green">Book a strategy call</span> to resolve this quickly.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Error;