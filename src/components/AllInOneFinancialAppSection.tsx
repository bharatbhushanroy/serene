"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WebAppMockup from './WebAppMockup'; // Import the new WebAppMockup

const AllInOneFinancialAppSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
  };

  const mockupContainerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } },
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-96 h-96 bg-fintech-blue-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob absolute top-1/4 left-1/4"></div>
        <div className="w-96 h-96 bg-fintech-orange-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 absolute bottom-1/4 right-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Your Entire Financial World, <br className="hidden sm:inline" />
          <span className="text-fintech-blue-accent">All in One App.</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          variants={descriptionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          From instant UPI payments to smart investments and comprehensive insurance, Qicky brings all your financial needs under one secure, intuitive platform.
        </motion.p>
        <motion.div
          className="mb-16"
          variants={buttonVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button asChild size="lg" className="bg-fintech-blue-accent hover:bg-fintech-blue-dark text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <Link to="/signup">
              Get Started with Qicky <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center items-center w-full"
          variants={mockupContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <WebAppMockup /> {/* Display the new WebAppMockup */}
        </motion.div>
      </div>
    </section>
  );
};

export default AllInOneFinancialAppSection;