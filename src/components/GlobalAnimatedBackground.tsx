"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GlobalAnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large, subtle circle 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100, y: -100 }}
        animate={{ opacity: 0.1, scale: 1.1, x: 50, y: 50 }} // Reduced opacity
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // Longer duration
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-fintech-blue-soft opacity-0" // Larger size
        style={{ filter: 'blur(150px)' }} // Increased blur for subtlety
      />
      {/* Large, subtle circle 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 100, y: 100 }}
        animate={{ opacity: 0.08, scale: 1.2, x: -50, y: -50 }} // Reduced opacity
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 5 }} // Longer duration, more delay
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-fintech-cyan-light opacity-0" // Larger size
        style={{ filter: 'blur(180px)' }} // Increased blur for subtlety
      />
    </div>
  );
};

export default GlobalAnimatedBackground;