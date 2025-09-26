"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, CreditCard, Server, ShieldCheck } from 'lucide-react'; // Import necessary icons
import ExpertiseCard from './ExpertiseCard'; // Import the new component

const expertiseData = [
  {
    icon: DollarSign,
    value: "35+",
    label: "Years Fixed Income",
    gradientClass: "bg-gradient-to-br from-fintech-blue-accent to-fintech-blue-soft",
    iconBgClass: "bg-fintech-blue-accent/30",
  },
  {
    icon: Zap,
    value: "35+",
    label: "Years Technology",
    gradientClass: "bg-gradient-to-br from-fintech-gradient-purple-start to-fintech-gradient-purple-end",
    iconBgClass: "bg-fintech-gradient-purple-start/30",
  },
  {
    icon: CreditCard,
    value: "50+",
    label: "Years Credit",
    gradientClass: "bg-gradient-to-br from-fintech-gradient-pink-start to-fintech-gradient-pink-end",
    iconBgClass: "bg-fintech-gradient-pink-start/30",
  },
  {
    icon: Server, // Using Server for Enterprise SaaS
    value: "35+",
    label: "Years Enterprise SaaS",
    gradientClass: "bg-gradient-to-br from-fintech-gradient-cyan-start to-fintech-gradient-cyan-end",
    iconBgClass: "bg-fintech-gradient-cyan-start/30",
  },
  {
    icon: ShieldCheck,
    value: "50+",
    label: "Compliance & Risk Management",
    gradientClass: "bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start", // Blend of blue and purple
    iconBgClass: "bg-fintech-blue-accent/30",
  },
];

const TeamSection = () => {
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
        Meet Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Exceptional Team</span>
      </h2>
      <p className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Our Army of <span className="text-fintech-orange-accent">50+</span> Petronas
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
        {expertiseData.map((data, index) => (
          <ExpertiseCard key={index} {...data} delay={index * 0.1} />
        ))}
      </div>

      <p className="text-lg text-fintech-text-muted max-w-3xl mx-auto">
        With an exceptional team of professionals, our company boasts an impressive cumulative experience of over 150 years, enabling us to provide unmatched expertise and value to our clients.
      </p>
    </motion.section>
  );
};

export default TeamSection;