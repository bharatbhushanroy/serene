"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMockup from './MobileMockup'; // Assuming this is a default mockup
import CreditCardMockup from './CreditCardMockup'; // Example of another mockup
import LoanApprovedMockup from './LoanApprovedMockup'; // Example of another mockup
import { cn } from '@/lib/utils';

interface HeroSlideProps {
  badgeText: string;
  titlePart1: string;
  gradientWord1: string;
  titlePart2: string;
  gradientWord2: string;
  subtitle: string;
  ctaButton1Text: string;
  ctaButton1Link: string;
  ctaButton2Text: string;
  ctaButton2Link: string;
  features: string[];
  mockupComponent: 'MobileMockup' | 'CreditCardMockup' | 'LoanApprovedMockup' | 'None';
  mockupProps?: any; // Props specific to the mockup component
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  badgeText,
  titlePart1,
  gradientWord1,
  titlePart2,
  gradientWord2,
  subtitle,
  ctaButton1Text,
  ctaButton1Link,
  ctaButton2Text,
  ctaButton2Link,
  features,
  mockupComponent,
  mockupProps,
}) => {
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

  const gradientTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        // Animate gradient position for a subtle "flow" effect
        backgroundPosition: ['0% 50%', '100% 50%'],
      },
    },
  };

  const renderMockup = () => {
    switch (mockupComponent) {
      case 'MobileMockup':
        return <MobileMockup {...mockupProps} />;
      case 'CreditCardMockup':
        return <CreditCardMockup {...mockupProps} />;
      case 'LoanApprovedMockup':
        return <LoanApprovedMockup {...mockupProps} />;
      case 'None':
      default:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md h-96 flex items-center justify-center bg-fintech-simulator-card-bg/80 backdrop-blur-lg border border-fintech-border-light rounded-3xl p-6 shadow-2xl shadow-fintech-blue-accent/20"
          >
            <h3 className="text-2xl font-bold text-white text-center">Dynamic Content Here</h3>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white">
      {/* Local Animated Shapes for this section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200, y: -100 }}
        animate={{ opacity: 0.1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-fintech-blue-accent opacity-0"
        style={{ filter: 'blur(70px)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 200, y: 100 }}
        animate={{ opacity: 0.08, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-fintech-cyan-light opacity-0"
        style={{ filter: 'blur(80px)' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <motion.span variants={itemVariants} initial="hidden" animate="visible" className="inline-block bg-fintech-orange-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {badgeText}
          </motion.span>
          <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            <motion.span variants={itemVariants}>{titlePart1}</motion.span>{' '}
            <motion.span
              variants={gradientTextVariants}
              className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text bg-[length:200%_auto]"
            >
              {gradientWord1}
            </motion.span>{' '}
            <br className="hidden md:block" />
            <motion.span variants={itemVariants}>{titlePart2}</motion.span>{' '}
            <motion.span
              variants={gradientTextVariants}
              className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text bg-[length:200%_auto]"
            >
              {gradientWord2}
            </motion.span>
          </motion.h1>
          <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
            {subtitle}
          </motion.p>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link to={ctaButton1Link}>
              <Button className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-glow-blue">
                {ctaButton1Text}
              </Button>
            </Link>
            <Link to={ctaButton2Link}>
              <Button variant="outline" className="bg-transparent border-gray-700 text-gray-200 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-fintech-blue-accent transition-colors">
                {ctaButton2Text}
              </Button>
            </Link>
          </motion.div>
          <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 text-left w-full max-w-md">
            {features.map((feature, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-center text-lg text-gray-200">
                <CheckCircle className="h-6 w-6 text-fintech-blue-accent mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right content - Dynamic Mockup */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10 min-h-[500px] lg:min-h-[700px]">
          {renderMockup()}
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;