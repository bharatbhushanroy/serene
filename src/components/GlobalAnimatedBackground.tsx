"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GlobalAnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> {/* z-index: 0 ensures it's above the video (z-index: -2) */}
      {/* Large, subtle circle 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100, y: -100 }}
        animate={{ opacity: 0.15, scale: 1.1, x: 50, y: 50 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-fintech-blue-soft opacity-0"
        style={{ filter: 'blur(100px)' }}
      />
      {/* Large, subtle circle 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 100, y: 100 }}
        animate={{ opacity: 0.1, scale: 1.2, x: -50, y: -50 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-fintech-cyan-light opacity-0"
        style={{ filter: 'blur(110px)' }}
      />
      {/* Medium, faster moving circle 1 */}
      <motion.div
        initial={{ opacity: 0, y: -50, x: 50 }}
        animate={{ opacity: 0.1, y: 80, x: -80 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1 }}
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-fintech-orange-accent opacity-0"
        style={{ filter: 'blur(80px)' }}
      />
      {/* Medium, faster moving circle 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: -50 }}
        animate={{ opacity: 0.08, y: -70, x: 70 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 3 }}
        className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-fintech-gradient-purple-start opacity-0"
        style={{ filter: 'blur(90px)' }}
      />
    </div>
  );
};

export default GlobalAnimatedBackground;