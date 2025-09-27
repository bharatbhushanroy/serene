"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, Banknote, ArrowRight, Home, Grid, Repeat, Receipt, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Import Link

interface UpiMobileMockupProps {
  isMobile: boolean; // Add isMobile prop
}

const UpiMobileMockup: React.FC<UpiMobileMockupProps> = ({ isMobile }) => {
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
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
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
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <User className="h-4 w-4 text-gray-400" />
          <Gift className="h-4 w-4 text-purple-400" />
        </div>
        {/* Tabs */}
        <div className="flex justify-around p-1 bg-[#1A1A1A] text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">All</span>
          <span className="px-2 py-1 rounded-full bg-fintech-blue-accent text-white">UPI</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Insure</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Borrow</span>
        </div>
        {/* Main Content Area - Mock UPI Transaction */}
        <div className="flex-1 bg-[#1A1A1A] p-4 overflow-y-auto text-white">
          <p className="text-sm text-gray-400 mb-3">Send Money</p>
          <div className="grid grid-cols-4 gap-2 text-center text-xs mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><QrCode className="h-5 w-5 text-gray-400" /></div>
              <span>Scan QR</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Smartphone className="h-5 w-5 text-gray-400" /></div>
              <span>To Mobile</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Banknote className="h-5 w-5 text-gray-400" /></div>
              <span>To Bank A/c</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Landmark className="h-5 w-5 text-gray-400" /></div>
              <span>Self A/c</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-400">Paying to</p>
            <div className="flex items-center mt-1">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfdce506?q=80&w=2080&auto=format&fit=crop" alt="Recipient" className="h-8 w-8 rounded-full mr-3" width={32} height={32} loading="lazy" /> {/* Added width/height and lazy loading */}
              <div>
                <p className="font-semibold text-white">Charlie P.</p>
                <p className="text-xs text-gray-400">charlie@upi</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Amount</p>
              <p className="text-3xl font-bold text-fintech-green-success mt-1">₹ 5,000</p>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <span>Transaction ID: #QCKY12345</span>
              <CheckCircle className="h-5 w-5 text-fintech-green-success" />
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs mt-4">
            Powered by <span className="font-bold text-white">NPCI</span>
          </div>
        </div>
        {/* Bottom Navigation */}
        <div className="flex justify-around p-3 bg-white border-t border-gray-200 text-gray-600">
          <div className="flex flex-col items-center text-fintech-blue-accent">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Grid className="h-5 w-5" />
            <span className="text-xs">More</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-fintech-blue-accent rounded-full p-2">
              <QrCode className="h-5 w-5 text-white" />
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

export default UpiMobileMockup;