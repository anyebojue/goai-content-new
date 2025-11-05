import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoAI - Your Proactive Investment Agent',
  description: 'GoAI analyzes millions of data points to find personalized, high-conviction investments for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
