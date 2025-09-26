"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  gradientClass: string;
  iconBgClass: string;
  delay: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon: Icon,
  value,
  label,
  gradientClass,
  iconBgClass,
  delay,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={cn(
        "relative p-6 rounded-xl shadow-lg text-white flex flex-col items-center justify-center h-full overflow-hidden",
        gradientClass
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)
        `,
        backgroundSize: '20px 20px',
      }}></div>

      <div className={cn("relative z-10 p-3 rounded-full mb-4", iconBgClass)}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <p className="relative z-10 text-4xl font-bold mb-1">{value}</p>
      <p className="relative z-10 text-sm text-white/80">{label}</p>
    </motion.div>
  );
};

export default ExpertiseCard;