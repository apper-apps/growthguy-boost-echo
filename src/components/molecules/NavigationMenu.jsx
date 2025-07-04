import { motion } from 'framer-motion';
import { useState } from 'react';
import ApperIcon from '@/components/ApperIcon';

const NavigationMenu = ({ items, activeItem, onItemClick, isMobile = false }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-8'}`}>
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg interactive-scale ${
            activeItem === item.id
              ? 'text-neon-green bg-neon-green/10 shadow-glow'
              : 'text-gray-300 hover:text-neon-green hover:bg-neon-green/5'
          }`}
        >
          <div className="flex items-center gap-2">
            {item.icon && (
              <ApperIcon 
                name={item.icon} 
                size={16} 
                className={activeItem === item.id ? 'text-neon-green' : 'text-gray-400'} 
              />
            )}
            {item.label}
          </div>

          {/* Active indicator */}
          {activeItem === item.id && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-green rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {/* Hover glow effect */}
          {hoveredItem === item.id && activeItem !== item.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neon-green/5 rounded-lg -z-10"
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
};

export default NavigationMenu;