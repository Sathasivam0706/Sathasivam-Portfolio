import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, FileDown, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 overflow-hidden bg-white bg-light-grid"
    >
      {/* Soft blue radial gradient behind content (subtle, light, elegant) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-sky-100/70 via-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-sky-50/80 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        {/* Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>HELLO, I'M</span>
            </div>

            {/* Large Heading: SATHASIVAM S. */}
            <h1
              id="hero-developer-name"
              className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] text-slate-900 tracking-tighter leading-[0.92] mb-5 select-none"
            >
              SATHASIVAM
              <span className="block text-sky-600">
                S.
              </span>
            </h1>

            {/* Below: AI & FULL-STACK DEVELOPER */}
            <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-700 tracking-tight uppercase mb-6">
              <span>AI &amp; FULL-STACK</span>
              <span className="block text-sky-600 font-semibold text-xl sm:text-2xl md:text-3xl mt-1">DEVELOPER</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-10 font-normal">
              B.Tech student building practical AI, IoT, software and data-driven solutions.
            </p>

            {/* Buttons: VIEW MY WORK → and LET'S CONNECT → */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-slate-300 hover:border-sky-500 hover:bg-sky-50/60 text-slate-800 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 text-sky-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-4 rounded-full border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer bg-slate-50/50 hover:bg-slate-100/80"
                title="View CV"
              >
                <FileDown className="w-3.5 h-3.5 text-sky-600" />
                <span>CV</span>
              </button>
            </div>

          </div>

          {/* Right Side: Organic Framed Portrait with Soft Blue Shapes & Floating Typography Labels */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            
            <div className="relative">
              
              {/* Soft blue gradient shape behind the photograph */}
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-sky-200/60 via-blue-100/40 to-sky-50/20 rounded-[3rem] blur-xl -z-10" />
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-sky-200/50 rounded-full blur-2xl -z-10" />

              {/* Floating Typography Labels around Image (NOT cards - pure typographic elements) */}
              {/* Label 1: AI / ML (Top Left) */}
              <div className="absolute -top-4 -left-6 z-20 font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] text-sky-700 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200/80 shadow-sm flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>AI / ML</span>
              </div>

              {/* Label 2: FULL STACK (Top Right) */}
              <div className="absolute -top-2 -right-6 z-20 font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] text-slate-800 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>FULL STACK</span>
              </div>

              {/* Label 3: IoT (Bottom Left) */}
              <div className="absolute -bottom-3 -left-6 z-20 font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] text-sky-700 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200/80 shadow-sm flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>IoT</span>
              </div>

              {/* Label 4: DATA (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 z-20 font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] text-slate-800 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>DATA</span>
              </div>

              {/* Sophisticated organic/rounded frame preserving exact real photo */}
              <div className="relative w-72 sm:w-84 md:w-92 aspect-4/5 rounded-[2.5rem] overflow-hidden border-2 border-white bg-slate-100 shadow-2xl shadow-sky-900/10">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                />
                
                {/* Subtle soft gradient fade at extreme bottom for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

                {/* Minimal Credential Marker */}
                <div className="absolute bottom-4 left-4 right-4 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 flex items-center justify-between text-xs font-mono shadow-xs">
                  <span className="text-slate-800 font-semibold">B.Tech &bull; 8.0 CGPA</span>
                  <span className="text-sky-600 font-bold">Anna Univ</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Hero Micro Details near the bottom */}
        <div className="w-full mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          <div>
            <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] block mb-1">
              BASED IN
            </span>
            <span className="text-slate-900 font-bold uppercase tracking-wider">
              TAMIL NADU, INDIA
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] block mb-1">
              OPEN TO
            </span>
            <span className="text-sky-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              INTERNSHIPS + FULL-TIME OPPORTUNITIES
            </span>
          </div>

          <div className="hidden lg:block">
            <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] block mb-1">
              FOCUS AREAS
            </span>
            <span className="text-slate-700 font-medium tracking-wider">
              APPLIED AI &bull; FULL-STACK &bull; IoT TELEMETRY
            </span>
          </div>
        </div>

      </div>

      {/* Minimal Scroll to Explore indicator */}
      <div className="w-full pt-10 flex items-center justify-center">
        <a
          href="#about"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-600 hover:text-sky-600 transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-sky-500 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>

    </section>
  );
};
