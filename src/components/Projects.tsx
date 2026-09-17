import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Shield,
  Activity,
  Bus,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-20 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
              <span>02 / SELECTED WORK</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter uppercase">
              PROJECTS I'VE BUILT.
            </h2>
          </div>

          <a
            href="https://github.com/Sathasivam0706"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600 hover:text-sky-600 flex items-center gap-2 transition-colors self-start md:self-auto font-semibold group"
          >
            <span>EXPLORE GITHUB REPOSITORIES</span>
            <ArrowRight className="w-4 h-4 text-sky-600 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Large Project Showcase Sections (Alternating Layouts) */}
        <div className="space-y-28 lg:space-y-36">
          {projectsData.map((project, index) => {
            const projectNumber = `0${index + 1}`;
            
            // Alternating layouts as requested:
            // Project 01 (idx 0): Text LEFT / Visual RIGHT
            // Project 02 (idx 1): Visual LEFT / Text RIGHT
            // Project 03 (idx 2): Visual LEFT / Text RIGHT (Text Right / Visual Left)
            // Project 04 (idx 3): Text LEFT / Visual RIGHT
            const isVisualLeft = index === 1 || index === 2;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="group relative"
                data-cursor-text="VIEW →"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Visual Presentation Area */}
                  <div
                    className={`lg:col-span-7 ${
                      isVisualLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 overflow-hidden shadow-lg shadow-slate-900/5 transition-all duration-300 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 cursor-pointer"
                    >
                      {/* Ambient soft glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

                      {/* Top Bar with Number & Category */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80 font-mono text-xs">
                        <div className="flex items-center gap-2 text-sky-600 font-bold tracking-wider">
                          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                          <span>PROJECT {projectNumber}</span>
                        </div>
                        <span className="text-slate-600 uppercase tracking-widest text-[11px] font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Clean Light Interface Visualizations */}
                      {project.id === 'facilityops-ai' && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-xs">
                          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 border-b border-slate-100 pb-3">
                            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              IoT Telemetry Stream Active
                            </span>
                            <span className="text-slate-600">ESP32 &bull; 2.4GHz Wi-Fi</span>
                          </div>

                          <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">ZONE TEMP</span>
                              <span className="text-sky-700 font-bold text-sm sm:text-base">22.4 &deg;C</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">ENERGY LOAD</span>
                              <span className="text-emerald-700 font-bold text-sm sm:text-base">14.8 kW</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">ANOMALY INDEX</span>
                              <span className="text-slate-700 font-bold text-sm sm:text-base">0.02 (Nominal)</span>
                            </div>
                          </div>

                          {/* Metric load bars */}
                          <div className="pt-2">
                            <div className="flex justify-between font-mono text-[11px] text-slate-500 mb-1.5">
                              <span>Power Demand Forecast (kW)</span>
                              <span className="text-sky-600 font-semibold">Autonomous Load Balanced</span>
                            </div>
                            <div className="h-16 flex items-end gap-1.5 pt-1 px-1 bg-slate-50/70 rounded-xl p-2 border border-slate-100">
                              {[40, 65, 45, 80, 55, 70, 90, 60, 48, 75, 85, 95, 68, 52, 77, 88].map((val, i) => (
                                <div
                                  key={i}
                                  className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-xs hover:to-sky-300 transition-all"
                                  style={{ height: `${val}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'edgeguard-ai' && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-xs">
                          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 border-b border-slate-100 pb-3">
                            <span className="flex items-center gap-1.5 text-sky-700 font-semibold">
                              <Shield className="w-3.5 h-3.5 text-sky-600" />
                              Factory Floor Vision &bull; PPE Inspection
                            </span>
                            <span className="text-slate-600">Surveillance Grid</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                              <span className="text-slate-600">Hardhat Compliance</span>
                              <span className="text-emerald-600 font-bold">98.4%</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                              <span className="text-slate-600">Perimeter Status</span>
                              <span className="text-sky-700 font-bold">Secured</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-200/80 text-sky-800 font-mono text-xs flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                            <span>Zero Active Breach Signals &bull; All 4 Zones Safe</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'disease-detection' && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-xs">
                          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 border-b border-slate-100 pb-3">
                            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                              <Activity className="w-3.5 h-3.5 text-sky-600" />
                              Spring Boot Controller &bull; Ensemble ML
                            </span>
                            <span className="text-slate-600">MySQL Persistence</span>
                          </div>

                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="flex justify-between text-slate-600">
                              <span>Classifier Pipeline:</span>
                              <span className="text-slate-900 font-semibold">Ensemble Voting Model</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                              <div className="bg-sky-600 h-full rounded-full" style={{ width: '88%' }} />
                            </div>
                            <div className="flex justify-between text-[11px] text-slate-600 pt-1">
                              <span>REST Endpoint: /api/v1/predict</span>
                              <span className="text-emerald-600 font-bold">HTTP 200 OK</span>
                            </div>
                          </div>

                          <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-mono">
                            Research prototype &bull; Educational machine learning integration
                          </div>
                        </div>
                      )}

                      {project.id === 'tn-bus-scheduling' && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-xs">
                          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 border-b border-slate-100 pb-3">
                            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                              <Bus className="w-3.5 h-3.5 text-sky-600" />
                              Transit Dispatch &bull; Tamil Nadu Network
                            </span>
                            <span className="text-slate-600">Route Coordination</span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px] text-center">
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-700">Karur</div>
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-700">Trichy</div>
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-700">Coimbatore</div>
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-700">Madurai</div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-50 font-mono text-xs text-slate-700 flex justify-between items-center border border-slate-100">
                            <span>Schedule Optimization:</span>
                            <span className="text-emerald-600 font-semibold">Zero Overlap Detected</span>
                          </div>
                        </div>
                      )}

                      {/* Click prompt */}
                      <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-600">
                        <span className="group-hover:text-sky-600 transition-colors font-medium">
                          Click to inspect full architecture dossier
                        </span>
                        <ArrowRight className="w-4 h-4 text-sky-600 group-hover:translate-x-1 transition-transform" />
                      </div>

                    </div>
                  </div>

                  {/* Text Details & Mini Case Study */}
                  <div
                    className={`lg:col-span-5 ${
                      isVisualLeft ? 'lg:order-2' : 'lg:order-1'
                    } space-y-6`}
                  >
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-600 font-bold block mb-2">
                        {project.category}
                      </span>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight hover:text-sky-600 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="font-display font-semibold text-xs sm:text-sm text-slate-500 uppercase tracking-wider mt-1.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Technology List */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 block mb-2.5 font-semibold">
                        TECHNOLOGIES
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-mono text-xs hover:border-sky-400 hover:text-sky-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links: VIEW PROJECT → and GITHUB → */}
                    <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs tracking-wider">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-bold uppercase transition-all duration-200 flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-md hover:shadow-sky-500/20"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 uppercase transition-colors flex items-center gap-2 font-semibold bg-white"
                      >
                        <Github className="w-3.5 h-3.5 text-sky-600" />
                        <span>GITHUB</span>
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-sky-600 hover:text-sky-700 uppercase flex items-center gap-1.5 transition-colors font-bold"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>LIVE DEMO</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
