"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MadeInBharatSection = () => {
  return (
    <section className="relative w-full py-20 bg-fintech-dark-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-gray-600">
          Made In <span className="text-fintech-orange-accent">Bharat</span>
        </h2>
      </div>

      {/* Indian Skyline SVG */}
      <div className="relative w-full h-auto overflow-hidden mt-10 z-0">
        <svg
          viewBox="0 0 1400 150"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#333333" />
              <stop offset="100%" stopColor="#1A1A1A" />
            </linearGradient>
          </defs>
          {/* Base ground line */}
          <rect x="0" y="100" width="1400" height="50" fill="url(#skylineGradient)" />

          {/* Skyline elements - simplified silhouettes */}
          <g fill="url(#skylineGradient)">
            {/* Taj Mahal like structure */}
            <path d="M200 100 L220 60 L240 100 L260 60 L280 100 L290 80 L300 100 H190 Z" />
            <circle cx="250" cy="55" r="10" /> {/* Dome */}
            <rect x="205" y="70" width="10" height="30" />
            <rect x="265" y="70" width="10" height="30" />

            {/* India Gate like structure */}
            <path d="M400 100 L400 70 C400 50 420 50 420 70 L420 100 Z" />
            <path d="M420 100 L420 70 C420 50 440 50 440 70 L440 100 Z" />
            <path d="M440 100 L440 70 C440 50 460 50 460 70 L460 100 Z" />
            <rect x="400" y="60" width="60" height="10" />
            <rect x="400" y="100" width="60" height="10" />

            {/* Qutub Minar like structure */}
            <path d="M550 100 L555 40 L560 100 Z" />
            <circle cx="555" cy="35" r="5" />

            {/* Charminar like structure */}
            <path d="M700 100 L705 50 L710 100 Z" />
            <path d="M715 100 L720 50 L725 100 Z" />
            <path d="M730 100 L735 50 L740 100 Z" />
            <path d="M745 100 L750 50 L755 100 Z" />
            <rect x="700" y="80" width="55" height="20" />

            {/* Lotus Temple like structure */}
            <path d="M900 100 L910 70 C915 60 925 60 930 70 L940 100 Z" />
            <path d="M940 100 L950 70 C955 60 965 60 970 70 L980 100 Z" />
            <path d="M980 100 L990 70 C995 60 1005 60 1010 70 L1020 100 Z" />
            <circle cx="960" cy="60" r="15" />

            {/* Gateway of India like structure */}
            <path d="M1100 100 L1100 70 C1100 50 1120 50 1120 70 L1120 100 Z" />
            <path d="M1120 100 L1120 70 C1120 50 1140 50 1140 70 L1140 100 Z" />
            <path d="M1140 100 L1140 70 C1140 50 1160 50 1160 70 L1160 100 Z" />
            <rect x="1100" y="60" width="60" height="10" />
            <rect x="1100" y="100" width="60" height="10" />

            {/* Generic domes and minarets */}
            <path d="M50 100 L60 80 C65 70 75 70 80 80 L90 100 Z" />
            <circle cx="70" cy="75" r="8" />

            <path d="M100 100 L110 70 C115 60 125 60 130 70 L140 100 Z" />
            <circle cx="120" cy="65" r="10" />

            <path d="M320 100 L330 80 C335 70 345 70 350 80 L360 100 Z" />
            <circle cx="340" cy="75" r="8" />

            <path d="M600 100 L610 70 C615 60 625 60 630 70 L640 100 Z" />
            <circle cx="620" cy="65" r="10" />

            <path d="M800 100 L810 80 C815 70 825 70 830 80 L840 100 Z" />
            <circle cx="820" cy="75" r="8" />

            <path d="M1050 100 L1060 70 C1065 60 1075 60 1080 70 L1090 100 Z" />
            <circle cx="1070" cy="65" r="10" />

            <path d="M1200 100 L1210 80 C1215 70 1225 70 1230 80 L1240 100 Z" />
            <circle cx="1220" cy="75" r="8" />

            <path d="M1250 100 L1260 70 C1265 60 1275 60 1280 70 L1290 100 Z" />
            <circle cx="1270" cy="65" r="10" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default MadeInBharatSection;