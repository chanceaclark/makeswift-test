import { Inter } from 'next/font/google';
import './globals.css'
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
