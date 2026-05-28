'use client';

import { useEffect } from 'react';
import FadeIn from './FadeIn';

export default function Booking() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id='booking' className='section' style={{ position: 'relative' }}>
      <div className='orb orb-cyan' style={{ width: '600px', height: '600px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.08 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className='section-label' style={{ justifyContent: 'center', display: 'flex' }}>
              Free consultation
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Let's talk about{' '}
              <span className='gradient-text'>your project</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.75,
              maxWidth: '520px',
              margin: '0 auto',
              fontWeight: 300,
            }}>
              Book a free 30-minute discovery call. No obligation, no sales pitch —
              just an honest conversation about what you need and whether I can help.
            </p>
          </div>
        </FadeIn>

        {/* What to expect */}
        <FadeIn>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '3rem',
          }}
          className='booking-features-grid'
          >
            {[
              { icon: '🎯', title: 'Focused conversation', desc: 'We talk about your goals, your timeline, and what success looks like for you.' },
              { icon: '💡', title: 'Honest advice', desc: 'I\'ll tell you what\'s realistic, what\'s not, and the best approach for your budget.' },
              { icon: '📋', title: 'Clear next steps', desc: 'You leave with a clear picture of how we could work together and what it would cost.' },
            ].map((item) => (
              <div key={item.title} className='glass' style={{ borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Calendly embed */}
        <FadeIn>
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '700px',
          }}>
            <div
              className='calendly-inline-widget'
              data-url='https://calendly.com/daniel-nolancode/30min?hide_gdpr_banner=1&background_color=080C10&text_color=F8FAFC&primary_color=67E8F9'
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </FadeIn>

        {/* Reassurance */}
        <FadeIn>
          <p style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            marginTop: '2rem',
            letterSpacing: '0.05em',
          }}>
            Prefer email? Reach me at{' '}
            <a href='mailto:daniel@nolancode.com' style={{ color: 'var(--cyan-ice)', textDecoration: 'none' }}>
              daniel@nolancode.com
            </a>
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .booking-features-grid { grid-template-columns: 1fr !important; }
        }
        .calendly-inline-widget iframe {
          border-radius: 24px;
        }
      `}</style>
    </section>
  );
}
