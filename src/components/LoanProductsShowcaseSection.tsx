"use client";

import React from 'react';
// import { motion } from 'framer-motion';
import { Home, Gem, CreditCard, BarChart, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import LoanProductsPhoneMockup from './LoanProductsPhoneMockup'; // Import the new phone mockup

const LoanProductsShowcaseSection = () => {
  // const cardVariants = {
  //   initial: { opacity: 0, y: 50, scale: 0.8, rotate: 0 },
  //   animate: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     rotate: i % 2 === 0 ? -5 : 5, // Alternate rotation
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //       delay: i * 0.1,
  //     },
  //   }),
  //   float: (i: number) => ({
  //     y: [0, 15, 0, -15, 0],
  //     x: [0, i * 5, 0, -i * 5, 0],
  //     rotate: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -7 : 7, i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -3 : 3, i % 2 === 0 ? -5 : 5],
  //     transition: {
  //       duration: 10 + i * 2,
  //       repeat: Infinity,
  //       ease: "easeInOut",
  //       delay: i * 0.5,
  //     },
  //   }),
  // };

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
          <div
            className={cn(
              "absolute top-[10%] left-[5%] bg-white p-4 rounded-xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-gray-800 z-20",
              "lg:shadow-2xl lg:shadow-fintech-blue-accent/20 lg:border" // Apply shadow and border only on large screens
            )}
            // variants={cardVariants}
            // initial="initial"
            // whileInView={["animate", "float"]}
            // viewport={{ once: true, amount: 0.5 }}
            // custom={0}
          >
            <BarChart className="h-7 w-7 md:h-8 md:w-8 text-fintech-orange-accent mb-1" />
            <p className="text-base md:text-lg font-semibold">Mutual Fund Loan</p>
            <p className="text-xs md:text-sm text-gray-600">Leverage investments</p>
          </div>
          {/* Top-Right Card: Home Loan */}
          <div
            className={cn(
              "absolute top-[10%] right-[5%] bg-white p-4 rounded-xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-gray-800 z-20",
              "lg:shadow-2xl lg:shadow-fintech-blue-accent/20 lg:border" // Apply shadow and border only on large screens
            )}
            // variants={cardVariants}
            // initial="initial"
            // whileInView={["animate", "float"]}
            // viewport={{ once: true, amount: 0.5 }}
            // custom={1}
          >
            <Home className="h-7 w-7 md:h-8 md:w-8 text-fintech-orange-accent mb-1" />
            <p className="text-base md:text-lg font-semibold">Home Loan</p>
            <p className="text-xs md:text-sm text-gray-600">Your dream home</p>
          </div>
          {/* Bottom-Left Card: Gold Loan */}
          <div
            className={cn(
              "absolute bottom-[10%] left-[5%] bg-white p-4 rounded-xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-gray-800 z-20",
              "lg:shadow-2xl lg:shadow-fintech-blue-accent/20 lg:border" // Apply shadow and border only on large screens
            )}
            // variants={cardVariants}
            // initial="initial"
            // whileInView={["animate", "float"]}
            // viewport={{ once: true, amount: 0.5 }}
            // custom={2}
          >
            <Gem className="h-7 w-7 md:h-8 md:w-8 text-fintech-orange-accent mb-1" />
            <p className="text-base md:text-lg font-semibold">Gold Loan</p>
            <p className="text-xs md:text-sm text-gray-600">Quick funds against gold</p>
          </div>
          {/* Bottom-Right Card: Credit Cards */}
          <div
            className={cn(
              "absolute bottom-[10%] right-[5%] bg-white p-4 rounded-xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-gray-800 z-20",
              "lg:shadow-2xl lg:shadow-fintech-blue-accent/20 lg:border" // Apply shadow and border only on large screens
            )}
            // variants={cardVariants}
            // initial="initial"
            // whileInView={["animate", "float"]}
            // viewport={{ once: true, amount: 0.5 }}
            // custom={3}
          >
            <CreditCard className="h-7 w-7 md:h-8 md:w-8 text-fintech-orange-accent mb-1" />
            <p className="text-base md:text-lg font-semibold">Credit Cards</p>
            <p className="text-xs md:text-sm text-gray-600">Exclusive offers</p>
          </div>

          {/* Central Phone Mockup */}
          <LoanProductsPhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default LoanProductsShowcaseSection;