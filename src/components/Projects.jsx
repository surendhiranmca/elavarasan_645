import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Database, 
  ExternalLink, 
  FolderGit2, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  X,
  Layers
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 1,
      title: 'Financial Statement & Ratio Analysis Tool',
      category: 'financial',
      categoryLabel: 'Financial Analytics',
      subtitle: 'Balance Sheet & Income Statement Analyzer',
      technologies: ['MS Excel', 'Financial Accounting', 'C Logic', 'Ratio Math'],
      description: 'An analytical accounting tool designed to evaluate corporate balance sheets, income statements, and compute key financial health indicators (liquidity, profitability, leverage, and turnover ratios).',
      highlights: [
        'Automated ratio calculations for Liquidity, Debt, and ROI',
        'Comparative financial performance reporting',
        'Structured ledger entry reconciliation model'
      ],
      metrics: 'Comprehensive Financial Ratios',
      icon: TrendingUp,
      badgeColor: 'rgba(37, 99, 235, 0.12)',
      textColor: 'var(--primary-600)'
    },
    {
      id: 2,
      title: 'Retail Sales & Business Data Insights Dashboard',
      category: 'data',
      categoryLabel: 'Data Analytics',
      subtitle: 'SQL & Python Data Querying Project',
      technologies: ['Python', 'MySQL', 'Data Processing', 'HTML5'],
      description: 'Exploratory data analytics project leveraging relational MySQL queries and Python scripts to analyze revenue trends, regional customer demographics, and product sales performance.',
      highlights: [
        'Complex SQL queries for aggregation and filtering',
        'Data cleaning and pattern recognition in Python',
        'Visual summary of key business growth drivers'
      ],
      metrics: 'SQL Querying & Data Trends',
      icon: BarChart3,
      badgeColor: 'rgba(6, 182, 212, 0.12)',
      textColor: 'var(--accent-cyan)'
    },
    {
      id: 3,
      title: 'Web-Based Investment & Stock Portfolio Portal',
      category: 'bi',
      categoryLabel: 'Business Intelligence',
      subtitle: 'NPTEL HTML5 Web Development Capstone',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'NPTEL Certification'],
      description: 'A sleek, responsive web interface built using HTML5 and CSS3 to track stock performance metrics, portfolio allocations, and asset growth over time.',
      highlights: [
        'Built with NPTEL HTML5 & Web Design principles',
        'Responsive layout for mobile and desktop screens',
        'Interactive portfolio distribution overview'
      ],
      metrics: 'NPTEL Web Capstone',
      icon: PieChart,
      badgeColor: 'rgba(79, 70, 229, 0.12)',
      textColor: 'var(--accent-indigo)'
    },
    {
      id: 4,
      title: 'Academic Fee & Student Record Database System',
      category: 'data',
      categoryLabel: 'Software & Systems',
      subtitle: 'Database Management & C Programming System',
      technologies: ['C Language', 'MySQL Database', 'MS Office', 'Data Structures'],
      description: 'Database-backed application designed to streamline student registration, fee payment status tracking, and periodic academic attendance reports.',
      highlights: [
        'Relational schema design with normalized tables',
        'File storage & C logic for automated updates',
        'Export capabilities for Excel spreadsheets'
      ],
      metrics: 'Relational Database System',
      icon: Database,
      badgeColor: 'rgba(16, 185, 129, 0.12)',
      textColor: '#059669'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Practical Experience
          </span>
          <h2 className="section-heading">Projects & Case Studies</h2>
          <p className="section-subheading">
            Hands-on work combining commerce principles, financial analysis, data querying, and web technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', flexWrap: 'wrap', gap: '0.25rem', padding: '0.35rem', borderRadius: '999px',
            background: 'var(--glass-bg)', border: '1px solid var(--border-color)', backdropFilter: 'blur(12px)',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveCategory('all')}
              className={`nav-item ${activeCategory === 'all' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              All Projects ({projectsList.length})
            </button>
            <button
              onClick={() => setActiveCategory('financial')}
              className={`nav-item ${activeCategory === 'financial' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Financial Analytics
            </button>
            <button
              onClick={() => setActiveCategory('data')}
              className={`nav-item ${activeCategory === 'data' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Data Analytics & SQL
            </button>
            <button
              onClick={() => setActiveCategory('bi')}
              className={`nav-item ${activeCategory === 'bi' ? 'active' : ''}`}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Business Intelligence & Web
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Top Accent Line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: 'linear-gradient(90deg, var(--primary-600), var(--accent-cyan))'
                }}></div>

                <div>
                  {/* Category Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '14px',
                      background: project.badgeColor, color: project.textColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon size={22} />
                    </div>

                    <span style={{
                      fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '999px',
                      background: project.badgeColor, color: project.textColor, border: '1px solid rgba(37, 99, 235, 0.15)'
                    }}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: project.textColor, marginBottom: '0.85rem' }}>
                    {project.subtitle}
                  </p>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={{
                        fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '8px',
                        background: 'rgba(37, 99, 235, 0.05)', color: 'var(--text-main)', border: '1px solid var(--border-color)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Metrics & Detail Link */}
                <div style={{
                  paddingTop: '1rem', borderTop: '1px solid var(--border-color)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontSize: '0.78rem', color: 'var(--text-muted)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    <Layers size={14} style={{ color: 'var(--primary-600)' }} />
                    {project.metrics}
                  </span>

                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 800, color: 'var(--primary-600)' }}>
                    View Case Study <ExternalLink size={14} />
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Project Case Study Detail Modal */}
        {selectedProject && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}>
            <motion.div
              className="glass-card"
              style={{ padding: '2.25rem', maxWidth: '560px', width: '100%', borderRadius: '24px', position: 'relative' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                  padding: '0.4rem', borderRadius: '50%'
                }}
              >
                <X size={20} />
              </button>

              <span style={{
                fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '999px',
                background: selectedProject.badgeColor, color: selectedProject.textColor, display: 'inline-block', marginBottom: '0.75rem'
              }}>
                {selectedProject.categoryLabel}
              </span>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                {selectedProject.title}
              </h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedProject.textColor, marginBottom: '1.25rem' }}>
                {selectedProject.subtitle}
              </p>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '1.5rem', background: 'rgba(37, 99, 235, 0.04)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Key Project Highlights:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary-600)', shrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Technologies & Methodologies:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} style={{
                      fontSize: '0.78rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: '10px',
                      background: 'rgba(37, 99, 235, 0.08)', color: 'var(--primary-600)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.8rem' }}
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
