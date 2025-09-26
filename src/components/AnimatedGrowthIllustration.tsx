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
        duration: 2,
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
        delay: 1.8, // Appears after path is mostly drawn
      },
    },
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sparkVariants = {
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
        delay: 2.5 + i * 0.3,
      },
    }),
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
      <svg className="w-full h-full max-w-xl" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Growth Path */}
        <motion.path
          d="M50 250 C150 150 250 250 350 150 C400 100 450 100 480 50"
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
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={i}
            cx={480 + Math.cos((i * 120 + 30) * Math.PI / 180) * 25}
            cy={50 + Math.sin((i * 120 + 30) * Math.PI / 180) * 25}
            r="5"
            fill="hsl(var(--fintech-star-yellow))"
            custom={i}
            variants={sparkVariants}
            animate="animate"
          />
        ))}

        {/* Small circles along the path (representing progress) */}
        <motion.circle
          cx="50" cy="250" r="8" fill="hsl(var(--fintech-blue-accent))"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.3 } }}
          viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="150" cy="150" r="8" fill="hsl(var(--fintech-blue-accent))"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.3 } }}
          viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="250" cy="250" r="8" fill="hsl(var(--fintech-blue-accent))"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 1.1, duration: 0.3 } }}
          viewport={{ once: true, amount: 0.8 }}
        />
        <motion.circle
          cx="350" cy="150" r="8" fill="hsl(var(--fintech-blue-accent))"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 1.4, duration: 0.3 } }}
          viewport={{ once: true, amount: 0.8 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedGrowthIllustration;