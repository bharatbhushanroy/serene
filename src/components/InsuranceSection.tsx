"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Car, Home, Heart, Briefcase, Plane, GraduationCap, Stethoscope, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const InsuranceSection = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

        <div className="relative flex items-center justify-center w-full h-[700px] lg:h-[800px]">
          {/* Floating Cards */}
          {/* Top-Left Card */}
          <motion.div
            className="absolute top-[10%] left-[5%] lg:left-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <ShieldCheck className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Health Insurance</p>
            <p className="text-sm text-gray-600">Stay protected</p>
          </motion.div>
          {/* Top-Right Card */}
          <motion.div
            className="absolute top-[10%] right-[5%] lg:right-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Car className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Car Insurance</p>
            <p className="text-sm text-gray-600">Drive worry-free</p>
          </motion.div>
          {/* Bottom-Left Card */}
          <motion.div
            className="absolute bottom-[10%] left-[5%] lg:left-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Home className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Home Insurance</p>
            <p className="text-sm text-gray-600">Secure your abode</p>
          </motion.div>
          {/* Bottom-Right Card */}
          <motion.div
            className="absolute bottom-[10%] right-[5%] lg:right-[15%] bg-white p-6 rounded-xl shadow-2xl text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Heart className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-lg font-semibold">Life Insurance</p>
            <p className="text-sm text-gray-600">For your loved ones</p>
          </motion.div>

          {/* Central Phone Mockup */}
          <motion.div
            className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] bg-black rounded-[40px] shadow-2xl flex items-center justify-center p-2 border-[8px] border-gray-800 overflow-hidden z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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