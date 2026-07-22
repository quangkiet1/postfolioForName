'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative z-10 bg-[#111111]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          title="CLIENT ENDORSEMENTS"
          subtitle="Feedback from founders, creative directors, and engineering leaders."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main Glass Review Card */}
          <div className="relative bg-[#181818] border border-white/10 p-8 sm:p-12 rounded-3xl glass-panel shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-8 min-h-[380px] flex flex-col justify-between">
            {/* Top Quote Icon & Rating Stars */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 text-[#FF3B30] flex items-center justify-center border border-[#FF3B30]/20">
                <Quote className="w-6 h-6" />
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF3B30] text-[#FF3B30]" />
                ))}
              </div>
            </div>

            {/* Quote Body with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl sm:text-2xl font-body text-white font-medium leading-relaxed italic">
                  &ldquo;{current.content}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {/* Client Avatar */}
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF3B30]"
                  />
                  <div>
                    <h4 className="font-heading text-xl text-white uppercase tracking-wide flex items-center gap-2">
                      {current.name}
                      <ShieldCheck className="w-4 h-4 text-[#FF3B30]" />
                    </h4>
                    <p className="text-xs text-[#B5B5B5] font-mono">
                      {current.role} • <span className="text-white font-semibold">{current.company}</span>
                    </p>
                    <span className="inline-block text-[10px] text-[#FF3B30] bg-[#FF3B30]/10 px-2 py-0.5 rounded-full mt-1 uppercase font-mono">
                      {current.projectType}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#FF3B30]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:border-[#FF3B30] hover:bg-[#FF3B30] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:border-[#FF3B30] hover:bg-[#FF3B30] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
