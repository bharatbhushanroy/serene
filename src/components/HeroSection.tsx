"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-fintech-dark-blue text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="max-w-2xl text-center md:text-left mb-12 md:mb-0">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-fintech-blue-soft/20 text-fintech-blue-accent text-sm font-medium mb-6 animate-fade-in-up">
            Instant Approvals Available
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up delay-100">
            Quick Loans for <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Every Need</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl animate-fade-in-up delay-200">
            Get instant access to personal loans with flexible repayment options, competitive interest rates, and a seamless digital experience.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up delay-300">
            <Button className="bg-fintech-blue-accent hover:bg-fintech-blue-soft text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Apply Now
            </Button>
            <Button variant="outline" className="border-fintech-blue-accent text-fintech-blue-accent hover:bg-fintech-blue-accent hover:text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-right delay-400">
          {/* Card 1 - Background */}
          <div className="absolute w-[300px] h-[180px] md:w-[400px] md:h-[240px] bg-gradient-to-br from-fintech-blue-soft to-fintech-blue-accent rounded-xl shadow-2xl transform rotate-[-15deg] translate-x-8 translate-y-8 opacity-70"></div>
          {/* Card 2 - Middle */}
          <div className="absolute w-[300px] h-[180px] md:w-[400px] md:h-[240px] bg-gradient-to-br from-fintech-blue-accent to-fintech-dark-blue rounded-xl shadow-2xl transform rotate-[-5deg] translate-x-4 translate-y-4"></div>
          {/* Card 3 - Foreground */}
          <div className="relative w-[300px] h-[180px] md:w-[400px] md:h-[240px] bg-gradient-to-br from-fintech-dark-blue to-fintech-blue-accent rounded-xl shadow-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xl font-bold">Qicky</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
            </div>
            <div className="text-2xl md:text-3xl font-mono tracking-wider">**** **** **** 1234</div>
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="uppercase text-gray-300">Card Holder</p>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <p className="uppercase text-gray-300">Expires</p>
                <p className="font-medium">12/25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-fintech-dark-blue to-fintech-dark-blue-light opacity-50 z-0"></div>
    </section>
  );
};

export default HeroSection;