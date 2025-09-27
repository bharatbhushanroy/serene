"use client";

import React from 'react';
import { User, Gift, ArrowRight, ArrowLeft, TrendingUp, CheckCircle, Percent, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface InvestMobileMockupProps {
  isMobile: boolean; // Add isMobile prop
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
      className="relative w-full max-w-[280px] aspect-[280/580] mx-auto bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(140, 82, 255, 0.3)', // Purple glow
      }}
      variants={phoneVariants}
      initial="initial"
      animate={["animate", "float"]} // Animations will now run on all devices
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-6 bg-black rounded-b-xl z-10"></div>
      {/* Screen Content */}
      <div className="relative w-full h-full bg-[#1A1A1A] rounded-[30px] overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center p-3 bg-[#1A1A1A] text-white">
          <Link to="/" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-gray-400" />
          </Link>
          <p className="text-sm font-semibold flex-1">Invest in Pure Gold starting from ₹10</p>
          <Link to="/products/personal-finance">
            <Button className="bg-fintech-orange-accent text-white text-xs px-3 py-1 rounded-full hover:bg-orange-600">
              Buy Gold
            </Button>
          </Link>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Gold buy price</p>
              <motion.span
                className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full"
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} // Animations will now run on all devices
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                LIVE
              </motion.span>
            </div>
            <p className="text-2xl font-bold text-fintech-star-yellow">₹7844.88 <span className="text-sm text-gray-400">/gm</span></p>
            <p className="text-xs text-fintech-green-success flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> 99.05% price rise in last 5 years
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm font-semibold mb-2">How does Qicky Gold investment work?</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Invest any amount & grow your gold savings on Qicky.</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm font-semibold mb-2">Pure 24 Karat Gold</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>99.9% purity guaranteed.</span>
              <CheckCircle className="h-4 w-4 text-fintech-green-success" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-fintech-gradient-purple-start to-fintech-gradient-pink-end rounded-xl p-3 mb-4">
            <p className="text-sm font-semibold text-white mb-2">Start your SIP in Gold</p>
            <p className="text-xs text-gray-100 mb-3">Invest regularly for long-term growth.</p>
            <Link to="/products/personal-finance">
              <Button className="bg-white text-fintech-gradient-purple-start text-xs px-3 py-1 rounded-full flex items-center hover:bg-gray-100">
                Setup SIP <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm font-semibold mb-2">Fixed Deposit</p>
            <p className="text-xs text-gray-400 mb-2">Earn up to <Percent className="inline h-3 w-3" />9.00 p.a.</p>
            <Link to="/fd-calculator">
              <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2 hover:bg-gray-600">
                Invest in FD <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestMobileMockup;