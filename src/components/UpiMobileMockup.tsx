"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, Banknote, ArrowRight, Home, Grid, Repeat, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const UpiMobileMockup = () => {
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
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)',
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
          <span className="px-2 py-1 rounded-full bg-fintech-blue-accent text-white">UPI</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Insure</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Borrow</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Invest</span>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
          <div className="flex items-center justify-between text-sm mb-3">
            <p className="font-semibold">Send Money</p>
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-xs mb-4">
            <Link to="/contact" className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <QrCode className="h-6 w-6 text-fintech-blue-accent mb-1" />
              <span>Scan QR</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Smartphone className="h-6 w-6 text-fintech-blue-accent mb-1" />
              <span>To Mobile</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Landmark className="h-6 w-6 text-fintech-blue-accent mb-1" />
              <span>To Bank A/c</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Banknote className="h-6 w-6 text-fintech-blue-accent mb-1" />
              <span>Self A/c</span>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm text-gray-400">Recent Transactions</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfdce506?q=80&w=2080&auto=format&fit=crop" alt="Recipient" className="h-8 w-8 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">Charlie P.</p>
                  <p className="text-xs text-gray-400">Paid for groceries</p>
                </div>
              </div>
              <p className="font-bold text-fintech-green-success">₹500</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm text-gray-400">Qicky UPI is launching soon!</p>
            <Link to="/signup">
              <Button className="w-full bg-fintech-orange-accent text-white text-sm px-4 py-2 rounded-full flex items-center justify-center mt-2 hover:bg-orange-600">
                Get Notified <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
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