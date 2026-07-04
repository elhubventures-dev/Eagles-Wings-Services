import { siteConfig } from "@/config/site"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressLocality: siteConfig.address,
    },
    areaServed: "South Africa",
    image: `${siteConfig.url}/images/logo/logo.png`,
    sameAs: Object.values(siteConfig.social),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
