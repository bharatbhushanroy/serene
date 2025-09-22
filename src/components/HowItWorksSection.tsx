import React from 'react';
import { Card } from '@/components/ui/card';
import { UserPlus, FileText, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  { icon: UserPlus, title: "1. Register & Apply", description: "Sign up in minutes and fill out our simple online application form." },
  { icon: FileText, title: "2. Submit Documents", description: "Upload necessary documents securely for quick verification." },
  { icon: DollarSign, title: "3. Get Approved", description: "Receive instant approval and a personalized loan offer." },
  { icon: CheckCircle, title: "4. Funds Disbursed", description: "Funds are transferred directly to your account within hours." },
];

const HowItWorksSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-fintech-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Our Simple <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Process</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Getting a loan with Qicky is straightforward and hassle-free. Follow these easy steps to get the funds you need.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dashed line connector for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <Card className="bg-fintech-simulator-card-bg backdrop-blur-lg border border-fintech-border-light p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full transition-all duration-300 hover:border-fintech-blue-accent hover:bg-fintech-dark-bg-lighter">
                <div className="p-4 bg-fintech-blue-soft/20 rounded-full mb-4 ring-2 ring-fintech-blue-accent/50">
                  <step.icon className="h-7 w-7 text-fintech-blue-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-base text-fintech-text-muted">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;