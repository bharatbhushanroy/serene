import React from 'react';
import { ArrowRight, Clock, FileText, Download, CreditCard } from 'lucide-react';

const InstantLoansSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 text-qicky-text">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left side: Title and Feature Cards */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <div className="flex items-center mb-4">
            <div className="w-8 h-1 bg-qicky-blue rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-qicky-textmuted uppercase tracking-wider">Fast & Seamless</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Instant Personal Loans <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">At Your Fingertips</span>
          </h2>

          <div className="w-full space-y-6">
            {/* Feature Card 1 */}
            <div className="flex items-center justify-between p-6 rounded-xl bg-qicky-blue/20 hover:bg-qicky-blue/30 transition-colors cursor-pointer group">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-qicky-lightblue mr-4" />
                <p className="text-lg font-medium text-qicky-text">Instant Personal loans up to ₹5,00,000</p>
              </div>
              <ArrowRight className="h-5 w-5 text-qicky-textmuted group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Feature Card 2 */}
            <div className="flex items-center justify-between p-6 rounded-xl bg-qicky-purple/20 hover:bg-qicky-purple/30 transition-colors cursor-pointer group">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-qicky-lightpurple mr-4" />
                <p className="text-lg font-medium text-qicky-text">Disbursement in <span className="font-bold">5 minutes</span></p>
              </div>
              <ArrowRight className="h-5 w-5 text-qicky-textmuted group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Feature Card 3 */}
            <div className="flex items-center justify-between p-6 rounded-xl bg-qicky-pink/20 hover:bg-qicky-pink/30 transition-colors cursor-pointer group">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-qicky-pink mr-4" />
                <p className="text-lg font-medium text-qicky-text">100% Digital process with <span className="font-bold">Zero paperwork</span></p>
              </div>
              <ArrowRight className="h-5 w-5 text-qicky-textmuted group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Feature Card 4 */}
            <div className="flex items-center justify-between p-6 rounded-xl bg-qicky-blue/20 hover:bg-qicky-blue/30 transition-colors cursor-pointer group">
              <div className="flex items-center">
                <Download className="h-6 w-6 text-qicky-lightblue mr-4" />
                <p className="text-lg font-medium text-qicky-text">Money <span className="font-bold">transferred directly</span> to your bank account</p>
              </div>
              <ArrowRight className="h-5 w-5 text-qicky-textmuted group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right side: Image (Placeholder for now) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-dark-card border border-qicky-blue/30 shadow-2xl">
            {/* Placeholder for the image of the person holding the phone */}
            <img
              src="/public/placeholder.svg" // Replace with actual image path
              alt="Instant loans simplified on mobile"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-qicky-dark/70 to-transparent"></div> {/* Overlay for text readability */}
            <div className="absolute top-6 left-0 right-0 text-center text-qicky-text">
              <h3 className="text-2xl font-bold mb-2">Qicky</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mx-0.5" />
                ))}
              </div>
              <p className="text-xl font-semibold italic">"Instant loans, Simplified."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantLoansSection;