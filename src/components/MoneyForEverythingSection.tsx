"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Basket, Book, Fuel, ShoppingBag, ShoppingCart, Glasses, Wallet, Plane, Banknote, ArrowRight } from 'lucide-react';
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
        <Button className="w-full bg-fintech-icon-orange text-white py-2 rounded-full text-base font-semibold hover:opacity-90">
          APPLY
        </Button>
      </div>
    </motion.div>
  );
};

const MoneyForEverythingSection = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-dark-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Money for <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">everything</span> you need
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          Get up to ₹ 20,000 quickly for your small expenses
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* What can I use this money for? */}
          <motion.div
            className="col-span-full sm:col-span-1 lg:col-span-1 xl:col-span-1 p-6 rounded-2xl flex flex-col items-start justify-center text-left bg-fintech-dark-card-bg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-fintech-dark-text-primary leading-tight">
              What can I use this <span className="text-fintech-icon-orange">money</span> for?
            </h3>
          </motion.div>

          {/* Daily Groceries */}
          <IconCard icon={Basket} text="Daily Groceries" className="col-span-1" />

          {/* Books */}
          <IconCard icon={Book} text="Books" className="col-span-1 bg-fintech-dark-card-bg-secondary" iconColor="text-fintech-icon-orange" />

          {/* House Rent (Image Card) */}
          <motion.div
            className="col-span-full sm:col-span-2 lg:col-span-2 xl:col-span-2 rounded-2xl overflow-hidden relative flex items-end p-6 min-h-[250px]"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596854341014-d89697b0f159?q=80&w=1974&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <h3 className="relative z-10 text-3xl font-bold text-white">House Rent</h3>
          </motion.div>

          {/* Gas */}
          <IconCard icon={Fuel} text="Gas" className="col-span-1 bg-fintech-icon-gray-bg" iconColor="text-white" />

          {/* Phone Simulator Mockup */}
          <motion.div
            className="col-span-full sm:col-span-2 lg:col-span-2 xl:col-span-2 flex items-center justify-center p-6 rounded-2xl bg-fintech-dark-card-bg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <PhoneSimulatorMockup />
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Pay nominal interest only on what you use.
                </h3>
                <Link to="/signup">
                  <Button
                    size="lg"
                    className="bg-white text-fintech-dark-bg px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors group"
                  >
                    Sign Up Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-xs text-fintech-text-muted mt-2">*T&C Apply</p>
              </div>
            </div>
          </motion.div>

          {/* Shopping (multiple icons) */}
          <motion.div
            className="col-span-1 p-6 rounded-2xl flex flex-col items-center justify-center text-center bg-fintech-dark-card-bg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-2 mb-3">
              <ShoppingBag className="h-8 w-8 text-fintech-icon-orange" />
              <ShoppingCart className="h-8 w-8 text-fintech-icon-orange" />
              <Glasses className="h-8 w-8 text-fintech-icon-orange" />
              <Wallet className="h-8 w-8 text-fintech-icon-orange" />
            </div>
            <p className="text-lg font-medium text-fintech-dark-text-primary">Shopping</p>
          </motion.div>

          {/* Travel */}
          <IconCard icon={Plane} text="Travel" className="col-span-1" />

          {/* Get up to ₹ 20,000 */}
          <motion.div
            className="col-span-1 p-6 rounded-2xl flex flex-col items-center justify-center text-center bg-fintech-icon-gray-bg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <Banknote className="h-10 w-10 mb-3 text-white" />
            <p className="text-lg font-medium text-white">Get up to</p>
            <p className="text-3xl font-bold text-white">₹ 20,000</p>
          </motion.div>

          {/* Daily Groceries (bottom right) */}
          <IconCard icon={Basket} text="Daily Groceries" className="col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default MoneyForEverythingSection;