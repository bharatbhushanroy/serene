"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Zap, CreditCard, ShieldCheck, Hand } from 'lucide-react';
import { Card } from '@/components/ui/card'; // Ensure Card is imported
import { cn } from '@/lib/utils';
import UpiPhoneMockup from './UpiPhoneMockup'; // Import the new UpiPhoneMockup component

const UpiSection = () => {
  const featureCardVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: 0 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: i % 2 === 0 ? -5 : 5, // Alternate rotation
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    float: (i: number) => ({
      y: [0, 10, 0, -10, 0],
      x: [0, i * 3, 0, -i * 3, 0],
      rotate: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -7 : 7, i % 2 === 0 ? -5 : 5, i % 2 === 0 ? -3 : 3, i % 2 === 0 ? -5 : 5],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  const features = [
    {
      icon: QrCode,
      title: "Anytime Anywhere",
      subtitle: "Scan & Pay with UPI",
      gradient: "bg-gradient-to-br from-fintech-blue-accent to-fintech-gradient-purple-start",
      delay: 0,
      positionClasses: "top-[10%] left-[5%] md:top-[15%] md:left-[10%] lg:top-[15%] lg:left-[15%]",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      subtitle: "24/7 Instant Transfer",
      gradient: "bg-gradient-to-br from-fintech-gradient-pink-start to-fintech-gradient-cyan-end",
      delay: 0.1,
      positionClasses: "top-[10%] right-[5%] md:top-[15%] md:right-[10%] lg:top-[15%] lg:right-[15%]",
    },
    {
      icon: CreditCard,
      title: "Pay Using",
      subtitle: "Credit on UPI with RuPay",
      gradient: "bg-gradient-to-br from-fintech-orange-accent to-fintech-peach-background",
      delay: 0.2,
      positionClasses: "bottom-[10%] left-[5%] md:bottom-[15%] md:left-[10%] lg:bottom-[15%] lg:left-[15%]",
    },
    {
      icon: ShieldCheck,
      title: "Safe",
      subtitle: "Secured Transactions",
      gradient: "bg-gradient-to-br from-fintech-green-success to-fintech-cyan-light",
      delay: 0.3,
      positionClasses: "bottom-[10%] right-[5%] md:bottom-[15%] md:right-[10%] lg:bottom-[15%] lg:right-[15%]",
    },
  ];

  const backgroundBlobVariants = {
    animate: (i: number) => ({
      y: [0, 50 + i * 10, 0],
      x: [0, 30 + i * 5, 0],
      scale: [0.8, 1.2, 0.8],
      opacity: [0.1, 0.2, 0.1],
      rotate: [0, 360, 0],
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        ease: "linear",
        delay: i * 2,
      },
    }),
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      {/* Background Animated Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={backgroundBlobVariants}
          animate="animate"
          className={cn(
            "absolute rounded-full mix-blend-lighten filter blur-3xl opacity-0",
            i === 0 && "top-1/4 left-1/4 w-64 h-64 bg-fintech-blue-accent",
            i === 1 && "bottom-1/3 right-1/4 w-72 h-72 bg-fintech-gradient-purple-start",
            i === 2 && "top-1/2 left-1/2 w-56 h-56 bg-fintech-orange-accent"
          )}
        />
      ))}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Experience the Future of <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Payments</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-12 max-w-3xl mx-auto">
          Introducing Qicky UPI: Your gateway to instant, secure, and seamless digital transactions. Get ready to pay and receive money with unparalleled ease.
        </p>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 min-h-[700px]">
          {/* Feature Cards - Dynamically positioned */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={cn(
                "absolute w-[160px] h-[120px] md:w-[180px] md:h-[140px]", // Base size and positioning
                feature.positionClasses, // Apply dynamic positioning
                "z-10 transform hover:scale-[1.03] transition-transform duration-300 hover:shadow-glow-blue" // Hover effects
              )}
              variants={featureCardVariants}
              initial="initial"
              whileInView={["animate", "float"]}
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <Card className={cn(
                "p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white h-full w-full",
                feature.gradient, // Apply gradient background
                "border border-fintech-border-light" // Add border
              )}>
                <feature.icon className="h-7 w-7 text-white mb-2" />
                <p className="text-sm font-medium">{feature.title}</p>
                <p className="text-lg font-bold">{feature.subtitle}</p>
              </Card>
            </motion.div>
          ))}

          {/* Central iPhone Mockup */}
          <div className="relative z-20">
            <UpiPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpiSection;