"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Import Link

const TopUpLoansSection = () => {
  return (
    <section className="relative py-20 bg-fintech-main-bg text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Top-Up Loans
          </span>
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Flexible Top-Up Loans <br /> for Existing Customers
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
            Need more funds? Get additional loans quickly and easily with our seamless top-up process.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link to="/apply-loan">
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold">
                Check Eligibility
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-semibold">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Right content - Placeholder for a mockup or illustration */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10 h-[400px] bg-fintech-simulator-card-bg/50 rounded-xl border border-fintech-border-light">
          <p className="text-fintech-text-muted text-lg">Illustration for Top-Up Loans</p>
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default TopUpLoansSection;