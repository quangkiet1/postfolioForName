import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <div className={cn('flex flex-col mb-12 sm:mb-16', alignmentClasses[align], className)}>
      <div className="inline-flex items-center gap-3 mb-3">
        <span className="text-[#FF3B30] text-sm sm:text-base font-bold font-mono tracking-widest uppercase">
          {index} //
        </span>
        <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#FF3B30] to-transparent" />
      </div>

      <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading uppercase tracking-wide text-white leading-none">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#B5B5B5] max-w-2xl font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
