import React from 'react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
              <span>05 / EDUCATION</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter uppercase">
              ACADEMIC BACKGROUND.
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-500 max-w-sm uppercase tracking-wider leading-relaxed font-medium">
            Rigorous undergraduate technical foundation affiliated with Anna University.
          </p>
        </div>

        {/* Large Editorial Layout - Not inside a card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Academic details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-600 font-bold block mb-2">
                UNDERGRADUATE DEGREE
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                B.Tech
              </h3>
              <p className="text-slate-600 font-medium text-lg mt-2">
                Computer Science &amp; Business Systems
              </p>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-sky-600 mt-2.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">V S B Engineering College, Karur</span>
                  <span className="text-slate-500 text-sm">Affiliated to Anna University &bull; Tamil Nadu</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">2024 &mdash; 2028</span>
                  <span className="text-slate-500 text-sm">Four-year Bachelor of Technology Degree Program</span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal pt-2">
              Comprehensive coursework covering core data structures, algorithms, operating systems, database management systems, computer networks, and modern applied artificial intelligence.
            </p>
          </div>

          {/* Right Column: Large '8.0' CGPA Typography with subtle blue styling (NOT inside a boxy card) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative text-center lg:text-right">
              
              {/* Soft blue ambient blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-100/70 rounded-full blur-3xl pointer-events-none -z-10" />

              <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 font-bold block mb-2">
                CUMULATIVE GPA
              </span>

              {/* Large '8.0' typography element with subtle blue styling */}
              <div className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl text-sky-600 tracking-tighter leading-none select-none">
                8.0
              </div>

              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mt-4 font-semibold">
                SCALE OF 10.0 &bull; ANNA UNIVERSITY
              </span>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Consistent Academic Performance
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
