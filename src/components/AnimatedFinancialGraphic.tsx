"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedFinancialGraphic = () => {
  const circleVariants = {
    animate: (i: number) => ({
      y: [0, -10 - i * 2, 0],
      x: [0, 10 + i * 2, 0],
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const lineVariants = {
    animate: (i: number) => ({
      pathLength: [0, 1],
      opacity: [0, 1, 0.5],
      transition: {
        duration: 5 + i * 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.8,
      },
    }),
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Gradients */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--fintech-blue-accent))" />
            <stop offset="100%" stopColor="hsl(var(--fintech-blue-soft))" />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--fintech-gradient-purple-start))" />
            <stop offset="100%" stopColor="hsl(var(--fintech-gradient-purple-end))" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--fintech-green-success))" />
            <stop offset="100%" stopColor="hsl(var(--fintech-cyan-light))" />
          </linearGradient>
        </defs>

        {/* Animated Circles */}
        <motion.circle cx="100" cy="100" r="40" fill="url(#blueGradient)" custom={0} variants={circleVariants} animate="animate" style={{ filter: 'blur(10px)' }} />
        <motion.circle cx="300" cy="150" r="50" fill="url(#purpleGradient)" custom={1} variants={circleVariants} animate="animate" style={{ filter: 'blur(12px)' }} />
        <motion.circle cx="150" cy="300" r="35" fill="url(#greenGradient)" custom={2} variants={circleVariants} animate="animate" style={{ filter: 'blur(8px)' }} />

        {/* Connecting Lines */}
        <motion.path d="M100 100 Q200 50 300 150" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={0} variants={lineVariants} animate="animate" />
        <motion.path d="M300 150 Q250 250 150 300" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={1} variants={lineVariants} animate="animate" />
        <motion.path d="M150 300 Q50 200 100 100" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={2} variants={lineVariants} animate="animate" />
        <motion.path d="M100 100 L150 300" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={3} variants={lineVariants} animate="animate" />
      </svg>
    </div>
  );
};

export default AnimatedFinancialGraphic;