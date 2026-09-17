import React from 'react';
import { verifiedAchievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="pb-10 mb-12 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-3 flex items-center gap-3">
              <span>BENCHMARKS &bull; HIGHLIGHTS</span>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase">
              Verified Technical Benchmarks.
            </h3>
          </div>

          <p className="font-mono text-xs text-slate-500 max-w-sm uppercase tracking-wider leading-relaxed font-medium">
            Tangible deliverables across edge computing, computer vision, and distributed software systems.
          </p>
        </div>

        {/* Clean Typographic List (No Boxy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verifiedAchievements.map((item, idx) => (
            <div key={idx} className="space-y-3 group border-t border-slate-200 pt-6">
              <span className="font-mono text-xs text-sky-600 font-bold block">
                0{idx + 1} &mdash; BENCHMARK
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
