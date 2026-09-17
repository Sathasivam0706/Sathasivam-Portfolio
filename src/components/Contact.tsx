import React, { useState } from 'react';
import { personalInfo, codingProfiles } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowRight,
  FileText,
  Code2,
} from 'lucide-react';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-slate-200/80">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-sky-600 font-semibold mb-4 flex items-center gap-3">
            <span>08 / CONTACT</span>
            <span className="w-12 h-px bg-sky-500/40" />
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tighter leading-[1.05] max-w-5xl uppercase">
            LET'S BUILD<br />
            <span className="text-sky-600">SOMETHING</span><br />
            MEANINGFUL.
          </h2>

          <p className="font-display text-xl sm:text-2xl text-slate-500 font-medium mt-6">
            Open to internships, junior developer roles, and impactful engineering opportunities.
          </p>
        </div>

        {/* Contact Spread: Direct Contact (Left) & Minimal Working Message Box (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400 font-bold block">
                DIRECT INQUIRIES
              </span>

              {/* Email with One-Click Copy */}
              <div className="space-y-1">
                <span className="text-slate-400 text-xs font-mono block font-semibold">EMAIL</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-display font-bold text-xl sm:text-2xl text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-sky-600 transition-colors cursor-pointer rounded-md hover:bg-slate-100"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-slate-400 text-xs font-mono block font-semibold">PHONE</span>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-display font-bold text-xl text-slate-900 hover:text-sky-600 transition-colors inline-block"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-slate-400 text-xs font-mono block font-semibold">LOCATION</span>
                <div className="font-display font-medium text-base text-slate-700">
                  {personalInfo.location}
                </div>
              </div>

              {/* Availability Status */}
              <div className="space-y-1">
                <span className="text-slate-400 text-xs font-mono block font-semibold">AVAILABILITY</span>
                <div className="flex items-center gap-2 font-mono text-xs text-sky-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>OPEN FOR INTERNSHIPS + FULL-TIME</span>
                </div>
              </div>
            </div>

            {/* Social Links Requested: LinkedIn, GitHub, LeetCode, Resume/CV */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap gap-4 font-mono text-xs text-slate-600">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-600 transition-colors font-semibold"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span>LinkedIn &rarr;</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-600 transition-colors font-semibold"
              >
                <Github className="w-3.5 h-3.5 text-sky-600" />
                <span>GitHub &rarr;</span>
              </a>

              <a
                href={codingProfiles.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-600 transition-colors font-semibold"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>LeetCode &rarr;</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors font-semibold cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>Resume / CV &rarr;</span>
                </button>
              )}
            </div>
          </div>

          {/* Working Message Box for Recruiters with Clean Light Input Styling */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 shadow-lg shadow-slate-900/5">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Message Prepared
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your email client has been launched with your drafted note. If it didn't open, write directly to <span className="text-sky-600 font-mono font-semibold">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-mono text-xs text-sky-600 hover:text-sky-700 font-semibold uppercase tracking-wider underline pt-4 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-mono text-xs text-slate-700 uppercase tracking-wider block mb-2 font-semibold">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter / Founder)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 font-sans text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-slate-700 uppercase tracking-wider block mb-2 font-semibold">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 font-sans text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-slate-700 uppercase tracking-wider block mb-2 font-semibold">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Discussing an internship opportunity, project collaboration, or interview..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 font-sans text-sm transition-all resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg hover:shadow-sky-500/25"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
