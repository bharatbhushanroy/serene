"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import InteractiveLoanSimulatorSection from '@/components/InteractiveLoanSimulatorSection';
import { Helmet } from 'react-helmet-async';

const InteractiveLoanSimulatorPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark">
      <Helmet>
        <title>Interactive Loan Simulator - Visualize Your Loan Journey with Qicky</title>
        <meta name="description" content="Use Qicky's interactive loan simulator to visualize how loan parameters like amount, interest, and tenure affect your payments over time." />
      </Helmet>
      <Header />
      <main className="relative z-10">
        <InteractiveLoanSimulatorSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default InteractiveLoanSimulatorPage;