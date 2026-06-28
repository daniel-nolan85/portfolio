'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const clients = [
  {
    icon: '🚀',
    title: 'Startups & Founders',
    description:
      'You have an idea and need someone who can build it properly from day one — without burning your runway on bloated agency fees.',
  },
  {
    icon: '🏢',
    title: 'Small Businesses',
    description:
      "You need a professional online presence that actually works for your business — not a template that looks like everyone else's.",
  },
  {
    icon: '📱',
    title: 'App Idea Owners',
    description:
      "You've been sitting on an app idea and need a developer who can take it from concept to something real users can download.",
  },
  {
    icon: '🎯',
    title: 'Marketing Teams',
    description:
      'You need landing pages, campaign sites, or frontend builds delivered fast — without waiting weeks for an internal dev team.',
  },
  {
    icon: '🏗️',
    title: 'Agencies',
    description:
      "You're overloaded or need specialist React/React Native skills for a client project. I integrate with your workflow seamlessly.",
  },
  {
    icon: '🔄',
    title: 'Businesses Needing a Revamp',
    description:
      'Your current site or app is outdated, slow, or simply not reflecting the quality of your business. Time to fix that.',
  },
];

export default function WhoIWorkWith() {
  return (
    <section id='who' className='section' style={{ position: 'relative' }}>
      <div
        className='orb orb-silver'
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          right: '-100px',
          opacity: 0.15,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
            <p className='section-label'>Who I work with</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Is this a good fit?{' '}
              <span className='gradient-text'>Find out.</span>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              I work best with clients who value quality, clear communication,
              and a smooth, efficient delivery process.
            </p>
          </div>
        </FadeIn>

        {/* Client types grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
            alignItems: 'stretch',
          }}
        >
          {clients.map((client, i) => (
            <FadeIn key={client.title} delay={i * 60}>
              <motion.div
                whileHover={{ y: -4 }}
                className='glass'
                style={{
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(103,232,249,0.06)',
                    border: '1px solid rgba(103,232,249,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    flexShrink: 0,
                  }}
                >
                  {client.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {client.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {client.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Great fit card — centered */}
        <FadeIn>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <div
              className='glass'
              style={{
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '640px',
                width: '100%',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--cyan-ice)',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                }}
              >
                ✓ You're a great fit if...
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem 2rem',
                }}
                className='great-fit-grid'
              >
                {[
                  'You have a clear goal but need help with execution',
                  'You value quality and reliability over cutting corners',
                  'You want a developer who communicates proactively',
                  "You're ready to move forward within a few weeks",
                  'You see development as an investment, not a cost',
                  'You want a partner, not just someone to follow orders',
                ].map((point) => (
                  <div
                    key={point}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='var(--cyan-ice)'
                      strokeWidth='2.5'
                      style={{ marginTop: '3px', flexShrink: 0 }}
                    >
                      <path d='M5 13l4 4L19 7' />
                    </svg>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a
                  href='#booking'
                  className='btn-primary'
                  style={{ fontSize: '0.875rem' }}
                >
                  Book a free call
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.5'
                  >
                    <path d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .great-fit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
