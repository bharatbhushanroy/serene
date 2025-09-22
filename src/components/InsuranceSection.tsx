"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Zap, Umbrella, Wallet } from 'lucide-react';
import InsurancePhoneMockup from './InsurancePhoneMockup'; // Import the new phone mockup

const InsuranceSection = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-dark-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-16">
          <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Insurance</span> for Daily Risks
        </h2>

        <div className="relative flex items-center justify-center w-full h-[700px] lg:h-[800px]">
          {/* Floating Cards */}
          {/* Top-Left Card */}
          <Card className="absolute top-[10%] left-[5%] lg:left-[15%] bg-fintech-light-blue-card p-6 rounded-xl shadow-lg text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark">
            <Star className="h-8 w-8 text-fintech-blue-accent mb-2" />
            <p className="text-sm">Plans</p>
            <p className="text-xl font-bold text-fintech-blue-accent">Exclusive</p>
            <p className="text-sm">For Freo Users</p>
          </Card>

          {/* Bottom-Left Card */}
          <Card className="absolute bottom-[10%] left-[5%] lg:left-[15%] bg-fintech-light-blue-card p-6 rounded-xl shadow-lg text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark">
            <Wallet className="h-8 w-8 text-fintech-blue-accent mb-2" />
            <p className="text-sm">Affordable</p>
            <p className="text-xl font-bold text-fintech-blue-accent">Just ₹129</p>
            <p className="text-sm">Plans</p>
          </Card>

          {/* Top-Right Card */}
          <Card className="absolute top-[10%] right-[5%] lg:right-[15%] bg-fintech-light-blue-card p-6 rounded-xl shadow-lg text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark">
            <Zap className="h-8 w-8 text-fintech-blue-accent mb-2" />
            <p className="text-sm">Easy</p>
            <p className="text-xl font-bold text-fintech-blue-accent">Simplified</p>
            <p className="text-sm">Claims</p>
          </Card>

          {/* Bottom-Right Card */}
          <Card className="absolute bottom-[10%] right-[5%] lg:right-[15%] bg-fintech-light-blue-card p-6 rounded-xl shadow-lg text-center w-[180px] h-[180px] flex flex-col items-center justify-center text-fintech-text-dark">
            <Umbrella className="h-8 w-8 text-fintech-blue-accent mb-2" />
            <p className="text-sm">Covers</p>
            <p className="text-xl font-bold text-fintech-blue-accent">Real-life</p>
            <p className="text-sm">Situations</p>
          </Card>

          {/* Central Phone Mockup */}
          <InsurancePhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;