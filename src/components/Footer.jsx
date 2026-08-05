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
      paddingTop: '3.5rem',
      paddingBottom: '2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        
        {/* Main Header Layout Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          
          {/* Left Column: Brand Info */}
          <div style={{ flex: '1 1 320px', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--primary-600), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <GraduationCap size={22} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.3rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-main)'
              }}>
                Elavarasan<span style={{ color: 'var(--primary-600)' }}>.</span>
              </span>
            </div>

            <p style={{
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              lineHeight: '1.65'
            }}>
              Undergraduate <strong style={{ color: 'var(--text-main)' }}>B.Com (Computer Applications)</strong> Student at <strong style={{ color: 'var(--text-main)' }}>Sacred Heart College (Autonomous), Tirupattur</strong> (Thiruvalluvar University). Committed to commerce & technology excellence.
            </p>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div style={{
            flex: '1 1 300px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem 0.75rem'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '10px',
                  background: 'rgba(37, 99, 235, 0.03)',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary-600)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.12)';
                  e.target.style.borderColor = 'rgba(37, 99, 235, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.background = 'rgba(37, 99, 235, 0.03)';
                  e.target.style.borderColor = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Column: Back to Top Action */}
          <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button
              onClick={scrollToTop}
              style={{
                padding: '0.8rem 1.4rem',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'var(--transition)',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-600)';
                e.currentTarget.style.color = 'var(--primary-600)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-main)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div style={{
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <p>© {new Date().getFullYear()} Elavarasan. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with <Heart size={15} style={{ color: '#ef4444', fill: '#ef4444' }} /> for academic & career excellence
          </p>
        </div>

      </div>
    </footer>
  );
}
