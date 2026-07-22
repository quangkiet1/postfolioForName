'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { METRICS, PERSONAL_INFO } from '@/data/portfolioData';
import { Download, Award, CheckCircle } from 'lucide-react';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          title="ABOUT THE ARCHITECT"
          subtitle="Combining technical rigor with artistic vision to create modern digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-panel p-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#181818]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                  alt="John Doe About Portrait"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-70" />
              </div>

              {/* Award Badge Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#181818]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF3B30]/20 text-[#FF3B30] flex items-center justify-center border border-[#FF3B30]/40">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-heading text-lg text-white uppercase">12x HONORS</h5>
                    <p className="text-xs text-[#B5B5B5]">Awwwards & FWA Winner</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Bio & Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-heading text-white uppercase tracking-wide leading-tight">
                CRAFTING HIGH-PERFORMANCE WEBSITES FOR <br />
                <span className="text-[#FF3B30]">AMBITIOUS BRANDS WORLDWIDE.</span>
              </h3>

              <p className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Strict Next.js 15 & React 19 Architecture',
                '60 FPS Framer Motion Animations',
                'Lighthouse 95+ Score Guarantee',
                'WCAG 2.1 AA Accessibility Compliant',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-white">
                  <CheckCircle className="w-4 h-4 text-[#FF3B30] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#181818] p-5 rounded-2xl border border-white/5 hover:border-[#FF3B30]/40 transition-colors group"
                >
                  <div className="font-heading text-4xl sm:text-5xl text-white group-hover:text-[#FF3B30] transition-colors leading-none">
                    {metric.value}
                    <span className="text-[#FF3B30]">{metric.suffix}</span>
                  </div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider mt-2">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#B5B5B5] mt-1 leading-snug">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume CTA Button */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
                onClick={onOpenResumeModal}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
