"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedFinancialGraphic from './AnimatedFinancialGraphic'; // Import the new component

const AboutUsHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-main-bg text-white">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left Content Area */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="inline-block bg-fintech-orange-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Our Story
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Empowering India's <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Financial Future</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-xl">
            At Qicky, we're more than just a financial platform; we're a movement towards accessible, transparent, and innovative lending for every Indian.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to="/apply-loan">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 group">
                Join Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content Area: Animated Graphic */}
        <motion.div
          className="relative w-full max-w-md h-96 flex items-center justify-center lg:justify-end"
          variants={graphicVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <AnimatedFinancialGraphic />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;