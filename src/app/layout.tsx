import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'JOHN DOE | Senior Frontend Engineer & Creative Developer',
  description:
    'Award-winning Senior Frontend Engineer and UI/UX Designer creating immersive digital experiences that blend Next.js 15 performance, luxury aesthetics, and 60 FPS motion.',
  keywords: [
    'Frontend Engineer',
    'Creative Developer',
    'Next.js 15 Portfolio',
    'React 19 Developer',
    'UI/UX Designer',
    'Awwwards Showcase',
    'Framer Motion',
    'TypeScript',
    'Tailwind CSS',
  ],
  authors: [{ name: 'John Doe', url: 'https://johndoe.design' }],
  creator: 'John Doe',
  openGraph: {
    title: 'JOHN DOE | Senior Frontend Engineer & Creative Developer',
    description:
      'Immersive dark editorial portfolio showcasing award-winning web apps, 3D interactive design systems, and frontend architecture.',
    url: 'https://johndoe.design',
    siteName: 'John Doe Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'John Doe Creative Portfolio Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JOHN DOE | Senior Frontend Engineer',
    description:
      'Award-winning portfolio site featuring Next.js 15, React 19, Framer Motion physics, and dark luxury editorial design.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'],
    creator: '@johndoe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Doe',
    jobTitle: 'Senior Frontend Engineer & Creative Developer',
    url: 'https://johndoe.design',
    sameAs: [
      'https://github.com',
      'https://linkedin.com',
      'https://behance.net',
      'https://twitter.com',
    ],
    knowsAbout: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Framer Motion',
      'UI/UX Design',
      'Frontend Architecture',
      'Tailwind CSS',
    ],
  };

  return (
    <html lang="en" translate="no" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0B0B] text-white antialiased selection:bg-[#FF3B30] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
