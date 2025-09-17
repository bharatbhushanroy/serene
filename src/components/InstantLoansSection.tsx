import React from 'react';
import { ArrowRight, Clock, FileText, Download, CreditCard, CheckCircle } from 'lucide-react';

const features = [
  { icon: CreditCard, text: "Instant Personal loans up to ₹5,00,000", highlight: "" },
  { icon: Clock, text: "Disbursement in", highlight: "5 minutes" },
  { icon: FileText, text: "100% Digital process with", highlight: "Zero paperwork" },
  { icon: Download, text: "Money", highlight: "transferred directly", textAfter: "to your bank account" },
];

const InstantLoansSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-qicky-text">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left side: Title and Feature Cards */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <div className="flex items-center mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-qicky-purple to-qicky-blue rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-qicky-textmuted uppercase tracking-wider">Fast & Seamless</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Instant Personal Loans <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">At Your Fingertips</span>
          </h2>

          <div className="w-full space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-transparent hover:border-qicky-blue/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-2 bg-qicky-blue/20 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-qicky-lightblue" />
                  </div>
                  <p className="text-lg font-medium text-qicky-text">
                    {feature.text} <span className="font-bold text-qicky-lightblue">{feature.highlight}</span> {feature.textAfter}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-qicky-textmuted group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Image with UI elements */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-2 bg-gradient-to-br from-qicky-purple to-qicky-blue rounded-3xl opacity-30 blur-2xl"></div>
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-dark-card border border-qicky-blue/30 shadow-2xl flex flex-col justify-end">
              <img
                src="https://images.unsplash.com/photo-1631501541333-a0a90e3aa5c3?q=80&w=1964&auto=format&fit=crop"
                alt="Instant loans simplified on mobile"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qicky-dark/80 to-transparent"></div>
              
              {/* Bottom part - The new UI element */}
              <div className="relative z-10 p-4">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                    <h4 className="text-lg font-semibold">Your Loan is Approved!</h4>
                  </div>
                  <p className="text-sm text-white/80 mb-1">Loan Amount</p>
                  <p className="text-4xl font-bold mb-4">₹2,50,000</p>
                  <button className="w-full bg-gradient-button-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group">
                    Accept & Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantLoansSection;