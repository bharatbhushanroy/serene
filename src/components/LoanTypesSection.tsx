import React from 'react';
import { Card } from '@/components/ui/card';
import { HandCoins, Landmark, ShoppingCart, ReceiptText, Ambulance, Scale } from 'lucide-react';

const loanTypes = [
  {
    icon: HandCoins,
    title: "Personal Loan",
    description: "Get instant funds for any personal need, from travel to weddings.",
  },
  {
    icon: Landmark,
    title: "Credit Line",
    description: "A flexible credit limit you can draw from anytime you need.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping on EMI",
    description: "Convert your purchases into easy monthly installments.",
  },
  {
    icon: ReceiptText,
    title: "Bill Payments",
    description: "Pay your utility bills and recharges with ease using your credit.",
  },
  {
    icon: Ambulance,
    title: "Emergency Loan",
    description: "Quick cash for unexpected medical or other emergencies.",
  },
  {
    icon: Scale,
    title: "Debt Consolidation",
    description: "Combine multiple debts into a single, manageable loan.",
  },
];

const LoanTypesSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-qicky-dark text-qicky-text">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12">
          One App, <span className="bg-gradient-to-r from-qicky-pink to-qicky-lightpurple text-transparent bg-clip-text">Many Uses</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border border-qicky-blue/30 p-6 rounded-xl shadow-lg flex flex-col items-start text-left h-full transition-all duration-300 hover:border-qicky-blue hover:bg-white/10 transform hover:-translate-y-2">
              <div className="p-3 bg-qicky-blue/20 rounded-lg mb-4 ring-2 ring-qicky-blue/50">
                <loan.icon className="h-7 w-7 text-qicky-lightblue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-qicky-text">{loan.title}</h3>
              <p className="text-base text-qicky-textmuted">
                {loan.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypesSection;