import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Label: 01 / ABOUT */}
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-6 flex items-center gap-3">
          <span>01 / ABOUT</span>
          <span className="w-12 h-px bg-sky-500/40" />
        </div>

        {/* Large Editorial Heading */}
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter leading-[1.05] max-w-5xl mb-16 uppercase">
          I BUILD<br />
          <span className="text-sky-600">TECHNOLOGY</span><br />
          THAT SOLVES<br />
          REAL PROBLEMS.
        </h2>

        {/* Two-Column Layout (Not inside a card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-200/80">
          
          {/* Left Column: Primary statement & academic profile */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-display font-bold text-2xl sm:text-3xl text-slate-800 leading-snug tracking-tight">
              Learning by engineering practical software, applied AI models, and real-world IoT telemetry.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              I’m Sathasivam S, a B.Tech student at V S B Engineering College with an interest in software development, artificial intelligence, machine learning, IoT and data-driven applications. I enjoy learning by building practical projects and exploring how technology can solve real-world problems.
            </p>
          </div>

          {/* Right Column: Engineering philosophy & aspirations */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I believe true technical mastery comes from building end-to-end solutions rather than merely studying abstract theories. From writing robust Java algorithms to deploying full-stack React dashboards and streaming live sensor telemetry via ESP32 microcontrollers, I enjoy connecting every layer of modern software.
            </p>
            <p>
              Alongside software engineering, I am deeply intrigued by business, product strategy, and sports discipline. I aspire to grow into a versatile engineering contributor who can collaborate effectively in high-velocity teams and eventually pioneer impactful technology ventures.
            </p>
          </div>

        </div>

        {/* Editorial Metrics & Standing (Clean typography, thin separators, no boxy cards) */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] block mb-1.5 font-semibold">
              ACADEMIC DEGREE
            </span>
            <span className="text-base font-display font-bold text-slate-900 block">
              B.Tech Computer Science
            </span>
            <span className="text-slate-600 text-xs mt-0.5 block">
              2024 &mdash; 2028 (3rd Year)
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] block mb-1.5 font-semibold">
              ACADEMIC STANDING
            </span>
            <span className="text-base font-display font-bold text-sky-600 block">
              8.0 CGPA
            </span>
            <span className="text-slate-600 text-xs mt-0.5 block">
              Anna University Affiliated
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] block mb-1.5 font-semibold">
              COLLEGE
            </span>
            <span className="text-base font-display font-bold text-slate-900 block">
              V S B Engineering College
            </span>
            <span className="text-slate-600 text-xs mt-0.5 block">
              Karur, Tamil Nadu
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] block mb-1.5 font-semibold">
              CURRENT SEMESTER
            </span>
            <span className="text-base font-display font-bold text-slate-900 block">
              5th Semester (Active)
            </span>
            <span className="text-slate-600 text-xs mt-0.5 block">
              OS &bull; Networks &bull; Applied AI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
