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
        filter: 'blur(10px)', // Soft blur for translucent effect
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [0.8, 1.1, 0.9, 1],
        x: [x, x + 20, x - 10, x],
        y: [y, y - 15, y + 10, y],
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
        <div className={cn("w-2/3 h-2/3 rounded-full", innerColorClass)} style={{ filter: 'blur(5px)' }}></div>
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

  const qrCodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  const spheres = [
    { size: '150px', x: '10%', y: '15%', delay: 0, duration: 15, colorClass: 'bg-gray-700/50', innerColorClass: 'bg-gray-800/70', rotation: 30 },
    { size: '200px', x: '70%', y: '5%', delay: 2, duration: 18, colorClass: 'bg-gray-600/50', innerColorClass: 'bg-gray-700/70', rotation: -25 },
    { size: '100px', x: '5%', y: '60%', delay: 1, duration: 12, colorClass: 'bg-gray-500/50', innerColorClass: 'bg-gray-600/70', rotation: 40 },
    { size: '180px', x: '80%', y: '70%', delay: 3, duration: 16, colorClass: 'bg-gray-700/50', innerColorClass: 'bg-gray-800/70', rotation: -35 },
    { size: '120px', x: '40%', y: '85%', delay: 0.5, duration: 14, colorClass: 'bg-gray-600/50', innerColorClass: 'bg-gray-700/70', rotation: 20 },
    { size: '220px', x: '25%', y: '40%', delay: 4, duration: 20, colorClass: 'bg-gray-500/50', innerColorClass: 'bg-fintech-green-success/50', rotation: -15 }, // Green tinted sphere
    { size: '90px', x: '90%', y: '30%', delay: 1.5, duration: 10, colorClass: 'bg-gray-700/50', innerColorClass: 'bg-gray-800/70', rotation: 50 },
    { size: '160px', x: '55%', y: '25%', delay: 2.5, duration: 17, colorClass: 'bg-gray-600/50', innerColorClass: 'bg-fintech-green-success/40', rotation: -20 }, // Green tinted sphere
    { size: '130px', x: '15%', y: '80%', delay: 3.5, duration: 13, colorClass: 'bg-gray-500/50', innerColorClass: 'bg-gray-600/70', rotation: 25 },
    { size: '170px', x: '60%', y: '50%', delay: 1.8, duration: 19, colorClass: 'bg-gray-700/50', innerColorClass: 'bg-gray-800/70', rotation: -45 },
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
          feel the odds fall in your favor
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          unlock cashback, exclusive rewards from select brands, and special access to curated products and experiences.
        </motion.p>

        <motion.div
          className="flex flex-col items-center space-y-4"
          variants={qrCodeVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Placeholder for QR Code */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/public/placeholder.svg" alt="QR Code" className="w-24 h-24" />
          </div>
          <p className="text-lg font-semibold text-white">download Qicky</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CredClubInspiredSection;