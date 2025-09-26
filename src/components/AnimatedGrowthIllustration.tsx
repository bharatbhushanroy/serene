"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGrowthIllustration = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5, // Slightly longer duration
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 2.3, // Appears after path is mostly drawn
      },
    },
    float: {
      y: [0, -10, 0, 10, 0], // More pronounced float
      rotate: [0, 5, 0, -5, 0], // Added subtle rotation
      transition: {
        duration: 4, // Longer float duration
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sparkVariants = {
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0.5, 1.5, 0.5], // More pronounced scale
      transition: {
        duration: 1.8, // Longer spark duration
        repeat: Infinity,
        ease: "easeOut",
        delay: 3 + i * 0.4, // Staggered delays
      },
    }),
  };

  const progressDotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
      <svg className="w-full h-full max-w-xl" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Growth Path - More dynamic curve */}
        <motion.path
          d="M50 250 C100 180 200 280 250 200 C300 120 400 180 480 50"
          stroke="url(#growthGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        />

        {/* Gradient for the path */}
        <defs>
          <linearGradient id="growthGradient" x1="50" y1="250" x2="480" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(var(--fintech-blue-accent))" />
            <stop offset="1" stopColor="hsl(var(--fintech-green-success))" />
          </linearGradient>
        </defs>

        {/* Milestone Dot */}
        <motion.circle
          cx="480"
          cy="50"
          r="15"
          fill="hsl(var(--fintech-orange-accent))"
          variants={dotVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          animate="float"
        />

        {/* Sparks around the milestone */}
        {[...Array(5)].map((_, i) => ( // Increased number of sparks
          <motion.circle
            key={i}
            cx={480 + Math.cos((i * 72 + 30) * Math.PI / 180) * 25} // More spread out
            cy={50 + Math.sin((i * 72 + 30) * Math.PI / 180) * 25}
            r="5"
            fill="hsl(var(--fintech-star-yellow))"
            custom={i}
            variants={sparkVariants}
            animate="animate"
          />
        ))}

        {/* Small circles along the path (representing progress) - More of them, staggered */}
        <motion.circle
          cx="50" cy="250" r="8" fill="hsl(var(--fintech-blue-accent))"
          custom={0.5} variants={progressDotVariants} whileInView="visible" viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="100" cy="180" r="8" fill="hsl(var(--fintech-blue-accent))"
          custom={0.8} variants={progressDotVariants} whileInView="visible" viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="200" cy="280" r="8" fill="hsl(var(--fintech-blue-accent))"
          custom={1.1} variants={progressDotVariants} whileInView="visible" viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="250" cy="200" r="8" fill="hsl(var(--fintech-blue-accent))"
          custom={1.4} variants={progressDotVariants} whileInView="visible" viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="300" cy="120" r="8" fill="hsl(var(--fintech-blue-accent))"
          custom={1.7} variants={progressDotVariants} whileInView="visible" viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="400" cy="180" r="8" fill="hsl(var(--fintech-blue-accent))"
          custom={2.0} variants={progressDotVariants} whileInView="visible" viewport={{ once: true, amount: 0.8 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedGrowthIllustration;