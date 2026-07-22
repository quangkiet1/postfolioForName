'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, Eye } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web App', 'Dashboard', 'E-Commerce', 'Landing Page', 'UI/UX'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#111111]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          title="FEATURED WORKS"
          subtitle="Editorial showcase of selected digital products, web apps, and interactive experiences."
        />

        {/* Filter Tabs */}
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

        {/* Magazine Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div className="relative bg-[#181818] border border-white/10 rounded-3xl overflow-hidden glass-panel p-4 transition-all duration-500 hover:border-[#FF3B30]/50 hover:shadow-[0_0_40px_rgba(255,59,48,0.2)]">
                  {/* Image Container with Zoom & Overlay */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#111111]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter contrast-105 transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Dark Red Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <Badge variant="red">{project.category}</Badge>
                      <span className="text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick View Interactive Icon Center Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      <div className="w-16 h-16 rounded-full bg-[#FF3B30] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,59,48,0.8)] scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-7 h-7" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info Section */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-heading text-white uppercase tracking-wide group-hover:text-[#FF3B30] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#B5B5B5] font-mono mt-1">{project.subtitle}</p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center group-hover:bg-[#FF3B30] group-hover:border-[#FF3B30] text-white transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <p className="text-sm text-[#B5B5B5] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-white/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
