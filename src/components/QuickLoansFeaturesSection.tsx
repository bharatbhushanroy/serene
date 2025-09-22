"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoanApprovedMockup from './LoanApprovedMockup'; // Keep this mockup

const QuickLoansFeaturesSection = () => {
  const features = [
    "Instant Personal loans up to ₹5,00,000",
    "Disbursement in 5 minutes",
    "100% Digital process with Zero paperwork",
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
    <section className="relative w-full flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-main-bg text-white">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left Content Area */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Use whileInView for sections further down the page
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="flex items-center bg-gray-800 text-fintech-blue-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-blue-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-blue-accent"></span>
            </span>
            Instant Approvals Available
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Quick Loans for <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Every Need</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-xl">
            Get instant access to personal loans with flexible repayment options, competitive interest rates, and a seamless digital experience.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to="/apply-loan">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group">
                Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Feature List */}
          <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-3 text-left w-full max-w-md">
            {features.map((feature, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-center text-lg text-gray-200">
                <CheckCircle className="h-6 w-6 text-fintech-blue-accent mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Content Area: Loan Approved Mockup */}
        <div className="relative w-full max-w-md h-96 flex items-center justify-center lg:justify-end">
          <LoanApprovedMockup />
        </div>
      </div>
    </section>
  );
};

export default QuickLoansFeaturesSection;