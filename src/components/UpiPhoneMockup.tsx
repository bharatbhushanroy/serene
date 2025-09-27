"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, Banknote, ArrowRight, Home, Grid, Repeat, Receipt, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const UpiPhoneMockup = () => {
  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
      }}
      variants={phoneVariants}
      initial="initial"
      animate="animate"
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
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-4 overflow-y-auto text-white">
          <p className="text-sm text-gray-400 mb-3">UPI payments</p>
          <div className="grid grid-cols-4 gap-2 text-center text-xs mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><QrCode className="h-5 w-5 text-gray-400" /></div>
              <span>Scan QR code</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Smartphone className="h-5 w-5 text-gray-400" /></div>
              <span>Pay to mobile</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Banknote className="h-5 w-5 text-gray-400" /></div>
              <span>Check balance</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Landmark className="h-5 w-5 text-gray-400" /></div>
              <span>Add bank account</span>
            </div>
          </div>

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-[30px]">
            <div className="text-center p-4">
              <Clock className="h-16 w-16 text-fintech-orange-accent mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-2">Coming Soon!</h3>
              <p className="text-lg text-gray-300">Qicky UPI is launching very soon.</p>
              <Button className="mt-6 bg-fintech-blue-accent text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-blue-600">
                Get Notified <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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

export default UpiPhoneMockup;