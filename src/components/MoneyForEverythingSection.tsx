"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Book, Fuel, Home, Plane, Banknote, ArrowRight } from 'lucide-react'; // Changed Basket to ShoppingBag, added Home
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Reusable Icon Card Component
interface IconCardProps {
  icon: React.ElementType;
  text: string;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon: Icon, text, bgColor = 'bg-fintech-dark-card-bg', textColor = 'text-fintech-dark-text-primary', iconColor = 'text-fintech-icon-orange', className }) => (
  <motion.div
    className={cn("p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full", bgColor, className)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Icon className={cn("h-10 w-10 mb-3", iconColor)} />
    <p className={cn("text-lg font-medium", textColor)}>{text}</p>
  </motion.div>
);

// Custom Phone Mockup for this section
const PhoneSimulatorMockup = () => {
  return (
    <motion.div
      className="relative w-[220px] h-[400px] bg-fintech-phone-bg rounded-[30px] shadow-2xl flex items-center justify-center p-1.5 border-[6px] border-fintech-phone-border overflow-hidden"
      initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)' // Enhanced shadow
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-md z-10"></div>
      {/* Screen Content */}
      <div className="relative w-full h-full bg-white rounded-[25px] overflow-hidden flex flex-col p-4 text-fintech-phone-text">
        <p className="text-sm text-gray-500 mb-2">Choose Amount</p>
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2 mb-4">
          <span className="text-2xl font-bold text-fintech-icon-orange">₹</span>
          <span className="text-2xl font-bold text-gray-800 ml-1">14000</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">Choose EMI Tenure</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {['3 Months', '4 Months', '5 Months', '6 Months'].map((tenure, index) => (
            <Button key={index} variant="outline" className="text-sm h-auto py-2 bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200">
              {tenure}
            </Button>
          ))}
        </div>
        <Button className="w-full bg-fintech-orange-accent text-white py-2 rounded-full text-base font-semibold hover:opacity-90">
          APPLY
        </Button>
      </div>
    </motion.div>
  );
};

const MoneyForEverythingSection = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Money for <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">everything</span> you need
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Get up to ₹ 20,000 quickly for your small expenses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Prominent "What can I use this money for?" card */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 p-8 rounded-2xl flex flex-col items-start justify-center text-left bg-fintech-dark-card-bg min-h-[200px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-fintech-dark-text-primary leading-tight mb-4">
              What can I use this <span className="text-fintech-icon-orange">money</span> for?
            </h3>
            <p className="text-fintech-dark-text-muted text-base">
              From daily essentials to unexpected expenses, Qicky provides quick funds for all your immediate needs.
            </p>
          </motion.div>

          {/* Grid of smaller Icon Cards */}
          <IconCard icon={ShoppingBag} text="Daily Groceries" />
          <IconCard icon={Book} text="Books & Education" />
          <IconCard icon={Fuel} text="Fuel & Transport" />
          <IconCard icon={Home} text="House Rent" />
          <IconCard icon={Plane} text="Travel Expenses" />
          <IconCard icon={Banknote} text="Get up to ₹ 20,000" iconColor="text-white" bgColor="bg-fintech-icon-gray-bg" textColor="text-white" />
        </div>

        {/* Phone Simulator Mockup with CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-fintech-dark-card-bg rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 flex justify-center lg:justify-end">
            <PhoneSimulatorMockup />
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
              Pay nominal interest only on what you use.
            </h3>
            <p className="text-lg text-fintech-text-muted mb-8">
              Experience financial flexibility with Qicky. Only pay interest on the amount you actually borrow, not the entire approved limit.
            </p>
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-colors group"
              >
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-xs text-fintech-text-muted mt-2">*Terms & Conditions Apply</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyForEverythingSection;