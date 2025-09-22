"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign, Briefcase, Home, Gauge, CreditCard, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const products = [
  {
    icon: DollarSign,
    title: "Personal Loan",
    description: "Quick funds for personal needs.",
    link: "/apply-loan",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth.",
    link: "/apply-loan",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Achieve your dream home.",
    link: "/apply-loan",
  },
  {
    icon: Gauge,
    title: "Free Credit Score",
    description: "Check your credit health.",
    link: "/check-eligibility", // Assuming a route for eligibility check
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Explore best credit card offers.",
    link: "/credit-cards", // Placeholder route
  },
  {
    icon: BarChart,
    title: "Personal Finance",
    description: "Manage your finances wisely.",
    link: "/personal-finance", // Placeholder route
  },
];

const ProductsSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-background-light text-fintech-text-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Bringing you the <span className="bg-gradient-to-r from-fintech-orange-accent to-fintech-peach-background text-transparent bg-clip-text">Best Products</span> from
        </h2>
        <p className="text-4xl md:text-5xl font-extrabold leading-tight mb-12">
          Top Banks & Financial Institutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link to={product.link} key={index}>
              <Card className="bg-gradient-to-br from-orange-200 to-orange-400 p-8 rounded-xl shadow-lg text-fintech-text-dark flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-orange">
                <div className="p-4 bg-white/30 rounded-full mb-6 backdrop-blur-sm">
                  <product.icon className="h-8 w-8 text-orange-700" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-base opacity-90">
                  {product.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;