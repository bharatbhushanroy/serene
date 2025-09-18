"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component

const LoanApprovedMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 w-full max-w-xs mx-auto bg-fintech-card-light/80 backdrop-blur-lg border border-fintech-border-light rounded-3xl p-6 shadow-2xl shadow-fintech-blue-accent/20"
    >
      <div className="flex flex-col items-center text-center">
        <QickyLogo size="md" /> {/* Use the new QickyLogo component */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 150 }}
          className="mt-8 mb-4"
        >
          <CheckCircle className="w-20 h-20 text-fintech-green-success" />
        </motion.div>
        <h2 className="text-2xl font-semibold text-fintech-text-dark">Loan Approved!</h2>
        <p className="text-fintech-text-muted mt-2">Your funds are on the way</p>
        <div className="mt-8 w-full bg-fintech-background-offwhite rounded-xl p-4">
          <p className="text-sm text-fintech-text-muted">Amount</p>
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fintech-green-success via-fintech-cyan-light to-fintech-blue-soft mt-1">
            ₹5,000
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanApprovedMockup;