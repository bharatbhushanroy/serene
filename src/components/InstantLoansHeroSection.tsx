"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // Removed Banknote, Percent, Landmark, CalendarCheck as they are used in MobileMockup
import { Link } from 'react-router-dom';
import MobileMockup from './MobileMockup';
import AnimatedBackgroundShapes from './AnimatedBackgroundShapes';
import { motion } from 'framer-motion'; // Ensure motion is imported

const InstantLoansHeroSection = () => {
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

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-main-bg text-white">
      {/* Animated Background Shapes (Global) */}
      <AnimatedBackgroundShapes />

      {/* Local Animated Shapes for this section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200, y: -100 }}
        animate={{ opacity: 0.1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-fintech-blue-accent opacity-0"
        style={{ filter: 'blur(70px)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 200, y: 100 }}
        animate={{ opacity: 0.08, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-fintech-cyan-light opacity-0"
        style={{ filter: 'blur(80px)' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <motion.span variants={itemVariants} initial="hidden" animate="visible" className="inline-block bg-fintech-orange-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Instant Loans
          </motion.span>
          <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Get Instant Loans <br /> with Quick Approvals
          </motion.h1>
          <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
            Apply for a loan in minutes and get approved instantly. No hidden fees, no complex paperwork.
          </motion.p>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to="/apply-loan">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue">
                Apply Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right content - Phone Mockup with floating cards */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10 min-h-[500px] lg:min-h-[700px]">
          {/* Central Phone Mockup (now contains its own floating cards) */}
          <MobileMockup className="scale-90" />
        </div>
      </div>
    </section>
  );
};

export default InstantLoansHeroSection;