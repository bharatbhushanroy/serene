"use client";

import React from 'react';
import { User, Gift, Banknote, ArrowRight, Home, Grid, LayoutGrid, Repeat, Receipt, Percent, Landmark, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes
import { motion } from 'framer-motion'; // Import motion

interface MobileMockupProps {
  className?: string;
}

const MobileMockup: React.FC<MobileMockupProps> = ({ className }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50, rotate: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: i % 2 === 0 ? -3 : 3, // Alternate rotation
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    float: (i: number) => ({
      y: [0, 10, 0, -10, 0],
      x: [0, i * 5, 0, -i * 5, 0],
      rotate: [i % 2 === 0 ? -3 : 3, i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -3 : 3, i % 2 === 0 ? -1 : 1, i % 2 === 0 ? -3 : 3],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    float: {
      y: [0, -10, 0, 10, 0],
      rotate: [0, 1, 0, -1, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={cn("relative flex items-center justify-center w-full h-full min-h-[700px]", className)}>
      {/* Floating Cards */}
      {/* Top-Left Card */}
      <motion.div
        className="absolute top-[10%] left-[-35%] w-[110px] h-[110px] bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start p-3 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white z-10
                      lg:top-[15%] lg:-left-[20%] lg:w-[160px] lg:h-[160px]" // Adjusted mobile positioning and size
        variants={cardVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={0}
        whileInView="animate" // ADDED THIS
        viewport={{ once: true, amount: 0.5 }} // ADDED THIS
      >
        <Banknote className="h-5 w-5 text-white mb-1" />
        <p className="text-xs text-white">Get Up To</p>
        <p className="text-lg font-bold text-white">₹5 Lakhs</p>
        <p className="text-xs text-white">Loan</p>
      </motion.div>
      {/* Top-Right Card */}
      <motion.div
        className="absolute top-[10%] right-[-35%] w-[110px] h-[110px] bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start p-3 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white z-10
                      lg:top-[15%] lg:-right-[20%] lg:w-[160px] lg:h-[160px]" // Adjusted mobile positioning and size
        variants={cardVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={1}
        whileInView="animate" // ADDED THIS
        viewport={{ once: true, amount: 0.5 }} // ADDED THIS
      >
        <Percent className="h-5 w-5 text-white mb-1" />
        <p className="text-xs text-white">Rate starting from</p>
        <p className="text-lg font-bold text-white">0.88%</p>
        <p className="text-xs text-white">per month</p>
      </motion.div>
      {/* Bottom-Left Card */}
      <motion.div
        className="absolute bottom-[10%] left-[-35%] w-[110px] h-[110px] bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start p-3 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white z-10
                      lg:bottom-[15%] lg:-left-[20%] lg:w-[160px] lg:h-[160px]" // Adjusted mobile positioning and size
        variants={cardVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={2}
        whileInView="animate" // ADDED THIS
        viewport={{ once: true, amount: 0.5 }} // ADDED THIS
      >
        <Landmark className="h-5 w-5 text-white mb-1" />
        <p className="text-xs text-white">Transfer to</p>
        <p className="text-lg font-bold text-white">Your Bank</p>
        <p className="text-xs text-white">In Seconds</p>
      </motion.div>
      {/* Bottom-Right Card */}
      <motion.div
        className="absolute bottom-[10%] right-[-35%] w-[110px] h-[110px] bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start p-3 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white z-10
                      lg:bottom-[15%] lg:-right-[20%] lg:w-[160px] lg:h-[160px]" // Adjusted mobile positioning and size
        variants={cardVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={3}
        whileInView="animate" // ADDED THIS
        viewport={{ once: true, amount: 0.5 }} // ADDED THIS
      >
        <CalendarCheck className="h-5 w-5 text-white mb-1" />
        <p className="text-xs text-white">Repay EMI in</p>
        <p className="text-lg font-bold text-white">3 to 36</p>
        <p className="text-xs text-white">Months</p>
      </motion.div>

      {/* Phone Frame */}
      <motion.div
        className="relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
        }}
        variants={phoneVariants}
        initial="initial"
        animate={["animate", "float"]}
        whileInView="animate" // ADDED THIS
        viewport={{ once: true, amount: 0.5 }} // ADDED THIS
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-6 bg-black rounded-b-xl z-10"></div>
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#1A1A1A] rounded-[30px] overflow-hidden flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 bg-[#1A1A1A] text-white">
            <User className="h-5 w-5 text-gray-400" />
            <Gift className="h-5 w-5 text-purple-400" />
          </div>
          {/* Tabs */}
          <div className="flex justify-around p-2 bg-[#1A1A1A] text-sm">
            <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400">All</span>
            <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400">UPI</span>
            <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400">Insure</span>
            <span className="px-3 py-1 rounded-full bg-[#F97316] text-white">Borrow</span>
          </div>
          {/* Main Content Area */}
          <div className="flex-1 bg-[#1A1A1A] p-4 overflow-y-auto">
            {/* Available credit limit */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm">Available credit limit</p>
              <p className="text-white text-3xl font-bold">₹2,50,000</p>
              <button className="mt-4 px-6 py-3 bg-[#F97316] text-white rounded-full flex items-center justify-center mx-auto text-lg font-medium">
                Transfer money <Banknote className="ml-2 h-5 w-5" />
              </button>
            </div>
            {/* EMI calculator card */}
            <div className="bg-white rounded-xl p-4 text-black mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">EMI calculator</p>
                <ArrowRight className="h-5 w-5 text-[#F97316]" />
              </div>
              <p className="text-sm text-gray-600 mb-4">Select the amount you want to check it's EMI and interest</p>
              <div className="flex space-x-2">
                <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
                  <p className="text-sm text-white">Repay in upto</p>
                  <p className="text-2xl font-bold text-[#F97316]">36 <span className="text-sm">MONTHS</span></p>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
                  <p className="text-sm font-bold text-[#F97316]">on amount you use</p>
                </div>
              </div>
            </div>
            {/* Powered by MONEYTAP */}
            <div className="text-center text-gray-500 text-xs mt-4">
              powered by <span className="font-bold text-white">MONEYTAP</span>
            </div>
          </div>
          {/* Bottom Navigation */}
          <div className="flex justify-around p-3 bg-white border-t border-gray-200 text-gray-600">
            <div className="flex flex-col items-center text-[#F97316]">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <Grid className="h-5 w-5" />
              <span className="text-xs">More</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#F97316] rounded-full p-2">
                <LayoutGrid className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs"></span>
            </div>
            <div className="flex flex-col items-center">
              <Repeat className="h-5 w-5" />
              <span className="text-xs">Transactions</span>
            </div>
            <div className="flex flex-col items-center">
              <Receipt className="h-5 w-5" />
              <span className="text-xs">Bills</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMockup;