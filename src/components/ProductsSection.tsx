"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign, Briefcase, Home, Gauge, CreditCard, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const products = [
  {
    icon: DollarSign,
    title: "Personal Loan",
    description: "Quick funds for personal needs.",
    link: "/products/personal-loan", // Updated link
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth.",
    link: "/products/business-loan", // Updated link
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Achieve your dream home.",
    link: "/products/home-loan", // Updated link
  },
  {
    icon: Gauge,
    title: "Free Credit Score",
    description: "Check your credit health.",
    link: "/products/free-credit-score", // Updated link
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Explore best credit card offers.",
    link: "/products/credit-cards", // Updated link
  },
  {
    icon: BarChart,
    title: "Personal Finance",
    description: "Manage your finances wisely.",
    link: "/products/personal-finance", // Updated link
  },
];

const ProductsSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Bringing you the <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Best Products</span> from
        </h2>
        <p className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-white">
          Top Banks & Financial Institutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link to={product.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-xl shadow-lg text-white flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-blue">
                  <div className="p-4 bg-fintech-blue-accent/20 rounded-full mb-6 backdrop-blur-sm">
                    <product.icon className="h-8 w-8 text-fintech-blue-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                  <p className="text-base text-fintech-text-muted">
                    {product.description}
                  </p>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;