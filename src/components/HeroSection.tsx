import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhoneMockup from './PhoneMockup';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-qicky-purple/30 to-qicky-blue/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-qicky-pink/30 to-qicky-lightpurple/30 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl gap-12">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-qicky-text leading-tight mb-4">
            Money on <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Your Terms</span>
          </h1>
          <p className="text-lg text-qicky-textmuted mb-8 max-w-xl">
            Get instant access to personal loans, flexible credit lines, and easy EMI options. Your financial freedom starts here, with a seamless digital experience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/apply-loan">
              <Button className="bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-purple group">
                Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-qicky-textmuted text-qicky-text px-8 py-3 rounded-full text-lg font-semibold hover:bg-qicky-blue/20 hover:border-qicky-blue transition-colors">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Phone Mockup */}
        <div className="hidden lg:flex items-center justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;