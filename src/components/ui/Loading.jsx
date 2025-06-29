import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="space-y-8 w-full max-w-4xl px-4">
        {/* Hero Section Skeleton */}
        <div className="text-center space-y-6">
          <motion.div
            className="h-20 bg-gradient-to-r from-dark-card to-neon-green/10 rounded-lg mx-auto max-w-3xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="h-6 bg-gradient-to-r from-dark-card to-neon-green/10 rounded-lg mx-auto max-w-2xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <div className="flex justify-center gap-4">
            <motion.div
              className="h-14 w-48 bg-gradient-to-r from-neon-green/20 to-neon-green/10 rounded-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />
            <motion.div
              className="h-14 w-48 bg-gradient-to-r from-dark-card to-neon-green/10 rounded-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="card-neon space-y-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              <div className="h-8 bg-gradient-to-r from-neon-green/20 to-transparent rounded" />
              <div className="h-4 bg-gradient-to-r from-dark-border to-transparent rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-3 bg-gradient-to-r from-dark-border to-transparent rounded" />
                <div className="h-3 bg-gradient-to-r from-dark-border to-transparent rounded w-2/3" />
                <div className="h-3 bg-gradient-to-r from-dark-border to-transparent rounded w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 text-neon-green"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="font-display text-xl">Loading Growth Strategies</span>
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loading;