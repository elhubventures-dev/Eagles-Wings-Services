import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ContactSection } from "@/components/sections/ContactSection"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Eagle Wings Services Ltd in Mile 2, Limbe – Cameroon for manpower, safety consultancy, and commerce services.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        eyebrow="Get in touch"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <CtaBanner />
    </>
  )
}
