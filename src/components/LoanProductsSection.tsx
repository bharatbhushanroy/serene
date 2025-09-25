"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LoanCardProps {
  title: string;
  subtitle: string;
  amount: string;
  rate: string;
  term: string;
  features: string[];
  bgColor: string;
  buttonColor: string;
  isPopular?: boolean;
  link: string;
}

const LoanCard: React.FC<LoanCardProps> = ({
  title,
  subtitle,
  amount,
  rate,
  term,
  features,
  bgColor,
  buttonColor,
  isPopular = false,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("relative rounded-2xl shadow-lg p-8 text-white h-full flex flex-col", bgColor)}
    >
      {isPopular && (
        <div className="absolute -top-4 right-6 bg-fintech-popular-badge-bg text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-md">
          <Star className="h-4 w-4 mr-1 fill-current text-white" /> POPULAR
        </div>
      )}
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
        <p className="text-fintech-text-muted text-base">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <p className="text-5xl font-extrabold mb-4">{amount}</p>
        <p className="text-base text-fintech-text-muted mb-6">
          Rate: {rate} <span className="mx-2">|</span> Term: {term}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-base">
              <CheckCircle className="h-5 w-5 text-fintech-green-success mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link to="/apply-loan" className="block mt-auto"> {/* Changed link to /apply-loan */}
          <Button className={cn("w-full px-8 py-3 rounded-full text-lg font-semibold transition-colors group", buttonColor)}>
            Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </motion.div>
  );
};

const LoanProductsSection = () => {
  const loanProducts = [
    {
      title: "Personal Loan",
      subtitle: "For all your personal needs",
      amount: "₹5,00,000",
      rate: "9.99%",
      term: "Up to 60 months",
      features: [
        "Zero processing fee",
        "No hidden charges",
        "Instant approval",
        "Quick disbursement",
      ],
      bgColor: "bg-fintech-loan-card-purple",
      buttonColor: "bg-fintech-loan-card-purple-darker hover:bg-fintech-loan-card-purple-darkest",
      isPopular: true,
      link: "/products/personal-loan",
    },
    {
      title: "Home Loan",
      subtitle: "Make your dream home a reality",
      amount: "₹50,00,000",
      rate: "8.50%",
      term: "Up to 20 years",
      features: [
        "Competitive interest rates",
        "Flexible repayment options",
        "No pre-closure charges",
        "Doorstep service",
      ],
      bgColor: "bg-fintech-loan-card-blue",
      buttonColor: "bg-fintech-loan-card-blue-darker hover:bg-fintech-loan-card-blue-darkest",
      link: "/products/home-loan",
    },
    {
      title: "Education Loan",
      subtitle: "Invest in your future",
      amount: "₹20,00,000",
      rate: "8.75%",
      term: "Up to 10 years",
      features: [
        "Cover tuition & living expenses",
        "No collateral for loans up to ₹7.5 lakh",
        "Tax benefits available",
        "Easy repayment after course completion",
      ],
      bgColor: "bg-fintech-loan-card-green",
      buttonColor: "bg-fintech-loan-card-green-darker hover:bg-fintech-loan-card-green-darkest",
      link: "/products/education-loan",
    },
  ];

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Compare <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Loan Options</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Use our advanced calculator to compare different loan scenarios and find the best option for your financial needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanProducts.map((product, index) => (
            <LoanCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanProductsSection;