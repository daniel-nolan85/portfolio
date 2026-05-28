'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    subtitle: 'Free · 30 minutes',
    description:
      "We start with a conversation — no pitch, no pressure. You tell me about your project, your goals, and your timeline. I ask questions, share honest thoughts, and we figure out if we're a good fit.",
    icon: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Proposal & Timeline',
    subtitle: 'Within 48 hours',
    description:
      "After our call I put together a clear proposal — scope, deliverables, timeline, and price. No hidden costs, no vague estimates. You'll know exactly what you're getting before anything begins.",
    icon: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Development',
    subtitle: 'Regular updates throughout',
    description:
      "Once we agree on scope I get to work. You'll get regular progress updates — no disappearing acts, no surprises. I build in stages so you can review and give feedback as we go.",
    icon: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Review & Revisions',
    subtitle: 'Your feedback matters',
    description:
      'Before launch you get a chance to review everything and request changes. I want you to be genuinely happy with the result — not just technically complete, but right for your business.',
    icon: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        <path d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Launch & Handover',
    subtitle: 'You own everything',
    description:
      'We deploy, go live, and I hand over everything — code, credentials, documentation. Your project is yours completely. No lock-in, no hidden dependencies on me continuing to be involved.',
    icon: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M5 3l14 9-14 9V3z' />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Ongoing Support',
    subtitle: 'Optional · Monthly retainer',
    description:
      'Need continued help after launch? I offer monthly retainers for businesses that want a developer on call for new features, fixes, and improvements. No long-term commitment required.',
    icon: (
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
      >
        <path d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id='process' className='section' style={{ position: 'relative' }}>
      <div
        className='orb orb-cyan'
        style={{
          width: '500px',
          height: '500px',
          top: '20%',
          right: '-150px',
          opacity: 0.12,
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
            <p className='section-label'>How it works</p>
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
              Simple, transparent,{' '}
              <span className='gradient-text'>no surprises.</span>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Working with a developer shouldn't be stressful. Here's exactly
              what happens from first conversation to final delivery.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        {/* Two column layout on large screens */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '4rem',
            alignItems: 'start',
          }}
          className='process-layout'
        >
          {/* Left: steps */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '27px',
                top: '40px',
                bottom: '40px',
                width: '1px',
                background:
                  'linear-gradient(to bottom, rgba(103,232,249,0.4), rgba(103,232,249,0.05))',
              }}
              className='process-line'
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map((step, i) => (
                <FadeIn key={step.number} delay={i * 80}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    style={{
                      display: 'flex',
                      gap: '2rem',
                      alignItems: 'flex-start',
                      padding: '2rem 0',
                      borderBottom:
                        i < steps.length - 1
                          ? '1px solid rgba(255,255,255,0.04)'
                          : 'none',
                      position: 'relative',
                    }}
                    className='process-step'
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(103,232,249,0.08)',
                        border: '1px solid rgba(103,232,249,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan-ice)',
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 1,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {step.icon}
                    </div>
                    <div style={{ flex: 1, paddingTop: '0.25rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '0.5rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--cyan-ice)',
                            letterSpacing: '0.1em',
                            opacity: 0.6,
                          }}
                        >
                          {step.number}
                        </span>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {step.title}
                        </h3>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.05em',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: '99px',
                            padding: '0.15rem 0.6rem',
                          }}
                        >
                          {step.subtitle}
                        </span>
                      </div>
                      <p
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          lineHeight: 1.75,
                          maxWidth: '620px',
                          fontWeight: 300,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: sticky summary card */}
          <FadeIn delay={200}>
            <div style={{ position: 'sticky', top: '8rem' }}>
              <div
                className='glass'
                style={{ borderRadius: '20px', padding: '2rem' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--cyan-ice)',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                  }}
                >
                  What to expect
                </p>
                {[
                  {
                    icon: '⚡',
                    text: 'Fast turnaround without cutting corners',
                  },
                  { icon: '💬', text: 'Regular updates — no radio silence' },
                  {
                    icon: '🎯',
                    text: 'Focused on your goals, not just the brief',
                  },
                  { icon: '📦', text: 'Clean handover — you own everything' },
                  { icon: '🤝', text: 'A partner, not just a contractor' },
                ].map((point) => (
                  <div
                    key={point.text}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1rem',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      {point.icon}
                    </span>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                      }}
                    >
                      {point.text}
                    </p>
                  </div>
                ))}
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '1.5rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <a
                    href='#booking'
                    className='btn-primary'
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                    }}
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

        {/* CTA */}
        <FadeIn>
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}
            >
              Ready to start at step one?
            </p>
            <a
              href='#booking'
              className='btn-primary'
              style={{ fontSize: '0.95rem' }}
            >
              Book your free discovery call
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
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .process-line { display: none !important; }
          .process-step { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
