"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import TripleMobileMockup from './TripleMobileMockup'; // Import the TripleMobileMockup component
import { Link } from 'react-router-dom'; // Import Link
import { motion } from 'framer-motion'; // Import motion

interface TopUpLoansSectionProps {
  // isMobile: boolean; // Removed isMobile prop
}

const TopUpLoansSection: React.FC<TopUpLoansSectionProps> = () => {
  const backgroundBlobVariants = {
    animate: (i: number) => ({
      y: [0, 50 + i * 10, 0],
      x: [0, 30 + i * 5, 0],
      scale: [0.8, 1.2, 0.8],
      opacity: [0.1, 0.2, 0.1],
      rotate: [0, 360, 0],
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        ease: "linear",
        delay: i * 2,
      },
    }),
  };

  return (
    <section className="relative py-20 bg-fintech-main-bg text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Top-Up Loans
          </span>
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Flexible Top-Up Loans <br /> for Existing Customers
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
            Need more funds? Get additional loans quickly and easily with our seamless top-up process.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link to="/apply-loan">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold">
                Check Eligibility
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-semibold">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Right content - TripleMobileMockup */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10">
          <TripleMobileMockup />
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate="animate" // Animations will now run on all devices
          variants={backgroundBlobVariants}
          custom={0}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate="animate" // Animations will now run on all devices
          variants={backgroundBlobVariants}
          custom={1}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate="animate" // Animations will now run on all devices
          variants={backgroundBlobVariants}
          custom={2}
        ></motion.div>
      </div>
    </section>
  );
};

export default TopUpLoansSection;