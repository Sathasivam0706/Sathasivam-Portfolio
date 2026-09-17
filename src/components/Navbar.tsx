import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'coding', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-white/95 backdrop-blur-xs border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Left: SATHASIVAM S */}
        <a
          id="navbar-brand"
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span className="font-display font-extrabold tracking-[0.18em] text-sm sm:text-base text-slate-900 group-hover:text-sky-600 transition-colors uppercase">
            {personalInfo.name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_6px_rgba(2,132,199,0.5)]" />
        </a>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-[0.2em]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 uppercase relative py-1 ${
                  isActive
                    ? 'text-sky-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-5">
          <button
            onClick={onOpenResume}
            className="text-xs font-mono font-semibold tracking-wider text-slate-600 hover:text-sky-600 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="View Technical Resume"
          >
            <FileText className="w-3.5 h-3.5 text-sky-500" />
            <span>CV</span>
          </button>

          <a
            id="navbar-talk-cta"
            href="#contact"
            className="px-4 py-2 rounded-full bg-slate-900 hover:bg-sky-600 text-xs font-mono font-semibold tracking-widest text-white transition-all duration-200 flex items-center gap-2 group shadow-sm hover:shadow-md hover:shadow-sky-500/20"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Clean Fullscreen Mobile Menu in White theme */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-xl z-50 flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <span className="font-display font-bold tracking-[0.2em] text-slate-900 uppercase text-sm">
              {personalInfo.name}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl font-bold text-slate-800 hover:text-sky-600 tracking-tight transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-full border border-slate-200 text-slate-700 hover:text-slate-900 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-500" />
              <span>Technical CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-mono font-bold text-xs uppercase tracking-widest text-center transition-colors"
            >
              LET'S CONNECT →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
