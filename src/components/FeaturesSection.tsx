import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-qicky-dark text-qicky-text">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Why Choose <span className="bg-gradient-to-r from-qicky-purple to-qicky-blue text-transparent bg-clip-text">Qicky?</span>
        </h2>
        <p className="text-lg text-qicky-textmuted mb-12 max-w-3xl mx-auto">
          Experience a new era of financial freedom with Qicky. We offer unparalleled benefits designed to make your borrowing journey smooth and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="bg-gradient-card-1 p-8 rounded-xl shadow-lg text-white flex flex-col items-center text-center">
            <div className="p-4 bg-white/10 rounded-full mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Instant Approvals</h3>
            <p className="text-base opacity-90">
              Get your loan approved in minutes, not days. Our streamlined process ensures quick decisions.
            </p>
          </Card>

          {/* Feature Card 2 */}
          <Card className="bg-gradient-card-2 p-8 rounded-xl shadow-lg text-white flex flex-col items-center text-center">
            <div className="p-4 bg-white/10 rounded-full mb-6">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Secure & Transparent</h3>
            <p className="text-base opacity-90">
              Your data is safe with us. Enjoy complete transparency with no hidden fees or surprises.
            </p>
          </Card>

          {/* Feature Card 3 */}
          <Card className="bg-gradient-card-3 p-8 rounded-xl shadow-lg text-white flex flex-col items-center text-center">
            <div className="p-4 bg-white/10 rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Flexible Repayments</h3>
            <p className="text-base opacity-90">
              Choose a repayment plan that fits your budget and lifestyle, with options to adjust as needed.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;