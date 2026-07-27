'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface NavbarProps {
  onOpenHireModal: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireModal }) => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { soundEnabled, toggleSound } = useSoundEffects();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-4 glass-nav shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="John Doe Portfolio Home"
          >
            <span className="w-9 h-9 rounded-full bg-[#FF3B30] flex items-center justify-center font-heading text-xl text-white font-extrabold shadow-[0_0_20px_rgba(255,59,48,0.6)] group-hover:scale-110 transition-transform duration-300">
              JD
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-white tracking-widest uppercase group-hover:text-[#FF3B30] transition-colors duration-300">
              JOHN DOE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#181818]/60 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#B5B5B5] hover:text-white'
                  }`}
                >
                  {isActive && mounted && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#FF3B30] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-full bg-[#181818] border border-white/10 text-[#B5B5B5] hover:text-white hover:border-[#FF3B30]/50 transition-all duration-300"
              title={soundEnabled ? 'Disable UI Sound Effects' : 'Enable UI Sound Effects'}
              aria-label="Toggle Sound Effects"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#FF3B30] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={onOpenHireModal}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-[#181818] border border-white/10 text-white"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#FF3B30]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#181818] border border-white/10 text-white hover:border-[#FF3B30] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF3B30]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0B0B0B]/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 sm:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-heading text-4xl uppercase text-white hover:text-[#FF3B30] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
