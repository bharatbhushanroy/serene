"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import MultiStepLoanForm from '@/components/MultiStepLoanForm';
import { Helmet } from 'react-helmet-async'; // New import
import { motion } from 'framer-motion'; // Import motion

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
      y: [0, -20 - i * 5, 0],
      x: [0, 10 + i * 2, -10 - i * 2, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, 15 + i * 3, -15 - i * 3, 0],
      x: [0, -10 - i * 2, 10 + i * 2, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 12 + i * 3,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.7,
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
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Animated Background Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={`ds-${i}`}
            custom={i}
            variants={dollarSignVariants}
            animate="animate"
            className="absolute text-4xl font-bold text-white/10"
            style={{
              top: `${10 + i * 15}%`,
              left: `${10 + i * 18}%`,
              fontSize: `${24 + i * 4}px`,
            }}
          >
            ₹
          </motion.span>
        ))}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            custom={i}
            variants={dotVariants}
            animate="animate"
            className="absolute w-3 h-3 rounded-full bg-white/10"
            style={{
              top: `${5 + i * 12}%`,
              right: `${5 + i * 10}%`,
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
            }}
          />
        ))}

        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4"
        >
          Apply for Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Loan</span> Now
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
      <MadeWithDyad />
    </div>
  );
};

export default ApplyLoanPage;