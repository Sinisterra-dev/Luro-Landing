import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: 'Luro Legal | Estrategia Legal con Vision Internacional',
  description: 'Luro Legal representa la vanguardia de la practica juridica privada. Con un enfoque meticuloso y una comprension profunda de los mercados internacionales.',
  generator: 'v0.app',
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
    <html lang="es" className={`${inter.variable} ${newsreader.variable} dark scroll-smooth`}>
      <body className="font-body antialiased bg-black text-on-surface">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
