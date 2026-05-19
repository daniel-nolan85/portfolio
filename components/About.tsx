'use client';

import FadeIn from './FadeIn';

const stats = [
  { value: '6+', label: 'Years building' },
  { value: '14+', label: 'Projects shipped' },
  { value: '5★', label: 'Client reviews' },
  { value: '2', label: 'Apps in development' },
];

export default function About() {
  return (
    <section id='about' className='section' style={{ position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: image + stats */}
          <FadeIn direction='right'>
            <div style={{ position: 'relative' }}>
              {/* Photo frame */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  maxWidth: '380px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(135deg, rgba(103, 232, 249, 0.1) 0%, transparent 60%)',
                    zIndex: 1,
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/img/me.jpg'
                  alt='Daniel Nolan'
                  style={{
                    width: '100%',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'grayscale(20%) contrast(1.05)',
                  }}
                />
                {/* Corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '40px',
                    height: '40px',
                    borderTop: '2px solid var(--cyan-ice)',
                    borderRight: '2px solid var(--cyan-ice)',
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    width: '40px',
                    height: '40px',
                    borderBottom: '2px solid var(--cyan-ice)',
                    borderLeft: '2px solid var(--cyan-ice)',
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Stats grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  maxWidth: '380px',
                }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='glass'
                    style={{ padding: '1rem 1.25rem', borderRadius: '12px' }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: 'var(--cyan-ice)',
                        lineHeight: 1,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontWeight: 400,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn direction='left' delay={150}>
            <div>
              <p className='section-label'>About me</p>
              <div className='divider' />
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                }}
              >
                I don't just write code.{' '}
                <span className='gradient-text'>I build products.</span>
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    fontSize: '0.975rem',
                  }}
                >
                  I've been building on the web since 2019 — starting with
                  client sites and growing into full-stack applications,
                  real-time systems, and mobile apps. Over six years I've
                  shipped everything from e-commerce platforms and dating apps
                  to AI-powered creative tools and fitness trackers.
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    fontSize: '0.975rem',
                  }}
                >
                  Today I work as a web content developer at Gap Inc. by day,
                  and by night I run{' '}
                  <span
                    style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                  >
                    Nolancode
                  </span>{' '}
                  — an indie dev operation where I design, build, and ship my
                  own apps. My current focus is{' '}
                  <span style={{ color: 'var(--cyan-ice)', fontWeight: 500 }}>
                    Gym Buddies
                  </span>
                  , a social fitness platform for iOS and Android built with
                  React Native, featuring real-time chat, AI-generated workout
                  and diet plans, completely free for all users.
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    fontSize: '0.975rem',
                  }}
                >
                  I care deeply about the craft — clean architecture, thoughtful
                  UX, and products that actually solve problems for real people.
                  Based in Henderson, Nevada with my family, and always building
                  something new.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2rem',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  href='/daniel-nolan-resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary'
                >
                  Download Resume
                </a>
                <a href='#contact' className='btn-secondary'>
                  Let's talk
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
