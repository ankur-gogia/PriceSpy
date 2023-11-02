import type { Metadata } from 'next'
import { Inter , Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })
 
export const metadata: Metadata = {
  title: 'PriceSpy',
  description: 'Stay in control of your shopping budget and find the perfect time to make your purchase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl max-auto">
          <Navbar />
        {children}

        </main>
        </body>
    </html>
  )
}
