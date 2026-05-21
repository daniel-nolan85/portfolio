'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrls?: { label: string; url: string }[];
  status?: string;
  featured?: boolean;
  type: 'Mobile App' | 'Full-Stack App' | 'Client Site';
};

const projects: Project[] = [
  {
    title: 'Gym Buddies',
    description:
      'A full-featured social fitness platform for iOS and Android. Users can track workouts, follow friends, share progress posts with media carousels, react and comment in real time, join group chats with @mentions and swipe-to-quote, follow AI-generated workout and diet plans, track nutrition macros, and earn achievements and streaks. Completely free for all users.',
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Clerk',
      'Cloudinary',
      'Inngest',
    ],
    codeUrls: [{ label: 'GitHub', url: 'https://github.com/daniel-nolan85' }],
    status: 'Coming to App Store',
    featured: true,
    type: 'Mobile App',
  },
  {
    title: 'NovaQuest',
    description:
      'A space-themed educational mobile app for young explorers, leveraging the NASA API to surface astronomy pictures, Mars Rover photos, ISS tracking, asteroid data, and detailed planetary info. Features missions, XP-based ranking, achievements, interactive games including trivia, drag-and-drop challenges, and an asteroid dodger built with Matter.js physics.',
    tags: [
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'MongoDB',
      'NASA API',
      'Matter.js',
      'Socket.io',
    ],
    codeUrls: [
      {
        label: 'Frontend',
        url: 'https://github.com/daniel-nolan85/novaquest-front',
      },
      {
        label: 'Backend',
        url: 'https://github.com/daniel-nolan85/novaquest-back',
      },
    ],
    status: 'In Development',
    type: 'Mobile App',
  },
  {
    title: 'CreAIte',
    description:
      'An AI-powered image generation platform built on the MERN stack. Users generate images from text prompts via OpenAI DALL-E, collaborate in real-time via Socket.io chat, and manage their creations with Cloudinary. Features Stripe payments, Firebase authentication, and animated UI with Framer Motion and React Tilt.',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'OpenAI',
      'Socket.io',
      'Stripe',
      'Firebase',
      'Cloudinary',
      'Chart.js',
    ],
    codeUrls: [
      {
        label: 'Frontend',
        url: 'https://github.com/daniel-nolan85/CreAIte-front',
      },
      {
        label: 'Backend',
        url: 'https://github.com/daniel-nolan85/CreAIte-back',
      },
    ],
    liveUrl: 'https://creaite.media/',
    type: 'Full-Stack App',
  },
  {
    title: 'Love Is In Cyprus',
    description:
      'A full-stack MERN dating application with real-time chat via Socket.io, Google Firebase authentication with OTP verification, PayPal payment and refund processing, and facial recognition for profile image verification. Includes a comprehensive admin dashboard with Mailchimp integration and Chart.js analytics. Also available as a fully functional PWA.',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Firebase',
      'PayPal',
      'Mailchimp',
      'PWA',
      'Redux',
    ],
    liveUrl: 'https://www.loveisincyprus.com',
    codeUrls: [
      {
        label: 'Frontend',
        url: 'https://github.com/daniel-nolan85/loveisincyprus-front',
      },
      {
        label: 'Backend',
        url: 'https://github.com/daniel-nolan85/loveisincyprus-back',
      },
    ],
    type: 'Full-Stack App',
  },
  {
    title: 'Apex Scrap',
    description:
      'A MERN stack application for a scrap metal company integrating the DVLA Vehicle Enquiry Service API to provide real-time vehicle quotes. Features Context API state management, Yup form validation, animated counters, Swiper carousels, and Nodemailer contact form.',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'DVLA API',
      'Nodemailer',
      'Context API',
      'Swiper',
    ],
    liveUrl: 'https://apex-scrap.netlify.app/',
    codeUrls: [
      { label: 'GitHub', url: 'https://github.com/daniel-nolan85/apex-scrap' },
    ],
    type: 'Full-Stack App',
  },
  {
    title: 'Nolan Clothing',
    description:
      'An e-commerce application built with React and SCSS, using Firebase authentication and Redux for state management. Users can browse items, add to basket, and complete transactions with test card details.',
    tags: ['React', 'SCSS', 'Firebase', 'Redux'],
    liveUrl: 'https://nolan-clothing.netlify.app/',
    codeUrls: [
      {
        label: 'GitHub',
        url: 'https://github.com/daniel-nolan85/nolan-clothing',
      },
    ],
    type: 'Full-Stack App',
  },
  {
    title: 'Jenn-Jenn Wellness',
    description:
      'Landing page for a spirituality and mindfulness brand. Features Slick Carousel animations, video gallery, timed modal popup, AOS scroll animations, and a fully functional contact form.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Slick Carousel', 'AOS'],
    type: 'Client Site',
  },
  {
    title: 'Milowe',
    description:
      'Landing page for a COVID test provider. Uses IntersectionObserver API for smooth scroll-triggered animations and includes a fully functional PHP contact form backend.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'IntersectionObserver'],
    liveUrl: 'https://daniel-nolan85.github.io/milowe/',
    codeUrls: [
      { label: 'GitHub', url: 'https://github.com/daniel-nolan85/milowe' },
    ],
    type: 'Client Site',
  },
  {
    title: 'LNWC',
    description:
      'Multi-page website for Lake Norman Wildlife Conservationists built with Bootstrap 5, featuring AOS animations, animated count-up stats, sliding accordions, reCAPTCHA contact forms, live webcam feeds, and an events calendar.',
    tags: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'AOS', 'reCAPTCHA'],
    liveUrl: 'https://daniel-nolan85.github.io/LNWC/',
    codeUrls: [
      { label: 'GitHub', url: 'https://github.com/daniel-nolan85/LNWC' },
    ],
    type: 'Client Site',
  },
  {
    title: 'Green Point',
    description:
      'Landing page for a waste and refuse collection company. Uses Tilt.js for interactive 3D card animations and includes a fully functioning PHP backend contact form.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tilt.js', 'PHP'],
    liveUrl: 'https://daniel-nolan85.github.io/green-point/',
    codeUrls: [
      { label: 'GitHub', url: 'https://github.com/daniel-nolan85/green-point' },
    ],
    type: 'Client Site',
  },
  {
    title: 'Gents of Brooklyn',
    description:
      'Landing page for a barbershop academy. Includes a video showreel, timed modal with working email functionality, and uses JavaScript MutationObservers to watch for CSS class changes.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MutationObserver', 'Nodemailer'],
    liveUrl: 'https://daniel-nolan85.github.io/the-gents-of-brooklyn-academy/',
    codeUrls: [
      {
        label: 'GitHub',
        url: 'https://github.com/daniel-nolan85/the-gents-of-brooklyn-academy',
      },
    ],
    type: 'Client Site',
  },
  {
    title: 'Home Remodel Demo',
    description:
      'Interior pages for a home remodeling demo website built for Lead Science. Features Bootstrap responsive styling, JavaScript scroll-based animations, and a dynamic gallery with infinite sliding animation, pause-on-hover, and expand-on-click functionality with navigable expanded images.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://remodeldemo.leadscience.com/',
    codeUrls: [
      {
        label: 'GitHub',
        url: 'https://github.com/daniel-nolan85/Home-Remodel-Demo',
      },
    ],
    type: 'Client Site',
  },
  {
    title: 'Legal Demo',
    description:
      'Interior pages for a legal demo website built for Lead Science. Features Bootstrap layouts and JavaScript animations across About, Staff, Practice Areas, Case Results, and individual Profile pages. Includes a functional sidebar with contact form validation.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://legaldemo2.leadscience.com/',
    codeUrls: [
      { label: 'GitHub', url: 'https://github.com/daniel-nolan85/Legal-Demo' },
    ],
    type: 'Client Site',
  },
  {
    title: 'Legal Mockup',
    description:
      'A responsive legal services showcase built with Bootstrap, integrating AOS scroll animations and a sophisticated FancyApps image gallery. Demonstrates clean professional layout with intuitive navigation and polished interactive elements.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'AOS', 'FancyApps'],
    liveUrl: 'https://daniel-nolan85.github.io/legal-mockup/',
    codeUrls: [
      {
        label: 'GitHub',
        url: 'https://github.com/daniel-nolan85/legal-mockup',
      },
    ],
    type: 'Client Site',
  },
];

