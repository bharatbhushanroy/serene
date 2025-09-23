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
    link: "/products/personal-loan",
    cardGradient: "bg-gradient-to-br from-fintech-gradient-blue-start to-fintech-gradient-blue-end",
    iconBgClass: "bg-white/20 ring-2 ring-white/50",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth.",
    link: "/products/business-loan",
    cardGradient: "bg-gradient-to-br from-fintech-gradient-purple-start to-fintech-gradient-purple-end",
    iconBgClass: "bg-white/20 ring-2 ring-white/50",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Achieve your dream home.",
    link: "/products/home-loan",
    cardGradient: "bg-gradient-to-br from-fintech-gradient-cyan-start to-fintech-gradient-cyan-end",
    iconBgClass: "bg-white/20 ring-2 ring-white/50",
  },
  {
    icon: Gauge,
    title: "Free Credit Score",
    description: "Check your credit health.",
    link: "/products/free-credit-score",
    cardGradient: "bg-gradient-to-br from-fintech-gradient-pink-start to-fintech-gradient-pink-end",
    iconBgClass: "bg-white/20 ring-2 ring-white/50",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Explore best credit card offers.",
    link: "/products/credit-cards",
    cardGradient: "bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start",
    iconBgClass: "bg-white/20 ring-2 ring-white/50",
  },
  {
    icon: BarChart,
    title: "Personal Finance",
    description: "Manage your finances wisely.",
    link: "/products/personal-finance",
    cardGradient: "bg-gradient-to-br from-fintech-green-success to-fintech-cyan-light",
    iconBgClass: "bg-white/20 ring-2 ring-white/50",
  },
];

const ProductsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      {/* Animated Background Element */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-fintech-blue-accent/10 to-fintech-gradient-purple-start/10 rounded-full blur-3xl opacity-0"
        style={{ width: '80%', height: '80%', top: '10%', left: '10%' }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          <motion.span variants={itemVariants}>Bringing you the </motion.span>
          <motion.span variants={itemVariants} className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Best Products</motion.span>
          <motion.span variants={itemVariants}> from</motion.span>
        </motion.h2>
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-12"
        >
          <motion.span variants={itemVariants} className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Top Banks & Financial Institutions</motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link to={product.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="transform hover:scale-[1.03] transition-transform duration-300 hover:shadow-glow-blue" // Enhanced hover scale and glow
              >
                <Card className={cn("p-8 rounded-xl shadow-lg text-white flex flex-col items-center text-center h-full", product.cardGradient)}>
                  <div className={cn("p-4 rounded-full mb-6 backdrop-blur-sm", product.iconBgClass)}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                  <p className="text-base text-gray-200">
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