import React, { useState } from 'react';

interface TechItem {
  name: string;
  note?: string;
}

export const Skills: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const groups = [
    {
      label: 'PROGRAMMING',
      items: [
        { name: 'Java', note: 'Data structures & OOP backend' },
        { name: 'Python', note: 'Competitive algorithms & ML scripting' },
      ],
    },
    {
      label: 'FRONTEND',
      items: [
        { name: 'React', note: 'Component architecture & hooks' },
        { name: 'TypeScript', note: 'Strict typing & interfaces' },
        { name: 'JavaScript', note: 'ES6+ asynchronous execution' },
        { name: 'HTML', note: 'Semantic markup & accessibility' },
        { name: 'CSS', note: 'Responsive design & flex/grid' },
        { name: 'Tailwind CSS', note: 'Utility-first modern styling' },
      ],
    },
    {
      label: 'BACKEND',
      items: [
        { name: 'Node.js', note: 'Server-side JavaScript runtime' },
        { name: 'Express.js', note: 'REST API routing & middleware' },
        { name: 'REST APIs', note: 'Stateless HTTP services' },
        { name: 'JWT concepts', note: 'Token-based authentication' },
      ],
    },
    {
      label: 'DATABASE',
      items: [
        { name: 'MongoDB', note: 'Document database & aggregation' },
        { name: 'MongoDB Atlas', note: 'Cloud database clusters' },
        { name: 'MySQL', note: 'Relational schemas & SQL queries' },
      ],
    },
    {
      label: 'AI / ML',
      items: [
        { name: 'Machine Learning', note: 'Supervised classification models' },
        { name: 'Predictive Analytics', note: 'Load & condition forecasting' },
        { name: 'Anomaly Detection', note: 'Operational outlier identification' },
        { name: 'AI Agents', note: 'Agentic workflows & autonomous logic' },
        { name: 'LLM Concepts', note: 'Prompting & API integrations' },
        { name: 'Computer Vision', note: 'PPE & object detection concepts' },
      ],
    },
    {
      label: 'IoT',
      items: [
        { name: 'ESP32', note: 'Dual-core Wi-Fi & Bluetooth MCU' },
        { name: 'Sensor Integration', note: 'Telemetry for temp, humidity & load' },
      ],
    },
    {
      label: 'TOOLS',
      items: [
        { name: 'Git', note: 'Distributed version control' },
        { name: 'GitHub', note: 'Open source repositories & CI' },
        { name: 'VS Code', note: 'Development environment' },
        { name: 'Postman', note: 'API endpoint testing' },
        { name: 'Google AI Studio', note: 'Model prototyping & experimentation' },
        { name: 'Antigravity', note: 'Modern developer toolchain' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
              <span>03 / TOOLKIT</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter uppercase">
              WHAT I WORK WITH.
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-500 max-w-sm uppercase tracking-wider leading-relaxed font-medium">
            Core stack across programming, full-stack, distributed databases, applied AI and IoT microcontrollers.
          </p>
        </div>

        {/* Elegant Typography-Based Skill Wall (No percentage bars, no stars) */}
        <div className="divide-y divide-slate-200/80">
          {groups.map((group) => (
            <div
              key={group.label}
              className="py-9 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline group"
            >
              {/* Category Label */}
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-600 font-bold block">
                  {group.label}
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                  {group.items.length} TECHNOLOGIES
                </span>
              </div>

              {/* Technologies Typographic Wall */}
              <div className="md:col-span-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                {group.items.map((item) => {
                  const isHovered = hoveredTech === item.name;

                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setHoveredTech(item.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="relative inline-flex items-center"
                    >
                      <span
                        className={`font-display font-bold text-xl sm:text-2xl lg:text-3xl transition-all duration-200 cursor-pointer select-none ${
                          isHovered
                            ? 'text-sky-600 scale-102'
                            : 'text-slate-800 hover:text-sky-600'
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Tooltip on hover */}
                      {isHovered && (
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white font-mono text-[11px] rounded-md shadow-lg whitespace-nowrap z-20 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                          {item.note}
                        </div>
                      )}

                      <span className="text-slate-300 ml-6 hidden sm:inline select-none">
                        /
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
