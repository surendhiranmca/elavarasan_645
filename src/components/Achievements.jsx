import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Bookmark, PlusCircle, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'NPTEL HTML & Web Development Certification',
      category: 'Certifications',
      year: '2025',
      institution: 'NPTEL Online Certification',
      description: 'Successfully completed the NPTEL online certification course in HTML5 and Web Development fundamentals.',
      icon: Award,
      badge: 'NPTEL Certified'
    },
    {
      id: 2,
      title: 'Programming & Database Skills (C, Python & MySQL)',
      category: 'Programming & IT',
      year: '2025',
      institution: 'Self Learning & Practical Projects',
      description: 'Acquired programming proficiency in C Language, Python scripting, and MySQL database management.',
      icon: Star,
      badge: 'C • Python • MySQL'
    },
    {
      id: 3,
      title: '12th Standard Academic Performance',
      category: 'Academic',
      year: '2026 (Upcoming)',
      institution: 'Islamiah Boys Higher Secondary School',
      description: 'Targeting top performance in Higher Secondary examinations in commerce stream.',
      icon: Trophy,
      badge: 'Academic Target'
    },
    {
      id: 4,
      title: 'Computer Basics & Office Suite Certification',
      category: 'Certifications',
      year: '2025',
      institution: 'Self & School Practical Training',
      description: 'Completed practical proficiency modules in MS Word, Excel, PowerPoint, and Internet applications.',
      icon: Award,
      badge: 'Certified'
    },
    {
      id: 5,
      title: 'School Seminar & Team Leadership',
      category: 'Leadership',
      year: '2025',
      institution: 'Islamiah Boys School',
      description: 'Active participation in student group discussions, presentation seminars, and collaborative projects.',
      icon: Star,
      badge: 'Leadership'
    },
    {
      id: 6,
      title: 'Future B.Com (CA) Honor Role Milestone',
      category: 'Future Target',
      year: '2026+',
      institution: 'Undergraduate College',
      description: 'Placeholder for upcoming college achievements, inter-collegiate commerce fests, and IT symposium awards.',
      icon: Bookmark,
      badge: 'Future Milestone'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Academic');
  const [newDesc, setNewDesc] = useState('');

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      year: '2026',
      institution: 'Islamiah Boys School',
      description: newDesc || 'Future milestone achieved by Elavarasan.',
      icon: Award,
      badge: newCategory
    };

    setAchievements([newItem, ...achievements]);
    setShowModal(false);
    setNewTitle('');
    setNewDesc('');

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Milestones & Honors
          </span>
          <h2 className="section-heading">Achievements Showcase</h2>
          <p className="section-subheading">
            Current honors and placeholder slots for upcoming academic and professional achievements.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--primary-600)' }}>{achievements.length}</strong> milestone records
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-secondary"
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
          >
            <PlusCircle size={16} style={{ color: 'var(--primary-600)' }} />
            <span>Add Custom Achievement</span>
          </button>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="glass-card"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '14px',
                      background: 'linear-gradient(135deg, var(--primary-600), var(--accent-cyan))',
                      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon size={22} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.7rem', borderRadius: '999px',
                      background: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary-600)', border: '1px solid rgba(37, 99, 235, 0.2)'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-600)', marginBottom: '0.75rem' }}>
                    {item.institution} • {item.year}
                  </p>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Category: <strong style={{ color: 'var(--text-main)' }}>{item.category}</strong></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#059669', fontWeight: 700 }}>
                    <CheckCircle size={14} /> Ready
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        {showModal && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}>
            <motion.div
              className="glass-card"
              style={{ padding: '2rem', maxWidth: '450px', width: '100%', borderRadius: '24px' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.25rem' }}>Add New Achievement</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Add a new honor or upcoming milestone to Elavarasan's portfolio.
              </p>

              <form onSubmit={handleAddAchievement}>
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., School Commerce Seminar Award"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Certifications">Certifications</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Sports & Co-Curricular">Sports & Co-Curricular</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    rows="3"
                    placeholder="Brief description of the milestone..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="form-textarea"
                  ></textarea>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.7rem' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.7rem' }}
                  >
                    Save Achievement
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
