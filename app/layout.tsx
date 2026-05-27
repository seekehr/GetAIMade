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
    default: 'Get AI Made | Custom AI Automation Agency',
    template: '%s | Get AI Made',
  },
  description: 'Get AI Made builds custom AI chatbots, automation systems, and intelligent AI agents that help businesses scale, save time, and generate more revenue. Trusted by businesses worldwide.',
  keywords: [
    'AI automation agency',
    'custom AI chatbots',
    'AI agents',
    'WhatsApp automation',
    'business automation',
    'lead generation AI',
    'social media automation',
    'CRM automation',
    'AI integration',
    'workflow automation',
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
    title: 'Get AI Made | Custom AI Automation Agency',
    description: 'Custom AI chatbots, automation systems, and AI agents that help businesses scale, save time, and convert more leads into revenue.',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Get AI Made – Custom AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Seekehr',
    creator: '@Seekehr',
    title: 'Get AI Made | Custom AI Automation Agency',
    description: 'Custom AI chatbots, automations, and AI agents for modern businesses.',
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
      description: 'Custom AI automation agency building chatbots, AI agents, and automation systems for businesses worldwide.',
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
      name: 'Get AI Made | Custom AI Automation Agency',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      description: 'Custom AI chatbots, automation systems, and AI agents for modern businesses.',
    },
    {
      '@type': 'ItemList',
      name: 'AI Services',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'AI Chatbots' },
        { '@type': 'ListItem', position: 2, name: 'Social Media Automation' },
        { '@type': 'ListItem', position: 3, name: 'WhatsApp Automation' },
        { '@type': 'ListItem', position: 4, name: 'AI Agents' },
        { '@type': 'ListItem', position: 5, name: 'Lead Generation Systems' },
        { '@type': 'ListItem', position: 6, name: 'CRM Automation' },
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
