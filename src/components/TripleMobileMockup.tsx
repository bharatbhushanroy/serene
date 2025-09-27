"use client";

import React from 'react';
import { User, Gift, QrCode, Smartphone, Landmark, Banknote, ArrowRight, Home, Grid, Repeat, Receipt, Clock, CheckCircle, Percent, TrendingUp, Shield, PiggyBank, ArrowLeft, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const TripleMobileMockup = () => {
  const PhoneFrame = ({ children, className = "", animationDelay = 0, rotation = 0, zIndex = 20 }) => {
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
      float: {
        y: [0, -8, 0, 8, 0],
        rotate: [rotation, rotation + 0.5, rotation, rotation - 0.5, rotation],
        transition: {
          duration: 12 + animationDelay * 5, // Varied float duration
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    };

    return (
      <motion.div
        className={cn(
          `absolute w-[280px] h-[580px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden`,
          className
        )}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)', // Enhanced shadow
          zIndex: zIndex,
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
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[650px] scale-90 md:scale-100">
      {/* Phone 1 (Left - UPI) */}
      <PhoneFrame className="z-10 -translate-x-[180px] -translate-y-[30px] rotate-[-10deg] hidden sm:block" animationDelay={0.1} rotation={-10} zIndex={10}>
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
      </PhoneFrame>

      {/* Phone 2 (Middle - Borrow/Insure/Invest) */}
      <PhoneFrame className="z-30" animationDelay={0.3} rotation={0} zIndex={30}>
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
          <div className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start rounded-xl p-3 mb-4 relative overflow-hidden">
            <span className="inline-block bg-white text-fintech-blue-accent text-xs px-2 py-0.5 rounded-full mb-2 font-semibold">NEW</span>
            <p className="text-lg font-bold mb-1">Insurance</p>
            <p className="text-sm text-gray-100 mb-3">Starting at ₹129</p>
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
              <img src="/public/placeholder.svg" alt="Credit score" className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </PhoneFrame>

      {/* Phone 3 (Right - Invest in Gold) */}
      <PhoneFrame className="z-10 translate-x-[180px] -translate-y-[30px] rotate-[10deg] hidden sm:block" animationDelay={0.2} rotation={10} zIndex={10}>
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
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
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