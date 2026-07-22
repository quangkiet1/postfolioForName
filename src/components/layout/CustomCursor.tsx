'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Red Cursor Glow Spotlight */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-30 transition-opacity duration-300 hidden md:block"
        style={{
          transform: `translate3d(${mousePosition.x - 250}px, ${mousePosition.y - 250}px, 0)`,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 59, 48, 0.12) 0%, rgba(255, 59, 48, 0) 70%)',
        }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF3B30] rounded-full pointer-events-none z-50 hidden md:block shadow-[0_0_10px_#FF3B30]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#FF3B30]/60 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(255, 59, 48, 0.2)' : 'rgba(255, 59, 48, 0)',
          borderColor: isHovered ? '#FF3B30' : 'rgba(255, 59, 48, 0.5)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
};
