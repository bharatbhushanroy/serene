"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LoanProductsPhoneMockup from '@/components/LoanProductsPhoneMockup'; // Corrected import
import { ArrowRight } from 'lucide-react';
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
          {/* Top-Left Card: Loan against Mutual Fund */}
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 lg:top-20 lg:left-1/4 lg:-translate-x-1/2 w-72 md:w-80 bg-fintech-card-bg rounded-xl shadow-lg p-6 border border-fintech-border-light z-20" // z-20 for cards
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-transparent border-none shadow-none text-left">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-fintech-text-light">Loan against Mutual Fund</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-400 text-sm mb-4">Unlock liquidity from your mutual fund investments without selling them.</p>
                <Link to="/loan-against-mutual-fund" className="text-fintech-blue-accent hover:underline flex items-center text-sm font-medium">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom-Left Card: Personal Loan */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:bottom-20 lg:left-1/4 lg:-translate-x-1/2 w-72 md:w-80 bg-fintech-card-bg rounded-xl shadow-lg p-6 border border-fintech-border-light z-20" // z-20 for cards
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-transparent border-none shadow-none text-left">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-fintech-text-light">Personal Loan</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-400 text-sm mb-4">Get quick funds for any personal need, from emergencies to dream vacations.</p>
                <Link to="/personal-loan" className="text-fintech-blue-accent hover:underline flex items-center text-sm font-medium">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top-Right Card: Business Loan */}
          <motion.div
            className="absolute top-10 right-1/2 translate-x-1/2 lg:top-20 lg:right-1/4 lg:translate-x-1/2 w-72 md:w-80 bg-fintech-card-bg rounded-xl shadow-lg p-6 border border-fintech-border-light z-20" // z-20 for cards
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-transparent border-none shadow-none text-left">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-fintech-text-light">Business Loan</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-400 text-sm mb-4">Fuel your business growth with flexible and accessible business loans.</p>
                <Link to="/business-loan" className="text-fintech-blue-accent hover:underline flex items-center text-sm font-medium">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom-Right Card: Home Loan */}
          <motion.div
            className="absolute bottom-10 right-1/2 translate-x-1/2 lg:bottom-20 lg:right-1/4 lg:translate-x-1/2 w-72 md:w-80 bg-fintech-card-bg rounded-xl shadow-lg p-6 border border-fintech-border-light z-20" // z-20 for cards
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="bg-transparent border-none shadow-none text-left">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-fintech-text-light">Home Loan</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-400 text-sm mb-4">Achieve your dream of homeownership with our competitive home loan options.</p>
                <Link to="/home-loan" className="text-fintech-blue-accent hover:underline flex items-center text-sm font-medium">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10" // z-10 for phone mockup
          >
            <LoanProductsPhoneMockup /> {/* Used the correct component */}
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