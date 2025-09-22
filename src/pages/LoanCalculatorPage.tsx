import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import AdvanceLoanSimulator from '@/components/AdvanceLoanSimulator';
// import LoanComparisonCalculator from '@/components/LoanComparisonCalculator'; // Removed this import

const LoanCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-fintech-main-bg text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8 text-white">
          Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Loan Calculators</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          Use our tools to estimate your EMI, compare different loan options, and plan your finances effectively.
        </p>
        <AdvanceLoanSimulator />
        {/* LoanComparisonCalculator component removed from here */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default LoanCalculatorPage;