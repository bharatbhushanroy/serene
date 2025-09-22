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

      {/* Indian Skyline SVG - Replicated from image */}
      <div className="relative w-full h-auto overflow-hidden mt-4 z-0">
        <svg
          viewBox="0 0 1400 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[100px]" // Reduced max height for skyline
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#555555" /> {/* Lighter gradient for skyline base */}
              <stop offset="100%" stopColor="#333333" />
            </linearGradient>
            {/* Filter for a subtle blue glow on the skyline */}
            <filter id="skylineGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset dx="0" dy="0" result="offsetBlur" />
              <feFlood floodColor="#ADD8E6" floodOpacity="0.7" result="floodColor" /> {/* Light blue glow */}
              <feComposite in="floodColor" in2="offsetBlur" operator="in" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Base ground line */}
          <rect x="0" y="150" width="1400" height="50" fill="url(#skylineGradient)" />

          {/* Detailed Skyline elements - Replicated from image */}
          <g fill="#C0C0C0" filter="url(#skylineGlow)"> {/* Brighter fill and apply glow filter */}
            {/* Group 1: Leftmost structures (e.g., some mosque/palace like structures) */}
            <path d="M0 150 L0 100 L10 90 L20 100 L30 90 L40 100 L40 150 Z" /> {/* Generic building 1 */}
            <circle cx="20" cy="85" r="5" />
            <path d="M50 150 L50 110 L60 100 L70 110 L70 150 Z" /> {/* Generic building 2 */}
            <circle cx="60" cy="95" r="7" />
            <path d="M80 150 L80 120 L90 110 L100 120 L100 150 Z" /> {/* Generic building 3 */}
            <circle cx="90" cy="105" r="6" />

            {/* Taj Mahal like structure */}
            <path d="M120 150 L120 100 L130 80 L140 100 L150 80 L160 100 L170 80 L180 100 L190 150 Z" />
            <circle cx="150" cy="75" r="15" /> {/* Main Dome */}
            <rect x="125" y="110" width="5" height="40" /> {/* Minaret 1 */}
            <rect x="180" y="110" width="5" height="40" /> {/* Minaret 2 */}
            <rect x="135" y="120" width="5" height="30" />
            <rect x="170" y="120" width="5" height="30" />

            {/* More generic buildings */}
            <path d="M200 150 L200 110 L210 100 L220 110 L220 150 Z" />
            <circle cx="210" cy="95" r="7" />
            <path d="M230 150 L230 120 L240 110 L250 120 L250 150 Z" />
            <circle cx="240" cy="105" r="6" />

            {/* India Gate like structure */}
            <path d="M270 150 L270 100 C270 80 290 80 290 100 L290 150 Z" />
            <path d="M290 150 L290 100 C290 80 310 80 310 100 L310 150 Z" />
            <path d="M310 150 L310 100 C310 80 330 80 330 100 L330 150 Z" />
            <rect x="270" y="90" width="60" height="10" />
            <rect x="270" y="150" width="60" height="10" /> {/* Base */}
            <rect x="275" y="110" width="5" height="30" />
            <rect x="285" y="110" width="5" height="30" />
            <rect x="295" y="110" width="5" height="30" />
            <rect x="305" y="110" width="5" height="30" />
            <rect x="315" y="110" width="5" height="30" />

            {/* Qutub Minar like structure */}
            <path d="M350 150 L355 80 L360 150 Z" />
            <circle cx="355" cy="75" r="5" />

            {/* Charminar like structure */}
            <path d="M380 150 L385 90 L390 150 Z" />
            <path d="M395 150 L400 90 L405 150 Z" />
            <path d="M410 150 L415 90 L420 150 Z" />
            <path d="M425 150 L430 90 L435 150 Z" />
            <rect x="380" y="130" width="55" height="20" />

            {/* Lotus Temple like structure */}
            <path d="M450 150 L460 120 C465 110 475 110 480 120 L490 150 Z" />
            <path d="M490 150 L500 120 C505 110 515 110 520 120 L530 150 Z" />
            <path d="M530 150 L540 120 C545 110 555 110 560 120 L570 150 Z" />
            <circle cx="510" cy="110" r="15" />

            {/* Gateway of India like structure */}
            <path d="M590 150 L590 100 C590 80 610 80 610 100 L610 150 Z" />
            <path d="M610 150 L610 100 C610 80 630 80 630 100 L630 150 Z" />
            <path d="M630 150 L630 100 C630 80 650 80 650 100 L650 150 Z" />
            <rect x="590" y="90" width="60" height="10" />
            <rect x="590" y="150" width="60" height="10" /> {/* Base */}
            <rect x="595" y="110" width="5" height="30" />
            <rect x="605" y="110" width="5" height="30" />
            <rect x="615" y="110" width="5" height="30" />
            <rect x="625" y="110" width="5" height="30" />
            <rect x="635" y="110" width="5" height="30" />

            {/* Repeating pattern to fill the width, adjusted for density */}
            {Array.from({ length: 10 }).map((_, i) => (
              <g key={i} transform={`translate(${660 + i * 70}, 0)`}>
                <path d="M0 150 L0 110 L10 100 L20 110 L20 150 Z" />
                <circle cx="10" cy="95" r="7" />
                <path d="M30 150 L30 120 L40 110 L50 120 L50 150 Z" />
                <circle cx="40" cy="105" r="6" />
              </g>
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default MadeInBharatSection;