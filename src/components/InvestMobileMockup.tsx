"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, DollarSign, Home, Grid, Repeat, Receipt, BarChart, Wallet, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface InvestMobileMockupProps {
  isMobile: boolean;
}

const InvestMobileMockup: React.FC<InvestMobileMockupProps> = ({ isMobile }) => {
  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    float: {
      y: [0, -5, 0, 5, 0],
      rotate: [0, 0.5, 0, -0.5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-[85%] sm:w-[75%] md:w-[65%] lg:w-[300px] aspect-[280/580] mx-auto bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 197, 94, 0.3)' // Enhanced shadow with green glow
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
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <Wallet className="h-4 w-4 text-gray-400" />
          <TrendingUp className="h-4 w-4 text-fintech-green-success" />
        </div>
        {/* Tabs */}
        <div className="flex justify-around p-1 bg-[#1A1A1A] text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">All</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">UPI</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Insure</span>
          <span className="px-2 py-1 rounded-full bg-fintech-green-success text-white">Invest</span>
        </div>
        {/* Main Content Area - Mock Invest */}
        <div className="flex-1 bg-[#1A1A1A] p-4 overflow-y-auto text-white">
          <p className="text-sm text-gray-400 mb-3">Your Investment Portfolio</p>

          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Portfolio Value</p>
                <p className="text-3xl font-bold text-fintech-green-success mt-1">₹ 1,25,000</p>
              </div>
              <PieChart className="h-12 w-12 text-fintech-green-success" />
            </div>
            <div className="flex justify-between text-sm mt-4">
              <div>
                <p className="text-gray-400">Today's Gain</p>
                <p className="text-green-500">+₹ 1,250 (1.01%)</p>
              </div>
              <div>
                <p className="text-gray-400">Overall Gain</p>
                <p className="text-green-500">+₹ 15,000 (13.6%)</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-3">Explore Investments</p>
          <div className="grid grid-cols-2 gap-3 text-center text-xs mb-6">
            <div className="flex flex-col items-center bg-gray-800 p-3 rounded-xl">
              <BarChart className="h-6 w-6 text-blue-400 mb-2" />
              <span>Stocks</span>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-3 rounded-xl">
              <DollarSign className="h-6 w-6 text-yellow-400 mb-2" />
              <span>Mutual Funds</span>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-3 rounded-xl">
              <Zap className="h-6 w-6 text-purple-400 mb-2" />
              <span>ETFs</span>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-3 rounded-xl">
              <TrendingUp className="h-6 w-6 text-red-400 mb-2" />
              <span>Gold</span>
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs mt-4">
            Invest smart, grow faster with Qicky
          </div>
        </div>
        {/* Bottom Navigation */}
        <div className="flex justify-around p-3 bg-white border-t border-gray-200 text-gray-600">
          <div className="flex flex-col items-center">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Grid className="h-5 w-5" />
            <span className="text-xs">More</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-fintech-blue-accent rounded-full p-2">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs"></span>
          </div>
          <div className="flex flex-col items-center">
            <Repeat className="h-5 w-5" />
            <span className="text-xs">Transactions</span>
          </div>
          <div className="flex flex-col items-center text-fintech-green-success">
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs">Invest</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestMobileMockup;