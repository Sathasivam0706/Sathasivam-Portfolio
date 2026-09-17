import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Mail, Linkedin, ArrowRight, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const hasResume = Boolean(personalInfo.resumeUrl && personalInfo.resumeUrl.trim().length > 0);

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl text-slate-800 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 border border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-sky-600 font-bold mb-2 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          <span>TECHNICAL DOSSIER</span>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-1 tracking-tight">
          Curriculum Vitae
        </h3>
        <p className="text-xs font-mono text-slate-500 mb-6">
          {personalInfo.name} &bull; 3rd Yr B.Tech (Anna Univ)
        </p>

        {hasResume ? (
          <div className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Download the official technical resume containing coursework metrics, project repositories, and technical competencies.
            </p>
            <a
              href={personalInfo.resumeUrl}
              download
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-wider bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full shadow-md shadow-sky-600/25 transition-all"
            >
              <span>Download PDF Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 border border-sky-200 bg-sky-50/70 rounded-2xl text-xs font-mono space-y-1.5">
              <div className="text-sky-800 font-bold uppercase tracking-wider">
                [ Active Academic Revision ]
              </div>
              <p className="text-slate-600 leading-relaxed">
                The technical resume is currently being synchronized with recent 5th semester operating systems and edge IoT repository metrics.
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              To request an advance copy or verify credentials directly:
            </p>

            <div className="flex flex-col gap-3 font-mono text-xs">
              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Sathasivam%20S`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 uppercase tracking-wider bg-slate-900 hover:bg-sky-600 text-white font-bold rounded-full transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Request Resume via Email</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 uppercase tracking-wider text-slate-800 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 rounded-full transition-all font-semibold"
              >
                <Linkedin className="w-4 h-4 text-sky-600" />
                <span>LinkedIn Verification</span>
              </a>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 text-center">
          Tamil Nadu, India &bull; {personalInfo.email}
        </div>
      </div>
    </div>
  );
};
