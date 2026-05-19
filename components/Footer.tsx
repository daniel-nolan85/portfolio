'use client';

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
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Nolan<span style={{ color: 'var(--cyan-ice)' }}>code</span>
        </a>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © {new Date().getFullYear()} Daniel Nolan. Built with Next.js.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
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
