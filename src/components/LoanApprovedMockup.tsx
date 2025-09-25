"use client";

import React from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react'; // Added TrendingUp icon
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component
import { motion } from 'framer-motion'; // Import motion
import { Progress } from '@/components/ui/progress'; // Import Progress component

const LoanApprovedMockup = () => {
  const mockupVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    float: {
      y: [0, -10, 0, 10, 0],
      rotate: [0, 1, 0, -1, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative z-10 w-full max-w-xs mx-auto bg-fintech-simulator-card-bg/80 backdrop-blur-lg border border-fintech-border-light rounded-3xl p-6 shadow-2xl shadow-fintech-blue-accent/20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
      }}
      variants={mockupVariants}
      initial="initial"
      animate={["animate", "float"]}
    >
      <div className="flex flex-col items-center text-center">
        <QickyLogo size="md" /> {/* Use the new QickyLogo component */}
        <div
          className="mt-8 mb-4"
        >
          <TrendingUp className="w-20 h-20 text-fintech-green-success" /> {/* Changed icon to TrendingUp */}
        </div>
        <h2 className="text-2xl font-semibold text-white">Financial Goals</h2> {/* Updated title */}
        <p className="text-fintech-text-muted mt-2">On track for success!</p> {/* Updated subtitle */}
        <div className="mt-8 w-full bg-fintech-dark-bg-lighter rounded-xl p-4">
          <p className="text-sm text-fintech-text-muted">Savings Goal</p>
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end mt-1 mb-4">
            ₹75,000
          </p>
          <Progress value={75} className="h-3 bg-gray-700" indicatorClassName="bg-fintech-green-success" /> {/* Added progress bar */}
          <p className="text-xs text-fintech-text-muted mt-2">75% Achieved</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanApprovedMockup;