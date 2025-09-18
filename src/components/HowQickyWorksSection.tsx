import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, CheckCircle, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Fill out our simple application form in minutes from anywhere, anytime.",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Receive instant approval and a personalized loan offer tailored to your needs.",
  },
  {
    icon: DollarSign,
    title: "Receive Funds",
    description: "Funds are transferred directly to your bank account within hours of approval.",
  },
];

const HowQickyWorksSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-background-offwhite text-fintech-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          How Does <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Qicky Loan Works?</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Our process is designed for speed and simplicity, ensuring you get the financial support you need without any hassle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-fintech-card-light backdrop-blur-lg border border-fintech-border-light p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full transition-all duration-300 hover:border-fintech-blue-accent hover:bg-fintech-background-light">
              <div className="p-4 bg-fintech-blue-soft/20 rounded-full mb-4 ring-2 ring-fintech-blue-accent/50">
                <step.icon className="h-7 w-7 text-fintech-blue-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-fintech-text-dark">{step.title}</h3>
              <p className="text-base text-fintech-text-muted">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowQickyWorksSection;