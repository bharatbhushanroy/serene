"use client";

import React from 'react';
import { User, Gift, Banknote, ArrowRight, Home, Grid, LayoutGrid, Repeat, Receipt, Percent, Landmark, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes
import { motion } from 'framer-motion'; // Import motion

interface MobileMockupProps {
  className?: string;
}

const MobileMockup: React.FC<MobileMockupProps> = ({ className }) => {
  return (
    <div className={cn("relative flex items-center justify-center w-full h-full min-h-[700px]", className)}>
      {/* Floating Cards */}
      {/* Top-Left Card */}
      <motion.div
        className="absolute top-[5%] left-[0%] w-[140px] h-[140px] bg-fintech-peach-background p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark -rotate-3 z-10
                      lg:top-[15%] lg:-left-[15%] lg:w-[160px] lg:h-[160px] animate-card-float-1 animation-delay-2000" // Adjusted mobile positioning and size
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Banknote className="h-6 w-6 text-fintech-orange-accent mb-1" />
        <p className="text-xs text-gray-700">Get Up To</p>
        <p className="text-xl font-bold text-fintech-orange-accent">₹5 Lakhs</p>
        <p className="text-xs text-gray-700">Loan</p>
      </motion.div>
      {/* Top-Right Card */}
      <motion.div
        className="absolute top-[5%] right-[0%] w-[140px] h-[140px] bg-fintech-peach-background p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark rotate-3 z-10
                      lg:top-[15%] lg:-right-[15%] lg:w-[160px] lg:h-[160px] animate-card-float-2 animation-delay-3000" // Adjusted mobile positioning and size
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Percent className="h-6 w-6 text-fintech-orange-accent mb-1" />
        <p className="text-xs text-gray-700">Rate starting from</p>
        <p className="text-xl font-bold text-fintech-orange-accent">0.88%</p>
        <p className="text-xs text-gray-700">per month</p>
      </motion.div>
      {/* Bottom-Left Card */}
      <motion.div
        className="absolute bottom-[5%] left-[0%] w-[140px] h-[140px] bg-fintech-peach-background p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark rotate-3 z-10
                      lg:bottom-[15%] lg:-left-[15%] lg:w-[160px] lg:h-[160px] animate-card-float-3 animation-delay-4000" // Adjusted mobile positioning and size
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Landmark className="h-6 w-6 text-fintech-orange-accent mb-1" />
        <p className="text-xs text-gray-700">Transfer to</p>
        <p className="text-xl font-bold text-fintech-orange-accent">Your Bank</p>
        <p className="text-xs text-gray-700">In Seconds</p>
      </motion.div>
      {/* Bottom-Right Card */}
      <motion.div
        className="absolute bottom-[5%] right-[0%] w-[140px] h-[140px] bg-fintech-peach-background p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark -rotate-3 z-10
                      lg:bottom-[15%] lg:-right-[15%] lg:w-[160px] lg:h-[160px] animate-card-float-1 animation-delay-5000" // Adjusted mobile positioning and size
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <CalendarCheck className="h-6 w-6 text-fintech-orange-accent mb-1" />
        <p className="text-xs text-gray-700">Repay EMI in</p>
        <p className="text-xl font-bold text-fintech-orange-accent">3 to 36</p>
        <p className="text-xs text-gray-700">Months</p>
      </motion.div>

      {/* Phone Frame */}
      <div className="relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20">
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
                  <p className="text-sm text-gray-500">Repay in upto</p>
                  <p className="text-2xl font-bold text-[#F97316]">36 <span className="text-sm">MONTHS</span></p>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">Interest only</p>
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
      </div>
    </div>
  );
};

export default MobileMockup;