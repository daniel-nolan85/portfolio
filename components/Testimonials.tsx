'use client';

import FadeIn from './FadeIn';

const testimonials = [
  {
    quote:
      'I worked with Daniel as a member of my frontend development team, and found him to be a standout developer. Daniel is always eager to learn more, pick up work, and tackle problems head on without uncertainty or doubt. On top of all of that, he is a great communicator and does not hesitate to reach out to the appropriate people for guidance or information necessary when needed. He is self sufficient, responsible and a quick learner. All in all, Daniel is the exact kind of Developer you want supporting you: Curious, Eager and Reliable.',
    name: 'Azzi Haq',
    title: 'Senior Frontend Developer',
    company: 'Gap Inc.',
    initials: 'AH',
  },
  {
    quote:
      'Daniel consistently demonstrated a strong desire to learn and quickly absorbed new concepts and technologies. He is highly collaborative, receptive to feedback, and always willing to help teammates solve problems. What impressed me most was his ability to take ownership of new challenges and become productive in a short amount of time. Daniel was a valued member of the team, and I would welcome the opportunity to work with him again in the future.',
    name: 'Laurence Macaspac',
    title: 'Senior Frontend Developer',
    company: 'Gap Inc.',
    initials: 'LM',
  },
  {
    quote:
      'Daniel is a knowledgeable Front-End Developer with a great attitude and strong work ethic. What I appreciated most about working with him was his willingness to take on new challenges. He was always asking how he could help, looking for additional work, and eager to contribute wherever he was needed. Daniel is also genuinely kind, easy to work with, and a true team player. I would gladly work with Daniel again and would highly recommend him to any team looking for a skilled developer who is proactive, dependable, and always willing to go the extra mile.',
    name: 'Maja Franklin',
    title: 'Product Manager & Frontend Developer',
    company: 'Gap Inc.',
    initials: 'MF',
  },
  {
    quote:
      "Daniel worked with us as a front end developer and web designer on large scale migration and redesign projects for different verticals. He quickly learned our proprietary platform, adapted to complex workflows, and became a reliable contributor the team could count on. Throughout his time with us, Daniel consistently delivered high quality work across a wide range of projects. He's sharp, dependable, very professional and most importantly he gets it! Any company would be lucky to have him on their team.",
    name: 'Bilal Tawil',
    title: 'Art Director',
    company: 'DealerOn Inc.',
    initials: 'BT',
  },
  {
    quote:
      'Daniel has successfully developed my website and PWA, and solved the technical challenges and unexpected issues that arose along the course. He was always proactive in both setting up video calls to review every completed task, and securing and test-proving every stage of the development in order to deliver flawless work. Daniel works through a precise and well-organised interactive methodology with the client so that nothing is missed.',
    name: 'William Wolf',
    title: 'Founder & CEO',
    company: 'Love is in Cyprus',
    initials: 'WW',
  },
  {
    quote:
      'Daniel helped me launch my brand and had amazing ideas on how to design my website that was functional for me. He was extremely responsive, had great insight as well as patience when explaining functionality. Cheers Daniel, thanks for helping me get my brand off the ground.',
    name: 'Jennifer Justice',
    title: 'CEO',
    company: 'Jenn-Jenn Wellness',
    initials: 'JJ',
  },
  {
    quote:
      'I have used Daniel to construct two of my websites to which he has followed the spec I supplied and also introduced me to different innovations along the way. Daniel has provided me and continues to provide an excellent service to update and maintain my sites. Daniel is always on hand when I require his assistance and supports my team very well.',
    name: 'Michael Knapton',
    title: 'Director',
    company: 'Gents of Brooklyn Academy & Green Point',
    initials: 'MK',
  },
  {
    quote:
      'I hired Daniel as a Frontend developer at Edenred. Daniel showed passion and dedication in his craft as a developer and turned out to be a great team member, being able to communicate efficiently and accurately to the different stakeholders and showing constant curiosity toward his learning process and development as a professional. He would definitely be adding value to any organisation that would decide to take him in.',
    name: 'Giovanni Capuano',
    title: 'Senior Front End Developer',
    company: 'Edenred',
    initials: 'GC',
  },
];

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='section'
      style={{ position: 'relative' }}
    >
      <div
        className='orb orb-silver'
        style={{
          width: '600px',
          height: '600px',
          bottom: '-100px',
          right: '-200px',
          opacity: 0.5,
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
          <div style={{ marginBottom: '4rem' }}>
            <p className='section-label'>Kind words</p>
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
              What people say
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 80} direction='up'>
              <div
                className='glass'
                style={{
                  borderRadius: '16px',
                  padding: '1.75rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                }}
              >
                {/* Quote mark */}
                <svg
                  width='140'
                  height='120'
                  viewBox='0 0 140 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '0.5rem',
                    opacity: 0.07,
                    pointerEvents: 'none',
                  }}
                >
                  <text
                    x='0'
                    y='110'
                    fontSize='160'
                    fontFamily='var(--font-display)'
                    fill='var(--cyan-ice)'
                  >
                    "
                  </text>
                </svg>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: 1.75,
                    flex: 1,
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(135deg, rgba(103,232,249,0.3), rgba(103,232,249,0.05))',
                      border: '1px solid rgba(103,232,249,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      color: 'var(--cyan-ice)',
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {t.title} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
