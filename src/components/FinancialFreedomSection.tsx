"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, ArrowRight } from 'lucide-react'; // Added ArrowRight
import DataSecuritySection from './DataSecuritySection'; // Import the new DataSecuritySection

const FinancialFreedomSection = () => {
  const dollarSignVariants = {
    animate: (i: number) => ({
      y: [0, -20 - i * 5, 0],
      x: [0, 10 + i * 2, -10 - i * 2, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, 15 + i * 3, -15 - i * 3, 0],
      x: [0, -10 - i * 2, 10 + i * 2, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 12 + i * 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: i * 0.7,
      },
    }),
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Dark Purple */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative p-8 rounded-2xl overflow-hidden bg-fintech-card-dark-purple shadow-lg min-h-[250px] flex items-center justify-center"
          >
            {/* Animated elements */}
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={`ds1-${i}`}
                custom={i}
                variants={dollarSignVariants}
                animate="animate"
                className="absolute text-4xl font-bold text-white/10"
                style={{
                  top: `${10 + i * 15}%`,
                  left: `${10 + i * 18}%`,
                  fontSize: `${24 + i * 4}px`,
                }}
              >
                $
              </motion.span>
            ))}
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={`dot1-${i}`}
                custom={i}
                variants={dotVariants}
                animate="animate"
                className="absolute w-3 h-3 rounded-full bg-white/10"
                style={{
                  top: `${5 + i * 12}%`,
                  right: `${5 + i * 10}%`,
                  width: `${8 + i * 2}px`,
                  height: `${8 + i * 2}px`,
                }}
              />
            ))}

            <div className="relative z-10 text-center bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl max-w-sm">
              <h3 className="text-3xl font-bold text-white mb-2">Financial Freedom</h3>
              <p className="text-white/80 text-lg">Your journey starts with a simple application</p>
            </div>
          </motion.div>

          {/* Card 2: Dark Reddish-Purple */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative p-8 rounded-2xl overflow-hidden bg-fintech-card-dark-red-purple shadow-lg min-h-[250px] flex items-center justify-center"
          >
            {/* Animated elements */}
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={`ds2-${i}`}
                custom={i}
                variants={dollarSignVariants}
                animate="animate"
                className="absolute text-4xl font-bold text-white/10"
                style={{
                  bottom: `${10 + i * 15}%`,
                  right: `${10 + i * 18}%`,
                  fontSize: `${24 + i * 4}px`,
                }}
              >
                $
              </motion.span>
            ))}
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={`dot2-${i}`}
                custom={i}
                variants={dotVariants}
                animate="animate"
                className="absolute w-3 h-3 rounded-full bg-white/10"
                style={{
                  bottom: `${5 + i * 12}%`,
                  left: `${5 + i * 10}%`,
                  width: `${8 + i * 2}px`,
                  height: `${8 + i * 2}px`,
                }}
              />
            ))}
            <div className="relative z-10 text-center bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl max-w-sm">
              <h3 className="text-3xl font-bold text-white mb-2">Financial Freedom</h3>
              <p className="text-white/80 text-lg">Your journey starts with a simple application</p>
            </div>
          </motion.div>
        </div>

        {/* Data Security Section (Replaced old CTA) */}
        <DataSecuritySection />
      </div>
    </section>
  );
};

export default FinancialFreedomSection;