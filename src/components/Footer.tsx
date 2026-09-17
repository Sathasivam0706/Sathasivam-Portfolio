import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 bg-slate-50 border-t border-slate-200/80 text-slate-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="text-slate-700 font-medium">
          &copy; 2026 Sathasivam S.
        </div>

        {/* Tagline */}
        <div className="text-slate-500 text-center text-[11px] uppercase tracking-wider font-medium">
          B.Tech Developer &bull; Tamil Nadu, India
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-600 uppercase tracking-[0.2em] text-[11px] font-bold transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
        </button>

      </div>
    </footer>
  );
};
