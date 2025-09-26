"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, DollarSign, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AdvanceLoanSimulator from '@/components/AdvanceLoanSimulator';
import CtaSection from '@/components/CtaSection';
import { Helmet } from 'react-helmet-async'; // New import

const HomeLoanPage = () => {
  const features = [
    "Competitive interest rates",
    "Longer repayment tenures",
    "Easy application process",
    "Expert guidance available",
    "Flexible eligibility criteria",
  ];

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
    <div className="min-h-screen bg-fintech-main-bg text-white">
      <Helmet>
        <title>Home Loans - Make Your Dream Home a Reality with Qicky</title>
        <meta name="description" content="Achieve homeownership with Qicky Home Loans. Benefit from competitive interest rates, long tenures, and expert guidance." />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-main-bg text-white">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Your Dream <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Home Awaits</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-xl">
                Secure your future with Qicky Home Loans. We offer tailored solutions to make your homeownership dream a reality.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link to="/apply-loan">
                  <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 group">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/loan-calculator">
                  <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                    Calculate EMI
                  </Button>
                </Link>
              </motion.div>
              <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 text-left w-full max-w-md">
                {features.map((feature, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-center text-lg text-gray-200">
                    <Home className="h-6 w-6 text-fintech-blue-accent mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <div className="relative w-full max-w-md h-96 flex items-center justify-center lg:justify-end">
              {/* Placeholder for a home-related mockup or animation */}
              <div
                className="relative z-10 w-full max-w-xs mx-auto bg-fintech-simulator-card-bg/80 backdrop-blur-lg border border-fintech-border-light rounded-3xl p-6 shadow-2xl shadow-fintech-blue-accent/20 flex flex-col items-center text-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' // Enhanced shadow with blue glow
                }}
              >
                <Home className="w-20 h-20 text-fintech-blue-accent mb-4" />
                <h2 className="text-2xl font-semibold text-white">Home Loan Approved</h2>
                <p className="text-fintech-text-muted mt-2">Start building your future</p>
                <div className="mt-8 w-full bg-fintech-dark-bg-lighter rounded-xl p-4">
                  <p className="text-sm text-fintech-text-muted">Loan Amount</p>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end mt-1">
                    ₹50 Lakhs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Simulator */}
        <AdvanceLoanSimulator />

        {/* Call to Action */}
        <CtaSection />

      </main>
      <MadeWithDyad />
      <Footer />
    </div>
  );
};

export default HomeLoanPage;