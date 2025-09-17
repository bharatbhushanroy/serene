"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const QickyLogo = () => (
  <div className="flex items-center space-x-2">
    <ShieldCheck className="w-8 h-8 text-brand-orange" />
    <span className="text-2xl font-bold text-white">Qicky</span>
  </div>
);

const LoanApprovedMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 w-full max-w-xs mx-auto bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-6 shadow-2xl shadow-brand-orange/20"
    >
      <div className="flex flex-col items-center text-center">
        <QickyLogo />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 150 }}
          className="mt-8 mb-4"
        >
          <CheckCircle className="w-20 h-20 text-green-400" />
        </motion.div>
        <h2 className="text-2xl font-semibold text-white">Loan Approved!</h2>
        <p className="text-gray-300 mt-2">Your funds are on the way</p>
        <div className="mt-8 w-full bg-gray-900/50 rounded-xl p-4">
          <p className="text-sm text-gray-400">Amount</p>
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-400 mt-1">
            $5,000
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanApprovedMockup;