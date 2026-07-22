'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUpRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DribbbleIcon, TwitterIcon } from '@/components/ui/Icons';

interface HeroProps {
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal, onOpenResumeModal }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-10"
    >
      {/* Behind image huge 5% opacity watermark typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h1 className="text-[18vw] font-heading font-extrabold uppercase text-white/[0.04] tracking-widest leading-none whitespace-nowrap">
          PORTFOLIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181818] border border-white/10 shadow-[0_0_20px_rgba(255,59,48,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-pulse" />
              <span className="text-xs font-mono text-[#B5B5B5] uppercase tracking-widest">
                Available for Q3/Q4 Projects
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="block font-mono text-base text-[#FF3B30] uppercase tracking-widest">
                Hello, I&apos;m
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-white uppercase tracking-tight leading-[0.9]">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#FF3B30] uppercase tracking-wide">
                {PERSONAL_INFO.title.split('&')[0]}
              </h2>
            </div>

            {/* Subtitle Body */}
            <p className="text-lg sm:text-xl text-[#B5B5B5] max-w-xl font-body leading-relaxed">
              {PERSONAL_INFO.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
                onClick={onOpenHireModal}
              >
                Hire Me
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
                onClick={onOpenResumeModal}
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6">
              <span className="font-mono text-xs text-[#B5B5B5] uppercase tracking-widest">
                Connect //
              </span>
              <div className="flex items-center gap-4">
                {[
                  { name: 'GitHub', href: PERSONAL_INFO.socials.github, icon: GithubIcon },
                  { name: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: LinkedinIcon },
                  { name: 'Behance', href: PERSONAL_INFO.socials.behance, icon: DribbbleIcon },
                  { name: 'Twitter', href: PERSONAL_INFO.socials.twitter, icon: TwitterIcon },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#181818] border border-white/10 text-[#B5B5B5] hover:text-white hover:border-[#FF3B30] hover:bg-[#FF3B30]/10 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column Portrait Frame with Organic Blob & Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md aspect-square transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Outer Red Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF3B30]/40 to-transparent blur-3xl opacity-70 animate-pulse-glow" />

              {/* Organic Frame Container */}
              <div className="relative w-full h-full p-4 glass-panel rounded-[2.5rem] border border-white/15 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                {/* Blob / Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden organic-blob bg-[#181818]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                    alt="John Doe Senior Frontend Engineer"
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-95 transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark Red Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-[#181818]/90 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl">
                  <span className="w-3 h-3 rounded-full bg-[#FF3B30] animate-ping" />
                  <span className="font-heading text-lg text-white uppercase tracking-wider">
                    3+ YRS EXP
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
