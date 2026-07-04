import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { Testimonials } from "@/components/sections/Testimonials"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients say about Eagle Wings Services Ltd manpower, safety, and commerce solutions.",
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        eyebrow="Our clients review"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
