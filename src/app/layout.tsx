import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Layout Controller Testbed',
  description: 'A dynamic layout engine testbed built with Next.js and Pixi.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
