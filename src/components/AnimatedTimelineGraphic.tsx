"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Milestone {
  year: string;
  description: string;
}

const milestones: Milestone[] = [
  { year: "2023", description: "Qicky Founded, Vision for Digital Lending Established" },
  { year: "2023", description: "Successful Seed Funding Round Completed" },
  { year: "2024", description: "Launch of Instant Personal Loan Product" },
  { year: "2024", description: "Reached 10,000 Early Adopters & Positive Feedback" },
  { year: "2024", description: "Formed Key Strategic Partnerships with Financial Institutions" },
  { year: "2025", description: "Planned Expansion of Product Offerings & Pan-India Reach" },
];

const AnimatedTimelineGraphic = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const milestoneGradientClasses = [
    "from-fintech-orange-accent to-fintech-peach-background",
    "from-fintech-blue-accent to-fintech-blue-soft",
    "from-fintech-gradient-pink-start to-fintech-gradient-pink-end",
    "from-fintech-green-success to-fintech-cyan-light",
    "from-fintech-gradient-purple-start to-fintech-gradient-purple-end",
    "from-fintech-orange-accent to-fintech-peach-background", // Cycle back
  ];

  const cardGradientClasses = [
    "from-fintech-gradient-purple-start to-fintech-gradient-purple-end",
    "from-fintech-gradient-cyan-start to-fintech-gradient-cyan-end",
    "from-fintech-blue-accent to-fintech-blue-soft",
    "from-fintech-gradient-pink-start to-fintech-gradient-pink-end",
    "from-fintech-orange-accent to-fintech-peach-background",
    "from-fintech-gradient-purple-start to-fintech-gradient-purple-end", // Cycle back
  ];

  return (
    <motion.div
      className="relative py-8 px-4 md:px-8 lg:px-12 bg-fintech-simulator-card-bg rounded-xl shadow-2xl border border-fintech-border-light"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Vertical Line with Gradient */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-fintech-blue-accent to-fintech-gradient-purple-start rounded-full z-0"
        style={{ height: 'calc(100% - 64px)', top: '32px' }}
        variants={lineVariants}
      />

      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          className={cn(
            "relative flex items-center mb-12 last:mb-0",
            index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"
          )}
          variants={itemVariants}
        >
          {/* Milestone Point with Gradient */}
          <div className={cn(
            "absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 flex items-center justify-center border-2 border-fintech-main-bg",
            "bg-gradient-to-br", milestoneGradientClasses[index % milestoneGradientClasses.length]
          )}>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>

          {/* Milestone Content Card with Gradient */}
          <div
            className={cn(
              "w-full md:w-1/2 p-4 rounded-lg shadow-md border border-fintech-border-light text-white",
              "bg-gradient-to-br", cardGradientClasses[index % cardGradientClasses.length],
              index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 text-left"
            )}
          >
            <h3 className="text-xl font-bold text-white mb-2">{milestone.year}</h3>
            <p className="text-white/90 text-sm">{milestone.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedTimelineGraphic;