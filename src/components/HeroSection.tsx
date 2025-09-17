import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackgroundShapes from './AnimatedBackgroundShapes'; // Import the new component

const HeroSection = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-gray-950">
      {/* Animated Background Shapes */}
      <AnimatedBackgroundShapes />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <div className="flex items-center bg-fintech-blue-soft/20 text-fintech-blue-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-blue-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-blue-accent"></span>
            </span>
            Instant Approvals Available
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Quick Loans for <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Every Need</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Get instant access to personal loans with flexible repayment options, competitive interest rates, and a seamless digital experience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/apply-loan"> {/* Link the button to the ApplyLoanPage */}
              <Button className="bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue group">
                Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Integrated HeroCarousel here */}
        <HeroCarousel />
      </div>

      {/* Cookie Consent Banner - as seen in screenshot */}
      {showCookieBanner && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm p-4 flex flex-col md:flex-row items-center justify-between text-gray-200 text-sm border-t border-gray-800">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2 text-fintech-blue-accent">🍪</span>
            <p>
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800" onClick={() => setShowCookieBanner(false)}>Decline</Button>
            <Button className="bg-gradient-button-primary text-white hover:opacity-90" onClick={() => setShowCookieBanner(false)}>Accept All</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;