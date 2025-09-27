"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import RecurringDepositCalculator from '@/components/RecurringDepositCalculator';
import { Helmet } from 'react-helmet-async';

const RecurringDepositCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark">
      <Helmet>
        <title>Recurring Deposit Calculator - Calculate RD Returns with Qicky</title>
        <meta name="description" content="Use Qicky's Recurring Deposit calculator to estimate the maturity amount and interest earned on your RD investments." />
      </Helmet>
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <RecurringDepositCalculator />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default RecurringDepositCalculatorPage;