"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, IndianRupee } from 'lucide-react'; // Using IndianRupee for currency

const MadeForIndiansSection = () => {
  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 0.8,
        delay: i * 0.1 + 0.5,
        ease: "easeOut",
      },
    }),
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: 1.5, ease: "easeOut" } },
  };

  // Coordinates for dots on a 1000x1000 viewBox (relative to the SVG)
  const dotPositions = [
    { x: 250, y: 200, color: 'bg-fintech-orange-accent' }, // North-West
    { x: 700, y: 250, color: 'bg-fintech-green-success' }, // North-East
    { x: 400, y: 450, color: 'bg-fintech-blue-accent' }, // Central
    { x: 200, y: 600, color: 'bg-fintech-orange-accent' }, // West
    { x: 800, y: 650, color: 'bg-fintech-green-success' }, // East
    { x: 500, y: 850, color: 'bg-fintech-blue-accent' }, // South
    { x: 300, y: 300, color: 'bg-fintech-green-success' }, // Rajasthan/Gujarat area
    { x: 600, y: 350, color: 'bg-fintech-orange-accent' }, // UP/Bihar area
    { x: 450, y: 750, color: 'bg-fintech-green-success' }, // Karnataka/Andhra area
    { x: 750, y: 500, color: 'bg-fintech-blue-accent' }, // Odisha/Chhattisgarh area
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-background-light text-fintech-text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Made in <span className="bg-gradient-to-r from-fintech-orange-accent to-fintech-green-success text-transparent bg-clip-text">India</span>, made for Indians
        </h2>
        <p className="text-lg text-fintech-text-muted mb-16 max-w-3xl mx-auto">
          1200+ cities, 17000+ PIN codes, unlimited taps
        </p>

        <div className="relative w-full max-w-4xl mx-auto aspect-[1.2/1] flex items-center justify-center">
          {/* India Map SVG */}
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-80"
          >
            {/* Main India map path - simplified for demonstration */}
            <motion.path
              d="M800.0,200.0 C850.0,150.0 900.0,100.0 950.0,150.0 C980.0,180.0 990.0,250.0 980.0,300.0 C970.0,350.0 950.0,400.0 900.0,450.0 C850.0,500.0 800.0,550.0 750.0,600.0 C700.0,650.0 650.0,700.0 600.0,750.0 C550.0,800.0 500.0,850.0 450.0,900.0 C400.0,950.0 350.0,980.0 300.0,950.0 C250.0,920.0 200.0,850.0 150.0,800.0 C100.0,750.0 50.0,700.0 50.0,650.0 C50.0,600.0 80.0,550.0 120.0,500.0 C160.0,450.0 200.0,400.0 250.0,350.0 C300.0,300.0 350.0,250.0 400.0,200.0 C450.0,150.0 500.0,100.0 550.0,100.0 C600.0,100.0 650.0,150.0 700.0,180.0 C750.0,210.0 800.0,200.0 800.0,200.0 Z"
              fill="url(#indiaGradient)"
              stroke="#E5E7EB"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Gradient for the map fill */}
            <defs>
              <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--fintech-orange-accent))" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(var(--fintech-india-white))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--fintech-green-success))" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Animated Dots */}
            {dotPositions.map((dot, index) => (
              <motion.circle
                key={index}
                cx={dot.x}
                cy={dot.y}
                r="10"
                fill={dot.color.replace('bg-', 'hsl(var(--')) + ')'} // Convert Tailwind class to HSL
                variants={dotVariants}
                initial="initial"
                animate={["animate", "pulse"]}
                custom={index}
              />
            ))}

            {/* Animated Popup */}
            <motion.foreignObject
              x="350" y="400" width="250" height="100"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="bg-white p-4 rounded-lg shadow-xl text-left w-full h-full flex flex-col justify-center">
                <p className="text-sm font-semibold text-fintech-text-dark">Arpit Bhatia</p>
                <p className="text-xs text-fintech-text-muted">from <span className="font-medium text-fintech-blue-accent">Gwalior</span> just got</p>
                <p className="text-lg font-bold text-fintech-orange-accent flex items-center mt-1">
                  <IndianRupee className="h-4 w-4 mr-1" /> 27,000
                </p>
              </Card>
            </motion.foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MadeForIndiansSection;