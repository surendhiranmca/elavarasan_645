import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, School, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1000);
  };

  const contactCards = [
    {
      title: 'Full Name',
      value: 'Elavarasan',
      sub: 'Higher Secondary Student',
      icon: MessageSquare,
      color: 'rgba(37, 99, 235, 0.1)',
      textColor: 'var(--primary-600)'
    },
    {
      title: 'School',
      value: 'Islamiah Boys Higher Secondary School',
      sub: 'Vaniyambadi',
      icon: School,
      color: 'rgba(6, 182, 212, 0.1)',
      textColor: 'var(--accent-cyan)'
    },
    {
      title: 'Location',
      value: 'Vaniyambadi, Tamil Nadu',
      sub: 'India',
      icon: MapPin,
      color: 'rgba(79, 70, 229, 0.1)',
      textColor: 'var(--accent-indigo)'
    },
    {
      title: 'Email Address',
      value: 'elavarasan.student@example.com',
      sub: 'Official Contact Placeholder',
      icon: Mail,
      color: 'rgba(16, 185, 129, 0.1)',
      textColor: '#059669'
    },
    {
      title: 'Phone Number',
      value: '+91 98765 43210',
      sub: 'Contact Number Placeholder',
      icon: Phone,
      color: 'rgba(168, 85, 247, 0.1)',
      textColor: '#9333ea'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Sparkles size={14} />
            Get In Touch
          </span>
          <h2 className="section-heading">Contact Information</h2>
          <p className="section-subheading">
            Feel free to reach out for academic inquiries, collaborative projects, or advice.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Cards */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary-600)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.4rem' }}>Let's Connect!</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                I welcome messages from fellow students, educators, and mentors. Drop me a line through the form or using the direct details below.
              </p>
            </div>

            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '14px',
                    background: card.color, color: card.textColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0
                  }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-light)', display: 'block' }}>
                      {card.title}
                    </span>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {card.value}
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{card.sub}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            className="glass-card"
            style={{ padding: '2.5rem' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>Send a Message</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill out the form below and I will get back to you promptly.
            </p>

            {status.submitted && (
              <div style={{
                marginBottom: '1.5rem', padding: '1rem', borderRadius: '16px',
                background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#047857', display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <CheckCircle2 size={24} style={{ color: '#059669', shrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>Message Sent Successfully!</p>
                  <p style={{ fontSize: '0.78rem' }}>Thank you for reaching out to Elavarasan. Have a great day!</p>
                </div>
              </div>
            )}

            {status.error && (
              <div style={{
                marginBottom: '1.5rem', padding: '1rem', borderRadius: '16px',
                background: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.3)',
                color: '#be123c', display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <AlertCircle size={24} style={{ color: '#e11d48', shrink: 0 }} />
                <p style={{ fontSize: '0.88rem', fontWeight: 800 }}>{status.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Academic Inquiry / Study Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', fontSize: '1rem' }}
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message to Elavarasan</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
