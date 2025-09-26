"use client";

import React from 'react';
import { User, Gift, ArrowRight, DollarSign, Home, Gem, CreditCard, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion'; // Import motion

const LoanProductsPhoneMockup = () => {
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
    <motion.div
      className="relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20" // Changed z-index to 20
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Blue glow
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
          <User className="h-4 w-4 text-gray-400" />
          <Gift className="h-4 w-4 text-purple-400" />
        </div>
        {/* Tabs */}
        <div className="flex justify-around p-1 bg-[#1A1A1A] text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">All</span>
          <span className="px-2 py-1 rounded-full bg-fintech-blue-accent text-white">Loans</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Cards</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Invest</span>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-4 overflow-y-auto text-white">
          <h3 className="text-2xl font-bold mb-4">Your Loan Offers</h3>

          <div className="space-y-3">
            {/* Loan Offer Card 1 */}
            <Card className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">Personal Loan</p>
                <p className="text-sm text-gray-400">Up to ₹5 Lakhs</p>
              </div>
              <ArrowRight className="h-5 w-5 text-fintech-blue-accent" />
            </Card>
            {/* Loan Offer Card 2 */}
            <Card className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">Home Loan</p>
                <p className="text-sm text-gray-400">Low interest rates</p>
              </div>
              <ArrowRight className="h-5 w-5 text-fintech-blue-accent" />
            </Card>
            {/* Loan Offer Card 3 */}
            <Card className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">Gold Loan</p>
                <p className="text-sm text-gray-400">Instant approval</p>
              </div>
              <ArrowRight className="h-5 w-5 text-fintech-blue-accent" />
            </Card>
            {/* Loan Offer Card 4 */}
            <Card className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">Mutual Fund Loan</p>
                <p className="text-sm text-gray-400">Against your investments</p>
              </div>
              <ArrowRight className="h-5 w-5 text-fintech-blue-accent" />
            </Card>
          </div>
          <Button className="mt-6 w-full py-3 bg-fintech-blue-accent text-white rounded-full font-semibold hover:bg-blue-600">
            Explore All Loan Products
          </Button>
        </div>
        {/* Bottom Nav */}
        <div className="flex justify-around p-3 bg-white border-t border-gray-200 text-gray-600">
          <div className="flex flex-col items-center text-fintech-blue-accent">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart className="h-5 w-5" />
            <span className="text-xs">Invest</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-fintech-blue-accent rounded-full p-2">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs"></span>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs">Cards</span>
          </div>
          <div className="flex flex-col items-center">
            <Gem className="h-5 w-5" />
            <span className="text-xs">Gold</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanProductsPhoneMockup;