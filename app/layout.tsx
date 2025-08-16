import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/config"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.pages.home.title,
    template: "%s | Smt. Nimuben Jayantibhai Bambhaniya",
  },
  description: siteConfig.pages.home.description,
  keywords: siteConfig.pages.home.keywords,
  authors: [{ name: "Smt. Nimuben Jayantibhai Bambhaniya" }],
  creator: "Smt. Nimuben Jayantibhai Bambhaniya",
  publisher: "Minister of State - Ministry of Consumer Affairs, Food & Public Distribution, Serving Bhavnagar with integrity, transparency, and commitment to every citizen's well-being.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nimuben.gov.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    url: "https://nimuben.gov.in",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smt. Nimuben Jayantibhai Bambhaniya - Minister of State",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    creator: "@nimubenbjp",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
    generator: ''
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hi,gu',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
