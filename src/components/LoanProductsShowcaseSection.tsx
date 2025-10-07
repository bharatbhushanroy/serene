"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LoanProductsPhoneMockup from '@/components/LoanProductsPhoneMockup';
import { ArrowRight, QrCode, Zap, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LoanProductsShowcaseSection: React.FC = () => {
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="relative py-16 md:py-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text"
        >
          Explore Our Diverse Loan Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          From personal loans to business financing, we have a solution tailored for your unique needs.
        </motion.p>

        <div className="relative flex items-center justify-center w-full h-[700px] lg:h-[800px]">
          {/* Floating Cards */}
          {/* Top-Left Card: Scan & Pay */}
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 lg:top-[15%] lg:left-[10%] w-64 p-4 md:w-80 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] transform lg:-rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <QrCode className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4" />
            <p className="text-lg md:text-xl font-semibold leading-tight">Anytime Anywhere Scan & Pay with UPI</p>
          </motion.div>

          {/* Bottom-Left Card: Credit on UPI */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-[15%] lg:left-[10%] w-64 p-4 md:w-80 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] transform lg:rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CreditCard className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4" />
            <p className="text-lg md:text-xl font-semibold leading-tight">Pay Using Credit on UPI with RuPay</p>
          </motion.div>

          {/* Top-Right Card: Instant Transfer */}
          <motion.div
            className="absolute top-10 right-1/2 translate-x-1/2 lg:top-[15%] lg:right-[10%] w-64 p-4 md:w-80 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#EC4899] to-[#3B82F6] transform lg:rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Zap className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4" />
            <p className="text-lg md:text-xl font-semibold leading-tight">Fast & Reliable 24/7 Instant Transfer</p>
          </motion.div>

          {/* Bottom-Right Card: Secured Transactions */}
          <motion.div
            className="absolute bottom-10 right-1/2 translate-x-1/2 lg:bottom-[15%] lg:right-[10%] w-64 p-4 md:w-80 md:p-6 rounded-xl shadow-lg z-20 bg-gradient-to-br from-[#10B981] to-[#059669] transform lg:-rotate-12 text-white flex flex-col items-start justify-center"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4" />
            <p className="text-lg md:text-xl font-semibold leading-tight">Safe Secured Transactions</p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <LoanProductsPhoneMockup />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <Link to="/all-products">
            <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group">
              View All Products <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanProductsShowcaseSection;