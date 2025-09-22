"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import MultiStepLoanForm from '@/components/MultiStepLoanForm'; // New import

const ApplyLoanPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-white"> {/* Removed hero-background */}
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4">
          Apply for Your <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Loan</span> Now
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-10 max-w-3xl mx-auto">
          Complete the form below to get started with your loan application. Our team will review your application and get back to you within 24 hours.
        </p>

        <MultiStepLoanForm /> {/* Render the new multi-step form */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ApplyLoanPage;