const filters = ['All', 'Mobile App', 'Full-Stack App', 'Client Site'] as const;
type Filter = (typeof filters)[number];

const typeColors: Record<string, string> = {
  'Mobile App': 'rgba(103, 232, 249, 0.12)',
  'Full-Stack App': 'rgba(139, 92, 246, 0.12)',
  'Client Site': 'rgba(148, 163, 184, 0.1)',
};
const typeBorderColors: Record<string, string> = {
  'Mobile App': 'rgba(103, 232, 249, 0.25)',
  'Full-Stack App': 'rgba(139, 92, 246, 0.25)',
  'Client Site': 'rgba(148, 163, 184, 0.15)',
};
const typeTextColors: Record<string, string> = {
  'Mobile App': 'var(--cyan-ice)',
  'Full-Stack App': '#A78BFA',
  'Client Site': 'var(--silver-400)',
};

function ExternalIcon() {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    >
      <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' />
      <polyline points='15 3 21 3 21 9' />
      <line x1='10' y1='14' x2='21' y2='3' />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    >
      <polyline points='16 18 22 12 16 6' />
      <polyline points='8 6 2 12 8 18' />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);
  const filtered =
    activeFilter === 'All' ? rest : rest.filter((p) => p.type === activeFilter);

  return (
    <section id='projects' className='section' style={{ position: 'relative' }}>
      <div
        className='orb orb-cyan'
        style={{
          width: '500px',
          height: '500px',
          top: 0,
          right: '-200px',
          opacity: 0.3,
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
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <p className='section-label'>What I've built</p>
            <div className='divider' />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Projects
            </h2>
          </div>
        </FadeIn>

        {/* Featured Gym Buddies */}
        <FadeIn delay={100}>
          <motion.div
            className='glass cyan-glow'
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '3rem',
              borderColor: 'rgba(103,232,249,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background:
                  'radial-gradient(circle, rgba(103,232,249,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan-ice)',
                    background: 'rgba(103,232,249,0.1)',
                    border: '1px solid rgba(103,232,249,0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '99px',
                  }}
                >
                  ⭐ Featured Project
                </span>
                {featured.status && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: '#4ADE80',
                      background: 'rgba(74,222,128,0.1)',
                      border: '1px solid rgba(74,222,128,0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '99px',
                    }}
                  >
                    🚀 {featured.status}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--cyan-ice)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {featured.type}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                fontSize: '0.975rem',
                maxWidth: '780px',
                marginBottom: '1.5rem',
              }}
            >
              {featured.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {featured.tags.map((tag) => (
                <span key={tag} className='tag'>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {featured.codeUrls?.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-secondary'
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  <CodeIcon /> {c.label}
                </a>
              ))}
              <a
                href='https://gymbuddies.nolancode.com'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary'
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
              >
                Visit Landing Page →
              </a>
            </div>
          </motion.div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={150}>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background:
                    activeFilter === f ? 'var(--cyan-ice)' : 'transparent',
                  borderColor:
                    activeFilter === f
                      ? 'var(--cyan-ice)'
                      : 'rgba(255,255,255,0.12)',
                  color:
                    activeFilter === f ? '#080C10' : 'var(--text-secondary)',
                  fontWeight: activeFilter === f ? 600 : 400,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className='glass'
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Type badge */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '99px',
                      background: typeColors[project.type],
                      border: `1px solid ${typeBorderColors[project.type]}`,
                      color: typeTextColors[project.type],
                    }}
                  >
                    {project.type}
                  </span>
                  {project.status && (
                    <span
                      style={{
                        marginLeft: '0.4rem',
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#4ADE80',
                        background: 'rgba(74,222,128,0.08)',
                        border: '1px solid rgba(74,222,128,0.15)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '99px',
                      }}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                {/* All tags — wrapping */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '5px',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.78rem',
                        color: 'var(--cyan-ice)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-mono)',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = '1')
                      }
                    >
                      <ExternalIcon /> Live
                    </a>
                  )}
                  {project.codeUrls?.map((c) => (
                    <a
                      key={c.label}
                      href={c.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-mono)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--text-primary)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--text-muted)')
                      }
                    >
                      <CodeIcon /> {c.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
