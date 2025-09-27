"use client";

import React from 'react';
import { motion } from 'framer-motion';
import TripleMobileMockup from './TripleMobileMockup';
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

  return (
    <motion.section
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-12"
          variants={titleVariants}
        >
          <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Invest, Borrow, UPI, Insure</span>{' '}
          <br className="hidden sm:block" />
          Qicky - Your all-in-one financial app
        </motion.h2>

        <div className="flex justify-center items-center w-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px]">
          <TripleMobileMockup />
        </div>
      </div>
    </motion.section>
  );
};

export default AllInOneFinancialAppSection;