import React from 'react';
import { Card } from '@/components/ui/card';
import { UserPlus, FileText, DollarSign, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-qicky-dark text-qicky-text">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Our Simple <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">Process</span>
        </h2>
        <p className="text-lg text-qicky-textmuted mb-12 max-w-3xl mx-auto">
          Getting a loan with Qicky is straightforward and hassle-free. Follow these easy steps to get the funds you need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 bg-qicky-blue/20 rounded-full mb-4">
              <UserPlus className="h-7 w-7 text-qicky-lightblue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-qicky-text">1. Register & Apply</h3>
            <p className="text-base text-qicky-textmuted">
              Sign up in minutes and fill out our simple online application form.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 bg-qicky-blue/20 rounded-full mb-4">
              <FileText className="h-7 w-7 text-qicky-lightblue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-qicky-text">2. Submit Documents</h3>
            <p className="text-base text-qicky-textmuted">
              Upload necessary documents securely for quick verification.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 bg-qicky-blue/20 rounded-full mb-4">
              <DollarSign className="h-7 w-7 text-qicky-lightblue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-qicky-text">3. Get Approved</h3>
            <p className="text-base text-qicky-textmuted">
              Receive instant approval and a personalized loan offer.
            </p>
          </Card>

          {/* Step 4 */}
          <Card className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <div className="p-4 bg-qicky-blue/20 rounded-full mb-4">
              <CheckCircle className="h-7 w-7 text-qicky-lightblue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-qicky-text">4. Funds Disbursed</h3>
            <p className="text-base text-qicky-textmuted">
              Funds are transferred directly to your account within hours.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;