import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daniel Nolan — Full-Stack Software Engineer',
  description:
    'Full-stack software engineer and indie app developer based in Henderson, Nevada. Building mobile and web products under Nolancode.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'React Native',
    'Next.js',
    'Node.js',
    'Mobile App Developer',
    'Henderson Nevada',
    'Nolancode',
  ],
  authors: [{ name: 'Daniel Nolan' }],
  openGraph: {
    title: 'Daniel Nolan — Full-Stack Software Engineer',
    description:
      'Full-stack software engineer and indie app developer. Building mobile and web products under Nolancode.',
    type: 'website',
    url: 'https://nolancode.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Nolan — Full-Stack Software Engineer',
    description: 'Full-stack software engineer and indie app developer.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise grid-bg antialiased">{children}</body>
    </html>
  );
}
