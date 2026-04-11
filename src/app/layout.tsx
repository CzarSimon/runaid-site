import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.runaid.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Runaid — Adaptive Coaching for Distance Runners',
    template: '%s | Runaid',
  },
  description:
    'Runaid combines sports science, coaching tradition, and your individual response to build training that works — and keeps working as you develop. Join the waitlist.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Runaid',
    title: 'Runaid — Adaptive Coaching for Distance Runners',
    description:
      'Runaid combines sports science, coaching tradition, and your individual response to build training that works — and keeps working as you develop.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Runaid — Adaptive Coaching for Distance Runners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runaid — Adaptive Coaching for Distance Runners',
    description:
      'Runaid combines sports science, coaching tradition, and your individual response to build training that works — and keeps working as you develop.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
