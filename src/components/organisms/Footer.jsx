import { motion } from 'framer-motion';
import Logo from '@/components/atoms/Logo';
import ApperIcon from '@/components/ApperIcon';

const Footer = () => {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#methodology' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' }
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-gray-400 max-w-md">
              Fractional CMO delivering strategic excellence for SaaS, E-commerce & Real Estate companies ready to scale from 10L to 50Cr+ revenue.
            </p>
            <div className="flex items-center gap-2 text-sm text-neon-green">
              <ApperIcon name="Award" size={16} />
              <span>25X Revenue Growth Track Record</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-display text-xl">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#00FF41' }}
                    className="text-gray-400 hover:text-neon-green transition-all duration-300 flex items-center gap-2"
                  >
                    <ApperIcon name="ArrowRight" size={14} />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-display text-xl">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <ApperIcon name="Mail" size={16} className="text-neon-green" />
                <span>vikas@growthguy.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <ApperIcon name="Phone" size={16} className="text-neon-green" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <ApperIcon name="MapPin" size={16} className="text-neon-green" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-dark-bg rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-300"
                >
                  <ApperIcon name={social.icon} size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm">
            © 2024 GrowthGuy. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-neon-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-green transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;