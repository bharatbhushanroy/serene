"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Gift, Banknote, ArrowRight, Home, Grid, LayoutGrid, Repeat, Receipt, Percent, Landmark, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const HeroPhoneMockup: React.FC = () => {
  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    float: {
      y: [0, -8, 0, 8, 0],
      rotate: [0, 0.5, 0, -0.5, 0],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-1.5 border-[8px] border-gray-800 overflow-hidden z-20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)'
      }}
      variants={phoneVariants}
      initial="initial"
      animate={["animate", "float"]}
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
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
            <Link to="/apply-loan">
              <Button className="mt-4 px-6 py-3 bg-[#F97316] text-white rounded-full flex items-center justify-center mx-auto text-lg font-medium">
                Transfer money <Banknote className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
  );
};

export default HeroPhoneMockup;