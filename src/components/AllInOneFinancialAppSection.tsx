"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import UpiMobileMockup from './UpiMobileMockup';
import BorrowInsureMobileMockup from './BorrowInsureMobileMockup';
import InvestMobileMockup from './InvestMobileMockup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllInOneFinancialAppSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define mobile breakpoint

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-fintech-blue-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-fintech-orange-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-fintech-green-success rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your Entire Financial World, <br className="hidden sm:inline" />
            <span className="text-fintech-blue-accent">All in One App</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From seamless payments to smart investments and comprehensive insurance, manage every aspect of your finances with unparalleled ease and security.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 md:gap-12 lg:gap-16">
          <UpiMobileMockup isMobile={isMobile} />
          <BorrowInsureMobileMockup isMobile={isMobile} />
          <InvestMobileMockup isMobile={isMobile} />
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/signup">
            <Button className="bg-fintech-blue-accent hover:bg-fintech-blue-dark text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex items-center mx-auto">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AllInOneFinancialAppSection;