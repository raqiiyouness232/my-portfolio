import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Starfield from "@/components/Starfield"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://younesrq.com'),
  title: {
    default: "Raqi Younes - Développeur Informatique | Web Developer & SEO Specialist",
    template: "%s | Raqi Younes"
  },
  description: "Portfolio professionnel de Raqi Younes, développeur informatique spécialisé en développement web full-stack, création de sites WordPress et Shopify, et optimisation SEO. Professional portfolio of Raqi Younes, web developer specializing in full-stack development, WordPress & Shopify websites, and SEO optimization.",
  keywords: [
    "Raqi Younes",
    "Younes Raqi",
    "Développeur Web",
    "Web Developer",
    "Développeur Full-Stack",
    "Full-Stack Developer",
    "SEO Specialist",
    "Spécialiste SEO",
    "WordPress Developer",
    "Shopify Developer",
    "React Developer",
    "Next.js Developer",
    "Morocco",
    "Maroc",
    "Casablanca",
    "Portfolio",
    "Développeur Informatique"
  ],
  authors: [{ name: "Raqi Younes", url: "https://younesrq.com" }],
  creator: "Raqi Younes",
  publisher: "Raqi Younes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://younesrq.com",
    siteName: "Raqi Younes - Portfolio",
    title: "Raqi Younes - Développeur Informatique | Web Developer",
    description: "Portfolio professionnel de Raqi Younes, développeur informatique spécialisé en développement web full-stack, WordPress, Shopify et SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raqi Younes - Développeur Informatique Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raqi Younes - Développeur Informatique | Web Developer",
    description: "Portfolio professionnel de Raqi Younes, développeur web full-stack et spécialiste SEO.",
    images: ["/og-image.png"],
    creator: "@younesrq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://younesrq.com",
    languages: {
      'fr-FR': 'https://younesrq.com',
      'en-US': 'https://younesrq.com/en',
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://younesrq.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raqi Younes",
              "alternateName": "Younes Raqi",
              "url": "https://younesrq.com",
              "image": "https://younesrq.com/og-image.png",
              "jobTitle": "Développeur Informatique",
              "description": "Développeur informatique spécialisé en développement web full-stack, WordPress, Shopify et SEO",
              "sameAs": [
                "https://www.linkedin.com/in/raqiyounes",
              ],
              "knowsAbout": [
                "Web Development",
                "Full-Stack Development",
                "SEO",
                "WordPress",
                "Shopify",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "PHP",
                "MySQL"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Université Hassan 2 Casablanca"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Casablanca",
                "addressCountry": "MA"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0b0f19] text-white/80 selection:bg-[#8b5cf6]/30 selection:text-white">
        <Starfield className="pointer-events-none fixed inset-0 -z-10" />
        <div className="relative z-0">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
