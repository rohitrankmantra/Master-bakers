import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import  Header from '@/components/Header'
import Footer from '@/components/Footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '700'] });

export const viewport: Viewport = {
  themeColor: '#3d2817',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'BakeMasters | Dehradun\'s Favourite Boutique Bakery',
  description: 'Premium artisan bakery in Dehradun offering fresh cakes, pastries, and custom orders. Follow us on social media for updates and delights.',
  generator: 'v0.app',
  keywords: ['bakery', 'Dehradun', 'cakes', 'pastries', 'artisan', 'boutique'],
  authors: [{ name: 'BakeMasters' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${_geist.className} font-sans antialiased bg-background text-foreground`}>
      <Header/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
