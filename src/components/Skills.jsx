import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Clock, 
  Monitor, 
  FileText, 
  Table, 
  Presentation, 
  Globe, 
  Code,
  Terminal,
  Database,
  FileCode,
  Sparkles
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = [
    // Programming & Databases
    { name: 'C Programming', category: 'programming', level: 70, icon: Code, description: 'Core logic, data structures, algorithms & syntax in C' },
    { name: 'Python Programming', category: 'programming', level: 65, icon: Terminal, description: 'Object-oriented scripting, data processing & logic' },
    { name: 'MySQL Database', category: 'programming', level: 60, icon: Database, description: 'Relational database design, queries & SQL management' },
    { name: 'HTML5 & Web Design (NPTEL)', category: 'programming', level: 70, icon: FileCode, description: 'NPTEL Certified in HTML structure & web fundamentals' },

    // Technical & Computer Skills
    { name: 'Computer Basics', category: 'technical', level: 75, icon: Monitor, description: 'OS fundamentals & digital operations' },
    { name: 'MS Word', category: 'technical', level: 72, icon: FileText, description: 'Document creation & formatting' },
    { name: 'MS Excel', category: 'technical', level: 70, icon: Table, description: 'Spreadsheets, formulas & basic data' },
    { name: 'PowerPoint', category: 'technical', level: 75, icon: Presentation, description: 'Visual presentation design' },
    { name: 'Internet & Email', category: 'technical', level: 75, icon: Globe, description: 'Web browsing, email etiquette & research' },

    // Soft & Professional Skills
    { name: 'Communication', category: 'soft', level: 70, icon: MessageSquare, description: 'Clear verbal and written expression' },
    { name: 'Teamwork', category: 'soft', level: 75, icon: Users, description: 'Collaborative learner and supportive teammate' },
    { name: 'Problem Solving', category: 'soft', level: 68, icon: Lightbulb, description: 'Analytical approach to challenges' },
    { name: 'Leadership', category: 'soft', level: 65, icon: ShieldCheck, description: 'Initiative and peer guidance' },
    { name: 'Time Management', category: 'soft', level: 72, icon: Clock, description: 'Task prioritization and punctuality' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Capabilities & Knowledge
          </span>
          <h2 className="section-heading">Skills & Technical Proficiency</h2>
          <p className="section-subheading">
            Programming languages, database management, NPTEL HTML certification, office suites, and soft skills.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', flexWrap: 'wrap', gap: '0.25rem', padding: '0.35rem', borderRadius: '999px',
            background: 'var(--glass-bg)', border: '1px solid var(--border-color)', backdropFilter: 'blur(12px)',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveTab('all')}
              className={`nav-item ${activeTab === 'all' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              All Skills ({skillsData.length})
            </button>
            <button
              onClick={() => setActiveTab('programming')}
              className={`nav-item ${activeTab === 'programming' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Programming & Databases (C, Python, MySQL, HTML)
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`nav-item ${activeTab === 'technical' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Computer Basics & MS Office
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`nav-item ${activeTab === 'soft' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Personal & Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="glass-card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '12px',
                        background: skill.category === 'programming' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(37, 99, 235, 0.1)',
                        color: skill.category === 'programming' ? 'var(--accent-cyan)' : 'var(--primary-600)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>{skill.name}</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{skill.description}</p>
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.85rem', fontWeight: 800,
                      color: skill.category === 'programming' ? 'var(--accent-cyan)' : 'var(--primary-600)',
                      background: skill.category === 'programming' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(37, 99, 235, 0.1)',
                      padding: '0.2rem 0.6rem', borderRadius: '8px'
                    }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Skill Bar */}
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      style={{
                        background: skill.category === 'programming'
                          ? 'linear-gradient(90deg, var(--accent-cyan), var(--primary-600))'
                          : 'linear-gradient(90deg, var(--primary-600), var(--accent-cyan))'
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
