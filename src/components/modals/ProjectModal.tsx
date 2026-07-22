'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-8">
        {/* Project Header Banner Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Badge variant="red">{project.category}</Badge>
            <span className="text-xs font-mono text-white/80 bg-black/60 px-3 py-1 rounded-full border border-white/10">
              YEAR {project.year}
            </span>
          </div>
        </div>

        {/* Overview & Subtitle */}
        <div className="space-y-4">
          <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {project.subtitle}
          </h4>
          <p className="text-[#B5B5B5] text-base sm:text-lg leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Project Key Metrics */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#181818] p-4 rounded-xl border border-white/5 space-y-1">
                <div className="text-2xl sm:text-3xl font-heading text-[#FF3B30]">{stat.value}</div>
                <div className="text-xs text-[#B5B5B5] uppercase font-mono tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h5 className="font-heading text-lg text-white uppercase tracking-wider flex items-center gap-2">
            <Star className="w-4 h-4 text-[#FF3B30]" /> Key Engineering Highlights
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#181818]/60 p-3 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B30] shrink-0" />
                <span className="text-sm text-[#B5B5B5]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <h5 className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest">
            Technologies Used //
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
          {project.liveUrl && (
            <Button
              variant="primary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="secondary"
              size="md"
              icon={<GithubIcon className="w-4 h-4" />}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              Source Code
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
