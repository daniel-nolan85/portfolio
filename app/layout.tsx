import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nolancode — Apps & Websites Built for Your Business',
  description:
    'Freelance full-stack developer based in Henderson, Nevada. I build mobile apps, web applications, and landing pages for startups, founders, and businesses. Fast turnaround, transparent pricing, no agency overhead.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'Freelance Developer',
    'Hire App Developer',
    'Mobile App Development',
    'Web App Development',
    'React Native Developer',
    'Next.js Developer',
    'MVP Development',
    'Landing Page Developer',
    'Full-Stack Developer for Hire',
    'Freelance Web Developer Nevada',
    'Startup Developer',
    'Nolancode',
    'Daniel Nolan Developer',
  ],
  authors: [{ name: 'Daniel Nolan', url: 'https://nolancode.com' }],
  creator: 'Daniel Nolan',
  openGraph: {
    title: 'Nolancode — Apps & Websites Built for Your Business',
    description:
      'Freelance full-stack developer building mobile apps, web applications, and landing pages for startups and businesses. Fast turnaround, transparent pricing.',
    type: 'website',
    url: 'https://nolancode.com',
    siteName: 'Nolancode',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nolancode — Apps & Websites Built for Your Business',
    description:
      'Freelance full-stack developer building mobile apps, web applications, and landing pages for startups and businesses.',
    creator: '@nolan_code',
  },
  alternates: {
    canonical: 'https://nolancode.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='noise grid-bg antialiased'>{children}</body>
    </html>
  );
}
