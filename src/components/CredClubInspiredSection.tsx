"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming cn is available for utility classes

const AnimatedSphere = ({ size, x, y, delay, duration, colorClass, innerColorClass, rotation }) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full flex items-center justify-center",
        colorClass
      )}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        filter: 'blur(30px)', // Increased blur for a softer, more visible glow
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3], // Increased opacity for better visibility
        scale: [0.8, 1.1, 0.9, 1],
        x: [x, x + 40, x - 20, x], // More pronounced movement
        y: [y, y - 30, y + 20, y], // More pronounced movement
        rotate: [0, rotation, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {innerColorClass && (
        <div className={cn("w-2/3 h-2/3 rounded-full", innerColorClass)} style={{ filter: 'blur(15px)' }}></div>
      )}
    </motion.div>
  );
};

const CredClubInspiredSection = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.7,
      },
    },
  };

  const spheres = [
    { size: '200px', x: '10%', y: '15%', delay: 0, duration: 15, colorClass: 'bg-fintech-blue-accent/60', innerColorClass: 'bg-fintech-blue-soft/80', rotation: 30 },
    { size: '280px', x: '70%', y: '5%', delay: 2, duration: 18, colorClass: 'bg-fintech-gradient-purple-start/60', innerColorClass: 'bg-fintech-gradient-purple-end/80', rotation: -25 },
    { size: '150px', x: '5%', y: '60%', delay: 1, duration: 12, colorClass: 'bg-fintech-orange-accent/60', innerColorClass: 'bg-fintech-peach-background/80', rotation: 40 },
    { size: '250px', x: '80%', y: '70%', delay: 3, duration: 16, colorClass: 'bg-fintech-green-success/60', innerColorClass: 'bg-fintech-cyan-light/80', rotation: -35 },
    { size: '180px', x: '40%', y: '85%', delay: 0.5, duration: 14, colorClass: 'bg-fintech-blue-soft/60', innerColorClass: 'bg-fintech-blue-accent/80', rotation: 20 },
    { size: '300px', x: '25%', y: '40%', delay: 4, duration: 20, colorClass: 'bg-fintech-gradient-pink-start/60', innerColorClass: 'bg-fintech-gradient-pink-end/80', rotation: -15 },
    { size: '130px', x: '90%', y: '30%', delay: 1.5, duration: 10, colorClass: 'bg-gray-700/60', innerColorClass: 'bg-gray-800/80', rotation: 50 },
    { size: '220px', x: '55%', y: '25%', delay: 2.5, duration: 17, colorClass: 'bg-fintech-green-success/50', innerColorClass: 'bg-fintech-cyan-light/70', rotation: -20 },
    { size: '170px', x: '15%', y: '80%', delay: 3.5, duration: 13, colorClass: 'bg-fintech-orange-accent/50', innerColorClass: 'bg-fintech-peach-background/70', rotation: 25 },
    { size: '240px', x: '60%', y: '50%', delay: 1.8, duration: 19, colorClass: 'bg-fintech-gradient-blue-start/60', innerColorClass: 'bg-fintech-gradient-blue-end/80', rotation: -45 },
    { size: '160px', x: '30%', y: '5%', delay: 0.8, duration: 16, colorClass: 'bg-gray-500/60', innerColorClass: 'bg-gray-600/80', rotation: 10 },
    { size: '210px', x: '5%', y: '30%', delay: 2.2, duration: 14, colorClass: 'bg-fintech-gradient-purple-start/50', innerColorClass: 'bg-fintech-gradient-purple-end/70', rotation: -5 },
    { size: '190px', x: '75%', y: '45%', delay: 0.3, duration: 13, colorClass: 'bg-fintech-cyan-light/60', innerColorClass: 'bg-fintech-green-success/80', rotation: 15 },
    { size: '140px', x: '20%', y: '70%', delay: 1.2, duration: 11, colorClass: 'bg-fintech-gradient-pink-start/50', innerColorClass: 'bg-fintech-gradient-pink-end/70', rotation: -10 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-black text-white">
      {/* Animated Spheres Background */}
      {spheres.map((sphere, index) => (
        <AnimatedSphere key={index} {...sphere} />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Feel the odds fall in your favor
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          unlock cashback, exclusive rewards from select brands, and special access to curated products and experiences.
        </motion.p>
      </div>

      {/* Scroll to explore indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm z-20">
        <p className="mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-fintech-scroll-indicator-bg rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CredClubInspiredSection;