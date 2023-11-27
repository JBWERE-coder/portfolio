import type { Metadata } from 'next'
import "../globals.css"


export const metadata: Metadata = {
  title: "Jacob's Portfolio",
  description: 'Personal projects and about Jacob',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">{children}</body>
    </html>
  )
}
