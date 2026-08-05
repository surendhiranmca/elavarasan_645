import React from 'react';
import { ArrowUp, GraduationCap, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Goals', href: '#goals' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        {/* Main Grid Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)',
          alignItems: 'center'
        }}>
          
          {/* Left Brand info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--primary-600), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <GraduationCap size={20} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-main)'
              }}>
                Elavarasan<span style={{ color: 'var(--primary-600)' }}>.</span>
              </span>
            </div>

            <p style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              maxWidth: '460px',
              lineHeight: '1.6'
            }}>
              Undergraduate <strong style={{ color: 'var(--text-main)' }}>B.Com (Computer Applications)</strong> Student at <strong style={{ color: 'var(--text-main)' }}>Sacred Heart College (Autonomous), Tirupattur</strong> (Thiruvalluvar University). Committed to commerce & technology excellence.
            </p>
          </div>

          {/* Center Quick Nav Links */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                  padding: '0.35rem 0.7rem',
                  borderRadius: '8px',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary-600)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Back to Top Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={scrollToTop}
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.8rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'var(--transition)',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-600)';
                e.currentTarget.style.color = 'var(--primary-600)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-main)';
                e.currentTarget.style.transform = 'none';
              }}
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Credit Row */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <p>© {new Date().getFullYear()} Elavarasan. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} /> for academic & career excellence
          </p>
        </div>

      </div>
    </footer>
  );
}
