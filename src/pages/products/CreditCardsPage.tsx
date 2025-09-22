"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Percent, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CreditCardMockup from '@/components/CreditCardMockup';
import CtaSection from '@/components/CtaSection';
import IndianBankCreditCardComparison from '@/components/IndianBankCreditCardComparison'; // New import

const CreditCardsPage = () => {
  const features = [
    "Exclusive rewards & cashback",
    "Low interest rates",
    "Secure online transactions",
    "Global acceptance",
    "Fraud protection",
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
                Explore the Best <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Credit Cards</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-xl">
                Find the perfect credit card to match your lifestyle and financial goals. Compare features, rewards, and benefits.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link to="/apply-loan"> {/* Placeholder for actual credit card application */}
                  <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 group">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/products/credit-cards"> {/* Link to this page for comparison */}
                  <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                    Compare Cards
                  </Button>
                </Link>
              </motion.div>
              <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 text-left w-full max-w-md">
                {features.map((feature, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-center text-lg text-gray-200">
                    <CreditCard className="h-6 w-6 text-fintech-blue-accent mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <div className="relative w-full max-w-md h-96 flex items-center justify-center lg:justify-end">
              <CreditCardMockup
                colorClass="bg-fintech-card-mockup-purple"
                animationDelay="delay-100"
                animationClass="animate-card-float-1"
                cardNumber="**** **** **** 1234"
                cardHolder="JOHN DOE"
                rotation="rotate-3"
              />
            </div>
          </div>
        </section>

        {/* Credit Card Comparison/Features Section */}
        <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12">
              Compare Top <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Credit Card Offers</span>
            </h2>
            <div className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <p className="text-lg text-fintech-text-muted mb-6">
                Discover a wide range of credit cards from leading banks. Filter by rewards, annual fees, interest rates, and more to find your perfect match.
              </p>
              <IndianBankCreditCardComparison /> {/* New component added here */}
              <Button className="mt-8 bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
                View All Cards
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CtaSection />

      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default CreditCardsPage;