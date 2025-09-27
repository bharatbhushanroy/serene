"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { User, Gift, QrCode, Smartphone, Landmark, Banknote, ArrowRight, BarChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TripleMobileMockup = () => {
  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const mockups = [
    {
      id: 1, // Left phone (behind)
      className: "rotate-[-8deg] translate-x-[-20%] z-10 w-[200px] h-[400px]",
      content: (
        <div className="relative w-full h-full bg-[#1A1A1A] rounded-[24px] overflow-hidden flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
            <User className="h-4 w-4 text-gray-400" />
            <span className="text-xs text-gray-400">Re</span>
          </div>
          {/* Main Content */}
          <div className="flex-1 p-3 overflow-y-auto text-white text-left">
            <p className="text-sm text-gray-400 mb-1">You</p>
            <p className="text-4xl font-bold text-fintech-orange-accent mb-4">12</p>
            <div className="bg-gray-800 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-400">Redeem</p>
              <p className="text-lg font-bold text-white">Get 10</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-sm text-gray-400">Ti</p>
              <p className="text-lg font-bold text-white">Sav</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2, // Central phone (main)
      className: "z-20 w-[250px] h-[500px]",
      content: (
        <div className="relative w-full h-full bg-[#1A1A1A] rounded-[24px] overflow-hidden flex flex-col">
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
            <span className="px-2 py-1 rounded-full bg-fintech-orange-accent text-white">Borrow</span>
            <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-400">Invest</span>
          </div>
          {/* Main Content Area */}
          <div className="flex-1 bg-[#1A1A1A] p-3 overflow-y-auto text-white">
            <div className="flex items-center justify-between text-sm mb-3">
              <p className="font-semibold text-gray-400">UPI payments</p>
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
                <div className="bg-gray-800 p-2 rounded-lg mb-1"><Banknote className="h-5 w-5 text-gray-400" /></div>
                <span>To Self account</span>
              </div>
            </div>

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
            <div className="bg-gray-800 rounded-xl p-3 mb-4">
              <p className="text-sm font-semibold">DIGITAL GOLD</p>
              <p className="text-sm text-gray-400 mb-2">Buy as low as</p>
              <p className="text-xl font-bold text-[#F97316]">₹10</p>
              <Link to="/products/personal-finance">
                <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2 hover:bg-gray-600">
                  Buy now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-sm font-semibold">Invest in FD</p>
              <p className="text-sm text-gray-400 mb-2">with 9% p.a.</p>
              <Link to="/fd-calculator">
                <Button className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center mt-2 hover:bg-gray-600">
                  Invest now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Credit score</p>
                <p className="text-xs text-gray-400">Check now</p>
              </div>
              <Link to="/products/free-credit-score">
                <img src="/public/placeholder.svg" alt="Credit score" className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3, // Right phone (behind)
      className: "rotate-[8deg] translate-x-[20%] z-10 w-[200px] h-[400px]",
      content: (
        <div className="relative w-full h-full bg-[#1A1A1A] rounded-[24px] overflow-hidden flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-3 bg-[#1A1A1A] text-white">
            <User className="h-4 w-4 text-gray-400" />
            <BarChart className="h-4 w-4 text-gray-400" />
          </div>
          {/* Main Content */}
          <div className="flex-1 p-3 overflow-y-auto text-white text-left">
            <p className="text-sm text-gray-400 mb-1">Analysis</p>
            <p className="text-4xl font-bold text-fintech-green-success mb-4">00</p>
            <div className="bg-gray-800 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-400">Expenses</p>
              <p className="text-lg font-bold text-white">ing</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-sm text-gray-400">Ti</p>
              <p className="text-lg font-bold text-white">Sav</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex justify-center items-center w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {mockups.map((mockup, index) => (
        <motion.div
          key={mockup.id}
          className={cn(
            "absolute bg-black rounded-[30px] shadow-xl flex items-center justify-center p-1.5 border-[6px] border-gray-800 overflow-hidden",
            mockup.className
          )}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)',
          }}
          variants={phoneVariants}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-5 bg-black rounded-b-xl z-10"></div>
          {/* Screen Content */}
          {mockup.content}
        </motion.div>
      ))}
    </div>
  );
};

export default TripleMobileMockup;