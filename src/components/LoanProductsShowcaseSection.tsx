"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Gem, CreditCard, BarChart, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import LoanProductsPhoneMockup from './LoanProductsPhoneMockup'; // Import the new phone mockup

const LoanProductsShowcaseSection = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Explore Our <span className="text-white lg:bg-gradient-to-r lg:from-fintech-button-primary-gradient-start lg:to-fintech-button-primary-gradient-end lg:text-transparent lg:bg-clip-text">Financial Products</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-12 max-w-2xl mx-auto">
          Discover a wide range of loan options and credit solutions tailored to your needs.
        </p>

        <div className="relative flex items-center justify-center w-full h-[700px] lg:h-[800px]">
          {/* Floating Cards */}
          {/* Top-Left Card: Loan against Mutual Fund */}
          <motion.div
            className="absolute top-[10%] left-[5%] lg:left-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-gray-800 z-20"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <BarChart className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Mutual Fund Loan</p>
            <p className="text-sm text-gray-600">Leverage investments</p>
          </motion.div>
          {/* Top-Right Card: Home Loan */}
          <motion.div
            className="absolute top-[10%] right-[5%] lg:right-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-gray-800 z-20"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Home className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Home Loan</p>
            <p className="text-sm text-gray-600">Your dream home</p>
          </motion.div>
          {/* Bottom-Left Card: Gold Loan */}
          <motion.div
            className="absolute bottom-[10%] left-[5%] lg:left-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-gray-800 z-20"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Gem className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Gold Loan</p>
            <p className="text-sm text-gray-600">Quick funds against gold</p>
          </motion.div>
          {/* Bottom-Right Card: Credit Cards */}
          <motion.div
            className="absolute bottom-[10%] right-[5%] lg:right-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-gray-800 z-20"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <CreditCard className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Credit Cards</p>
            <p className="text-sm text-gray-600">Exclusive offers</p>
          </motion.div>

          {/* Central Phone Mockup */}
          <LoanProductsPhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default LoanProductsShowcaseSection;