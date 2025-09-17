import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PhoneMockup = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Floating card 1 */}
      <div className="absolute -top-8 -left-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg animate-float">
        <p className="text-sm text-qicky-textmuted">Interest Rate</p>
        <p className="text-lg font-bold text-qicky-text">From 9.99%</p>
      </div>
      
      {/* Floating card 2 */}
      <div className="absolute -bottom-12 -right-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg animate-[float_4s_ease-in-out_infinite_2s]">
        <p className="text-sm text-qicky-textmuted">Disbursal Time</p>
        <p className="text-lg font-bold text-qicky-text">~5 mins</p>
      </div>

      {/* Phone Frame */}
      <div className="relative w-full aspect-[9/19.5] bg-qicky-dark border-8 border-gray-800 rounded-[40px] shadow-2xl overflow-hidden">
        {/* Phone Screen Content */}
        <div className="w-full h-full bg-qicky-dark p-4 flex flex-col justify-end">
          <div className="bg-qicky-dark/40 backdrop-blur-xl border border-qicky-blue/50 rounded-2xl p-6 text-white">
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
              <h4 className="text-lg font-semibold">Your Loan is Approved!</h4>
            </div>
            <p className="text-sm text-white/80 mb-1">Loan Amount</p>
            <p className="text-4xl font-bold mb-4 bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">₹2,50,000</p>
            <button className="w-full bg-gradient-button-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group">
              Accept & Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;