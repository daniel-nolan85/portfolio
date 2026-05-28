'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// What I build — client-focused outcomes
const outcomes = [
  'Mobile apps your customers will love',
  'Web apps that scale with your business',
  'Landing pages that convert visitors',
  'MVPs ready to validate in weeks',
  'Full-stack products, end to end',
];

const socials = [
  {
    href: 'https://github.com/daniel-nolan85',
    label: 'GitHub',
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/daniel-nolan85',
    label: 'LinkedIn',
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/nolan_code',
    label: 'Instagram',
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
      </svg>
    ),
  },
];

// ── Solar System ──────────────────────────────────────────────────────────────

function SolarSystem() {
  const delays = useMemo(
    () => [
      -(Math.random() * 130),
      -(Math.random() * 210),
      -(Math.random() * 320),
      -(Math.random() * 460),
    ],
    [],
  );

  return (
    <div className='solar-wrapper' aria-hidden='true'>
      <div className='solar-system'>
        <div className='sun'>
          <div className='sun-text'>
            <span className='sun-n'>N</span>
            <span className='sun-rest'>lancode</span>
          </div>
        </div>
        <div className='orbit orbit-1' />
        <div
          className='planet-arm planet-arm-1'
          style={{ animationDelay: `${delays[0]}s` }}
        >
          <div className='planet planet-1' />
        </div>
        <div className='orbit orbit-2' />
        <div
          className='planet-arm planet-arm-2'
          style={{ animationDelay: `${delays[1]}s` }}
        >
          <div className='planet planet-2' />
        </div>
        <div className='orbit orbit-3' />
        <div
          className='planet-arm planet-arm-3'
          style={{ animationDelay: `${delays[2]}s` }}
        >
          <div className='planet planet-3' />
        </div>
        <div className='orbit orbit-4' />
        <div
          className='planet-arm planet-arm-4'
          style={{ animationDelay: `${delays[3]}s` }}
        >
          <div className='planet planet-4' />
        </div>
      </div>
      <p className='solar-tagline'>BUILD · SHIP · REPEAT</p>

      <style>{`
        @font-face {
          font-family: 'DuneRise';
          src: url('/fonts/Dune_Rise.otf') format('opentype');
          font-display: swap;
        }
        .solar-wrapper { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
        .solar-system { position: relative; display: flex; align-items: center; justify-content: center; transform: skewX(-20deg); transform-origin: center; width: 520px; height: 520px; }
        .sun { position: absolute; z-index: 10; width: 160px; height: 160px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(103,232,249,0.85) 40%, rgba(34,211,238,0.5) 70%, rgba(103,232,249,0.05) 100%); box-shadow: 0 0 40px rgba(103,232,249,0.7), 0 0 80px rgba(103,232,249,0.35), 0 0 140px rgba(103,232,249,0.15); display: flex; align-items: center; justify-content: center; transform: skewX(20deg); }
        .sun-text { display: flex; align-items: center; position: absolute; white-space: nowrap; font-family: 'DuneRise', serif; font-size: 36px; color: rgba(248,250,252,0.98); text-shadow: 0 0 15px rgba(103,232,249,0.9), 0 0 30px rgba(103,232,249,0.5); letter-spacing: 1px; }
        .sun-n { position: relative; left: 30px; }
        .sun-rest { position: relative; left: 115px; }
        .orbit { position: absolute; border-radius: 50%; border-style: solid; pointer-events: none; }
        .orbit-1 { width: 230px; height: 230px; border-width: 1px; border-color: rgba(103,232,249,0.45) rgba(103,232,249,0.08) rgba(103,232,249,0.08) rgba(103,232,249,0.45); }
        .orbit-2 { width: 320px; height: 320px; border-width: 1px; border-color: rgba(148,163,184,0.35) rgba(148,163,184,0.06) rgba(148,163,184,0.06) rgba(148,163,184,0.35); }
        .orbit-3 { width: 410px; height: 410px; border-width: 1px; border-color: rgba(103,232,249,0.25) rgba(103,232,249,0.04) rgba(103,232,249,0.04) rgba(103,232,249,0.25); }
        .orbit-4 { width: 510px; height: 510px; border-width: 1px; border-color: rgba(148,163,184,0.18) rgba(148,163,184,0.03) rgba(148,163,184,0.03) rgba(148,163,184,0.18); }
        .planet-arm { position: absolute; width: 0; height: 0; animation: orbit-spin linear infinite; }
        .planet-arm-1 { animation-duration: 130s; }
        .planet-arm-2 { animation-duration: 210s; }
        .planet-arm-3 { animation-duration: 320s; }
        .planet-arm-4 { animation-duration: 460s; }
        @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .planet { position: absolute; border-radius: 50%; transform: translateY(-50%); }
        .planet-1 { width: 14px; height: 14px; top: -115px; left: -7px; background: radial-gradient(circle at 35% 35%, #ffffff, #67E8F9); box-shadow: 0 0 8px rgba(103,232,249,0.9), 0 0 18px rgba(103,232,249,0.5); }
        .planet-2 { width: 20px; height: 20px; top: -160px; left: -10px; background: radial-gradient(circle at 35% 35%, #e2e8f0, #94A3B8); box-shadow: 0 0 8px rgba(148,163,184,0.7), 0 0 16px rgba(148,163,184,0.3); }
        .planet-3 { width: 16px; height: 16px; top: -205px; left: -8px; background: radial-gradient(circle at 35% 35%, #cffafe, #22D3EE); box-shadow: 0 0 10px rgba(34,211,238,0.9), 0 0 22px rgba(34,211,238,0.4); }
        .planet-4 { width: 11px; height: 11px; top: -255px; left: -5.5px; background: radial-gradient(circle at 35% 35%, #f1f5f9, #64748b); box-shadow: 0 0 6px rgba(100,116,139,0.6), 0 0 12px rgba(100,116,139,0.25); }
        .solar-tagline { margin-top: 1.5rem; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 400; letter-spacing: 7px; color: rgba(103,232,249,0.5); text-align: center; text-transform: uppercase; }
        @media (max-width: 1100px) { .solar-system { transform: skewX(-20deg) scale(0.8); width: 420px; height: 420px; } }
        @media (max-width: 768px) { .solar-system { transform: skewX(-20deg) scale(0.55); width: 290px; height: 290px; } .solar-wrapper { margin-bottom: 1rem; } }
      `}</style>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [outcomeIndex, setOutcomeIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = outcomes[outcomeIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        50,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setOutcomeIndex((prev) => (prev + 1) % outcomes.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, outcomeIndex]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 0 4rem',
      }}
    >
      <div
        className='orb orb-cyan'
        style={{
          width: '600px',
          height: '600px',
          top: '-150px',
          right: '-150px',
          opacity: 0.2,
        }}
      />
      <div
        className='orb orb-silver'
        style={{
          width: '400px',
          height: '400px',
          bottom: '-100px',
          left: '-150px',
          opacity: 0.2,
        }}
      />

      <div
        className='hero-grid'
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <motion.div variants={container} initial='hidden' animate='show'>
          {/* Availability badge */}
          <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
            <span className='tag'>
              <span style={{ marginRight: '0.4rem' }}>🟢</span>
              Available for new projects
            </span>
          </motion.div>

          {/* Headline — outcome focused */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
              color: 'var(--text-primary)',
            }}
          >
            From idea to launch —<br />
            <span className='gradient-text'>I build what your</span>
            <br />
            <span className='gradient-text'>business needs.</span>
          </motion.h1>

          {/* Typewriter — outcomes */}
          <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                color: 'var(--cyan-ice)',
                letterSpacing: '0.02em',
                minHeight: '2rem',
              }}
            >
              {displayed}
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.1em',
                  background: 'var(--cyan-ice)',
                  marginLeft: '2px',
                  verticalAlign: 'middle',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            </p>
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            variants={item}
            style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '480px',
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}
          >
            I'm Daniel — a full-stack developer based in Henderson, Nevada,
            building apps and websites under{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              Nolancode
            </span>
            . I work with founders, startups, and businesses who need reliable,
            experienced development without the agency overhead.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
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
            <a href='#services' className='btn-secondary'>
              See what I offer
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {[
              { value: '14+', label: 'Projects shipped' },
              { value: '6+', label: 'Years experience' },
              { value: '100%', label: 'Remote friendly' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--cyan-ice)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    marginTop: '0.25rem',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
              }}
            >
              FIND ME ON
            </span>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={s.label}
                whileHover={{ y: -3 }}
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--cyan-ice)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-muted)')
                }
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: solar system */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SolarSystem />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='scroll-indicator'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontSize: '0.65rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '1px',
            height: '40px',
            background:
              'linear-gradient(to bottom, var(--cyan-ice), transparent)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
