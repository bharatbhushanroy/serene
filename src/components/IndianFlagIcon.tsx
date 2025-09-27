"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IndianFlagIconProps {
  className?: string;
}

const IndianFlagIcon: React.FC<IndianFlagIconProps> = ({ className }) => {
  const flagVariants = {
    animate: {
      scale: [1, 1.02, 1],
      rotate: [0, 0.5, 0, -0.5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={flagVariants}
      animate="animate"
    >
      {/* Saffron */}
      <rect x="0" y="0" width="300" height="66.67" fill="hsl(25 90% 50%)" />
      {/* White */}
      <rect x="0" y="66.67" width="300" height="66.66" fill="hsl(0 0% 100%)" />
      {/* Green */}
      <rect x="0" y="133.33" width="300" height="66.67" fill="hsl(140 70% 30%)" />

      {/* Ashoka Chakra (Navy Blue) */}
      <circle cx="150" cy="100" r="25" fill="hsl(220 80% 30%)" />
      {/* Spokes */}
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="150"
          y1="100"
          x2={150 + 25 * Math.cos((i * 15 - 90) * Math.PI / 180)}
          y2={100 + 25 * Math.sin((i * 15 - 90) * Math.PI / 180)}
          stroke="hsl(220 80% 30%)"
          strokeWidth="1.5"
        />
      ))}
    </motion.svg>
  );
};

export default IndianFlagIcon;