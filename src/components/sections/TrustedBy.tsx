'use client';

import React from 'react';
import { TRUSTED_LOGOS } from '@/data/portfolioData';

export const TrustedBy: React.FC = () => {
  // Duplicate array for infinite seamless looping
  const marqueeItems = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section className="py-12 bg-[#111111]/80 border-y border-white/10 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest">
          Trusted By Industry Pioneers & Global Brands //
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#181818]/60 border border-white/5 hover:border-[#FF3B30]/40 transition-colors duration-300 group cursor-default select-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              <span className="font-heading text-2xl sm:text-3xl text-[#B5B5B5] group-hover:text-white transition-colors uppercase tracking-wider">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest pl-2 border-l border-white/10">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
