"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Banknote, Percent, Landmark, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileMockup from './MobileMockup'; // Reusing the existing MobileMockup component
import AnimatedBackgroundShapes from './AnimatedBackgroundShapes'; // Keeping the animated background

const InstantLoansHeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-hero-dark-bg text-white">
      {/* Animated Background Shapes */}
      <AnimatedBackgroundShapes />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <span className="inline-block bg-fintech-orange-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Instant Loans
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Get Instant Loans <br /> with Quick Approvals
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
            Apply for a loan in minutes and get approved instantly. No hidden fees, no complex paperwork.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link to="/apply-loan">
              <Button className="bg-fintech-orange-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
                Apply Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Right content - Phone Mockup with floating cards */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10 min-h-[700px]">
          {/* Floating Cards */}
          <div className="absolute top-[0%] -left-[15%] w-[150px] h-[150px] bg-[#FFEDD5] p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark -rotate-3 z-10
                      lg:top-[10%] lg:-left-[10%] lg:w-[200px] lg:h-[200px]">
            <Banknote className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-sm text-gray-700">Get Up To</p>
            <p className="text-2xl font-bold text-fintech-orange-accent">₹5 Lakhs</p>
            <p className="text-sm text-gray-700">Loan</p>
          </div>
          <div className="absolute top-[0%] -right-[15%] w-[150px] h-[150px] bg-[#FFEDD5] p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark rotate-3 z-10
                      lg:top-[10%] lg:-right-[10%] lg:w-[200px] lg:h-[200px]">
            <Percent className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-sm text-gray-700">Pay</p>
            <p className="text-2xl font-bold text-fintech-orange-accent">Interest</p>
            <p className="text-sm text-gray-700">Only On What You Use</p>
          </div>
          <div className="absolute bottom-[0%] -left-[15%] w-[150px] h-[150px] bg-[#FFEDD5] p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark rotate-3 z-10
                      lg:bottom-[10%] lg:-left-[10%] lg:w-[200px] lg:h-[200px]">
            <Landmark className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-sm text-gray-700">Transfer to</p>
            <p className="text-2xl font-bold text-fintech-orange-accent">Your Bank</p>
            <p className="text-sm text-gray-700">In Seconds</p>
          </div>
          <div className="absolute bottom-[0%] -right-[15%] w-[150px] h-[150px] bg-[#FFEDD5] p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-fintech-text-dark -rotate-3 z-10
                      lg:bottom-[10%] lg:-right-[10%] lg:w-[200px] lg:h-[200px]">
            <CalendarCheck className="h-8 w-8 text-fintech-orange-accent mb-2" />
            <p className="text-sm text-gray-700">Repay EMI in</p>
            <p className="text-2xl font-bold text-fintech-orange-accent">3 to 36</p>
            <p className="text-sm text-gray-700">Months</p>
          </div>

          {/* Central Phone Mockup */}
          <MobileMockup className="scale-90" />
        </div>
      </div>
    </section>
  );
};

export default InstantLoansHeroSection;