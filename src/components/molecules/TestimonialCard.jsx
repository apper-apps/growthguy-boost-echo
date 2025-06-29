import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const TestimonialCard = ({ testimonial, author, company, rating = 5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="card-neon"
    >
      {/* Quote icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-lime/10 rounded-full flex items-center justify-center">
          <ApperIcon name="Quote" size={24} className="text-neon-green" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <ApperIcon name="Star" size={16} className="text-neon-green fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-gray-300 text-center mb-6 italic">
        "{testimonial}"
      </blockquote>

      {/* Author info */}
      <div className="text-center space-y-1">
        <div className="font-semibold text-white">
          {author}
        </div>
        <div className="text-sm text-neon-green">
          {company}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-lime rounded-full animate-pulse" />
    </motion.div>
  );
};

export default TestimonialCard;