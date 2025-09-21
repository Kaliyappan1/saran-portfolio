import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Saran Photography - Creative Visual Storytelling",
  description:
    "Professional photographer and graphic designer specializing in product photography, jewelry photography, and creative visual content. Combining visual elements and typography to communicate ideas creatively.",
  generator: "kaliyappanr",
  keywords: [
    "photography",
    "graphic design",
    "product photography",
    "jewelry photography",
    "visual storytelling",
    "creative photography",
  ],
  authors: [{ name: "Saran Durai" }],
  openGraph: {
    title: "Saran Photography - Creative Visual Storytelling",
    description:
      "Professional photographer and graphic designer specializing in product photography, jewelry photography, and creative visual content.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
