import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Linkedin } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="p-8 sm:p-12 border border-slate-200 bg-slate-50/70 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-600 font-bold block">
              OFFICIAL VERIFICATION
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Verified Technical Credentials
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg font-normal">
              Course accreditations and verifiable certifications are actively synchronized with LinkedIn and university registrar records.
            </p>
          </div>

          <a
            id="certifications-linkedin-link"
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shrink-0 shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>VERIFY ON LINKEDIN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
