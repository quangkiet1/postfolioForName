'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ_ITEMS } from '@/data/portfolioData';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="07"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Clear answers on process, technical stack, pricing models, and project timelines."
          align="left"
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden glass-panel transition-colors duration-300 hover:border-[#FF3B30]/40"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-heading text-white uppercase tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#FF3B30] border-[#FF3B30] rotate-180' : ''
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#B5B5B5] leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
