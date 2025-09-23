"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MadeInBharatSection = () => {
  return (
    <section className="relative w-full py-8 text-white overflow-hidden
                    bg-fintech-main-bg"> {/* Vibrant dark gradient background */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2 text-white"> {/* White text for "Made In" */}
          Made In <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">Bharat</span> {/* Vibrant gradient for "Bharat" */}
        </h2>

        {/* Indian Flag */}
        <div className="flex justify-center mb-4">
          <svg width="60" height="40" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="shadow-lg rounded-md filter drop-shadow-lg"> {/* Added drop-shadow for flag */}
            {/* Saffron Stripe */}
            <rect x="0" y="0" width="120" height="26.67" fill="#FF9933"/>
            {/* White Stripe */}
            <rect x="0" y="26.67" width="120" height="26.66" fill="#FFFFFF"/>
            {/* Green Stripe */}
            <rect x="0" y="53.33" width="120" height="26.67" fill="#138808"/>

            {/* Ashoka Chakra */}
            <circle cx="60" cy="40" r="10" fill="#000080"/>
            {/* Spokes of Ashoka Chakra */}
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="60"
                y1="40"
                x2={60 + 10 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={40 + 10 * Math.sin((i * 15 * Math.PI) / 180)}
                stroke="#000080"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Removed the entire SVG block for the skyline structures */}
    </section>
  );
};

export default MadeInBharatSection;