'use client';

import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DribbbleIcon, TwitterIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0B0B] border-t border-white/10 pt-20 pb-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] animate-ping" />
              <span className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider">
                {PERSONAL_INFO.status}
              </span>
            </div>

            <h3 className="text-4xl sm:text-6xl font-heading uppercase text-white tracking-wide leading-none">
              LET&apos;S CREATE SOMETHING <br />
              <span className="text-[#FF3B30]">LEGENDARY TOGETHER.</span>
            </h3>

            <p className="text-[#B5B5B5] max-w-md text-base leading-relaxed">
              Available for high-impact frontend architecture, UI/UX design retainers, and award-winning web builds worldwide.
            </p>
          </div>

          {/* Right Column: Links & Time */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Navigation */}
            <div>
              <h4 className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest mb-4">
                Navigation //
              </h4>
              <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
                {['#hero', '#about', '#services', '#skills', '#projects', '#process', '#contact'].map((href) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="hover:text-white hover:translate-x-1 transition-all inline-block capitalize"
                    >
                      {href.replace('#', '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest mb-4">
                Socials //
              </h4>
              <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
                <li>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF3B30] flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF3B30] flex items-center gap-2 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF3B30] flex items-center gap-2 transition-colors"
                  >
                    <DribbbleIcon className="w-4 h-4" /> Behance
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF3B30] flex items-center gap-2 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" /> Twitter / X
                  </a>
                </li>
              </ul>
            </div>

            {/* Live Clock */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest mb-4">
                Local Time //
              </h4>
              <div className="bg-[#181818] border border-white/10 p-4 rounded-xl space-y-1">
                <div className="text-xl font-mono text-white font-bold">{time || '12:00:00 PM'}</div>
                <div className="text-xs text-[#B5B5B5] uppercase font-mono tracking-wider">
                  San Francisco, CA (PST)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B5B5B5]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} JOHN DOE. All Rights Reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#FF3B30] fill-[#FF3B30]" /> in Next.js 15
            </span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#FF3B30] transition-colors cursor-pointer group"
          >
            <span className="uppercase font-mono tracking-wider text-xs">Back To Top</span>
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-white/10 flex items-center justify-center group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
