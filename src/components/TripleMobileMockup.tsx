"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, ArrowRight, Home, Grid, Repeat, Receipt, PlayCircle, Shield, Wallet, CreditCard, TrendingUp, BarChart, ArrowLeft } from 'lucide-react';

const TripleMobileMockup = () => {
  const PhoneFrame = ({ children, className = "" }) => (
    <div className={`relative w-[320px] h-[650px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20 ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-6 bg-black rounded-b-xl z-10"></div>
      {/* Screen Content */}
      <div className="relative w-full h-full bg-[#1A1A1A] rounded-[30px] overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[600px]">
      {/* Phone 2 (Middle) - Now the only phone */}
      <PhoneFrame>
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
    </div>
  );
};

export default TripleMobileMockup;