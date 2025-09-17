"use client";

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import LoanApprovedMockup from './LoanApprovedMockup';

const InstantLoansSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-qicky-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold">Instant Loans, When You Need Them Most</motion.h2>
            <motion.p variants={itemVariants} className="text-qicky-gray">
              Life is full of surprises. For moments when you need a financial boost, Qicky offers instant loans with a hassle-free application process. Get approved in minutes and receive funds directly in your account.
            </motion.p>
            <motion.ul variants={itemVariants} className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-qicky-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Quick and easy online application</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-qicky-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Competitive interest rates</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-qicky-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>No hidden fees or prepayment penalties</span>
              </li>
            </motion.ul>
            <motion.div variants={itemVariants}>
              <Button size="lg" variant="qicky">Apply for a Loan</Button>
            </motion.div>
          </motion.div>
          <div className="relative h-[500px] rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1611095790444-1dfa36e39c23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Instant Loan"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-qicky-dark/80 via-qicky-purple/30 to-transparent"></div>
            
            <LoanApprovedMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantLoansSection;