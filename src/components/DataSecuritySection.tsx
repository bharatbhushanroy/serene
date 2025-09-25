"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const DataSecuritySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const mainTextLines = [
    "all your personal data and transactions",
    "are encrypted and secured.",
    "there's no room for mistakes",
    "because we didn't leave any.",
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Shield Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-flex items-center justify-center mb-8"
        >
          <Shield className="h-24 w-24 text-white" strokeWidth={1} />
          <Lock className="absolute h-10 w-10 text-black" />
        </motion.div>

        {/* First Line of Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide mb-16"
        >
          YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
        </motion.p>

        {/* Main Text Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-500 text-4xl md:text-6xl font-extrabold leading-tight space-y-2"
        >
          {mainTextLines.map((line, index) => (
            <motion.p key={index} variants={itemVariants}>
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DataSecuritySection;