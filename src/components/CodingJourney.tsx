import React from 'react';
import { codingProfiles, personalInfo } from '../data/portfolioData';
import { ArrowRight, Github, Code2 } from 'lucide-react';

export const CodingJourney: React.FC = () => {
  const milestones = [
    {
      step: '01',
      title: 'STARTING WITH BASICS',
      desc: 'Learning programming with Java & Python, mastering foundational syntax, data structures, and algorithmic logic.',
    },
    {
      step: '02',
      title: 'BUILDING REAL PROJECTS',
      desc: 'Moving from syntax to real applications, creating full-stack web platforms with React, Node.js, and databases.',
    },
    {
      step: '03',
      title: 'CONNECTING SOFTWARE & HARDWARE',
      desc: 'Working with IoT and ESP32 microcontrollers, streaming live sensor telemetry over Wi-Fi into operational dashboards.',
    },
    {
      step: '04',
      title: 'EXPLORING AI & INTELLIGENT SYSTEMS',
      desc: 'Building practical AI and agentic platforms, applying anomaly detection, predictive models, and autonomous operational agents.',
    },
  ];

  return (
    <section id="coding" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
              <span>06 / JOURNEY</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter uppercase">
              HOW I GOT HERE.
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-500 max-w-sm uppercase tracking-wider leading-relaxed font-medium">
            From algorithmic foundations to real-world software, IoT microcontrollers, and agentic intelligence.
          </p>
        </div>

        {/* Milestone Sequence (Clean, Minimal, Non-Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-16 border-b border-slate-200/80">
          {milestones.map((m) => (
            <div key={m.step} className="space-y-3 group">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-sky-600 tracking-tighter">
                {m.step}
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-snug group-hover:text-sky-600 transition-colors">
                {m.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Coding Profile Verification Strip (LeetCode, GitHub, GeeksforGeeks) */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 font-mono text-xs">
          
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold block">
              LEETCODE DSA
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              109<span className="text-sky-600">+</span>
            </div>
            <p className="text-slate-500 text-xs font-normal">
              Problems solved in Java covering arrays, two pointers, dynamic programming, and binary search.
            </p>
            <a
              href={codingProfiles.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold uppercase tracking-wider pt-1 transition-colors"
            >
              <span>View @{codingProfiles.leetcode.username}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold block">
              GITHUB
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              4
            </div>
            <p className="text-slate-500 text-xs font-normal">
              Public software &amp; IoT repositories including FacilityOps AI, EdgeGuard AI, and Tamil Nadu Bus Scheduling.
            </p>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold uppercase tracking-wider pt-1 transition-colors"
            >
              <span>View @Sathasivam0706</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold block">
              ALGORITHMIC PRACTICE
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              DSA &bull; Java
            </div>
            <p className="text-slate-500 text-xs font-normal">
              Continuous practice on GeeksforGeeks and technical problem sets strengthening time &amp; space complexity.
            </p>
            <a
              href={codingProfiles.geeksforgeeks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold uppercase tracking-wider pt-1 transition-colors"
            >
              <span>View @GeeksforGeeks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
