"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-fintech-background-dark text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-fintech-blue-dark to-fintech-blue-accent opacity-70"></div>
        {/* Abstract shapes/patterns for visual interest */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-fintech-blue-soft rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-fintech-orange-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-fintech-green-success rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-fintech-blue-soft/20 text-fintech-blue-soft text-sm font-medium backdrop-blur-sm">
            <ArrowRight className="h-4 w-4 mr-2" />
            Your Financial Journey Starts Here
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Quick Loans for <span className="animated-gradient-text">Every Need</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Get instant access to funds with minimal paperwork and quick approvals. Your financial goals are just a tap away.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-fintech-orange-accent hover:bg-fintech-orange-accent/90 text-white px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Apply Now
          </Button>
          <Button variant="outline" className="border-fintech-blue-soft text-fintech-blue-soft hover:bg-fintech-blue-soft/10 px-8 py-3 text-lg rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;