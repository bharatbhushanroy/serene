"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import MultiStepLoanForm from '@/components/MultiStepLoanForm';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ApplyLoanPage = () => {
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

  const dollarSignVariants = {
    animate: (i: number) => ({
      y: [0, -25 - i * 7, 0], // More pronounced vertical movement
      x: [0, 15 + i * 3, -15 - i * 3, 0], // More pronounced horizontal movement
      opacity: [0.3, 0.7, 0.3], // Increased opacity
      scale: [1, 1.2, 0.9, 1.1, 1], // More varied scaling
      transition: {
        duration: 8 + i * 2, // Slightly faster, varied durations
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.4, // Staggered delays
      },
    }),
  };

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, 20 + i * 4, -20 - i * 4, 0], // More pronounced vertical movement
      x: [0, -15 - i * 3, 15 + i * 3, 0], // More pronounced horizontal movement
      opacity: [0.2, 0.5, 0.2], // Increased opacity
      scale: [0.9, 1.3, 0.8, 1.1, 0.9], // More varied scaling
      transition: {
        duration: 10 + i * 3, // Slightly faster, varied durations
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.6, // Staggered delays
      },
    }),
  };

  return (
    <div className="min-h-screen bg-fintech-main-bg text-white overflow-hidden">
      <Helmet>
        <title>Apply for a Loan - Qicky Instant Loan Application</title>
        <meta name="description" content="Start your quick and easy loan application with Qicky. Fill out our multi-step form to get approved for the funds you need." />
      </Helmet>
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center bg-grid-pattern">
        {/* Animated Background Elements */}
        {[...Array(7)].map((_, i) => ( // Increased number of elements
          <motion.span
            key={`ds-${i}`}
            custom={i}
            variants={dollarSignVariants}
            animate="animate"
            className="absolute text-4xl font-bold text-white/10"
            style={{
              top: `${10 + i * 12}%`, // Adjusted spacing
              left: `${5 + i * 15}%`, // Adjusted spacing
              fontSize: `${28 + i * 5}px`, // Larger size
            }}
          >
            ₹
          </motion.span>
        ))}
        {[...Array(9)].map((_, i) => ( // Increased number of elements
          <motion.div
            key={`dot-${i}`}
            custom={i}
            variants={dotVariants}
            animate="animate"
            className="absolute w-4 h-4 rounded-full bg-white/10" // Larger dots
            style={{
              top: `${5 + i * 10}%`, // Adjusted spacing
              right: `${5 + i * 12}%`, // Adjusted spacing
              width: `${10 + i * 3}px`, // Varied size
              height: `${10 + i * 3}px`, // Varied size
            }}
          />
        ))}

        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4"
        >
          Apply for Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-flow">Loan</span> Now
        </motion.h1>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg text-fintech-text-muted text-center mb-10 max-w-3xl mx-auto"
        >
          Complete the form below to get started with your loan application. Our team will review your application and get back to you within 24 hours.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="w-full flex justify-center"
        >
          <MultiStepLoanForm />
        </motion.div>
      </main>
      <Footer />
      {/* <MadeWithDyad /> */}
    </div>
  );
};

export default ApplyLoanPage;