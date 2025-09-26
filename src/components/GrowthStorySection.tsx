"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedTimelineGraphic from './AnimatedTimelineGraphic'; // Import the new component

const GrowthStorySection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Growth Story</span>
      </h2>
      <p className="text-lg text-fintech-text-muted mb-12 max-w-3xl mx-auto">
        From a humble beginning to a leading fintech innovator, our journey is marked by relentless dedication, groundbreaking technology, and a deep commitment to our users.
      </p>
      <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-fintech-border-light bg-fintech-simulator-card-bg p-8 mt-12">
        <AnimatedTimelineGraphic /> {/* Integrate the new animated graphic */}
      </div>
    </motion.section>
  );
};

export default GrowthStorySection;