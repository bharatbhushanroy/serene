"use client";

import React from 'react';
import { User, Gift, ArrowRight, Shield, PiggyBank, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface BorrowInsureMobileMockupProps {
  isMobile: boolean; // Add isMobile prop
}

const BorrowInsureMobileMockup: React.FC<BorrowInsureMobileMockupProps> = ({ isMobile }) => {
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
      className="relative w-[280px] h-[580px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)',
      }}
      variants={phoneVariants}
      initial="initial"
      animate={isMobile ? "animate" : ["animate", "float"]} // Conditional animation
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
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">UPI</span>
          <span className="px-2 py-1 rounded-full bg-fintech-blue-accent text-white">Insure</span>
          <span className="px-2 py-1 rounded-full bg-[#F97316] text-white">Borrow</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Invest</span>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
          <div className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start rounded-xl p-3 mb-4 relative overflow-hidden">
            <span className="inline-block bg-white text-fintech-blue-accent text-xs px-2 py-0.5 rounded-full mb-2 font-semibold">NEW</span>
            <p className="text-lg font-bold mb-1">Insurance</p>
            <p className="text-sm text-gray-100 mb-3">Starting at ₹129. Protect your future!</p>
            <Link to="/contact">
              <Button className="bg-white text-fintech-blue-accent text-sm px-4 py-2 rounded-full flex items-center hover:bg-gray-100">
                See plans <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-lg font-bold mb-1">Borrow limit</p>
            <p className="text-2xl font-bold text-[#F97316] mb-3">₹1,50,000</p>
            <Link to="/apply-loan">
              <Button className="bg-[#F97316] text-white text-sm px-4 py-2 rounded-full flex items-center hover:bg-orange-600">
                Activate now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">DIGITAL GOLD</p>
              <p className="text-sm text-gray-400 mb-2">Buy as low as</p>
              <p className="text-xl font-bold text-[#F97316]">₹10</p>
              <Link to="/products/personal-finance">
                <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2 hover:bg-gray-600">
                  Buy now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">Invest in FD</p>
              <p className="text-sm text-gray-400 mb-2">with 9% p.a.</p>
              <Link to="/fd-calculator">
                <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2 hover:bg-gray-600">
                  Invest now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Credit score</p>
              <p className="text-xs text-gray-400">Check now</p>
            </div>
            <Link to="/products/free-credit-score">
              <img src="/public/placeholder.svg" alt="Credit score" className="h-8 w-8" width={32} height={32} loading="lazy" /> {/* Added width/height and lazy loading */}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BorrowInsureMobileMockup;