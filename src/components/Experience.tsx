import React from 'react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
              <span>04 / EXPERIENCE</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter uppercase">
              LEARNING THROUGH EXPERIENCE.
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-500 max-w-sm uppercase tracking-wider leading-relaxed font-medium">
            Industry training programs, technology exposure, and real-world learning milestones.
          </p>
        </div>

        {/* Clean Vertical Timeline (No Cards) */}
        <div className="relative pl-6 sm:pl-12 border-l-2 border-slate-200 space-y-16 ml-2 sm:ml-4 max-w-4xl">
          
          {/* Experience Item 1: Infosys / Industry Training */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-white border-3 border-sky-600 group-hover:bg-sky-600 transition-all shadow-sm" />

            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs">
                <span className="text-sky-600 uppercase tracking-[0.2em] font-bold">
                  INTERNSHIP &amp; INDUSTRY TRAINING
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-500 font-medium">Approximately 2 months</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Infosys / Industry Training
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Focused on learning and practical exposure in technology, core software development methodologies, and foundational computer science practices.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                {['Software Engineering', 'Problem Solving', 'Learning Curriculum', 'Technology Exposure'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Item 2: Data Analytics Summer Internship */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-white border-3 border-sky-600 group-hover:bg-sky-600 transition-all shadow-sm" />

            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs">
                <span className="text-sky-600 uppercase tracking-[0.2em] font-bold">
                  DATA ANALYTICS
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-500 font-medium">Summer Internship &bull; Approximately 1 month</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Summer Internship
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Focused on learning and practical exposure in technology and data analytics, exploring dataset analysis, visualization fundamentals, and data-driven insights.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                {['Data Analytics', 'Dataset Analysis', 'Visualization', 'Data Interpretation'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
