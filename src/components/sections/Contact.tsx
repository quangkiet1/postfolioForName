'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Send, Mail, MapPin, CheckCircle2, ArrowUpRight, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF3B30', '#ffffff', '#222222'],
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#111111]/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large High-Impact Banner Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest bg-[#FF3B30]/10 px-4 py-1.5 rounded-full border border-[#FF3B30]/30 inline-block">
            Get In Touch //
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold text-white uppercase tracking-tight leading-none">
            LET&apos;S BUILD SOMETHING <br />
            <span className="text-gradient-red">AMAZING TOGETHER.</span>
          </h2>

          <p className="text-lg text-[#B5B5B5] max-w-xl mx-auto">
            Have a project in mind, a freelance inquiry, or just want to discuss high-level engineering? Drop a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#181818] border border-white/10 p-8 rounded-3xl glass-panel space-y-6">
              <h3 className="text-2xl font-heading text-white uppercase tracking-wide">
                DIRECT CHANNELS
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#FF3B30] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF3B30]/10 text-[#FF3B30] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#B5B5B5] uppercase font-mono">Email Address</div>
                    <div className="text-base text-white font-bold group-hover:text-[#FF3B30] transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3B30]/10 text-[#FF3B30] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#B5B5B5] uppercase font-mono">Location</div>
                    <div className="text-base text-white font-bold">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3B30]/10 text-[#FF3B30] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#B5B5B5] uppercase font-mono">Response Time</div>
                    <div className="text-base text-white font-bold">
                      Under 12 Hours Guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#181818] border border-white/10 p-8 sm:p-10 rounded-3xl glass-panel shadow-2xl"
          >
            {isSuccess ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#FF3B30]/20 text-[#FF3B30] flex items-center justify-center mx-auto border border-[#FF3B30]">
                  <CheckCircle2 className="w-12 h-12 animate-bounce" />
                </div>
                <h3 className="text-4xl font-heading text-white uppercase">MESSAGE TRANSMITTED!</h3>
                <p className="text-[#B5B5B5] max-w-md mx-auto">
                  Thank you, {name}. Your inquiry has been received. I will review your message and reply promptly.
                </p>
                <Button variant="secondary" size="md" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elon Musk"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#444] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. elon@x.com"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#444] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Web Development Inquiry / Retainer"
                    className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#444] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, and goals..."
                    className="w-full bg-[#111111] border border-white/10 rounded-xl p-4 text-white placeholder-[#444] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                >
                  {isSubmitting ? 'Transmitting Message...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
