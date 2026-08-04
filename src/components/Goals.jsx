import React from 'react';
import { motion } from 'framer-motion';
import { Target, GraduationCap, Laptop, Briefcase, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function Goals() {
  const goalsList = [
    {
      id: 1,
      title: 'Higher Secondary Education (12th Standard)',
      target: '12th Standard Board',
      timeline: 'Completed',
      icon: GraduationCap,
      description: 'Successfully completed 12th standard at Islamiah Boys Higher Secondary School, Vaniyambadi, establishing a solid academic record in commerce.',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Master B.Com (Computer Applications)',
      target: 'Undergraduate Degree',
      timeline: 'Present (2025 - 2028)',
      icon: Target,
      description: 'Currently pursuing B.Com (CA) to synthesize financial accounting principles with modern software applications and digital business skills.',
      status: 'Currently Pursuing'
    },
    {
      id: 3,
      title: 'Improve Technical & Communication Skills',
      target: 'Continuous Learning',
      timeline: 'Ongoing',
      icon: Laptop,
      description: 'Master advanced MS Office tools, financial software, digital accounting, and fluent business communication.',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Build a Successful Professional Career',
      target: 'Commerce & Tech Sector',
      timeline: 'Long Term Vision',
      icon: Briefcase,
      description: 'Establish a rewarding career in financial analysis, corporate accounting, or software-driven commerce enterprises.',
      status: 'Future Vision'
    }
  ];

  return (
    <section id="goals" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Future Vision
          </span>
          <h2 className="section-heading">Academic & Career Goals</h2>
          <p className="section-subheading">
            Clear milestones guiding my educational journey and professional aspirations.
          </p>
        </div>

        <div className="goals-grid">
          {goalsList.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.id}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--primary-600), var(--accent-cyan))' }}></div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '14px',
                      background: 'linear-gradient(135deg, var(--primary-600), var(--accent-cyan))',
                      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)'
                    }}>
                      <Icon size={22} />
                    </div>

                    <span style={{
                      fontSize: '0.72rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: '999px',
                      background: 'var(--primary-50)', color: 'var(--primary-600)', border: '1px solid var(--border-color)'
                    }}>
                      {goal.timeline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    {goal.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {goal.description}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <TrendingUp size={15} style={{ color: 'var(--primary-600)' }} />
                    Focus: <strong style={{ color: 'var(--text-main)' }}>{goal.target}</strong>
                  </span>

                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-600)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <CheckCircle size={14} />
                    {goal.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
