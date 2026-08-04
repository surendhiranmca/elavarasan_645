import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, School, BookOpen, Target, Sparkles, Award } from 'lucide-react';

export default function About() {
  const details = [
    { icon: UserCheck, title: 'Full Name', value: 'Elavarasan' },
    { icon: BookOpen, title: 'Current Degree', value: 'B.Com (Computer Applications)' },
    { icon: School, title: 'Higher Secondary', value: 'Islamiah Boys School (Completed)' },
    { icon: MapPin, title: 'Location', value: 'Vaniyambadi, Tamil Nadu' },
    { icon: Target, title: 'Career Target', value: 'Commerce & Financial Technology' },
    { icon: Award, title: 'Focus Areas', value: 'Financial Accounting & Software Basics' },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Discover My Journey
          </span>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Dedicated undergraduate student with a strong passion for commerce, technology, and academic excellence.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="about-grid">
          
          {/* Main Bio Glass Card */}
          <motion.div
            className="glass-card"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--primary-600), var(--accent-cyan))',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.25rem'
                }}>
                  E
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Elavarasan</h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                    Undergraduate Student • B.Com (Computer Applications)
                  </p>
                </div>
              </div>

              {/* Exact prompt text */}
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                "I am a dedicated and hardworking undergraduate student currently pursuing <strong style={{ color: 'var(--primary-600)' }}>B.Com (Computer Applications)</strong>. Having successfully completed my 12th standard at <strong style={{ color: 'var(--text-main)' }}>Islamiah Boys Higher Secondary School, Vaniyambadi</strong>, I aim to build a rewarding career combining commerce, financial accounting, and modern software technology."
              </p>
            </div>

            {/* Core Pillars */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem',
              paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', textAlign: 'center'
            }}>
              <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.06)' }}>
                <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-600)' }}>100%</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Dedication</span>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.06)' }}>
                <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>Active</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Learner</span>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(79, 70, 229, 0.06)' }}>
                <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-indigo)' }}>Ambitious</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Goals</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Details Cards Grid */}
          <motion.div
            className="info-cards-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {details.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '12px',
                    background: 'var(--primary-50)', color: 'var(--primary-600)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem'
                  }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '2px' }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', display: 'block' }}>
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
