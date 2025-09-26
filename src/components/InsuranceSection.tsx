"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Car, Home, Heart, Briefcase, Plane, GraduationCap, Stethoscope, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const InsuranceSection = () => {
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

  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: 15 },
    animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    // Removed the 'float' variant to stop continuous animation
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
            whileInView={["animate", "float"]}
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
            whileInView={["animate", "float"]}
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
            whileInView={["animate", "float"]}
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
            whileInView={["animate", "float"]}
            viewport={{ once: true, amount: 0.5 }}
            custom={3}
          >
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-white mb-1" />
            <p className="text-base md:text-lg font-semibold">Life Insurance</p>
            <p className="text-xs md:text-sm text-white/80">For your loved ones</p>
          </motion.div>

          {/* Central Phone Mockup */}
          <motion.div
            className="relative w-[280px] h-[550px] md:w-[300px] md:h-[600px] lg:w-[350px] lg:h-[700px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-10"
            initial="initial"
            animate="animate" // Only animate to the final state
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={phoneVariants}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'center center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)' // Enhanced shadow with orange glow
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-6 bg-black rounded-b-xl z-10"></div>
            {/* Screen Content */}
            <div className="relative w-full h-full bg-[#1A1A1A] rounded-[30px] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-[#1A1A1A] text-white">
                <ShieldCheck className="h-5 w-5 text-fintech-orange-accent" />
                <span className="font-semibold">Insurance Hub</span>
                <Stethoscope className="h-5 w-5 text-gray-400" />
              </div>
              {/* Main Content */}
              <div className="flex-1 p-4 overflow-y-auto">
                <h3 className="text-xl font-bold text-white mb-4">Your Policies</h3>
                <div className="space-y-3">
                  {/* Policy Card 1 */}
                  <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">Health Shield</p>
                      <p className="text-sm text-gray-400">Expires: 12/2025</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-fintech-orange-accent" />
                  </div>
                  {/* Policy Card 2 */}
                  <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">Auto Protect</p>
                      <p className="text-sm text-gray-400">Expires: 08/2024</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-fintech-orange-accent" />
                  </div>
                  {/* Policy Card 3 */}
                  <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">Home Secure</p>
                      <p className="text-sm text-gray-400">Expires: 03/2026</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-fintech-orange-accent" />
                  </div>
                </div>
                <button className="mt-6 w-full py-3 bg-fintech-orange-accent text-white rounded-full font-semibold">
                  Explore More Insurance
                </button>
              </div>
              {/* Bottom Nav */}
              <div className="flex justify-around p-3 bg-white border-t border-gray-200 text-gray-600">
                <div className="flex flex-col items-center text-[#F97316]">
                  <Home className="h-5 w-5" />
                  <span className="text-xs">Home</span>
                </div>
                <div className="flex flex-col items-center">
                  <Briefcase className="h-5 w-5" />
                  <span className="text-xs">Business</span>
                </div>
                <div className="flex flex-col items-center">
                  <Plane className="h-5 w-5" />
                  <span className="text-xs">Travel</span>
                </div>
                <div className="flex flex-col items-center">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-xs">Education</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;