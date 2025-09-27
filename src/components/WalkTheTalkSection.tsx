"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WalkTheTalkSectionProps {
  isMobile: boolean; // Add isMobile prop
}

const WalkTheTalkSection: React.FC<WalkTheTalkSectionProps> = ({ isMobile }) => {
  const personWalkVariants = {
    animate: {
      x: [0, 5, 0, -5, 0],
      y: [0, -2, 0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const dogWalkVariants = {
    animate: {
      x: [0, -5, 0, 5, 0],
      y: [0, 2, 0, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const dogTailVariants = {
    animate: {
      rotate: [0, 20, 0, -20, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const sunVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Animated Illustration */}
        <div className="relative flex items-center justify-center lg:justify-start h-[300px] md:h-[400px] lg:h-[500px]">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            {/* Background Sun */}
            <motion.circle
              cx="250"
              cy="250"
              r="200"
              fill="hsl(var(--fintech-orange-accent))"
              variants={sunVariants}
              animate="animate" // Animations will now run on all devices
            />

            {/* Ground Line */}
            <line x1="0" y1="400" x2="800" y2="400" stroke="hsl(var(--fintech-text-muted))" strokeWidth="4" />

            {/* Small Flowers */}
            <circle cx="100" cy="390" r="5" fill="hsl(var(--fintech-green-success))" />
            <circle cx="110" cy="390" r="5" fill="hsl(var(--fintech-green-success))" />
            <circle cx="105" cy="380" r="5" fill="hsl(var(--fintech-green-success))" />

            <circle cx="350" cy="390" r="5" fill="hsl(var(--fintech-green-success))" />
            <circle cx="360" cy="390" r="5" fill="hsl(var(--fintech-green-success))" />
            <circle cx="355" cy="380" r="5" fill="hsl(var(--fintech-green-success))" />

            {/* Person */}
            <motion.g
              variants={personWalkVariants}
              animate="animate" // Animations will now run on all devices
              transform="translate(200, 100)"
            >
              {/* Body */}
              <rect x="100" y="150" width="60" height="100" rx="30" fill="white" />
              {/* Head */}
              <circle cx="130" cy="120" r="40" fill="hsl(var(--fintech-peach-background))" />
              {/* Hat */}
              <ellipse cx="130" cy="90" rx="50" ry="15" fill="hsl(var(--fintech-blue-accent))" />
              <rect x="80" y="80" width="100" height="20" fill="hsl(var(--fintech-blue-accent))" />
              {/* Shorts */}
              <rect x="90" y="230" width="80" height="50" rx="10" fill="hsl(var(--fintech-blue-accent))" />
              {/* Legs */}
              <rect x="100" y="280" width="20" height="80" rx="10" fill="white" />
              <rect x="140" y="280" width="20" height="80" rx="10" fill="white" />
              {/* Shoes */}
              <ellipse cx="110" cy="370" rx="20" ry="10" fill="white" />
              <ellipse cx="150" cy="370" rx="20" ry="10" fill="white" />
              {/* Arms */}
              <rect x="70" y="170" width="20" height="60" rx="10" fill="hsl(var(--fintech-peach-background))" transform="rotate(-15 70 170)" />
              <rect x="170" y="170" width="20" height="60" rx="10" fill="hsl(var(--fintech-peach-background))" transform="rotate(15 170 170)" />
            </motion.g>

            {/* Dog */}
            <motion.g
              variants={dogWalkVariants}
              animate="animate" // Animations will now run on all devices
              transform="translate(350, 250)"
            >
              {/* Body */}
              <ellipse cx="100" cy="120" rx="60" ry="30" fill="white" />
              {/* Head */}
              <circle cx="160" cy="100" r="30" fill="white" />
              {/* Ear */}
              <path d="M170 80 Q180 70 190 90 L170 95 Z" fill="white" />
              {/* Snout */}
              <ellipse cx="180" cy="105" rx="10" ry="5" fill="white" />
              <circle cx="185" cy="105" r="3" fill="black" /> {/* Nose */}
              {/* Eye */}
              <circle cx="165" cy="95" r="3" fill="black" />
              {/* Legs */}
              <rect x="70" y="140" width="15" height="40" rx="5" fill="white" />
              <rect x="120" y="140" width="15" height="40" rx="5" fill="white" />
              {/* Tail */}
              <motion.path
                d="M40 110 Q20 100 30 90"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                variants={dogTailVariants}
                animate="animate" // Animations will now run on all devices
                transform-origin="40px 110px"
              />
              {/* Collar */}
              <path d="M140 115 C150 110 160 110 170 115" stroke="hsl(var(--fintech-blue-accent))" strokeWidth="5" fill="none" />
              {/* Leash */}
              <line x1="150" y1="110" x2="280" y2="200" stroke="hsl(var(--fintech-blue-accent))" strokeWidth="3" />
            </motion.g>
          </motion.svg>
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Go for a walk while we <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">walk the talk</span>
          </h2>
          <p className="text-lg text-fintech-text-muted mb-8 max-w-xl mx-auto lg:mx-0">
            Leave the complexities to us and enjoy a stress-free experience, knowing that we are dedicated to meeting your business needs with efficiency and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WalkTheTalkSection;