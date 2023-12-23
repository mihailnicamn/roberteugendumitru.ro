import type { Metadata } from 'next'
import localFont from 'next/font/local' 
import './globals.css'
import { Navbar } from '@/stuff/navbar'
const inter = localFont({ src: './font.woff2' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>

        {children}
      
      </body>
    </html>
  )
}
