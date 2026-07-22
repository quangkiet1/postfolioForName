'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SKILLS } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Atom, Globe, FileCode, Layers, Sparkles, Server, Cpu, Database, HardDrive, Workflow, Activity } from 'lucide-react';
import { FigmaIcon } from '@/components/ui/Icons';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Animation & Styling', 'Design & Tools'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-[#FF3B30]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#FF3B30]" />;
      case 'FileCode':
        return <FileCode className="w-6 h-6 text-[#FF3B30]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FF3B30]" />;
      case 'Motion':
        return <Activity className="w-6 h-6 text-[#FF3B30]" />;
      case 'Sparkle':
        return <Sparkles className="w-6 h-6 text-[#FF3B30]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#FF3B30]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF3B30]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#FF3B30]" />;
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-[#FF3B30]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#FF3B30]" />;
      default:
        return <FigmaIcon className="w-6 h-6 text-[#FF3B30]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          title="ENGINEERING MATRIX"
          subtitle="Battle-tested technologies and design systems utilized to engineer high-scale products."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF3B30] text-white shadow-[0_0_20px_rgba(255,59,48,0.4)] border border-[#FF3B30]'
                  : 'bg-[#181818] text-[#B5B5B5] border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid (NO progress bars!) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  enableTilt={true}
                  glowOnHover={true}
                  className="h-full flex flex-col justify-between p-6 space-y-4 group cursor-default"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center group-hover:border-[#FF3B30] group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      {skill.featured && <Badge variant="red">CORE</Badge>}
                    </div>

                    <h4 className="text-xl font-heading text-white uppercase tracking-wide group-hover:text-[#FF3B30] transition-colors">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-[#B5B5B5] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      Category
                    </span>
                    <Badge variant="dark">{skill.category}</Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
