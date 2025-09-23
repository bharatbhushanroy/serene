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

      {/* High-Tech City Skyline SVG */}
      <div className="relative w-full h-auto overflow-hidden mt-4 z-0">
        <svg
          viewBox="0 0 1400 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[100px]"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--fintech-dark-bg-lighter))" />
              <stop offset="100%" stopColor="hsl(var(--fintech-main-bg))" />
            </linearGradient>
            <filter id="skylineGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset dx="0" dy="0" result="offsetBlur" />
              <feFlood floodColor="hsl(var(--fintech-blue-accent))" floodOpacity="0.7" result="floodColor" />
              <feComposite in="floodColor" in2="offsetBlur" operator="in" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect x="0" y="150" width="1400" height="50" fill="url(#skylineGradient)" />

          <g fill="hsl(var(--fintech-text-dark))" filter="url(#skylineGlow)">
            {/* Modern Skyscraper 1 */}
            <rect x="50" y="70" width="40" height="80" />
            <rect x="55" y="75" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="65" y="75" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="75" y="75" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="85" y="75" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="55" y="90" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="65" y="90" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="75" y="90" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="85" y="90" width="5" height="10" fill="hsl(var(--fintech-main-bg))" />

            {/* Futuristic Tower 1 */}
            <path d="M120 150 L130 90 L140 80 L150 90 L160 80 L170 90 L180 150 Z" />
            <circle cx="150" cy="75" r="5" fill="hsl(var(--fintech-blue-accent))" />

            {/* Sleek Building 1 */}
            <rect x="200" y="100" width="30" height="50" />
            <rect x="205" y="105" width="5" height="5" fill="hsl(var(--fintech-main-bg))" />
            <rect x="215" y="105" width="5" height="5" fill="hsl(var(--fintech-main-bg))" />
            <rect x="205" y="115" width="5" height="5" fill="hsl(var(--fintech-main-bg))" />
            <rect x="215" y="115" width="5" height="5" fill="hsl(var(--fintech-main-bg))" />

            {/* Modern Skyscraper 2 (taller) */}
            <rect x="250" y="50" width="50" height="100" />
            <rect x="255" y="55" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="268" y="55" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="281" y="55" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="255" y="70" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="268" y="70" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="281" y="70" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="255" y="85" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="268" y="85" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />
            <rect x="281" y="85" width="8" height="10" fill="hsl(var(--fintech-main-bg))" />

            {/* Futuristic Tower 2 */}
            <path d="M320 150 L330 100 L340 90 L350 100 L360 90 L370 100 L380 150 Z" />
            <circle cx="350" cy="85" r="5" fill="hsl(var(--fintech-blue-accent))" />

            {/* Repeating pattern of high-tech buildings */}
            {Array.from({ length: 10 }).map((_, i) => (
              <g key={i} transform={`translate(${400 + i * 80}, 0)`}>
                <rect x="0" y="100" width="30" height="50" />
                <rect x="5" y="105" width="5" height="5" fill="hsl(var(--fintech-main-bg))" />
                <rect x="15" y="105" width="5" height="5" fill="hsl(var(--fintech-main-bg))" />
                <rect x="0" y="80" width="20" height="20" />
                <path d="M25 150 L30 120 L35 150 Z" />
                <circle cx="30" cy="115" r="3" fill="hsl(var(--fintech-blue-accent))" />
              </g>
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default MadeInBharatSection;