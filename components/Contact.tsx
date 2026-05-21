'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(
        'https://gym-buddies-e61la.sevalla.app/api/email/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/daniel-nolan85',
      icon: (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniel-nolan85',
      icon: (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/nolan_code',
      icon: (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
        </svg>
      ),
    },
  ];

  return (
    <section id='contact' className='section' style={{ position: 'relative' }}>
      <div
        className='orb orb-cyan'
        style={{
          width: '400px',
          height: '400px',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.3,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <FadeIn>
          <div style={{ marginBottom: '4rem' }}>
            <p className='section-label'>Get in touch</p>
            <div className='divider' />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Let's work together
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginTop: '1rem',
                fontSize: '0.975rem',
                maxWidth: '520px',
                lineHeight: 1.7,
              }}
            >
              Whether you have a project in mind, want to discuss a role, or
              just want to say hello — my inbox is always open.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left: info */}
          <FadeIn direction='right' delay={100}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div
                className='glass'
                style={{ borderRadius: '16px', padding: '1.5rem' }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  EMAIL
                </p>
                <a
                  href='mailto:daniel@nolancode.com'
                  style={{
                    color: 'var(--cyan-ice)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  daniel@nolancode.com
                </a>
              </div>

              <div
                className='glass'
                style={{ borderRadius: '16px', padding: '1.5rem' }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  LOCATION
                </p>
                <p
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                  }}
                >
                  Henderson, Nevada
                </p>
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    marginTop: '0.25rem',
                  }}
                >
                  Open to remote opportunities worldwide
                </p>
              </div>

              <div
                className='glass'
                style={{ borderRadius: '16px', padding: '1.5rem' }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '1rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  FIND ME ON
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={s.label}
                      style={{
                        color: 'var(--text-muted)',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--cyan-ice)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction='left' delay={150}>
            <div
              className='glass'
              style={{ borderRadius: '20px', padding: '2rem' }}
            >
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    ✅
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Message sent!
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                    }}
                  >
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className='btn-secondary'
                    style={{ marginTop: '1.5rem', fontSize: '0.85rem' }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  {[
                    {
                      id: 'name',
                      label: 'Name',
                      type: 'text',
                      placeholder: 'Your name',
                    },
                    {
                      id: 'email',
                      label: 'Email',
                      type: 'email',
                      placeholder: 'your@email.com',
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        style={{
                          display: 'block',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.08em',
                          marginBottom: '0.5rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [field.id]: e.target.value })
                        }
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '8px',
                          padding: '0.75rem 1rem',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            'var(--cyan-ice)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            'rgba(255,255,255,0.08)')
                        }
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor='message'
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      placeholder='Tell me about your project or idea...'
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                        fontFamily: 'var(--font-body)',
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--cyan-ice)')
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          'rgba(255,255,255,0.08)')
                      }
                    />
                  </div>

                  <button
                    type='submit'
                    className='btn-primary'
                    disabled={status === 'sending'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'sending' ? (
                      <>
                        <span
                          style={{
                            width: '16px',
                            height: '16px',
                            border: '2px solid rgba(8,12,16,0.3)',
                            borderTopColor: '#080C10',
                            borderRadius: '50%',
                            animation: 'spin 0.7s linear infinite',
                            display: 'inline-block',
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2.5'
                        >
                          <line x1='22' y1='2' x2='11' y2='13' />
                          <polygon points='22 2 15 22 11 13 2 9 22 2' />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
              {status === 'error' && (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <p style={{ color: '#F87171', fontSize: '0.875rem' }}>
                    Something went wrong. Please try emailing directly at
                    daniel@nolancode.com
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className='btn-secondary'
                    style={{ marginTop: '1rem', fontSize: '0.85rem' }}
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
