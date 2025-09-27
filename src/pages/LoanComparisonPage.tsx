"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import LoanComparisonCalculator from '@/components/LoanComparisonCalculator';
import { Helmet } from 'react-helmet-async';

const LoanComparisonPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark">
      <Helmet>
        <title>Loan Comparison Calculator - Compare Loan Offers with Qicky</title>
        <meta name="description" content="Compare different loan options side-by-side with Qicky's loan comparison calculator to find the best rates and terms for your needs." />
      </Helmet>
      <Header />
      <main className="relative z-10">
        <LoanComparisonCalculator />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default LoanComparisonPage;