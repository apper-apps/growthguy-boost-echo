import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MetricCard = ({ value, suffix, label, delay = 0, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`metric-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);
  };

return (
    <motion.div
      id={`metric-${label}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`text-center space-y-2 ${className}`}
>
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neon-green relative z-20"
        animate={isVisible ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {displayValue}{suffix}
      </motion.div>
      <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider relative z-20">
        {label}
      </div>
    </motion.div>
  );
};

export default MetricCard;