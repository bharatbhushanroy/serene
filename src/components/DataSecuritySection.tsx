"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, Fingerprint, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your data is encrypted at every stage, ensuring maximum privacy and protection.",
  },
  {
    icon: Server,
    title: "Secure Servers",
    description: "We host your data on highly secure, compliant servers with robust physical and digital safeguards.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description: "Add an extra layer of security to your account with MFA for enhanced protection.",
  },
];

interface DataSecuritySectionProps {
  // isMobile: boolean; // Removed isMobile prop
}

const DataSecuritySection: React.FC<DataSecuritySectionProps> = () => {
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
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Your Security, Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Priority</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-fintech-text-muted mb-12 max-w-3xl mx-auto"
        >
          We employ industry-leading security measures to protect your personal and financial information, ensuring a safe and trustworthy experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full transition-all duration-300 hover:border-fintech-blue-accent hover:bg-fintech-dark-bg-lighter">
                <div className="p-4 bg-fintech-blue-soft/20 rounded-full mb-4 ring-2 ring-fintech-blue-accent/50">
                  <feature.icon className="h-7 w-7 text-fintech-blue-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-base text-fintech-text-muted">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Link to="/privacy">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-colors group"
            >
              Read Our Privacy Policy <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSecuritySection;