import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
  color: string; // Tailwind class for color, e.g., 'text-qicky-blue'
  size?: number;
  strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  color,
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
        stroke="#3B3B6B" // A darker shade for the background of the progress bar
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Progress circle */}
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="transition-all duration-500 ease-in-out"
      />
      {/* Text for percentage */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="transform rotate-90" // Rotate text back to normal
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