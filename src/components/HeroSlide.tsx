"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, DollarSign, Repeat, ShieldCheck } from 'lucide-react';
import HeroPhoneMockup from '@/components/HeroPhoneMockup';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSlide: React.FC = () => {
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
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero-bg-pattern.svg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fintech-main-bg opacity-70"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12 mx-auto">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <motion.span variants={itemVariants} initial="hidden" animate="visible" className="inline-block bg-fintech-orange-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Your Financial Partner
          </motion.span>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text"
          >
            Smart Loans, Brighter Future.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Get instant access to funds with flexible repayment options and competitive interest rates. Your financial goals are within reach.
          </motion.p>
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group">
                Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right content - Phone Mockup with Floating Cards */}
        <div className="relative lg:w-1/2 flex items-center justify-center h-[500px] md:h-[600px] lg:h-[700px] w-full">
          {/* Floating Cards */}
          {/* Top-Left Card: Instant Approval */}
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 lg:top-1/4 lg:left-0 lg:-translate-x-1/2 w-64 p-4 md:w-72 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] transform lg:-rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle className="h-6 w-6 md:h-8 md:w-8 mb-3" />
            <p className="text-base md:text-lg font-semibold leading-tight">Instant Approval</p>
          </motion.div>

          {/* Bottom-Left Card: Low Interest Rates */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-1/4 lg:left-0 lg:-translate-x-1/2 w-64 p-4 md:w-72 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] transform lg:rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DollarSign className="h-6 w-6 md:h-8 md:w-8 mb-3" />
            <p className="text-base md:text-lg font-semibold leading-tight">Low Interest Rates</p>
          </motion.div>

          {/* Top-Right Card: Flexible Repayment */}
          <motion.div
            className="absolute top-32 left-1/2 -translate-x-1/2 lg:top-1/4 lg:right-0 lg:translate-x-1/2 w-64 p-4 md:w-72 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#EC4899] to-[#3B82F6] transform lg:rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Repeat className="h-6 w-6 md:h-8 md:w-8 mb-3" />
            <p className="text-base md:text-lg font-semibold leading-tight">Flexible Repayment</p>
          </motion.div>

          {/* Bottom-Right Card: Secure & Transparent */}
          <motion.div
            className="absolute bottom-32 left-1/2 -translate-x-1/2 lg:bottom-1/4 lg:right-0 lg:translate-x-1/2 w-64 p-4 md:w-72 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#10B981] to-[#059669] transform lg:-rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 mb-3" />
            <p className="text-base md:text-lg font-semibold leading-tight">Secure & Transparent</p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg"
          >
            <HeroPhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;