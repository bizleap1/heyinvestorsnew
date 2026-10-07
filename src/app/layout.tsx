import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { COMPANY_INFO } from '@/lib/company-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.heyinvestor.in'),
  title: {
    default: 'Hey Investor Pvt. Ltd. — Curated Plotted Developments in Nagpur',
    template: '%s | Hey Investor Pvt. Ltd.',
  },
  description:
    'Curated NMRDA and RL approved residential and commercial plotted developments around Nagpur. Clear legal titles, infrastructure-ready layouts, and institutional bank loan facilitation. MahaRERA No. A50500037507.',
  keywords: [
    'plots in Nagpur',
    'NMRDA approved plots in Nagpur',
    'land investment Nagpur',
    'Wardha Road plots',
    'Hingna Road residential plots',
    'Amravati Road plots',
    'Hey Investor Pvt Ltd',
    'MahaRERA registered plots Nagpur',
  ],
  authors: [{ name: 'Hey Investor Pvt. Ltd.' }],
  creator: 'Hey Investor Pvt. Ltd.',
  publisher: 'Hey Investor Pvt. Ltd.',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.heyinvestor.in',
    siteName: 'Hey Investor Pvt. Ltd.',
    title: 'Hey Investor Pvt. Ltd. — Plotted Developments in Nagpur',
    description:
      'Curated NMRDA and RL approved plotted developments around Nagpur. Clear legal titles, infrastructure-ready layouts, and institutional bank financing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hey Investor — Plotted Developments in Nagpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Investor Pvt. Ltd. — Plotted Developments in Nagpur',
    description:
      'Curated NMRDA and RL approved plotted developments around Nagpur. MahaRERA Reg. A50500037507.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
    '@type': 'RealEstateAgent',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: 'https://www.heyinvestor.in',
    logo: 'https://www.heyinvestor.in/logo%20(1).png',
    image: 'https://www.heyinvestor.in/hero-bg.png',
    description: COMPANY_INFO.descriptor,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}`,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1458',
      longitude: '79.0882',
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'MahaRERA Registration Number',
      value: COMPANY_INFO.reraNumber,
    },
    areaServed: {
      '@type': 'City',
      name: 'Nagpur',
    },
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/hero/hero-layer-1-sky.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/hero/hero-layer-2-horizon.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/hero/hero-layer-3-midground.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/hero/hero-layer-4-foreground.png"
          as="image"
          type="image/png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#FAF8F5] text-[#141414] selection:bg-[#6E745F] selection:text-[#FAF8F5]">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-0">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
