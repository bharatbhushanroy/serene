"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

// TypeScript ka interface hata diya
const SuccessScreen = ({ onDashboardClick, refId }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        className="bg-white p-8 md:p-12 rounded-[3rem] max-w-md w-full text-center shadow-2xl relative"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-green-600" strokeWidth={3} />
        </div>

        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Success!</h2>
        <p className="text-slate-500 font-medium mb-8">
          Your loan application has been successfully received.
        </p>

        {/* {refId && (
          <div className="bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ref Number</p>
            <p className="text-sm font-bold text-slate-800">#QKY-{refId}</p>
          </div>
        )} */}

        <button 
          onClick={onDashboardClick}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#368fe9] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          Check Loan Offers <ArrowRight size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessScreen;