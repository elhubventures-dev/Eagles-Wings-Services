import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { defaultSEO } from "@/config/seo"
import { siteConfig } from "@/config/site"
import { JsonLd } from "@/components/shared/JsonLd"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultSEO.defaultTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: defaultSEO.defaultDescription,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
    images: [{ url: "/images/logo/logo.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans`}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
