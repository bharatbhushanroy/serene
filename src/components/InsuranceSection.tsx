"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Car, Home, Heart, Briefcase, Plane, GraduationCap, Stethoscope, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Import Link
import InsurancePhoneMockup from './InsurancePhoneMockup'; // Import the new InsurancePhoneMockup

interface InsuranceSectionProps {
  isMobile: boolean; // Add isMobile prop
}

const InsuranceSection: React.FC<InsuranceSectionProps> = ({ isMobile }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8, rotate: 0 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: i % 2 === 0 ? -5 : 5, // Alternate rotation
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    float: (i: number) => ({
      y: [0, 15, 0, -15, 0],
      x: [0, i * 5, 0, -i * 5, 0],
      rotate: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -7 : 7, i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -3 : 3, i % 2 === 0 ? -5 : 5],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Insure your <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">future</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-12 max-w-2xl mx-auto">
          Protect what matters most with our comprehensive insurance solutions. From health to home, we've got you covered.
        </p>

        <div className="relative flex items-center justify-center w-full h-[650px] md:h-[700px] lg:h-[800px]">
          {/* Floating Cards */}
          {/* Top-Left Card */}
          <motion.div
            className="absolute top-[5%] left-[5%] md:top-[10%] md:left-[10%] lg:top-[15%] lg:left-[15%] p-4 rounded-xl shadow-2xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-white z-20 bg-gradient-to-br from-fintech-orange-accent to-fintech-green-success"
            variants={cardVariants}
            initial="initial"
            animate={["animate", "float"]} // Animations will now run on all devices
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-white mb-1" />
            <p className="text-base md:text-lg font-semibold">Health Insurance</p>
            <p className="text-xs md:text-sm text-white/80">Stay protected</p>
          </motion.div>
          {/* Top-Right Card */}
          <motion.div
            className="absolute top-[5%] right-[5%] md:top-[10%] md:right-[10%] lg:top-[15%] lg:right-[15%] p-4 rounded-xl shadow-2xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-white z-20 bg-gradient-to-br from-fintech-orange-accent to-fintech-green-success"
            variants={cardVariants}
            initial="initial"
            animate={["animate", "float"]} // Animations will now run on all devices
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            <Car className="h-6 w-6 md:h-8 md:w-8 text-white mb-1" />
            <p className="text-base md:text-lg font-semibold">Car Insurance</p>
            <p className="text-xs md:text-sm text-white/80">Drive worry-free</p>
          </motion.div>
          {/* Bottom-Left Card */}
          <motion.div
            className="absolute bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%] lg:bottom-[15%] lg:left-[15%] p-4 rounded-xl shadow-2xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-white z-20 bg-gradient-to-br from-fintech-orange-accent to-fintech-green-success"
            variants={cardVariants}
            initial="initial"
            animate={["animate", "float"]} // Animations will now run on all devices
            viewport={{ once: true, amount: 0.5 }}
            custom={2}
          >
            <Home className="h-6 w-6 md:h-8 md:w-8 text-white mb-1" />
            <p className="text-base md:text-lg font-semibold">Home Insurance</p>
            <p className="text-xs md:text-sm text-white/80">Secure your abode</p>
          </motion.div>
          {/* Bottom-Right Card */}
          <motion.div
            className="absolute bottom-[5%] right-[5%] md:bottom-[10%] md:right-[10%] lg:bottom-[15%] lg:right-[15%] p-4 rounded-xl shadow-2xl text-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center text-white z-20 bg-gradient-to-br from-fintech-orange-accent to-fintech-green-success"
            variants={cardVariants}
            initial="initial"
            animate={["animate", "float"]} // Animations will now run on all devices
            viewport={{ once: true, amount: 0.5 }}
            custom={3}
          >
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-white mb-1" />
            <p className="text-base md:text-lg font-semibold">Life Insurance</p>
            <p className="text-xs md:text-sm text-white/80">For your loved ones</p>
          </motion.div>

          {/* Central Phone Mockup */}
          <InsurancePhoneMockup isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;