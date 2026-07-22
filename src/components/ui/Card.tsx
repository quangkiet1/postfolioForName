'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  enableTilt?: boolean;
  glowOnHover?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  enableTilt = true,
  glowOnHover = true,
  children,
  className,
  onMouseEnter,
  ...props
}) => {
  const { playHoverSound } = useSoundEffects();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    playHoverSound();
    if (onMouseEnter) onMouseEnter(e);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative bg-[#181818] border border-white/10 rounded-2xl p-6 transition-all duration-300',
        glowOnHover && 'hover:border-[#FF3B30]/40 hover:shadow-[0_0_35px_rgba(255,59,48,0.15)]',
        className
      )}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : undefined,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </div>
  );
};
