import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://luftaktiv.ba"),
  title: {
    default: "LUFTAKTIV - Na Duge Staze",
    template: "%s | LUFTAKTIV",
  },
  description: "Vrhunska njemačka krovna oprema za siguran i dugotrajan krov",
  applicationName: "LUFTAKTIV",
  generator: "Next.js",
  authors: [{ name: "LUFTAKTIV" }],
  keywords: [
    "krovna oprema",
    "vjetrobrani",
    "snjegobrani",
    "krov",
    "ventilacija krova",
    "Njemačka kvaliteta",
  ],
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "LUFTAKTIV",
    title: "LUFTAKTIV - Na Duge Staze",
    description: "Vrhunska njemačka krovna oprema za siguran i dugotrajan krov",
    images: [{ url: "/luftaktivhero.jpg", width: 1200, height: 630, alt: "LUFTAKTIV hero" }],
    locale: "bs_BA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "LUFTAKTIV - Na Duge Staze",
    description: "Vrhunska njemačka krovna oprema za siguran i dugotrajan krov",
    images: ["/luftaktivhero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "construction",
}

export const viewport: Viewport = {
  themeColor: "#5068b1",
}

import { AnimatedNavbar } from "@/components/animated-navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs">
      <body className={`${inter.className} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
        <AnimatedNavbar />
        <Analytics />
      </body>
    </html>
  )
}
