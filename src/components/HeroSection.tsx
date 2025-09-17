import React from 'react';
import EmiCalculatorCard from './EmiCalculatorCard';

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: EMI Calculator */}
        <div className="flex justify-center lg:justify-start">
          <EmiCalculatorCard />
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop" 
            alt="Person applying for a loan online"
            className="max-w-md w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;