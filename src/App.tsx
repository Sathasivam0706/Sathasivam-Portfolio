import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalHighlights } from './components/PersonalHighlights';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { CodingJourney } from './components/CodingJourney';
import { BeyondTech } from './components/BeyondTech';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900 font-sans relative">
      {/* Subtle Custom Cursor for desktop */}
      <CustomCursor />

      {/* Sticky Minimal Light Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Continuous Editorial Showcase */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <PersonalHighlights />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <CodingJourney />
        <BeyondTech />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Minimal Light Footer */}
      <Footer />

      {/* Technical Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
