"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundShapesProps {
  // isMobile: boolean; // Removed isMobile prop
}

const AnimatedBackgroundShapes: React.FC<AnimatedBackgroundShapesProps> = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large, subtle circle 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100, y: -100 }}
        animate={{ opacity: 0.2, scale: 1.2, x: 50, y: 50 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-fintech-blue-soft opacity-0"
        style={{ filter: 'blur(100px)' }}
      />
      {/* Large, subtle circle 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 100, y: 100 }}
        animate={{ opacity: 0.15, scale: 1.3, x: -50, y: -50 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-fintech-cyan-light opacity-0"
        style={{ filter: 'blur(120px)' }}
      />
      {/* Medium, faster moving circle 1 */}
      <motion.div
        initial={{ opacity: 0, y: -50, x: 50 }}
        animate={{ opacity: 0.1, y: 80, x: -80 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 0.5 }}
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-fintech-orange-accent opacity-0"
        style={{ filter: 'blur(90px)' }}
      />
      {/* Medium, faster moving circle 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: -50 }}
        animate={{ opacity: 0.08, y: -70, x: 70 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1.5 }}
        className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-fintech-gradient-purple-start opacity-0"
        style={{ filter: 'blur(100px)' }}
      />
      {/* Smaller, faster moving circle 3 */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: 20 }}
        animate={{ opacity: 0.12, x: 80, y: -20 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeOut", delay: 2.5 }}
        className="absolute top-1/2 left-1/2 w-52 h-52 rounded-full bg-fintech-green-success opacity-0"
        style={{ filter: 'blur(80px)' }}
      />
      {/* Smaller, faster moving circle 4 */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: -20 }}
        animate={{ opacity: 0.09, x: -80, y: 20 }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "reverse", ease: "easeIn", delay: 3.5 }}
        className="absolute bottom-1/2 right-1/2 w-48 h-48 rounded-full bg-fintech-blue-accent opacity-0"
        style={{ filter: 'blur(70px)' }}
      />
    </div>
  );
};

export default AnimatedBackgroundShapes;