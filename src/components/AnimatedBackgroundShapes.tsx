"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large, subtle circle 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100, y: -100 }}
        animate={{ opacity: 0.1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-fintech-blue-soft opacity-0"
        style={{ filter: 'blur(80px)' }}
      />
      {/* Large, subtle circle 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 100, y: 100 }}
        animate={{ opacity: 0.1, scale: 1.1, x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-fintech-cyan-light opacity-0"
        style={{ filter: 'blur(90px)' }}
      />
      {/* Smaller, faster moving circle 1 */}
      <motion.div
        initial={{ opacity: 0, y: -50, x: 50 }}
        animate={{ opacity: 0.08, y: 50, x: -50 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 0.5 }}
        className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-fintech-blue-accent opacity-0"
        style={{ filter: 'blur(60px)' }}
      />
      {/* Smaller, faster moving circle 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: -50 }}
        animate={{ opacity: 0.08, y: -50, x: 50 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1.5 }}
        className="absolute bottom-1/3 left-1/3 w-52 h-52 rounded-full bg-fintech-blue-soft opacity-0"
        style={{ filter: 'blur(70px)' }}
      />
    </div>
  );
};

export default AnimatedBackgroundShapes;