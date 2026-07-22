'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Download, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    // Generate a quick downloadable blob text resume placeholder
    const resumeText = `
==================================================
JOHN DOE - SENIOR FRONTEND ENGINEER & UI/UX DESIGNER
Contact: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.socials.github} | LinkedIn: ${PERSONAL_INFO.socials.linkedin}
==================================================

SUMMARY:
Award-winning Senior Frontend Engineer with 3+ years of experience building high-performance web applications in Next.js 15, React 19, TypeScript, and Framer Motion. Recognized with 12+ Awwwards and Honors for interactive web craftsmanship.

EXPERIENCE:
- Lead Frontend Engineer @ Lumina AI (2024 - Present)
  Architected real-time canvas canvas state engine in Next.js 15 & WebGL. Reduced page load times by 65%.
- Senior Creative Developer @ Hyperion Motion Labs (2022 - 2024)
  Crafted 15+ award-winning marketing sites using GSAP, Lenis, and Tailwind CSS.
- UI/UX Engineer Consultant @ Freelance (2021 - 2022)
  Delivered high-ticket design systems and frontend dashboards for 20+ global clients.

SKILLS:
Frontend: React 19, Next.js 15, TypeScript, Tailwind CSS, WebGL, HTML5/CSS3
Animation: Framer Motion, GSAP, Lenis Smooth Scroll, Canvas API
Backend: Node.js, Express, PostgreSQL, Prisma, MongoDB
Design: Figma, Design Tokens, User Research, Wireframing
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'JOHN_DOE_RESUME_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="DIGITAL RESUME & CV">
      <div className="space-y-8">
        {/* Header summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-[#181818] rounded-2xl border border-white/10">
          <div>
            <h4 className="text-2xl font-heading text-white">{PERSONAL_INFO.name}</h4>
            <p className="text-[#FF3B30] text-sm font-semibold">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-[#B5B5B5] mt-1">{PERSONAL_INFO.location}</p>
          </div>
          <Button
            variant="primary"
            size="md"
            icon={<Download className="w-4 h-4" />}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h5 className="font-heading text-xl text-white uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#FF3B30]" /> Professional Experience
          </h5>

          <div className="space-y-4">
            <div className="p-5 bg-[#181818]/60 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-base">Lead Frontend Engineer</span>
                <span className="text-xs font-mono text-[#FF3B30] bg-[#FF3B30]/10 px-2.5 py-1 rounded-full">
                  2024 - PRESENT
                </span>
              </div>
              <p className="text-xs text-[#B5B5B5] font-mono">Lumina AI Inc. • San Francisco, CA</p>
              <p className="text-sm text-[#B5B5B5] leading-relaxed">
                Architected real-time canvas canvas state engine in Next.js 15 & WebGL. Reduced latency by 65% and scaled platform to 150K+ active creators.
              </p>
            </div>

            <div className="p-5 bg-[#181818]/60 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-base">Senior Creative Developer</span>
                <span className="text-xs font-mono text-[#B5B5B5] bg-white/5 px-2.5 py-1 rounded-full">
                  2022 - 2024
                </span>
              </div>
              <p className="text-xs text-[#B5B5B5] font-mono">Hyperion Motion Labs • Remote</p>
              <p className="text-sm text-[#B5B5B5] leading-relaxed">
                Crafted 15+ award-winning marketing sites using GSAP, Lenis, and Tailwind CSS. Won 8 Awwwards Honorable Mentions.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Honors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <h5 className="font-heading text-lg text-white uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#FF3B30]" /> Education
            </h5>
            <div className="p-4 bg-[#181818]/40 rounded-xl border border-white/5 space-y-1">
              <div className="text-white font-bold text-sm">B.S. Computer Science</div>
              <div className="text-xs text-[#B5B5B5]">University of California, Berkeley</div>
              <div className="text-xs font-mono text-[#FF3B30]">2018 - 2022</div>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-heading text-lg text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF3B30]" /> Recognition
            </h5>
            <div className="p-4 bg-[#181818]/40 rounded-xl border border-white/5 space-y-1">
              <div className="text-white font-bold text-sm">12x Awwwards & FWA Honors</div>
              <div className="text-xs text-[#B5B5B5]">Site of the Day, Developer Award</div>
              <div className="text-xs font-mono text-[#FF3B30]">2023 - 2026</div>
            </div>
          </div>
        </div>

        {/* External Social Profiles */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-[#B5B5B5]">
          <span>Verify Github & LinkedIn profiles:</span>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF3B30] flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF3B30] flex items-center gap-1"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};
