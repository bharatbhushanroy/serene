"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, ArrowRight, Home, Grid, Repeat, Receipt, PlayCircle, Shield, Wallet, CreditCard, TrendingUp, BarChart, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion

const TripleMobileMockup = () => {
  const PhoneFrame = ({ children, className = "", animationDelay = 0, rotation = 0, offsetX = 0, offsetY = 0 }) => {
    const phoneVariants = {
      initial: { opacity: 0, scale: 0.8, rotateY: 15, x: offsetX, y: offsetY, rotate: rotation },
      animate: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        x: offsetX,
        y: offsetY,
        rotate: rotation,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: animationDelay,
        },
      },
      // Removed the 'float' variant to stop continuous animation
    };

    return (
      <motion.div
        className={`absolute w-[280px] h-[580px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20 ${className}`}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)', // Enhanced shadow
        }}
        variants={phoneVariants}
        initial="initial"
        animate="animate" // Only animate to the final state
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-6 bg-black rounded-b-xl z-10"></div>
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#1A1A1A] rounded-[30px] overflow-hidden flex flex-col">
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[650px]">
      {/* Phone 1 (Left, slightly behind) */}
      <PhoneFrame className="z-10 hidden md:block" animationDelay={0.1} rotation={-5} offsetX={-100} offsetY={-20}>
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <User className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-semibold">Rewards</span>
          <Gift className="h-4 w-4 text-purple-400" />
        </div>
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white text-center">
          <h3 className="text-xl font-bold mb-2">Your Points</h3>
          <p className="text-4xl font-bold text-fintech-orange-accent mb-4">12,500</p>
          <p className="text-sm text-gray-400 mb-4">Redeem for exclusive offers!</p>
          <div className="bg-gray-800 rounded-xl p-3 mb-3">
            <p className="text-sm font-semibold">Cashback Offer</p>
            <p className="text-xs text-gray-400">Get 10% back on groceries</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-sm font-semibold">Travel Vouchers</p>
            <p className="text-xs text-gray-400">Save on your next trip</p>
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 2 (Middle, front) */}
      <PhoneFrame className="z-30" animationDelay={0.3} rotation={0} offsetX={0} offsetY={0}>
        {/* Top Bar */}
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <User className="h-4 w-4 text-gray-400" />
          <Gift className="h-4 w-4 text-purple-400" />
        </div>
        {/* Tabs */}
        <div className="flex justify-around p-1 bg-[#1A1A1A] text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">All</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">UPI</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Insure</span>
          <span className="px-2 py-1 rounded-full bg-[#F97316] text-white">Borrow</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Invest</span>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
          <div className="flex items-center justify-between text-sm mb-3">
            <p className="font-semibold">UPI payments</p>
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs mb-4">
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><QrCode className="h-5 w-5 text-gray-400" /></div>
              <span>Scan QR code</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Smartphone className="h-5 w-5 text-gray-400" /></div>
              <span>Pay to mobile</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Landmark className="h-5 w-5 text-gray-400" /></div>
              <span>To bank account</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Landmark className="h-5 w-5 text-gray-400" /></div>
              <span>To Self account</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full mb-2">NEW</span>
            <p className="text-lg font-bold mb-1">Insurance</p>
            <p className="text-sm text-gray-400 mb-3">Starting at ₹129</p>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full flex items-center">
              See plans <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-lg font-bold mb-1">Borrow limit</p>
            <p className="text-2xl font-bold text-[#F97316] mb-3">₹1,50,000</p>
            <button className="bg-[#F97316] text-white text-sm px-4 py-2 rounded-full flex items-center">
              Activate now <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">DIGITAL GOLD</p>
              <p className="text-sm text-gray-400 mb-2">Buy as low as</p>
              <p className="text-xl font-bold text-[#F97316]">₹10</p>
              <button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2">
                Buy now <ArrowRight className="ml-1 h-3 w-3" />
              </button>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">Invest in FD</p>
              <p className="text-sm text-gray-400 mb-2">with 9% p.a.</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Credit score</p>
              <p className="text-xs text-gray-400">Check now</p>
            </div>
            <img src="/public/credit-score.svg" alt="Credit score" className="h-8 w-8" />
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 3 (Right, slightly behind) */}
      <PhoneFrame className="z-10 hidden md:block" animationDelay={0.2} rotation={5} offsetX={100} offsetY={20}>
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <User className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-semibold">Insights</span>
          <BarChart className="h-4 w-4 text-green-400" />
        </div>
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white text-center">
          <h3 className="text-xl font-bold mb-2">Spending Analysis</h3>
          <p className="text-4xl font-bold text-fintech-green-success mb-4">₹25,000</p>
          <p className="text-sm text-gray-400 mb-4">This month's expenses</p>
          <div className="bg-gray-800 rounded-xl p-3 mb-3">
            <p className="text-sm font-semibold">Food & Dining</p>
            <p className="text-xs text-gray-400">₹8,000</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-sm font-semibold">Shopping</p>
            <p className="text-xs text-gray-400">₹6,000</p>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
};

export default TripleMobileMockup;