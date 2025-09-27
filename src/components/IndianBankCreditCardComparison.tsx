"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Percent, Gift, Shield, PiggyBank } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CardFeature {
  icon: React.ElementType;
  text: string;
}

interface CreditCardData {
  bank: string;
  cardName: string;
  image: string; // Placeholder for card image URL
  features: CardFeature[];
  link: string;
  bgColor: string;
}

const indianCreditCards: CreditCardData[] = [
  {
    bank: "HDFC Bank",
    cardName: "Regalia Credit Card",
    image: "https://www.hdfcbank.com/content/api/contentstream-id/staticfile/20230920100000-regalia-card-image.png", // Example image
    features: [
      { icon: Star, text: "Reward Points on every spend" },
      { icon: Gift, text: "Complimentary Airport Lounge Access" },
      { icon: Percent, text: "Low Foreign Currency Markup" },
    ],
    link: "/apply-card/hdfc-regalia",
    bgColor: "bg-gradient-to-br from-blue-800 to-blue-600",
  },
  {
    bank: "ICICI Bank",
    cardName: "Amazon Pay ICICI Bank Credit Card",
    image: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/personal/cards/credit-card/amazon-pay-icici-bank-credit-card/amazon-pay-icici-bank-credit-card-new.png", // Example image
    features: [
      { icon: PiggyBank, text: "5% Cashback on Amazon India" },
      { icon: Shield, text: "No Annual Fee" },
      { icon: CheckCircle, text: "Lifetime Free" },
    ],
    link: "/apply-card/icici-amazon",
    bgColor: "bg-gradient-to-br from-orange-700 to-orange-500",
  },
  {
    bank: "SBI Card",
    cardName: "SimplyCLICK Credit Card",
    image: "https://www.sbicard.com/sbi-card-en/assets/images/personal/credit-cards/simplyclick-sbi-card.png", // Example image
    features: [
      { icon: Star, text: "10X Rewards on Online Spends" },
      { icon: Percent, text: "Fuel Surcharge Waiver" },
      { icon: Gift, text: "Amazon.in Gift Card on Joining" },
    ],
    link: "/apply-card/sbi-simplyclick",
    bgColor: "bg-gradient-to-br from-red-800 to-red-600",
  },
  {
    bank: "Axis Bank",
    cardName: "Magnus Credit Card",
    image: "https://www.axisbank.com/images/default-source/revamp_images/cards/credit-cards/magnus-credit-card.png", // Example image
    features: [
      { icon: Star, text: "Premium Travel Benefits" },
      { icon: Gift, text: "Complimentary Flights" },
      { icon: Percent, text: "High Reward Rate" },
    ],
    link: "/apply-card/axis-magnus",
    bgColor: "bg-gradient-to-br from-purple-800 to-purple-600",
  },
];

const IndianBankCreditCardComparison = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {indianCreditCards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`relative p-8 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ${card.bgColor}`}
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(10px)' }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <img src={card.image} alt={`${card.bank} ${card.cardName}`} className="object-contain h-full w-full p-2" width={160} height={96} loading="lazy" /> {/* Added width/height and lazy loading */}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{card.cardName}</h3>
              <p className="text-fintech-text-muted text-sm md:text-base mb-4">{card.bank}</p>
              <motion.ul
                className="space-y-2 text-left mx-auto md:mx-0 max-w-xs md:max-w-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {card.features.map((feature, fIndex) => (
                  <motion.li key={fIndex} variants={featureItemVariants} className="flex items-center text-sm text-gray-100">
                    <feature.icon className="h-4 w-4 text-fintech-green-success mr-2 flex-shrink-0" />
                    {feature.text}
                  </motion.li>
                ))}
              </motion.ul>
              <Link to={card.link} className="mt-6 block md:inline-block">
                <Button className="w-full md:w-auto bg-white text-fintech-main-bg hover:bg-gray-100 px-6 py-2 rounded-full text-base font-semibold transition-colors shadow-md">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IndianBankCreditCardComparison;