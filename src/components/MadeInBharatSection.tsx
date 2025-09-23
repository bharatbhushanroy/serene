"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MadeInBharatSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const flagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    animate: {
      y: [0, -5, 0], // Subtle float up and down
      rotate: [0, 1, 0, -1, 0], // Gentle sway
      transition: {
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
    },
  };

  const backgroundGlowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.05, 0.1, 0.05],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="relative w-full py-8 text-white overflow-hidden bg-fintech-main-bg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Subtle background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-fintech-orange-accent/10 to-yellow-300/10 rounded-full blur-3xl"
        variants={backgroundGlowVariants}
        animate="animate"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          variants={textVariants}
          className="text-2xl md:text-3xl font-extrabold leading-tight mb-2 text-white"
        >
          Made In <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">Bharat</span>
        </motion.h2>

        {/* Indian Flag */}
        <motion.div
          variants={flagVariants}
          animate="animate"
          className="flex justify-center mb-4"
        >
          <svg width="60" height="40" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="shadow-lg rounded-md filter drop-shadow-lg">
            {/* Saffron Stripe */}
            <rect x="0" y="0" width="120" height="26.67" fill="#FF9933"/>
            {/* White Stripe */}
            <rect x="0" y="26.67" width="120" height="26.66" fill="#FFFFFF"/>
            {/* Green Stripe */}
            <rect x="0" y="53.33" width="120" height="26.67" fill="#138808"/>

            {/* Ashoka Chakra */}
            <circle cx="60" cy="40" r="10" fill="#000080"/>
            {/* Spokes of Ashoka Chakra */}
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="60"
                y1="40"
                x2={60 + 10 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={40 + 10 * Math.sin((i * 15 * Math.PI) / 180)}
                stroke="#000080"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MadeInBharatSection;