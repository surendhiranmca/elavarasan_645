import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Star, 
  Bookmark, 
  PlusCircle, 
  Sparkles, 
  CheckCircle, 
  Eye, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  X, 
  FileText,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import swayamCertImg from '../assets/swayam_certificate_full.png';
import swayamCertPdf from '../assets/swayam_certificate.pdf';

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'SWAYAM HTML Programming for Business Certification',
      category: 'Certifications',
      year: '2026',
      institution: 'SWAYAM • Manipal University Jaipur',
      description: 'Successfully completed the 3-credit SWAYAM online course "HTML Programming for Business: Web Design & Digital Strategy" offered by Manipal University Jaipur & IIM Bangalore with a consolidated score of 74.5%.',
      icon: Award,
      badge: 'SWAYAM Certified',
      hasCertificate: true,
      certificateDetails: {
        title: 'SWAYAM Online Course Certification',
        recipient: 'Elavarasan A',
        course: 'HTML Programming for Business: Web Design & Digital Strategy',
        score: '74.5%',
        credits: '3 Credits',
        examDate: '19 June 2026 (Jan 2026 Semester)',
        offeredBy: 'Manipal University Jaipur',
        nationalCoordinator: 'Prof. Shainesh G (IIM Bangalore)',
        rollNo: 'TN210200605',
        issuedDate: '30/07/2026',
        image: swayamCertImg,
        pdf: swayamCertPdf,
        verifyUrl: 'https://swayam.gov.in/'
      }
    },
    {
      id: 2,
      title: 'Financial Accounting & Data Analytics Mastery',
      category: 'Financial Analytics',
      year: '2025',
      institution: 'Sacred Heart College (Autonomous)',
      description: 'Developing core competence in financial statements, computer applications, ledger accounting, and data analytics tools.',
      icon: Trophy,
      badge: 'Core Focus'
    },
    {
      id: 3,
      title: 'Programming & Database Proficiency (C, Python & MySQL)',
      category: 'Programming & IT',
      year: '2025',
      institution: 'Computer Applications Department',
      description: 'Acquired programming proficiency in C Language, Python data scripting, and relational MySQL database management.',
      icon: Star,
      badge: 'C • Python • MySQL'
    },
    {
      id: 4,
      title: 'Higher Secondary Commerce & Accountancy Honors',
      category: 'Academic',
      year: '2024 - 2025',
      institution: 'Islamiah Boys Higher Secondary School',
      description: 'Successfully graduated higher secondary schooling in Vaniyambadi with top performance in Commerce & Accountancy stream.',
      icon: Award,
      badge: 'Completed'
    },
    {
      id: 5,
      title: 'Computer Basics & MS Office Applications Certification',
      category: 'Certifications',
      year: '2025',
      institution: 'Practical Skills Training',
      description: 'Certified proficiency in advanced MS Excel spreadsheets, MS Word document design, PowerPoint, and internet tools.',
      icon: Award,
      badge: 'Certified'
    },
    {
      id: 6,
      title: 'Seminar Presentations & Academic Leadership',
      category: 'Leadership',
      year: 'Present (2025 - 2028)',
      institution: 'Sacred Heart College (Autonomous)',
      description: 'Active participant in college commerce seminars, student group projects, and technical presentation forums.',
      icon: Bookmark,
      badge: 'Active Leader'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Academic');
  const [newInstitution, setNewInstitution] = useState('Sacred Heart College (Autonomous)');
  const [newYear, setNewYear] = useState('2025');
  const [newDesc, setNewDesc] = useState('');

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      year: newYear || '2025',
      institution: newInstitution || 'Sacred Heart College (Autonomous)',
      description: newDesc || 'Academic milestone achieved by Elavarasan.',
      icon: Award,
      badge: newCategory
    };

    setAchievements([newItem, ...achievements]);
    setShowModal(false);
    setNewTitle('');
    setNewDesc('');
    setNewInstitution('Sacred Heart College (Autonomous)');
    setNewYear('2025');

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
            Verified academic honors, technical certifications, and official SWAYAM course credentials.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--primary-600)' }}>{achievements.length}</strong> verified records
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
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}
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

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {item.description}
                  </p>

                  {/* Attachment View Button if Certificate exists */}
                  {item.hasCertificate && (
                    <button
                      onClick={() => setSelectedCertificate(item.certificateDetails)}
                      className="btn btn-secondary"
                      style={{
                        width: '100%',
                        padding: '0.65rem 1rem',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                        borderColor: 'rgba(37, 99, 235, 0.25)',
                        color: 'var(--primary-600)'
                      }}
                    >
                      <Eye size={16} />
                      <span>View Official SWAYAM Certificate</span>
                    </button>
                  )}
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Category: <strong style={{ color: 'var(--text-main)' }}>{item.category}</strong></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#059669', fontWeight: 700 }}>
                    <ShieldCheck size={15} style={{ color: '#059669' }} /> Verified Credential
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SWAYAM Certificate Image & Credential Modal */}
        {selectedCertificate && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 220, background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}>
            <motion.div
              className="glass-card"
              style={{
                padding: '2rem', maxWidth: '820px', width: '100%', maxHeight: '90vh',
                overflowY: 'auto', borderRadius: '24px', position: 'relative'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  background: 'rgba(0,0,0,0.1)', border: 'none', color: 'var(--text-main)', cursor: 'pointer',
                  padding: '0.4rem', borderRadius: '50%', zIndex: 10
                }}
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.15)', color: '#059669', border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <ShieldCheck size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  Verified SWAYAM Credential
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  Roll No: {selectedCertificate.rollNo}
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                {selectedCertificate.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--primary-600)', fontWeight: 700, marginBottom: '1.25rem' }}>
                {selectedCertificate.course}
              </p>

              {/* Certificate Image Frame */}
              <div style={{
                background: '#f8fafc', borderRadius: '16px', border: '1px solid var(--border-color)',
                padding: '0.5rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)', overflow: 'hidden'
              }}>
                <img
                  src={selectedCertificate.image}
                  alt="SWAYAM Online Course Certification - Elavarasan A"
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                />
              </div>

              {/* Verified Details Grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem',
                padding: '1.25rem', borderRadius: '16px', background: 'rgba(37, 99, 235, 0.04)',
                border: '1px solid var(--border-color)', marginBottom: '1.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Candidate Name</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{selectedCertificate.recipient}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Consolidated Score</span>
                  <strong style={{ fontSize: '1rem', color: '#059669', fontWeight: 800 }}>{selectedCertificate.score}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Offered University</span>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{selectedCertificate.offeredBy}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>National Coordinator</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{selectedCertificate.nationalCoordinator}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Proctored Exam Date</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{selectedCertificate.examDate}</strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Issued Date</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{selectedCertificate.issuedDate}</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.5rem' }}>
                <a
                  href={selectedCertificate.pdf}
                  download="SWAYAM_Certificate_Elavarasan.pdf"
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.8rem', justifyContent: 'center' }}
                >
                  <Download size={18} />
                  <span>Download Official PDF Certificate</span>
                </a>

                <a
                  href={selectedCertificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.8rem', justifyContent: 'center' }}
                >
                  <ExternalLink size={18} />
                  <span>Verify on SWAYAM Portal</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
          }}>
            <motion.div
              className="glass-card"
              style={{ padding: '2rem', maxWidth: '480px', width: '100%', borderRadius: '24px' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.25rem' }}>Add New Achievement</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Add a new honor or upcoming milestone to Elavarasan's portfolio.
              </p>

              <form onSubmit={handleAddAchievement}>
                <div className="form-group">
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sacred Heart Commerce Seminar Award"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="form-select"
                    >
                      <option value="Academic">Academic</option>
                      <option value="Certifications">Certifications</option>
                      <option value="Financial Analytics">Financial Analytics</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Co-Curricular">Co-Curricular</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Year / Period</label>
                    <input
                      type="text"
                      placeholder="e.g. 2025"
                      value={newYear}
                      onChange={(e) => setNewYear(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Institution / Issuer</label>
                  <input
                    type="text"
                    placeholder="e.g. Sacred Heart College (Autonomous)"
                    value={newInstitution}
                    onChange={(e) => setNewInstitution(e.target.value)}
                    className="form-input"
                  />
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
