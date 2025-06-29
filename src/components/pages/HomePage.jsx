import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import SocialProofSection from '@/components/organisms/SocialProofSection';
import ProblemSection from '@/components/organisms/ProblemSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import MethodologySection from '@/components/organisms/MethodologySection';
import DifferentiatorsSection from '@/components/organisms/DifferentiatorsSection';
import CaseStudySection from '@/components/organisms/CaseStudySection';
import ResultsSection from '@/components/organisms/ResultsSection';
import CTASection from '@/components/organisms/CTASection';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 border-4 border-neon-green border-t-transparent rounded-full mx-auto"
          />
          <div className="text-neon-green font-display text-xl">
            Loading Growth Strategies...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-bg"
    >
      <div id="home">
        <HeroSection />
      </div>
      
      <SocialProofSection />
      
      <div id="problem">
        <ProblemSection />
      </div>
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="methodology">
        <MethodologySection />
      </div>
      
      <DifferentiatorsSection />
      
      <CaseStudySection />
      
      <div id="results">
        <ResultsSection />
      </div>
      
      <div id="contact">
        <CTASection />
      </div>
    </motion.div>
  );
};

export default HomePage;