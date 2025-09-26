"use client";

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: 2018, event: "Founded Qicky", x: 50 },
  { year: 2019, event: "First Product Launch", x: 150 },
  { year: 2020, event: "Achieved 1M Users", x: 250 },
  { year: 2022, event: "Expanded to 100 Cities", x: 350 },
  { year: 2024, event: "Launched AI-Powered Lending", x: 450 },
];

const AnimatedTimelineGraphic = () => {
  const lineVariants = {
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

  const milestoneVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 1.5 + i * 0.3, // Staggered appearance after line is drawn
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8 + i * 0.3, // Staggered appearance after milestone dot
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[350px] py-8">
      <svg className="w-full h-full max-w-2xl" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Gradients and Filters */}
        <defs>
          <linearGradient id="timelineGradient" x1="20" y1="150" x2="480" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(var(--fintech-blue-accent))" />
            <stop offset="1" stopColor="hsl(var(--fintech-green-success))" />
          </linearGradient>
          {/* Glow filter for path and dots */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Timeline Path */}
        <motion.path
          d="M20 150 H480" // Horizontal line
          stroke="url(#timelineGradient)"
          strokeWidth="8" {/* Increased stroke width */}
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)" {/* Applied glow filter */}
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Milestones */}
        {milestones.map((milestone, i) => (
          <motion.g key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            {/* Vertical line from timeline to milestone dot */}
            <motion.line
              x1={milestone.x} y1="150" x2={milestone.x} y2="120"
              stroke="hsl(var(--fintech-blue-soft))" strokeWidth="3" {/* Brighter stroke and increased width */}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { delay: 1.5 + i * 0.3, duration: 0.4 } }
              }}
            />
            {/* Milestone Dot */}
            <motion.circle
              cx={milestone.x} cy="120" r="12" {/* Increased radius */}
              fill="hsl(var(--fintech-blue-accent))" {/* Changed fill to a vibrant blue */}
              filter="url(#glow)" {/* Applied glow filter */}
              variants={milestoneVariants}
              animate="float" // Apply float animation
            />
            {/* Milestone Year */}
            <motion.text
              x={milestone.x} y="100"
              textAnchor="middle"
              fill="hsl(var(--fintech-text-primary))"
              fontSize="18" {/* Increased font size */}
              fontWeight="bold"
              variants={textVariants}
            >
              {milestone.year}
            </motion.text>
            {/* Milestone Event */}
            <motion.text
              x={milestone.x} y="170"
              textAnchor="middle"
              fill="hsl(var(--fintech-text-primary))" {/* Changed fill to primary text color for clarity */}
              fontSize="14" {/* Increased font size */}
              variants={textVariants}
            >
              {milestone.event}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedTimelineGraphic;