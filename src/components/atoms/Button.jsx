import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "btn-neon",
    outline: "btn-neon-outline",
ghost: "text-neon-green hover:bg-neon-green/10 hover:shadow-neon interactive-scale",
    danger: "bg-neon-red text-white hover:bg-neon-red/80 hover:shadow-[0_0_20px_#FF0040] interactive-scale"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <ApperIcon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 24 : size === 'xl' ? 28 : 20} className="mr-2" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <ApperIcon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 24 : size === 'xl' ? 28 : 20} className="ml-2" />
      )}
    </motion.button>
  );
};

export default Button;