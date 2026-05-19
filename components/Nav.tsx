'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(8, 12, 16, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href='#'
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.3rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              flexShrink: 0,
            }}
          >
            Nolan<span style={{ color: 'var(--cyan-ice)' }}>code</span>
          </a>

          {/* Desktop links */}
          <div
            id='desktop-nav'
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--cyan-ice)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-secondary)')
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href='/daniel-nolan-resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary'
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
            >
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            id='hamburger-btn'
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 60,
              position: 'relative',
            }}
            aria-label='Toggle menu'
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  background:
                    menuOpen && i === 1 ? 'transparent' : 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                  transform:
                    menuOpen && i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : menuOpen && i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              background: 'rgba(8, 12, 16, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              padding: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--cyan-ice)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-primary)')
                }
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href='https://daniel-nolan85.github.io/portfolio/Daniel%20Nolan%20Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className='btn-primary'
              style={{ marginTop: '1rem' }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
