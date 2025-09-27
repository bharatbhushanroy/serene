"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, IndianRupee, Globe } from 'lucide-react'; // Added icons

const MadeInBharatSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cityCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cities = [
    { name: "Mumbai", icon: <Building2 className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Delhi", icon: <MapPin className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Bengaluru", icon: <IndianRupee className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Chennai", icon: <Building2 className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Kolkata", icon: <MapPin className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Hyderabad", icon: <IndianRupee className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Ahmedabad", icon: <Building2 className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Pune", icon: <MapPin className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Jaipur", icon: <IndianRupee className="h-6 w-6 text-fintech-blue-accent" /> },
    { name: "Lucknow", icon: <Building2 className="h-6 w-6 text-fintech-blue-accent" /> },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 bg-gradient-to-br from-fintech-dark-blue to-fintech-main-bg overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <Globe className="h-full w-full text-fintech-blue-accent animate-pulse-slow" />
      </div>
      <div className="absolute top-1/4 left-1/4 h-48 w-48 bg-fintech-blue-accent rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/3 h-64 w-64 bg-fintech-green-accent rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
        {/* Indian Flag SVG */}
        <div className="mb-4 flex justify-center">
          <svg width="60" height="40" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Saffron */}
            <rect width="300" height="66.67" fill="#FF9933"/>
            {/* White */}
            <rect y="66.67" width="300" height="66.67" fill="#FFFFFF"/>
            {/* Green */}
            <rect y="133.34" width="300" height="66.67" fill="#138808"/>
            {/* Ashoka Chakra */}
            <circle cx="150" cy="100" r="25" fill="#000080"/>
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="150"
                y1="100"
                x2={150 + 25 * Math.cos((i * 15 - 90) * Math.PI / 180)}
                y2={100 + 25 * Math.sin((i * 15 - 90) * Math.PI / 180)}
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
        <motion.h2
          variants={textVariants}
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-fintech-blue-accent to-fintech-green-accent"
        >
          Proudly Made in Bharat, For Bharat
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Empowering financial dreams across every corner of India with innovative and accessible solutions.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12"
          variants={containerVariants} // Use a container variant for staggered children
        >
          {cities.map((city, index) => (
            <motion.div
              key={index}
              variants={cityCardVariants}
              className="flex flex-col items-center justify-center p-6 bg-fintech-card-bg rounded-xl shadow-lg border border-gray-700 hover:border-fintech-blue-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {city.icon}
              <h3 className="mt-3 text-lg font-semibold text-white">{city.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Define containerVariants outside the component if it's not dependent on props
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default MadeInBharatSection;