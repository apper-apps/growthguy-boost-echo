import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '@/components/atoms/Logo';
import Button from '@/components/atoms/Button';
import NavigationMenu from '@/components/molecules/NavigationMenu';
import ApperIcon from '@/components/ApperIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'services', label: 'Services', icon: 'Briefcase' },
    { id: 'methodology', label: 'Process', icon: 'Target' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'contact', label: 'Contact', icon: 'MessageCircle' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
className="fixed top-0 left-0 right-0 z-50 bg-neutral-card/90 backdrop-blur-md border-b border-neutral-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu
              items={navigationItems}
              activeItem={activeSection}
              onItemClick={scrollToSection}
            />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="primary" 
              icon="Calendar"
              onClick={() => scrollToSection('contact')}
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              size={24} 
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
className="lg:hidden overflow-hidden border-t border-neutral-border"
        >
          <div className="py-4 space-y-4">
            <NavigationMenu
              items={navigationItems}
              activeItem={activeSection}
              onItemClick={scrollToSection}
              isMobile={true}
            />
<div className="pt-4 border-t border-neutral-border">
              <Button 
                variant="primary" 
                size="sm"
                icon="Calendar"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;