"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, Banknote, ArrowRight, Home, Grid, Repeat, Receipt, Clock, CheckCircle, Percent, TrendingUp, Shield, PiggyBank, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Import Link

const TripleMobileMockup = () => {
  const PhoneFrame = ({ children, className = "", animationDelay = 0, rotation = 0 }) => {
    const phoneVariants = {
      initial: { opacity: 0, scale: 0.8, rotateY: 15, rotate: rotation },
      animate: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        rotate: rotation,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: animationDelay,
        },
      },
    };

    return (
      <motion.div
        className={cn(
          `absolute w-[280px] h-[580px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-20`,
          className
        )}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)', // Enhanced shadow
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
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[650px] scale-90 md:scale-100"> {/* Adjusted scale for better fit */}
      {/* Phone 1 (Left - UPI) */}
      <PhoneFrame className="z-10 -translate-x-[120px] -translate-y-[10px] rotate-[-5deg] hidden sm:block" animationDelay={0.1} rotation={-5}>
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
              <span>Check balance</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-2 rounded-lg mb-1"><Banknote className="h-5 w-5 text-gray-400" /></div>
              <span>Add bank account</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm text-gray-400">Set up your Free UPI</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img src="/public/placeholder.svg" alt="UPI Logo" className="h-6 w-6 mr-2" />
                <p className="font-semibold">Start: Choose bank & done!</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm text-gray-400">How to use UPI safely?</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img src="/public/placeholder.svg" alt="Video Thumbnail" className="h-10 w-16 rounded-md mr-2" />
                <p className="font-semibold">Watch how in your language</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
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
      </PhoneFrame>

      {/* Phone 2 (Middle - Borrow/Insure/Invest) */}
      <PhoneFrame className="z-30" animationDelay={0.3} rotation={0}>
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
          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full mb-2">NEW</span>
            <p className="text-lg font-bold mb-1">Insurance</p>
            <p className="text-sm text-gray-400 mb-3">Starting at ₹129</p>
            <Link to="/contact"> {/* Link to a relevant page, e.g., contact for insurance */}
              <Button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full flex items-center">
                See plans <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-lg font-bold mb-1">Borrow limit</p>
            <p className="text-2xl font-bold text-[#F97316] mb-3">₹1,50,000</p>
            <Link to="/apply-loan"> {/* Link to apply loan page */}
              <Button className="bg-[#F97316] text-white text-sm px-4 py-2 rounded-full flex items-center">
                Activate now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">DIGITAL GOLD</p>
              <p className="text-sm text-gray-400 mb-2">Buy as low as</p>
              <p className="text-xl font-bold text-[#F97316]">₹10</p>
              <Link to="/products/personal-finance"> {/* Link to personal finance or investment page */}
                <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2">
                  Buy now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 relative overflow-hidden">
              <p className="text-sm font-semibold">Invest in FD</p>
              <p className="text-sm text-gray-400 mb-2">with 9% p.a.</p>
              <Link to="/fd-calculator"> {/* Link to FD calculator page */}
                <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2">
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
            <Link to="/products/free-credit-score"> {/* Link to free credit score page */}
              <img src="/public/credit-score.svg" alt="Credit score" className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 3 (Right - Invest in Gold) */}
      <PhoneFrame className="z-10 translate-x-[120px] translate-y-[10px] rotate-[5deg] hidden sm:block" animationDelay={0.2} rotation={5}>
        {/* Top Bar */}
        <div className="flex items-center p-3 bg-[#1A1A1A] text-white">
          <Link to="/" className="mr-2"> {/* Back button */}
            <ArrowLeft className="h-5 w-5 text-gray-400" />
          </Link>
          <p className="text-sm font-semibold flex-1">Invest in Pure Gold starting from ₹10</p>
          <Link to="/products/personal-finance"> {/* Link to investment page */}
            <Button className="bg-fintech-orange-accent text-white text-xs px-3 py-1 rounded-full">
              Buy Gold
            </Button>
          </Link>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Gold buy price</p>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">LIVE</span>
            </div>
            <p className="text-2xl font-bold text-fintech-star-yellow">₹7844.88 <span className="text-sm text-gray-400">/gm</span></p>
            <p className="text-xs text-fintech-green-success flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> 99.05% price rise in last 5 years
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 mb-4">
            <p className="text-sm font-semibold mb-2">How does Freo Gold investment work?</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Invest any amount & grow your gold savings on Freo.</span>
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
      </PhoneFrame>
    </div>
  );
};

export default TripleMobileMockup;