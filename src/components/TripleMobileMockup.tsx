"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const TripleMobileMockup = () => {
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

  const screenContentVariants = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } },
  };

  const mockups = [
    {
      id: 1,
      className: "rotate-[-8deg] translate-x-[-20%] z-10",
      content: (
        <div className="p-3 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-400">UPI Payments</span>
            <span className="text-xs text-fintech-green-success">Active</span>
          </div>
          <p className="text-lg font-bold mb-1">Send Money</p>
          <p className="text-3xl font-extrabold text-fintech-blue-accent mb-4">₹5,000</p>
          <div className="bg-gray-800 rounded-lg p-2 text-xs flex items-center justify-between">
            <span>To: John Doe</span>
            <span className="text-gray-400">Bank of India</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      className: "z-20",
      content: (
        <div className="p-3 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-400">Investments</span>
            <span className="text-xs text-fintech-star-yellow">Growth</span>
          </div>
          <p className="text-lg font-bold mb-1">Digital Gold</p>
          <p className="text-3xl font-extrabold text-fintech-star-yellow mb-4">₹15,000</p>
          <div className="bg-gray-800 rounded-lg p-2 text-xs flex items-center justify-between">
            <span>Current Value</span>
            <span className="text-fintech-green-success">+12.5%</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      className: "rotate-[8deg] translate-x-[20%] z-10",
      content: (
        <div className="p-3 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-400">Borrowing</span>
            <span className="text-xs text-fintech-orange-accent">Approved</span>
          </div>
          <p className="text-lg font-bold mb-1">Loan Limit</p>
          <p className="text-3xl font-extrabold text-fintech-orange-accent mb-4">₹1,00,000</p>
          <div className="bg-gray-800 rounded-lg p-2 text-xs flex items-center justify-between">
            <span>Available</span>
            <span className="text-gray-400">Apply Now</span>
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
            "absolute w-[220px] h-[450px] bg-black rounded-[30px] shadow-xl flex items-center justify-center p-1.5 border-[6px] border-gray-800 overflow-hidden",
            mockup.className
          )}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)',
          }}
          variants={phoneVariants}
          initial="initial"
          animate={["animate", "float"]}
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-5 bg-black rounded-b-xl z-10"></div>
          {/* Screen Content */}
          <div className="relative w-full h-full bg-[#1A1A1A] rounded-[24px] overflow-hidden flex flex-col">
            <motion.div
              className="absolute inset-0 bg-[#1A1A1A] flex flex-col justify-center"
              variants={screenContentVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {mockup.content}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TripleMobileMockup;