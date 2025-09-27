"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import AdvanceLoanSimulator from '@/components/AdvanceLoanSimulator';
import { Helmet } from 'react-helmet-async';

const EMICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark">
      <Helmet>
        <title>EMI Calculator - Estimate Your Monthly Payments with Qicky</title>
        <meta name="description" content="Use Qicky's EMI calculator to quickly estimate your Equated Monthly Installments for various loan amounts, interest rates, and tenures." />
      </Helmet>
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8 text-white">
          EMI <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Calculator</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          Calculate your monthly loan payments with ease and plan your finances effectively.
        </p>
        <AdvanceLoanSimulator />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default EMICalculatorPage;