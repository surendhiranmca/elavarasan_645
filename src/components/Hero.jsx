import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, GraduationCap, School, BookOpen, ArrowRight, Sparkles, Award } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: '8.5rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <div className="container relative" style={{ zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pill Badge */}
            <div className="hero-pill">
              <Sparkles size={16} />
              <span>Welcome to My Official Portfolio</span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Elavarasan</span>
            </h1>

            {/* Title Subheading */}
            <h2 className="hero-subtitle">
              <span>Higher Secondary Student</span>
              <span style={{ color: 'var(--text-light)', opacity: 0.5 }}>•</span>
              <span style={{ color: 'var(--text-muted)' }}>Future B.Com (CA) Student</span>
            </h2>

            {/* Description */}
            <p className="hero-desc">
              Welcome to my digital space! I am a dedicated student currently pursuing my 12th standard education at <strong style={{ color: 'var(--text-main)' }}>Islamiah Boys Higher Secondary School, Vaniyambadi</strong>. Passionate about commerce, finance, and computer applications, I am building a strong foundation for my upcoming academic journey in <strong style={{ color: 'var(--primary-600)' }}>B.Com (CA)</strong>.
            </p>

            {/* Buttons */}
            <div className="hero-btn-group">
              <a href="#about" className="btn btn-primary">
                <User size={18} />
                <span>About Me</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact</span>
                <ArrowRight size={16} style={{ marginLeft: '4px' }} />
              </a>
            </div>

            {/* Quick Info Bar */}
            <div className="hero-stats-grid">
              <div className="stat-item">
                <div className="stat-icon-box">
                  <School size={20} />
                </div>
                <div>
                  <div className="stat-label">School</div>
                  <div className="stat-val">Islamiah Boys</div>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-box">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="stat-label">Standard</div>
                  <div className="stat-val">12th Grade</div>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon-box">
                  <BookOpen size={20} />
                </div>
                <div>
                  <div className="stat-label">Goal</div>
                  <div className="stat-val">B.Com (CA)</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Profile Portrait Column */}
          <motion.div
            style={{ display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              
              <div className="hero-image-frame">
                <img
                  src={profileImg}
                  alt="Elavarasan - Higher Secondary Student"
                  className="hero-avatar-img"
                />
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                className="floating-badge-1"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'var(--primary-600)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyCenter: 'center',
                  fontWeight: 800, fontSize: '0.8rem', paddingLeft: '8px'
                }}>
                  12th
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-main)' }}>12th Standard</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary-600)' }}>Active Student</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                className="floating-badge-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'var(--accent-cyan)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-main)' }}>Future Goal</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>B.Com (CA)</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
