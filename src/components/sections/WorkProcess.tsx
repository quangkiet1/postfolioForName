'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WORK_PROCESS } from '@/data/portfolioData';
import { Compass, Search, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { FigmaIcon } from '@/components/ui/Icons';

export const WorkProcess: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#FF3B30]" />;
      case 'Search':
        return <Search className="w-6 h-6 text-[#FF3B30]" />;
      case 'Figma':
        return <FigmaIcon className="w-6 h-6 text-[#FF3B30]" />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#FF3B30]" />;
      default:
        return <Rocket className="w-6 h-6 text-[#FF3B30]" />;
    }
  };

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          title="WORK PROCESS"
          subtitle="A structured, predictable 5-step methodology that guarantees exceptional execution quality."
        />

        <div className="relative mt-16">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute top-0 bottom-0 left-8 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#FF3B30] via-[#FF3B30]/50 to-transparent z-0 hidden sm:block" />

          <div className="space-y-16 sm:space-y-24 relative z-10">
            {WORK_PROCESS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full sm:w-[calc(50%-3rem)] bg-[#181818] border border-white/10 p-8 rounded-3xl glass-panel space-y-4 hover:border-[#FF3B30]/40 transition-colors shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-4xl text-[#FF3B30] leading-none">
                        STEP {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center">
                        {getStepIcon(step.iconName)}
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading text-white uppercase tracking-wide">
                      {step.title}
                    </h3>

                    <p className="text-xs font-mono text-[#FF3B30] uppercase tracking-wider">
                      {step.subtitle}
                    </p>

                    <p className="text-sm text-[#B5B5B5] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
                        Deliverables //
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#FF3B30]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#111111] border-2 border-[#FF3B30] shadow-[0_0_25px_rgba(255,59,48,0.6)] flex items-center justify-center text-white font-mono font-bold text-lg shrink-0 z-20 hidden sm:flex">
                    {step.step}
                  </div>

                  {/* Spacer Column */}
                  <div className="w-full sm:w-[calc(50%-3rem)] hidden sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
