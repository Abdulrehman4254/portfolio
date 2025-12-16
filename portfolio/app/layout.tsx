import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdulrehman Khan | Full Stack Developer',
  description: 'Full Stack Developer specializing in Laravel, Next.js, and modern web technologies. Building scalable, high-performance web applications.',
  keywords: ['Full Stack Developer', 'Laravel', 'Next.js', 'PHP', 'React', 'Web Developer', 'Pakistan'],
  authors: [{ name: 'Abdulrehman Khan' }],
  openGraph: {
    title: 'Abdulrehman Khan | Full Stack Developer',
    description: 'Building scalable, high-performance web applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
