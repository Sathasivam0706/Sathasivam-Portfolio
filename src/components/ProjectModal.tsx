import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  Github,
  ExternalLink,
  Workflow,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const problem = project.details?.problem || 'Managing complex multi-parameter data streams and operations requires resilient data architectures and automated reasoning.';
  const solution = project.details?.solution || project.description;
  const architecture = project.details?.architecture || '';
  const contribution = project.details?.contribution || 'Architected and built full-stack workflows, telemetry data models, and analytical dashboards.';

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl my-8 bg-white border border-slate-200 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-sky-600 font-semibold mb-2">
                PROJECT DOSSIER &bull; {project.category}
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                {project.title}
              </h3>
              <p className="font-medium text-sm text-slate-500 mt-1">
                {project.subtitle}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-6 font-mono text-xs">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 transition-all uppercase tracking-wider font-semibold shadow-xs"
            >
              <Github className="w-3.5 h-3.5 text-sky-600" />
              <span>GitHub Repository</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-600/20"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Executive Overview */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 block mb-2 font-semibold">
              OVERVIEW
            </span>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border border-slate-200 bg-slate-50/80 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-700 font-bold tracking-wider">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {problem}
              </p>
            </div>

            <div className="p-5 border border-sky-200 bg-sky-50/50 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-800 font-bold tracking-wider">
                <Lightbulb className="w-4 h-4 text-sky-600" />
                <span>Technical Solution</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {solution}
              </p>
            </div>
          </div>

          {/* Architecture Topology */}
          {architecture && (
            <div className="p-5 border border-slate-200 bg-slate-50/50 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-700 font-bold tracking-wider">
                <Workflow className="w-4 h-4 text-sky-600" />
                <span>Architecture &amp; Data Pipeline</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-mono">
                {architecture}
              </p>
            </div>
          )}

          {/* Key Features List */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold block">
              SYSTEM CAPABILITIES
            </span>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border border-slate-100 bg-slate-50/60 rounded-xl text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution */}
          <div className="p-4 border border-slate-200 bg-white rounded-2xl shadow-xs">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold mb-1">
              DEVELOPER CONTRIBUTION
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {contribution}
            </p>
          </div>

          {/* Full Tech Stack */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold block mb-3">
              STACK VERIFIED IN REPOSITORY
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-slate-200 bg-slate-50 text-slate-700 text-xs font-mono rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Sathasivam S &bull; Verified Repository</span>
          <button
            onClick={onClose}
            className="hover:text-sky-600 uppercase font-semibold cursor-pointer transition-colors"
          >
            [ Close ]
          </button>
        </div>

      </div>
    </div>
  );
};
