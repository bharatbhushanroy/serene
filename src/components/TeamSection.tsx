"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Removed Avatar imports as they are no longer needed

// Removed teamMembers array as individual cards are no longer displayed

const TeamSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Removed cardVariants as individual cards are no longer displayed

  return (
    <motion.section
      className="py-20 px-6 md:px-12 lg:px-24 bg-fintech-dark-blue text-white text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Meet Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Exceptional Team</span>
      </h2>
      <p className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Our Army of <span className="text-fintech-orange-accent">50+</span> Petronas
      </p>

      {/* Removed the grid of team member cards */}
      <div className="max-w-6xl mx-auto text-fintech-text-muted text-lg">
        {/* You can add a placeholder or a general statement about the team here if desired */}
        <p>Our dedicated team of over 50 professionals works tirelessly to bring you the best financial solutions.</p>
      </div>
    </motion.section>
  );
};

export default TeamSection;