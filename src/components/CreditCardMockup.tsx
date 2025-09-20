"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CreditCardMockupProps {
  colorClass: string; // Tailwind class for background color, e.g., 'bg-fintech-card-mockup-purple'
  animationDelay: string; // Tailwind class for animation delay, e.g., 'delay-100'
  animationClass: string; // Tailwind class for animation, e.g., 'animate-card-float-1'
  cardNumber: string;
  cardHolder: string;
  rotation?: string; // New prop for rotation, e.g., 'rotate-3'
}

const CreditCardMockup: React.FC<CreditCardMockupProps> = ({
  colorClass,
  animationDelay,
  animationClass,
  cardNumber,
  cardHolder,
  rotation = 'rotate-0', // Default to no rotation
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-64 h-40 rounded-xl shadow-lg p-5 flex flex-col justify-between text-white",
        colorClass,
        animationClass,
        animationDelay,
        rotation // Apply rotation class
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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