'use client';

import FadeIn from './FadeIn';

const stats = [
  { value: '6+', label: 'Years building' },
  { value: '14+', label: 'Projects shipped' },
  { value: '5★', label: 'Client reviews' },
  { value: '100%', label: 'Remote friendly' },
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
                  I'm Daniel — a full-stack developer with over six years of
                  experience building for the web and mobile. I've shipped
                  everything from client landing pages and business websites to
                  complex full-stack applications, real-time platforms, and
                  native mobile apps.
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    fontSize: '0.975rem',
                  }}
                >
                  I work under{' '}
                  <span
                    style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                  >
                    Nolancode
                  </span>{' '}
                  — a one-person development studio focused on building
                  high-quality digital products for businesses and founders who
                  care about getting it right. My current flagship product is{' '}
                  <span style={{ color: 'var(--cyan-ice)', fontWeight: 500 }}>
                    Gym Buddies
                  </span>
                  , a social fitness platform for iOS and Android — built from
                  architecture to App Store submission.
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    fontSize: '0.975rem',
                  }}
                >
                  When I take on client work, I bring that same ownership
                  mentality. I care about your project the way I care about my
                  own — clean code, thoughtful UX, honest communication, and a
                  result you're genuinely proud of. Based in Henderson, Nevada,
                  working with clients worldwide.
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
                <a href='#booking' className='btn-primary'>
                  Book a free call
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.5'
                  >
                    <path d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </a>
                <a href='#projects' className='btn-secondary'>
                  See my work
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
