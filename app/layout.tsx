import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://getaimade.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Get AI Made | Custom AI Automation and Scrapping',
    template: '%s | Get AI Made',
  },
  description: 'AI-powered web scraping, smart data extraction, research & monitoring systems, custom RAG systems, and lead & company intelligence.',
  keywords: [
    'AI-powered web scraping',
    'smart data extraction',
    'custom RAG systems',
    'research automation',
    'website monitoring',
    'lead intelligence',
    'company intelligence',
    'AI data processing',
  ],
  authors: [{ name: 'Get AI Made', url: siteUrl }],
  creator: 'Get AI Made',
  publisher: 'Get AI Made',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Get AI Made',
    title: 'Get AI Made | Custom AI Automation',
    description: 'AI-powered web scraping, smart data extraction, research & monitoring systems, custom RAG systems, and lead & company intelligence.',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Get AI Made – Custom AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Seekehr',
    creator: '@Seekehr',
    title: 'Get AI Made | Custom AI Automation',
    description: 'AI-powered web scraping, smart data extraction, research & monitoring systems, custom RAG systems, and lead & company intelligence.',
    images: ['/favicon.svg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Get AI Made',
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      description: 'AI-powered web scraping, smart data extraction, research & monitoring systems, custom RAG systems, and lead & company intelligence.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'grouchyseeker@gmail.com',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://x.com/Seekehr',
        'https://www.instagram.com/seekehr9.9.9/',
        'https://discord.gg/bHEjbQdEcx',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Get AI Made',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Get AI Made | Custom AI Automation',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      description: 'Custom AI chatbots, automation systems, and AI agents for modern businesses.',
    },
    {
      '@type': 'ItemList',
      name: 'AI Services',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'AI-Powered Web Scraping' },
        { '@type': 'ListItem', position: 2, name: 'Smart Data Extraction' },
        { '@type': 'ListItem', position: 3, name: 'Custom RAG Systems' },
        { '@type': 'ListItem', position: 4, name: 'Research & Monitoring Systems' },
        { '@type': 'ListItem', position: 5, name: 'Lead & Company Intelligence' },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7DE71F8YY6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7DE71F8YY6');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
