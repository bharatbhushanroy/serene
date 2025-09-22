"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Bank, ArrowRight, Home, Grid, Repeat, Receipt, PlayCircle, Shield, Wallet, CreditCard, TrendingUp, BarChart, ArrowLeft } from 'lucide-react';

const TripleMobileMockup = () => {
  const PhoneFrame = ({ children, className = "" }) => (
    <div className={`relative w-[280px] h-[580px] bg-black rounded-[30px] shadow-2xl flex items-center justify-center p-1 border-[6px] border-gray-800 overflow-hidden z-20 ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-5 bg-black rounded-b-lg z-10"></div>
      {/* Screen Content */}
      <div className="relative w-full h-full bg-[#1A1A1A] rounded-[24px] overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center w-full h-full min-h-[600px] space-y-8 lg:space-y-0 lg:space-x-8 scale-90 md:scale-100">
      {/* Phone 1 (Left) */}
      <PhoneFrame className="lg:-rotate-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
          <User className="h-4 w-4 text-gray-400" />
          <Gift className="h-4 w-4 text-purple-400" />
        </div>
        {/* Tabs */}
        <div className="flex justify-around p-1 bg-[#1A1A1A] text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">All</span>
          <span className="px-2 py-1 rounded-full bg-[#F97316] text-white">UPI</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Insure</span>
          <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Borrow</span>
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
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Bank className="h-5 w-5 text-gray-400" /></div>
              <span>Check balance</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Bank className="h-5 w-5 text-gray-400" /></div>
              <span>Add bank account</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src="/public/freo-logo.svg" alt="Freo UPI" className="h-6 w-6 mr-2" />
              <div>
                <p className="text-sm font-semibold">Set up your Free UPI</p>
                <p className="text-xs text-gray-400">Start. Choose bank & done!</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </div>

          <div className="grid grid-cols-4 gap-2 text-center text-xs mb-4">
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><CreditCard className="h-5 w-5 text-gray-400" /></div>
              <span>Pay UPI ID/ number</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><CreditCard className="h-5 w-5 text-gray-400" /></div>
              <span>Link RuPay card to UPI</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Bank className="h-5 w-5 text-gray-400" /></div>
              <span>Bank transfer</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Bank className="h-5 w-5 text-gray-400" /></div>
              <span>Self transfer</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">How to use UPI safely?</p>
              <p className="text-xs text-gray-400">Watch how in your language</p>
            </div>
            <PlayCircle className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        {/* Bottom Navigation */}
        <div className="flex justify-around p-2 bg-white border-t border-gray-200 text-gray-600 text-xs">
          <div className="flex flex-col items-center text-[#F97316]">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Grid className="h-4 w-4" />
            <span>More</span>
          </div>
          <div className="flex flex-col items-center">
            <Repeat className="h-4 w-4" />
            <span>Transactions</span>
          </div>
          <div className="flex flex-col items-center">
            <Receipt className="h-4 w-4" />
            <span>Bills</span>
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 2 (Middle) */}
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
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Bank className="h-5 w-5 text-gray-400" /></div>
              <span>To bank account</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Bank className="h-5 w-5 text-gray-400" /></div>
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
              <img src="/public/gold-bars.svg" alt="Gold bars" className="absolute bottom-0 right-0 w-16 h-16 opacity-50" />
            </div>
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">Invest in FD</p>
              <p className="text-sm text-gray-400 mb-2">with 9% p.a.</p>
              <img src="/public/coins.svg" alt="Coins" className="absolute bottom-0 right-0 w-16 h-16 opacity-50" />
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

      {/* Phone 3 (Right) */}
      <PhoneFrame className="lg:rotate-6">
        {/* Top Bar */}
        <div className="flex items-center p-3 bg-[#1A1A1A] text-white">
          <ArrowLeft className="h-4 w-4 text-gray-400 mr-3" />
          <p className="font-semibold text-sm">Invest</p>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
          <div className="text-center mb-4">
            <p className="text-lg font-bold mb-2">Invest in Pure Gold starting from ₹10</p>
            <p className="text-xs text-gray-400 mb-4">Invest any amount & grow your gold savings on Freo.</p>
            <button className="bg-[#F97316] text-white text-sm px-6 py-2 rounded-full font-medium">
              Buy Gold
            </button>
          </div>

          <div className="bg-white rounded-xl p-3 text-black mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img src="/public/gold-bar-icon.svg" alt="Gold bar" className="h-6 w-6 mr-2" />
                <div>
                  <p className="font-semibold">Gold buy price</p>
                  <p className="text-xl font-bold text-[#F97316]">₹7844.88<span className="text-sm">/gm</span></p>
                </div>
              </div>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Live</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">↑99.64% price rise in last 5 years</p>
            <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <BarChart className="h-12 w-12 text-gray-300" /> {/* Placeholder for chart */}
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 text-black text-center">
            <p className="font-semibold mb-4">How does Freo Gold investment work?</p>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img src="/public/gold-circle.svg" alt="Gold circle" className="w-full h-full" />
            </div>
            <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-full font-medium">
              AUGMONT
            </button>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
};

export default TripleMobileMockup;