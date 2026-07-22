'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<string>('Frontend Development');
  const [selectedBudget, setSelectedBudget] = useState<string>('$5,000 - $10,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const servicesList = ['Web Design', 'Frontend Development', 'Landing Pages', 'Dashboard UI', 'E-commerce', 'UI/UX'];
  const budgetList = ['< $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF3B30', '#ffffff', '#222222'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="LET'S BUILD SOMETHING GREAT">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FF3B30]/20 text-[#FF3B30] flex items-center justify-center mx-auto border border-[#FF3B30]/40">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>
          <h4 className="text-3xl font-heading text-white">INQUIRY RECEIVED!</h4>
          <p className="text-[#B5B5B5] max-w-md mx-auto">
            Thank you for reaching out. I have received your request and will respond within 12 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selector */}
          <div className="space-y-3">
            <label className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest block">
              1. What service do you need? //
            </label>
            <div className="flex flex-wrap gap-2">
              {servicesList.map((service) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    selectedService === service
                      ? 'bg-[#FF3B30] text-white shadow-[0_0_15px_rgba(255,59,48,0.4)] border border-[#FF3B30]'
                      : 'bg-[#181818] text-[#B5B5B5] border border-white/10 hover:border-white/30'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selector */}
          <div className="space-y-3">
            <label className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest block">
              2. Anticipated Budget //
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {budgetList.map((budget) => (
                <button
                  type="button"
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold font-mono transition-all duration-200 text-center ${
                    selectedBudget === budget
                      ? 'bg-[#FF3B30]/20 text-[#FF3B30] border border-[#FF3B30] shadow-[0_0_15px_rgba(255,59,48,0.2)]'
                      : 'bg-[#181818] text-[#B5B5B5] border border-white/10 hover:border-white/30'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
                Your Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@cyberdyne.com"
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#B5B5B5] uppercase tracking-wider block">
              Project Details & Objectives
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project goals, timelines, or reference websites..."
              className="w-full bg-[#181818] border border-white/10 rounded-xl p-4 text-white placeholder-[#555] focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors resize-none"
            />
          </div>

          {/* Submit CTA */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            icon={<Send className="w-4 h-4" />}
          >
            Send Inquiry
          </Button>
        </form>
      )}
    </Modal>
  );
};
