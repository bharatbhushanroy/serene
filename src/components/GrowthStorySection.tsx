"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTimelineGraphic from './AnimatedTimelineGraphic';

const GrowthStorySection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Growth Journey</span>
      </h2>
      <p className="text-lg text-fintech-text-muted max-w-3xl mx-auto mb-12">
        Explore the pivotal moments and innovations that have defined our path to becoming a leader in the fintech industry. Discover how we've evolved and achieved significant milestones over the years.
      </p>
      <div className="w-full max-w-4xl mx-auto mt-12">
        <AnimatedTimelineGraphic />
      </div>
    </motion.section>
  );
};

export default GrowthStorySection;