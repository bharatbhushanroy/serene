"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import MobileMockup from './MobileMockup'; // Import the new MobileMockup component

const InstantLoansSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Instant Loans
          </span>
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Get Instant Loans <br /> with Quick Approvals
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
            Apply for a loan in minutes and get approved instantly. No hidden fees, no complex paperwork.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Apply Now
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right content - Phone Mockup */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10">
          {/* The MobileMockup component is placed here */}
          <MobileMockup />
        </div>
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default InstantLoansSection;