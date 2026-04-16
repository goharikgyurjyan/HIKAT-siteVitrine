import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'HIKAT | Sacs à dos de randonnée pour chats - Made in France',
  description: 'Du canapé au sommet, redécouvrez votre chat, redécouvrez vous. Sacs à dos de randonnée premium pour transporter votre chat en toute sécurité. Fabriqué en France avec amour.',
  keywords: 'sac à dos chat, randonnée chat, transport chat, cat backpack, hiking cat, made in france',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
