import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: '10 Brothers | Enak, Praktis, Terjangkau',
  description: 'Pesan makanan dan minuman kampus yang enak, praktis, dan terjangkau. Alpukat Kocok, Nasi Cokot, Roti Series, dan paket bundling hemat.',
  keywords: ['10 Brothers', 'kuliner kampus', 'Telkom University', 'Alpukat Kocok', 'Nasi Cokot'],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
