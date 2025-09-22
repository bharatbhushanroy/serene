"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, CreditCard, Server, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CubeCardProps {
  icon: React.ElementType;
  years: string;
  title: string;
  delay: number;
  gradientStart: string;
  gradientEnd: string;
}

const CubeCard: React.FC<CubeCardProps> = ({ icon: Icon, years, title, delay, gradientStart, gradientEnd }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      className="relative p-6 rounded-2xl shadow-lg text-center flex flex-col items-center justify-center min-h-[200px] overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)` }}
    >
      {/* Cube background SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L100 25L50 50L0 25L50 0Z" fill="currentColor"/>
        <path d="M100 25L100 75L50 100L50 50L100 25Z" fill="currentColor" opacity="0.8"/>
        <path d="M0 25L0 75L50 100L50 50L0 25Z" fill="currentColor" opacity="0.6"/>
      </svg>
      <div className="relative z-10 p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <p className="relative z-10 text-4xl font-extrabold text-white mb-2">{years}</p>
      <p className="relative z-10 text-base text-white/80">{title}</p>
    </motion.div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      icon: DollarSign,
      years: "35+",
      title: "Years Fixed Income",
      gradientStart: "hsl(var(--fintech-gradient-blue-start))",
      gradientEnd: "hsl(var(--fintech-gradient-blue-end))",
    },
    {
      icon: Zap,
      years: "35+",
      title: "Years Technology",
      gradientStart: "hsl(var(--fintech-gradient-purple-start))",
      gradientEnd: "hsl(var(--fintech-gradient-purple-end))",
    },
    {
      icon: CreditCard,
      years: "50+",
      title: "Years Credit",
      gradientStart: "hsl(var(--fintech-gradient-pink-start))",
      gradientEnd: "hsl(var(--fintech-gradient-pink-end))",
    },
    {
      icon: Server,
      years: "35+",
      title: "Years Enterprise SaaS",
      gradientStart: "hsl(var(--fintech-gradient-cyan-start))",
      gradientEnd: "hsl(var(--fintech-gradient-cyan-end))",
    },
    {
      icon: ShieldCheck,
      years: "50+",
      title: "Compliance & Risk Management",
      gradientStart: "hsl(var(--fintech-gradient-blue-start))", // Reusing blue gradient
      gradientEnd: "hsl(var(--fintech-gradient-purple-end))", // Blending with purple
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          OUR <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">TEAM</span>
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our army of <span className="text-fintech-orange-accent">300+</span> Knights
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <CubeCard
              key={index}
              icon={member.icon}
              years={member.years}
              title={member.title}
              delay={index * 0.1}
              gradientStart={member.gradientStart}
              gradientEnd={member.gradientEnd}
            />
          ))}
        </div>

        <p className="text-lg text-fintech-text-muted text-center mt-16 max-w-4xl mx-auto">
          With an exceptional team of professionals, our company boasts an impressive cumulative experience of over 150 years, enabling us to provide unmatched expertise and value to our clients.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;