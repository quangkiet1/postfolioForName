import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'red' | 'outline' | 'dark';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'red',
  children,
  className,
  ...props
}) => {
  const variants = {
    red: 'bg-[#FF3B30]/10 text-[#FF3B30] border border-[#FF3B30]/30 shadow-[0_0_12px_rgba(255,59,48,0.2)]',
    outline: 'bg-white/5 text-white border border-white/10 hover:border-white/20',
    dark: 'bg-[#111111] text-[#B5B5B5] border border-white/5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider select-none',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
