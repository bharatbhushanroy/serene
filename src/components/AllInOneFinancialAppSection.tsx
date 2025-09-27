"use client";

import React from 'react';
import { motion } from 'framer-motion';
import UpiMobileMockup from './UpiMobileMockup'; // New import
import BorrowInsureMobileMockup from './BorrowInsureMobileMockup'; // New import
import InvestMobileMockup from './InvestMobileMockup'; // New import
import { cn } from '@/lib/utils';

const AllInOneFinancialAppSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

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
    <motion.section
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Animated Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={backgroundBlobVariants}
          animate="animate"
          className={cn(
            "absolute rounded-full mix-blend-lighten filter blur-3xl opacity-0",
            i === 0 && "top-1/4 left-1/4 w-64 h-64 bg-fintech-blue-accent",
            i === 1 && "bottom-1/3 right-1/4 w-72 h-72 bg-fintech-gradient-purple-start",
            i === 2 && "top-1/2 left-1/2 w-56 h-56 bg-fintech-orange-accent"
          )}
        />
      ))}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-12"
          variants={titleVariants}
        >
          <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-end text-transparent bg-clip-text">Invest, Borrow, UPI, Insure</span>{' '}
          <br className="hidden sm:block" />
          Qicky - Your all-in-one financial app
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 md:gap-12 lg:gap-16 min-h-[700px] md:min-h-[800px] lg:min-h-[600px]">
          <UpiMobileMockup />
          <BorrowInsureMobileMockup />
          <InvestMobileMockup />
        </div>
      </div>
    </motion.section>
  );
};

export default AllInOneFinancialAppSection;