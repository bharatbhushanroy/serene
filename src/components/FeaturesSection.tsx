import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Approvals",
    description: "Get your loan approved in minutes, not days. Our streamlined process ensures quick decisions.",
    gradient: "from-brand-orange to-brand-light-orange",
    shadow: "hover:shadow-glow-orange",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    description: "Your data is safe with us. Enjoy complete transparency with no hidden fees or surprises.",
    gradient: "from-brand-orange to-brand-light-orange",
    shadow: "hover:shadow-glow-orange",
  },
  {
    icon: TrendingUp,
    title: "Flexible Repayments",
    description: "Choose a repayment plan that fits your budget and lifestyle, with options to adjust as needed.",
    gradient: "from-brand-orange to-brand-light-orange",
    shadow: "hover:shadow-glow-orange",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-brand-dark text-brand-text">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Why Choose <span className="bg-gradient-to-r from-brand-orange to-brand-light-orange text-transparent bg-clip-text">Qicky?</span>
        </h2>
        <p className="text-lg text-brand-text-muted mb-12 max-w-3xl mx-auto">
          Experience a new era of financial freedom with Qicky. We offer unparalleled benefits designed to make your borrowing journey smooth and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-xl shadow-lg text-white flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 ${feature.shadow}`}>
              <div className="p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base opacity-90">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;