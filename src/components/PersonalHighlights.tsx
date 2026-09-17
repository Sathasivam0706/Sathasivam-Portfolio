import React from 'react';

export const PersonalHighlights: React.FC = () => {
  const items = [
    "B.Tech Student",
    "Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Future Entrepreneur"
  ];

  return (
    <section className="py-6 sm:py-8 border-y border-slate-200/80 bg-slate-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-6 sm:gap-x-8 text-center">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-display font-bold text-sm sm:text-base md:text-lg text-slate-800 tracking-tight hover:text-sky-600 transition-colors">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="text-sky-500 font-mono font-light text-base sm:text-lg select-none">
                  +
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
