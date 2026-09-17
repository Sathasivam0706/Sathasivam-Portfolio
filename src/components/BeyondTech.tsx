import React from 'react';

export const BeyondTech: React.FC = () => {
  const interests = [
    {
      label: '01',
      category: 'SPORTS & FITNESS',
      items: [
        'Kabaddi player',
        'Cricket enthusiast',
        'Fitness & discipline',
      ],
      desc: 'Active involvement in competitive sports builds physical stamina, tactical clarity under pressure, and the personal discipline necessary for demanding software engineering.',
    },
    {
      label: '02',
      category: 'BUSINESS & STARTUPS',
      items: [
        'Interest in technology businesses',
        'Future entrepreneurial mindset',
        'Product & market dynamics',
      ],
      desc: 'Fascinated by how software innovations transform into viable businesses, analyzing product strategy, scalable operations, and early-stage startup execution.',
    },
    {
      label: '03',
      category: 'CONTINUOUS LEARNING',
      items: [
        'Exploring new technologies & tools',
        'Applied AI developments',
        'Hardware & IoT prototyping',
      ],
      desc: 'Dedicated to staying curious, tracking recent advances in machine learning, experimenting with autonomous agent frameworks, and learning modern developer tools.',
    },
  ];

  return (
    <section id="beyond" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
              <span>07 / INTERESTS</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter uppercase">
              BEYOND THE CODE.
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-500 max-w-sm uppercase tracking-wider leading-relaxed font-medium">
            Athletic discipline, entrepreneurial curiosity, and continuous personal growth.
          </p>
        </div>

        {/* 3 Pillars (No Cards, Clean Editorial Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {interests.map((col) => (
            <div key={col.category} className="space-y-4 group">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-sky-600 font-bold flex items-center gap-2">
                <span>[{col.label}]</span>
                <span>{col.category}</span>
              </div>

              <div className="space-y-2 pt-1">
                {col.items.map((item) => (
                  <div
                    key={item}
                    className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2 group-hover:text-sky-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-normal pt-2">
                {col.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
