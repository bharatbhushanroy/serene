import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackgroundShapes from './AnimatedBackgroundShapes';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import LoanApprovedMockup from './LoanApprovedMockup'; // Import the new LoanApprovedMockup component

interface HeroSectionProps {
  // isMobile: boolean; // Removed isMobile prop
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const features = [
    "Instant Personal loans up to ₹5,00,000",
    "Disbursement in 5 minutes",
    "100% Digital process with Zero paperwork",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-main-bg text-white">
      {/* Animated Background Shapes */}
      <AnimatedBackgroundShapes />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left Content Area */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center bg-gray-800 text-fintech-blue-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-blue-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-blue-accent"></span>
            </span>
            Instant Approvals Available
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Quick Loans for <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Every Need</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-xl">
            Get instant access to personal loans with flexible repayment options, competitive interest rates, and a seamless digital experience.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to="/apply-loan">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group">
                Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Feature List */}
          <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 text-left w-full max-w-md">
            {features.map((feature, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-center text-lg text-gray-200">
                <CheckCircle className="h-6 w-6 text-fintech-blue-accent mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Content Area: Loan Approved Mockup */}
        <div className="relative w-full max-w-md h-96 flex items-center justify-center lg:justify-end">
          <LoanApprovedMockup />
        </div>
      </div>

      {/* Scroll to explore indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm">
        <p className="mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-fintech-scroll-indicator-bg rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm p-4 flex flex-col md:flex-row items-center justify-between text-gray-200 text-sm border-t border-gray-800">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2 text-fintech-blue-accent">🍪</span>
            <p>
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800" onClick={() => setShowCookieBanner(false)}>Decline</Button>
            <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white hover:opacity-90" onClick={() => setShowCookieBanner(false)}>Accept All</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;