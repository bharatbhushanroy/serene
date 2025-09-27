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
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) {
    return null; // Don't render on mobile
  }

  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'hsl(var(--fintech-blue-accent))',
      opacity: 0.4,
      scale: 1,
      mixBlendMode: 'normal',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 50,
      },
    },
    interactive: {
      width: 40,
      height: 40,
      backgroundColor: 'hsl(var(--fintech-orange-accent))',
      opacity: 0.6,
      scale: 1.2,
      mixBlendMode: 'difference', // Creates a cool inversion effect
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 50,
      },
    },
  };

  return (
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
      }}
    />
  );
};

export default InteractiveCursor;