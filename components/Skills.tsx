'use client';

import FadeIn from './FadeIn';

const skillGroups = [
  {
    category: 'Mobile',
    icon: '📱',
    skills: ['React Native', 'Expo', 'TypeScript', 'iOS & Android'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'REST APIs', 'Socket.io', 'Inngest'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    category: 'Auth & Payments',
    icon: '🔐',
    skills: ['Clerk', 'Firebase', 'Stripe', 'PayPal', 'JWT'],
  },
  {
    category: 'Cloud & Media',
    icon: '☁️',
    skills: ['Cloudinary', 'Sevalla', 'GitHub Pages', 'Netlify', 'Heroku'],
  },
  {
    category: 'Build Tools',
    icon: '🛠️',
    skills: ['Git', 'Vite', 'Webpack', 'npm', 'VS Code'],
  },
  {
    category: 'Testing & Optimization',
    icon: '🧪',
    skills: ['Jest', 'PWA', 'SEO', 'SSL', 'Performance'],
  },
];

export default function Skills() {
  return (
    <section id='skills' className='section' style={{ position: 'relative' }}>
      {/* Background orb */}
      <div
        className='orb orb-cyan'
        style={{
          width: '500px',
          height: '500px',
          top: '50%',
          left: '-200px',
          opacity: 0.4,
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
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className='section-label'>What I work with</p>
            <div className='divider' style={{ margin: '0.75rem auto 1rem' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Tech Stack
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginTop: '1rem',
                fontSize: '0.975rem',
                maxWidth: '500px',
                margin: '1rem auto 0',
                lineHeight: 1.6,
              }}
            >
              Six years of building across the full stack — from pixels to
              production.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 60} direction='up'>
              <div
                className='glass'
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>{group.icon}</span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--cyan-ice)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
