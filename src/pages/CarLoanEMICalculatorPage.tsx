"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import CarLoanEMICalculator from '@/components/CarLoanEMICalculator';
import { Helmet } from 'react-helmet-async';

const CarLoanEMICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark">
      <Helmet>
        <title>Car Loan EMI Calculator - Estimate Your Car Loan Payments with Qicky</title>
        <meta name="description" content="Use Qicky's Car Loan EMI calculator to quickly estimate your monthly installments, total interest, and total payable amount for your car loan." />
      </Helmet>
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <CarLoanEMICalculator />
      </main>
      <Footer />
      {/* <MadeWithDyad /> */}
    </div>
  );
};

export default CarLoanEMICalculatorPage;