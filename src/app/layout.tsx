import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { inter } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'NoticiUS | Noticias Universidad de Sevilla',
  description: 'Noticias de la Universidad de Sevilla'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          'min-h-screen bg-background',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
