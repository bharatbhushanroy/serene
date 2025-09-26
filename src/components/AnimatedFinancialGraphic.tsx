"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedFinancialGraphic = () => {
  const circleVariants = {
    animate: (i: number) => ({
      y: [0, -15 - i * 3, 0, 15 + i * 3, 0], // More complex vertical movement
      x: [0, 10 + i * 2, -10 - i * 2, 0, 0], // More complex horizontal movement
      scale: [1, 1.1, 0.9, 1.05, 1], // Varied scaling
      opacity: [0.7, 1, 0.6, 0.9, 0.7], // Pulsating opacity
      rotate: [0, 30, -20, 10, 0], // Added rotation
      transition: {
        duration: 10 + i * 3, // Longer, varied durations
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.7, // Staggered delays
      },
    }),
  };

  const lineVariants = {
    animate: (i: number) => ({
      pathLength: [0, 1],
      opacity: [0, 1, 0.5, 0.8, 0], // Fade in and out
      transition: {
        duration: 6 + i * 2, // Longer, varied durations
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 1, // Staggered delays
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
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--fintech-orange-accent))" />
            <stop offset="100%" stopColor="hsl(var(--fintech-peach-background))" />
          </linearGradient>
        </defs>

        {/* Animated Circles - Increased count and varied positions/sizes */}
        <motion.circle cx="100" cy="100" r="40" fill="url(#blueGradient)" custom={0} variants={circleVariants} animate="animate" style={{ filter: 'blur(10px)' }} />
        <motion.circle cx="300" cy="150" r="50" fill="url(#purpleGradient)" custom={1} variants={circleVariants} animate="animate" style={{ filter: 'blur(12px)' }} />
        <motion.circle cx="150" cy="300" r="35" fill="url(#greenGradient)" custom={2} variants={circleVariants} animate="animate" style={{ filter: 'blur(8px)' }} />
        <motion.circle cx="250" cy="50" r="25" fill="url(#orangeGradient)" custom={3} variants={circleVariants} animate="animate" style={{ filter: 'blur(7px)' }} />
        <motion.circle cx="50" cy="200" r="30" fill="url(#purpleGradient)" custom={4} variants={circleVariants} animate="animate" style={{ filter: 'blur(9px)' }} />
        <motion.circle cx="350" cy="350" r="45" fill="url(#blueGradient)" custom={5} variants={circleVariants} animate="animate" style={{ filter: 'blur(11px)' }} />

        {/* Connecting Lines - More complex paths */}
        <motion.path d="M100 100 Q200 50 300 150 T400 250" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={0} variants={lineVariants} animate="animate" />
        <motion.path d="M300 150 Q250 250 150 300 T50 200" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={1} variants={lineVariants} animate="animate" />
        <motion.path d="M150 300 Q50 200 100 100 T250 50" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={2} variants={lineVariants} animate="animate" />
        <motion.path d="M250 50 Q350 100 350 350 T50 200" stroke="hsl(var(--fintech-text-muted))" strokeWidth="2" custom={3} variants={lineVariants} animate="animate" />
      </svg>
    </div>
  );
};

export default AnimatedFinancialGraphic;