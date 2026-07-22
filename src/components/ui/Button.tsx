'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  magnetic?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      magnetic = true,
      children,
      className,
      onClick,
      onMouseEnter,
      ...props
    },
    ref
  ) => {
    const { playHoverSound, playClickSound } = useSoundEffects();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      playHoverSound();
      if (onMouseEnter) onMouseEnter(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClickSound();
      if (onClick) onClick(e);
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
      md: 'px-6 py-3.5 text-sm font-semibold tracking-wider',
      lg: 'px-8 py-4 text-base font-bold tracking-widest',
    };

    const variantClasses = {
      primary:
        'bg-[#FF3B30] text-white shadow-[0_0_25px_rgba(255,59,48,0.4)] hover:bg-[#E03126] hover:shadow-[0_0_35px_rgba(255,59,48,0.7)] border border-transparent',
      secondary:
        'bg-[#181818] text-white border border-white/10 hover:border-[#FF3B30]/50 hover:bg-[#222222] hover:text-[#FF3B30]',
      outline:
        'bg-transparent text-white border border-white/20 hover:border-[#FF3B30] hover:text-[#FF3B30] hover:bg-[#FF3B30]/10',
      ghost:
        'bg-transparent text-[#B5B5B5] hover:text-white hover:bg-white/5',
    };

    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full uppercase transition-all duration-300 cursor-pointer overflow-hidden group select-none active:scale-95',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        style={{
          transform: magnetic ? `translate3d(${position.x}px, ${position.y}px, 0px)` : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === 'left' && (
            <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
