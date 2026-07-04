import { siteCopy } from "@/content/pages"
import { services } from "@/content/services"

export const siteConfig = {
  name: "Eagle Wings Services Ltd.",
  shortName: "Eagle Wings",
  description:
    "Eagle Wings Services Ltd specializes in Manpower Placement and Safety Consultancy & Training, delivering professional workforce and safety solutions.",
  url: "https://e-wingss.com",
  locale: "en_CM",
  email: siteCopy.contact.email,
  phone: siteCopy.contact.phone,
  phoneHref: siteCopy.contact.phoneHref,
  address: siteCopy.contact.address,
  emergencyPhone: siteCopy.contact.phone,
  hours: siteCopy.contact.hours,
  mapEmbed: siteCopy.contact.mapEmbed,
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: services.slice(0, 8).map((service) => ({
        label: service.title,
        href: `/services/${service.slug}`,
      })),
    },
    { label: "Manpower", href: "/manpower-supplies" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Team", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    services: [
      { label: "Safety Consultancy", href: "/services" },
      { label: "Manpower Placement", href: "/manpower-supplies" },
      { label: "General Commerce", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
} as const

export type NavItem = (typeof siteConfig.nav)[number]
