'use client';

import SolarIcon from './SolarIcon';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2rem 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <a
          href='#'
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          <SolarIcon size={26} />
          <span
            style={{
              fontFamily: 'DuneRise, serif',
              fontSize: '13px',
              color: 'rgba(248,250,252,0.95)',
              letterSpacing: '1px',
              textShadow: '0 0 12px rgba(103,232,249,0.4)',
              whiteSpace: 'nowrap',
            }}
          >
            Nolan
            <span
              style={{
                color: '#67E8F9',
                textShadow: '0 0 12px rgba(103,232,249,0.7)',
              }}
            >
              code
            </span>
          </span>
        </a>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © {new Date().getFullYear()} Nolancode. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'Process', href: '#process' },
            { label: 'Work', href: '#projects' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--cyan-ice)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-muted)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
