"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // Disable custom cursor on mobile

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if the target or any of its ancestors are interactive
      const isInteractive = target.closest('a, button, [role="button"], [role="link"], .cursor-interactive');
      if (isInteractive) {
        setCursorVariant('interactive');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], [role="link"], .cursor-interactive');
      
      // Only revert to default if not hovering over another interactive element
      if (isInteractive && (!event.relatedTarget || !(event.relatedTarget as HTMLElement).closest('a, button, [role="button"], [role="link"], .cursor-interactive'))) {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOut);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) {
    return null; // Don't render on mobile
  }

  const cursorSize = cursorVariant === 'default' ? 40 : 80; // Base size for the SVG container
  const circleRadius = cursorVariant === 'default' ? 10 : 20; // Radius of individual circles

  const variants = {
    default: {
      width: cursorSize,
      height: cursorSize,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 50,
      },
    },
    interactive: {
      width: cursorSize,
      height: cursorSize,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 50,
      },
    },
  };

  const circleVariants = {
    default: (i: number) => ({
      r: circleRadius,
      cx: cursorSize / 2 + Math.cos(i * Math.PI / 2) * 5,
      cy: cursorSize / 2 + Math.sin(i * Math.PI / 2) * 5,
      fill: 'hsl(var(--fintech-blue-accent))',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 50,
      },
    }),
    interactive: (i: number) => ({
      r: circleRadius * 1.5, // Larger radius
      cx: cursorSize / 2 + Math.cos(i * Math.PI / 2 + Math.PI / 4) * 15, // More spread out
      cy: cursorSize / 2 + Math.sin(i * Math.PI / 2 + Math.PI / 4) * 15,
      fill: 'hsl(var(--fintech-orange-accent))',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 50,
      },
    }),
  };

  return (
    <>
      {/* SVG filter definition - hidden from view */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <motion.div
        className={cn(
          "fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2",
          "hidden md:block" // Ensure it's hidden on small screens
        )}
        variants={variants}
        animate={cursorVariant}
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          mixBlendMode: 'difference', // Apply blend mode to the container
        }}
      >
        <svg className="w-full h-full" style={{ filter: 'url(#goo)' }}>
          <g>
            {[...Array(4)].map((_, i) => (
              <motion.circle
                key={i}
                custom={i}
                variants={circleVariants}
                animate={cursorVariant}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </>
  );
};

export default InteractiveCursor;