import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden"> {/* Removed hero-background here */}
      {/* Background dots/pattern - simplified with a placeholder image for now */}
      <div className="absolute inset-0 opacity-20 z-0">
        {/* This could be a more complex SVG pattern or a background image */}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <div className="flex items-center bg-qicky-blue/20 text-qicky-lightblue px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qicky-lightblue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-qicky-lightblue"></span>
            </span>
            Instant Approvals Available
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-qicky-text leading-tight mb-4">
            Quick Loans for <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Every Need</span>
          </h1>
          <p className="text-lg text-qicky-textmuted mb-8 max-w-xl">
            Get instant access to personal loans with flexible repayment options, competitive interest rates, and a seamless digital experience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-gradient-button-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity group">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="bg-transparent border-qicky-textmuted text-qicky-text px-8 py-3 rounded-full text-lg font-semibold hover:bg-qicky-blue/20 transition-colors">
              Learn More
            </Button>
          </div>
        </div>

        <Card className="w-full max-w-md bg-gradient-dark-card border border-qicky-blue/30 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Sparkles className="h-6 w-6 text-qicky-lightblue mr-3" />
            <h3 className="text-xl font-semibold text-qicky-text">Competitive Rates</h3>
          </div>
          <p className="text-qicky-textmuted mb-6">Starting at just 9.99% per annum</p>
          {/* Placeholder for carousel/slider indicators and navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              <span className="h-2 w-2 rounded-full bg-qicky-blue"></span>
              <span className="h-2 w-2 rounded-full bg-qicky-textmuted opacity-50"></span>
              <span className="h-2 w-2 rounded-full bg-qicky-textmuted opacity-50"></span>
              <span className="h-2 w-2 rounded-full bg-qicky-textmuted opacity-50"></span>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-qicky-textmuted hover:bg-qicky-blue/20 rounded-full">
                <ArrowRight className="h-5 w-5 rotate-180" />
              </Button>
              <Button variant="ghost" size="icon" className="text-qicky-textmuted hover:bg-qicky-blue/20 rounded-full">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Cookie Consent Banner - as seen in screenshot */}
      <div className="absolute bottom-0 left-0 right-0 bg-qicky-dark/90 backdrop-blur-sm p-4 flex flex-col md:flex-row items-center justify-between text-qicky-text text-sm border-t border-qicky-blue/30">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="mr-2 text-qicky-lightblue">🍪</span>
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-qicky-textmuted text-qicky-text hover:bg-qicky-blue/20">Decline</Button>
          <Button className="bg-gradient-button-primary text-white hover:opacity-90">Accept All</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;