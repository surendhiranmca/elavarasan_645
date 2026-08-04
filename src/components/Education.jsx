import React from 'react';
import { motion } from 'framer-motion';
import { School, GraduationCap, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      id: 'bcom',
      title: 'Undergraduate Degree: B.Com (Computer Applications)',
      institution: 'Undergraduate College / University',
      location: 'Tamil Nadu, India',
      status: 'Currently Studying',
      period: 'Present (2025 - 2028)',
      icon: GraduationCap,
      side: 'right',
      description: 'Actively pursuing B.Com (CA), synthesizing financial commerce principles with computer software applications, business data management, and digital skills.',
      highlights: [
        'Financial & Cost Accounting',
        'Computer Applications & Software Basics',
        'Business Communication & E-Commerce'
      ]
    },
    {
      id: '12th',
      title: 'Higher Secondary Education (12th Standard)',
      institution: 'Islamiah Boys Higher Secondary School',
      location: 'Vaniyambadi, Tamil Nadu',
      status: 'Completed',
      period: 'Completed (2023 - 2025)',
      icon: School,
      side: 'left',
      description: 'Successfully completed 12th standard education with high academic commitment, mastering commerce, accountancy, and foundational subjects.',
      highlights: [
        'Higher Secondary Curriculum Completed',
        'Strong Foundation in Commerce & Accounts',
        'Islamiah Boys School, Vaniyambadi'
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Academic Pathway
          </span>
          <h2 className="section-heading">Education Timeline</h2>
          <p className="section-subheading">
            My current undergraduate B.Com (CA) studies and completed higher secondary education in commerce & technology.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationList.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.status === 'Currently Studying';

              return (
                <motion.div
                  key={item.id}
                  className={`timeline-item ${item.side}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Badge Point */}
                  <div className="timeline-node">
                    <Icon size={22} />
                  </div>

                  {/* Card Content */}
                  <div className="timeline-card-wrapper">
                    <div className="glass-card" style={{ padding: '2rem' }}>
                      
                      {/* Top Tag Header */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                          padding: '0.25rem 0.8rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800,
                          background: isActive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(37, 99, 235, 0.15)',
                          color: isActive ? '#059669' : '#2563eb',
                          border: `1px solid ${isActive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`
                        }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isActive ? '#10b981' : '#3b82f6' }}></span>
                          {item.status}
                        </span>

                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Calendar size={14} />
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                        {item.title}
                      </h3>

                      {/* Institution */}
                      <div style={{ marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-600)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2px' }}>
                          <School size={16} />
                          {item.institution}
                        </p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <MapPin size={14} />
                          {item.location}
                        </p>
                      </div>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {item.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--primary-600)', shrink: 0 }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
