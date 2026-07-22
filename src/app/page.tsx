'use client';

import React, { useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { Project } from '@/types';

// Layout Components
import { BackgroundCanvas } from '@/components/layout/BackgroundCanvas';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Section Components
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

// Modal Components
import { ProjectModal } from '@/components/modals/ProjectModal';
import { ResumeModal } from '@/components/modals/ResumeModal';
import { HireModal } from '@/components/modals/HireModal';

export default function Home() {
  // Initialize smooth scroll Lenis
  useLenis();

  // Modal State Management
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState<boolean>(false);

  return (
    <div className="relative bg-[#0B0B0B] text-white min-h-screen selection:bg-[#FF3B30] selection:text-white">
      {/* Background Interactive Layer */}
      <BackgroundCanvas />

      {/* Custom Interactive Follower Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenHireModal={() => setIsHireModalOpen(true)} />

      {/* Page Main Sections */}
      <main className="relative z-10">
        <Hero
          onOpenHireModal={() => setIsHireModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        <TrustedBy />

        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        <Services onOpenHireModal={() => setIsHireModalOpen(true)} />

        <Skills />

        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        <WorkProcess />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <HireModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}
