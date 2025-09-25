"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';
import QickyLogo from './QickyLogo'; // Import the new QickyLogo component

const LoanApprovedMockup = () => {
  return (
    <div
      className="relative z-10 w-full max-w-xs mx-auto bg-fintech-simulator-card-bg/80 backdrop-blur-lg border border-fintech-border-light rounded-3xl p-6 shadow-2xl shadow-fintech-blue-accent/20"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
      }}
    >
      <div className="flex flex-col items-center text-center">
        <QickyLogo size="md" /> {/* Use the new QickyLogo component */}
        <div
          className="mt-8 mb-4"
        >
          <CheckCircle className="w-20 h-20 text-fintech-green-success" />
        </div>
        <h2 className="text-2xl font-semibold text-white">Loan Approved!</h2>
        <p className="text-fintech-text-muted mt-2">Your funds are on the way</p>
        <div className="mt-8 w-full bg-fintech-dark-bg-lighter rounded-xl p-4">
          <p className="text-sm text-fintech-text-muted">Amount</p>
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end mt-1">
            ₹5,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanApprovedMockup;