'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SERVICES } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Palette, Code2, Zap, LayoutDashboard, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onOpenHireModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenHireModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-7 h-7 text-[#FF3B30]" />;
      case 'Code2':
        return <Code2 className="w-7 h-7 text-[#FF3B30]" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#FF3B30]" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-7 h-7 text-[#FF3B30]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-7 h-7 text-[#FF3B30]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#FF3B30]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-[#111111]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          title="SPECIALIZED SERVICES"
          subtitle="End-to-end digital solutions designed to elevate your brand presence and drive user conversion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                enableTilt={true}
                glowOnHover={true}
                className="h-full flex flex-col justify-between p-8 space-y-6 group cursor-pointer"
                onClick={onOpenHireModal}
              >
                <div className="space-y-4">
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center group-hover:border-[#FF3B30] group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest bg-[#FF3B30]/10 px-3 py-1 rounded-full border border-[#FF3B30]/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-heading text-white uppercase tracking-wide group-hover:text-[#FF3B30] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#B5B5B5] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="p-3 rounded-xl bg-[#111111] border border-white/5 text-xs text-[#B5B5B5] font-mono leading-relaxed">
                    <span className="text-[#FF3B30] font-bold">KEY BENCHMARK: </span>
                    {service.highlight}
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block">
                    Included Deliverables //
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#B5B5B5]">
                        <CheckCircle2 className="w-3 h-3 text-[#FF3B30] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
