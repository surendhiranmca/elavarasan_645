import React from 'react';
import { ArrowUp, GraduationCap, School, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] pt-12 pb-8 relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-color)] items-center">
          
          {/* Left Brand info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary-600)] to-[var(--accent-cyan)] flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-[var(--text-main)]">
                Elavarasan<span className="text-[var(--primary-600)]">.</span>
              </span>
            </div>

            <p className="text-xs text-[var(--text-muted)] max-w-md leading-relaxed">
              Higher Secondary Student at <strong className="text-[var(--text-main)]">Islamiah Boys Higher Secondary School, Vaniyambadi</strong>. Aspiring B.Com (Computer Applications) student committed to commerce & technology excellence.
            </p>
          </div>

          {/* Center Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-semibold">
            <a href="#home" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition-colors text-decoration-none">Home</a>
            <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition-colors text-decoration-none">About</a>
            <a href="#education" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition-colors text-decoration-none">Education</a>
            <a href="#skills" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition-colors text-decoration-none">Skills</a>
            <a href="#goals" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition-colors text-decoration-none">Goals</a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition-colors text-decoration-none">Contact</a>
          </div>

          {/* Right Scroll Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:text-[var(--primary-600)] hover:border-[var(--primary-400)] transition-all shadow-sm flex items-center gap-2 text-xs font-bold"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Elavarasan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for academic & career excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
