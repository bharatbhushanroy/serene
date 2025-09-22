"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface QickyLogoProps {
  className?: string; // For additional styling on the container
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Predefined sizes for scaling
}

const QickyLogo: React.FC<QickyLogoProps> = ({ className, size = 'md' }) => {
  let baseTextSizeClass = 'text-base'; // Default base size for 'em' units

  switch (size) {
    case 'sm':
      baseTextSizeClass = 'text-sm'; // Smaller base font size
      break;
    case 'lg':
      baseTextSizeClass = 'text-lg'; // Larger base font size
      break;
    case 'xl':
      baseTextSizeClass = 'text-xl'; // Even larger base font size
      break;
    case 'md': // Default
    default:
      baseTextSizeClass = 'text-base'; // Default base font size
      break;
  }

  return (
    <div className={cn("flex items-center space-x-[0.25em]", baseTextSizeClass, className)}>
      {/* Icon part */}
      <div className="relative w-[2em] h-[2em] flex items-center justify-center">
        {/* Blob background SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--fintech-button-primary-gradient-start))" />
              <stop offset="100%" stopColor="hsl(var(--fintech-button-primary-gradient-end))" />
            </linearGradient>
          </defs>
          {/* This path creates the organic blob shape */}
          <path d="M60.5 1.5C75.5 1.5 90.5 11.5 98.5 28.5C106.5 45.5 107.5 67.5 97.5 81.5C87.5 95.5 67.5 99.5 49.5 99.5C31.5 99.5 14.5 94.5 5.5 79.5C-3.5 64.5 -0.5 40.5 8.5 24.5C17.5 8.5 45.5 -3.5 60.5 1.5Z" fill="url(#blobGradient)"/>
        </svg>
        {/* Dark square with 'Q' */}
        <div className="relative z-10 w-[1.5em] h-[1.5em] bg-fintech-dark-bg-lighter rounded-md flex items-center justify-center">
          <span className="font-bold text-white text-[0.8em]">Q</span>
        </div>
      </div>

      {/* Text part */}
      <span className="text-[1.5em] font-bold">
        <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-gradient-purple-start text-transparent bg-clip-text">Qic</span>
        <span className="bg-gradient-to-r from-fintech-gradient-purple-start to-fintech-gradient-pink-start text-transparent bg-clip-text">ky</span>
      </span>
    </div>
  );
};

export default QickyLogo;