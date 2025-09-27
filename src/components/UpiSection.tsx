"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Zap, CreditCard, ShieldCheck, Hand } from 'lucide-react';
import { Card } from '@/components/ui/card';
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
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      subtitle: "24/7 Instant Transfer",
      gradient: "bg-gradient-to-br from-fintech-gradient-pink-start to-fintech-gradient-cyan-end",
      delay: 0.1,
    },
    {
      icon: CreditCard,
      title: "Pay Using",
      subtitle: "Credit on UPI with RuPay",
      gradient: "bg-gradient-to-br from-fintech-orange-accent to-fintech-peach-background",
      delay: 0.2,
    },
    {
      icon: ShieldCheck,
      title: "Safe",
      subtitle: "Secured Transactions",
      gradient: "bg-gradient-to-br from-fintech-green-success to-fintech-cyan-light",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Say Hi <motion.span
            className="inline-block"
            animate={{ rotate: [0, 15, -15, 0], y: [0, -5, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            👋
          </motion.span> to{' '}
          <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Qicky UPI</span>
        </h2>
        <p className="text-lg text-fintech-text-muted mb-12 max-w-3xl mx-auto">
          Experience the future of digital payments with Qicky UPI. Fast, secure, and incredibly convenient.
        </p>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 min-h-[700px]">
          {/* Feature Cards - Left Side */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-8 z-10 hidden lg:block">
            <motion.div
              className="w-[200px] h-[150px] p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white"
              variants={featureCardVariants}
              initial="initial"
              whileInView={["animate", "float"]}
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
              style={{ background: features[0].gradient }}
            >
              <QrCode className="h-8 w-8 text-white mb-2" />
              <p className="text-sm font-medium">{features[0].title}</p>
              <p className="text-lg font-bold">{features[0].subtitle}</p>
            </motion.div>
            <motion.div
              className="w-[200px] h-[150px] p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white"
              variants={featureCardVariants}
              initial="initial"
              whileInView={["animate", "float"]}
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
              style={{ background: features[1].gradient }}
            >
              <Zap className="h-8 w-8 text-white mb-2" />
              <p className="text-sm font-medium">{features[1].title}</p>
              <p className="text-lg font-bold">{features[1].subtitle}</p>
            </motion.div>
          </div>

          {/* Central iPhone Mockup */}
          <div className="relative z-20">
            <UpiPhoneMockup />
          </div>

          {/* Feature Cards - Right Side */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-8 z-10 hidden lg:block">
            <motion.div
              className="w-[200px] h-[150px] p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white"
              variants={featureCardVariants}
              initial="initial"
              whileInView={["animate", "float"]}
              viewport={{ once: true, amount: 0.5 }}
              custom={2}
              style={{ background: features[2].gradient }}
            >
              <CreditCard className="h-8 w-8 text-white mb-2" />
              <p className="text-sm font-medium">{features[2].title}</p>
              <p className="text-lg font-bold">{features[2].subtitle}</p>
            </motion.div>
            <motion.div
              className="w-[200px] h-[150px] p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white"
              variants={featureCardVariants}
              initial="initial"
              whileInView={["animate", "float"]}
              viewport={{ once: true, amount: 0.5 }}
              custom={3}
              style={{ background: features[3].gradient }}
            >
              <ShieldCheck className="h-8 w-8 text-white mb-2" />
              <p className="text-sm font-medium">{features[3].title}</p>
              <p className="text-lg font-bold">{features[3].subtitle}</p>
            </motion.div>
          </div>

          {/* Feature Cards for smaller screens (below lg) */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8 w-full max-w-md mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl shadow-lg text-center flex flex-col items-center justify-center text-white h-[120px]"
                variants={featureCardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
                style={{ background: feature.gradient }}
              >
                <feature.icon className="h-6 w-6 text-white mb-1" />
                <p className="text-xs font-medium">{feature.title}</p>
                <p className="text-base font-bold">{feature.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpiSection;