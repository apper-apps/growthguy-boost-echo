import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Input = ({
  label,
  error,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-neon-red ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <ApperIcon name={icon} size={20} />
          </div>
        )}
        
        <motion.input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
whileFocus={{ 
            borderColor: '#a9fb50',
            boxShadow: '0 0 0 1px #a9fb50'
          }}
          className={`
            w-full px-4 py-3 bg-dark-card border-2 border-dark-border rounded-lg
            text-white placeholder-gray-500
            focus:border-neon-green focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-300
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-neon-red' : ''}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-neon-red flex items-center gap-1"
        >
          <ApperIcon name="AlertCircle" size={16} />
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;