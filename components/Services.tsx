'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
      </svg>
    ),
    title: 'Landing Pages',
    tagline: 'High-converting pages, fast.',
    description:
      'A focused, beautifully designed landing page that turns visitors into leads or customers. Perfect for product launches, campaigns, or businesses that need a strong first impression.',
    deliverables: ['Responsive design', 'SEO foundations', 'Contact/lead form', 'Performance optimised'],
    timeline: '3–5 days',
    price: 'From $500',
    accent: 'var(--cyan-ice)',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
      </svg>
    ),
    title: 'Business Websites',
    tagline: 'Your full online presence, built right.',
    description:
      'A complete multi-page website for your business — homepage, about, services, contact, and more. Clean, professional, and built to represent your brand and generate enquiries.',
    deliverables: ['Multi-page build', 'Mobile responsive', 'Basic SEO setup', 'Contact forms'],
    timeline: '5–10 days',
    price: 'From $1,500',
    accent: 'var(--cyan-ice)',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
    title: 'MVP Development',
    tagline: 'Validate your idea without burning budget.',
    description:
      'Turn your concept into a working product fast. Authentication, database, core features, and a clean UI — everything you need to get in front of real users and start learning.',
    deliverables: ['Auth & user accounts', 'Core feature set', 'Database & API', 'Deploy-ready'],
    timeline: '2–4 weeks',
    price: 'From $3,000',
    accent: '#22D3EE',
    featured: true,
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
      </svg>
    ),
    title: 'Mobile Apps',
    tagline: 'iOS & Android, built once, run everywhere.',
    description:
      'Native-quality mobile apps using React Native and Expo. From social platforms to fitness tools to business utilities — apps your users will actually want to use.',
    deliverables: ['iOS & Android', 'Push notifications', 'Offline support', 'App Store ready'],
    timeline: '4–8 weeks',
    price: 'From $5,000',
    accent: 'var(--cyan-ice)',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
    title: 'Full-Stack Web Apps',
    tagline: 'Production-grade. Built to scale.',
    description:
      'End-to-end web applications with full frontend, backend, authentication, admin dashboards, third-party integrations, and deployment. Built to handle real users and real data.',
    deliverables: ['Full frontend & backend', 'Auth & roles', 'Admin dashboard', 'API integrations'],
    timeline: '4–8 weeks',
    price: 'From $3,000',
    accent: 'var(--cyan-ice)',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
      </svg>
    ),
    title: 'Ongoing Support',
    tagline: 'A developer on call, when you need one.',
    description:
      'Monthly retainers for businesses that need continuous development support — new features, fixes, performance improvements, security updates, and a reliable technical partner.',
    deliverables: ['Dedicated hours/month', 'Priority response', 'Feature development', 'Maintenance & fixes'],
    timeline: 'Monthly rolling',
    price: 'From $500/mo',
    accent: 'var(--cyan-ice)',
  },
];

export default function Services() {
  return (
    <section id='services' className='section' style={{ position: 'relative' }}>
      <div className='orb orb-cyan' style={{ width: '500px', height: '500px', top: '10%', left: '-200px', opacity: 0.15 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
            <p className='section-label'>What I offer</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Services built around{' '}
              <span className='gradient-text'>your goals</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
              Every project is different. Whether you need something shipped fast or built to last,
              I'll give you honest timelines, transparent pricing, and code you can be proud of.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 60}>
              <motion.div
                whileHover={{ y: -4 }}
                className='glass'
                style={{
                  borderRadius: '20px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  borderColor: service.featured ? 'rgba(103,232,249,0.25)' : undefined,
                }}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(103,232,249,0.12)',
                    border: '1px solid rgba(103,232,249,0.3)',
                    borderRadius: '99px',
                    padding: '0.2rem 0.7rem',
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    color: 'var(--cyan-ice)',
                  }}>
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(103,232,249,0.08)',
                  border: '1px solid rgba(103,232,249,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: service.accent,
                  marginBottom: '1.25rem',
                  flexShrink: 0,
                }}>
                  {service.icon}
                </div>

                {/* Title + tagline */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.01em',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: service.accent,
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                }}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  flex: 1,
                }}>
                  {service.description}
                </p>

                {/* Deliverables */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {service.deliverables.map((d) => (
                    <div key={d} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.4rem',
                    }}>
                      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='var(--cyan-ice)' strokeWidth='2.5'>
                        <path d='M5 13l4 4L19 7' />
                      </svg>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Footer — price + timeline */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}>
                      {service.price}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '99px',
                    padding: '0.25rem 0.75rem',
                  }}>
                    <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='var(--text-muted)' strokeWidth='2'>
                      <circle cx='12' cy='12' r='10' />
                      <path d='M12 6v6l4 2' />
                    </svg>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {service.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn>
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'rgba(103,232,249,0.04)',
            border: '1px solid rgba(103,232,249,0.1)',
            borderRadius: '24px',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--cyan-ice)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Not sure what you need?
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}>
              Let's talk through your project
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 auto 2rem',
              fontWeight: 300,
            }}>
              Book a free 30-minute discovery call and I'll help you figure out
              exactly what you need — no obligation, no sales pitch.
            </p>
            <a href='#booking' className='btn-primary' style={{ fontSize: '0.95rem' }}>
              Book a free call
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'>
                <path d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
