"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // Removed Banknote, Percent, Landmark, CalendarCheck as they are used in MobileMockup
import { Link } from 'react-router-dom';
import MobileMockup from './MobileMockup';
import AnimatedBackgroundShapes from './AnimatedBackgroundShapes';

const InstantLoansHeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-fintech-main-bg text-white">
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
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold">
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
        <div className="relative lg:w-1/2 flex justify-center items-center z-10 min-h-[500px] lg:min-h-[700px]"> {/* Made min-h responsive */}
          {/* Central Phone Mockup (now contains its own floating cards) */}
          <MobileMockup className="scale-90" />
        </div>
      </div>
    </section>
  );
};

export default InstantLoansHeroSection;