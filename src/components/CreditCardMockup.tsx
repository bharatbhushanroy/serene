"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'; // Import motion

interface CreditCardMockupProps {
  colorClass: string; // Tailwind class for background color, e.g., 'bg-fintech-card-mockup-purple'
  animationDelay?: string; // Tailwind class for animation delay, e.g., 'delay-100'
  animationClass?: string; // Tailwind class for animation, e.g., 'animate-card-float-1'
  cardNumber: string;
  cardHolder: string;
  rotation?: string; // New prop for rotation, e.g., 'rotate-3'
  // isMobile: boolean; // Removed isMobile prop
}

const CreditCardMockup: React.FC<CreditCardMockupProps> = ({
  colorClass,
  animationDelay,
  animationClass,
  cardNumber,
  cardHolder,
  rotation = 'rotate-0', // Default to no rotation
  // isMobile, // Removed isMobile
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8, rotate: 0 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: parseFloat(rotation.replace('rotate-', '')) || 0, // Apply initial rotation
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    // Define a float animation if it's meant to float on desktop
    float: {
      y: [0, 5, 0, -5, 0],
      rotate: [0, 1, 0, -1, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={cn(
        "relative w-64 h-40 rounded-xl shadow-lg p-5 flex flex-col justify-between text-white",
        colorClass,
        animationDelay,
        animationClass,
      )}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
      }}
      variants={cardVariants}
      initial="initial"
      animate={["animate", "float"]} // Animations will now run on all devices
    >
      {/* Chip */}
      <div className="w-10 h-8 bg-fintech-card-chip-yellow rounded-md shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-fintech-card-chip-light opacity-20 blur-sm"></div>
      </div>

      {/* Card Number */}
      <p className="font-mono text-xl tracking-wider">
        {cardNumber}
      </p>

      {/* Card Holder */}
      <p className="text-sm uppercase font-semibold">
        {cardHolder}
      </p>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 rounded-xl opacity-20"
           style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%)' }}>
      </div>
    </motion.div>
  );
};

export default CreditCardMockup;