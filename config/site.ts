import { siteCopy } from "@/content/pages"
import { services, type ServiceCategory } from "@/content/services"

const serviceGroups: {
  category: ServiceCategory
  label: string
  href: string
  description: string
}[] = [
  {
    category: "safety",
    label: siteCopy.serviceGroups.safety.title,
    href: "/consultancy-safety-trainings",
    description: siteCopy.serviceGroups.safety.description,
  },
  {
    category: "manpower",
    label: siteCopy.serviceGroups.manpower.title,
    href: "/manpower-supplies",
    description: siteCopy.serviceGroups.manpower.description,
  },
  {
    category: "commerce",
    label: siteCopy.serviceGroups.commerce.title,
    href: "/general-commerce",
    description: siteCopy.serviceGroups.commerce.description,
  },
]

export const serviceMenu = serviceGroups.map((group) => ({
  ...group,
  children: services
    .filter((service) => service.category === group.category)
    .map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
}))

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
      mega: true as const,
    },
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
      {
        label: "Consultancy & Safety Trainings",
        href: "/consultancy-safety-trainings",
      },
      { label: "Manpower Placement", href: "/manpower-supplies" },
      { label: "General Commerce", href: "/general-commerce" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
} as const

export type NavItem = (typeof siteConfig.nav)[number]
