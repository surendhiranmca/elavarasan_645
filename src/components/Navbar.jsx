import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, GraduationCap, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Goals', href: '#goals' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand">
          <div className="brand-icon">
            <GraduationCap size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-title">
              Elavarasan<span style={{ color: 'var(--primary-600)' }}>.</span>
            </span>
            <span className="brand-sub">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions (Theme Toggle & Mobile Hamburger) */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="icon-btn"
            aria-label="Toggle Theme"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} style={{ color: '#f59e0b' }} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} opacity={0.6} />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
