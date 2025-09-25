"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Helper component for animated background spheres
const AnimatedBackgroundSphere = ({ size, x, y, delay, duration, colorClass, blur }) => {
  return (
    <motion.div
      className={cn("absolute rounded-full pointer-events-none", colorClass)}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        filter: `blur(${blur})`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.1, 0.2, 0.1], // Subtle pulsating opacity
        scale: [0.8, 1.1, 0.9, 0.8], // Gentle scale animation
        x: [x, `calc(${x} + 20px)`, `calc(${x} - 10px)`, x], // Slight horizontal movement
        y: [y, `calc(${y} - 15px)`, `calc(${y} + 10px)`, y], // Slight vertical movement
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

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
    hidden: { opacity: 0, y: 30, rotateX: -90, transformOrigin: 'bottom center' },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
  };

  const shieldVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: 45, rotateX: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    pulse: {
      boxShadow: [
        '0 0 0px rgba(255,255,255,0)',
        '0 0 20px hsl(var(--fintech-blue-accent) / 0.5)',
        '0 0 0px rgba(255,255,255,0)'
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const lockVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6, // After shield appears
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    jiggle: {
      x: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2, // Start jiggle after initial animation
      },
    },
  };

  const mainTextLines = [
    "all your personal data and transactions",
    "are encrypted and secured.",
    "there's no room for mistakes",
    "because we didn't leave any.",
  ];

  const backgroundSpheres = [
    { size: '300px', x: '5%', y: '10%', delay: 0, duration: 15, colorClass: 'bg-fintech-blue-accent/30', blur: '100px' },
    { size: '250px', x: '70%', y: '5%', delay: 2, duration: 18, colorClass: 'bg-fintech-gradient-purple-start/30', blur: '90px' },
    { size: '200px', x: '15%', y: '70%', delay: 1, duration: 12, colorClass: 'bg-fintech-orange-accent/30', blur: '80px' },
    { size: '350px', x: '80%', y: '60%', delay: 3, duration: 16, colorClass: 'bg-fintech-green-success/30', blur: '110px' },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      {/* Animated Background Spheres */}
      {backgroundSpheres.map((sphere, index) => (
        <AnimatedBackgroundSphere key={index} {...sphere} />
      ))}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Shield Icon */}
        <motion.div
          className="relative inline-flex items-center justify-center mb-8 p-4 rounded-full" // Added padding and rounded-full for pulse effect
          variants={shieldVariants}
          initial="hidden"
          whileInView="visible"
          animate="pulse" // Apply continuous pulse animation
          viewport={{ once: true, amount: 0.5 }}
          style={{
            background: 'radial-gradient(circle, hsl(var(--fintech-blue-accent)/0.2) 0%, transparent 70%)', // Subtle radial gradient behind shield
          }}
        >
          <Shield className="h-24 w-24 text-white" strokeWidth={1} />
          <motion.div
            variants={lockVariants}
            initial="hidden"
            whileInView="visible"
            animate="jiggle"
            viewport={{ once: true, amount: 0.5 }}
            className="absolute"
          >
            <Lock className="h-10 w-10 text-fintech-gradient-purple-start" /> {/* Changed lock color */}
          </motion.div>
        </motion.div>

        {/* First Line of Text */}
        <motion.p
          variants={taglineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-fintech-orange-accent text-xl md:text-2xl font-bold uppercase tracking-wide mb-16" {/* Changed tagline color */}
        >
          YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
        </motion.p>

        {/* Main Text Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight space-y-2"
        >
          {mainTextLines.map((line, index) => (
            <motion.p key={index} variants={itemVariants} className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text"> {/* Applied gradient to text */}
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DataSecuritySection;