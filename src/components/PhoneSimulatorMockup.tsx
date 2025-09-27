"use client";

import React from 'react';
import { ShoppingBag, Book, Fuel, Home, Plane, Banknote, ArrowRight } from 'lucide-react'; // Changed Basket to ShoppingBag, added Home
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Import cn for conditional classes
import { motion } from 'framer-motion'; // Import motion

interface PhoneSimulatorMockupProps {
  // isMobile: boolean; // Removed isMobile prop
}

const PhoneSimulatorMockup: React.FC<PhoneSimulatorMockupProps> = () => {
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
      className="relative w-[220px] h-[400px] bg-fintech-phone-bg rounded-[30px] shadow-2xl flex items-center justify-center p-1.5 border-[6px] border-fintech-phone-border overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)' // Enhanced shadow
      }}
      variants={phoneVariants}
      initial="initial"
      animate={["animate", "float"]} // Animations will now run on all devices
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-md z-10"></div>
      {/* Screen Content */}
      <div className="relative w-full h-full bg-white rounded-[25px] overflow-hidden flex flex-col p-4 text-fintech-phone-text">
        <p className="text-sm text-gray-500 mb-2">Choose Amount</p>
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2 mb-4">
          <span className="text-2xl font-bold text-fintech-icon-orange">₹</span>
          <span className="text-2xl font-bold text-gray-800 ml-1">14000</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">Choose EMI Tenure</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {['3 Months', '4 Months', '5 Months', '6 Months'].map((tenure, index) => (
            <Button key={index} variant="outline" className="text-sm h-auto py-2 bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200">
              {tenure}
            </Button>
          ))}
        </div>
        <Button className="w-full bg-fintech-orange-accent text-white py-2 rounded-full text-base font-semibold hover:opacity-90">
          APPLY
        </Button>
      </div>
    </motion.div>
  );
};

export default PhoneSimulatorMockup;