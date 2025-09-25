"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface CircularProgressBarProps {
  percentage: number;
  progressClassName: string; // e.g., 'stroke-fintech-blue-accent'
  size?: number;
  strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  progressClassName,
  size = 60,
  strokeWidth = 6,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        stroke="#E5E7EB" // Using the new border color
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Progress circle */}
      <circle
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className={cn("transition-all duration-500 ease-in-out", progressClassName)}
      />
      {/* Text for percentage - removed rotate-90 to keep it upright relative to the viewport */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="transform rotate-90" // Counter-rotate the text to keep it upright
        fill="currentColor" // Use current color for text
        fontSize="14"
        fontWeight="bold"
      >
        {`${Math.round(percentage)}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;