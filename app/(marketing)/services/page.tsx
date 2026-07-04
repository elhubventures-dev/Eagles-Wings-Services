import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ServiceGroupsIntro } from "@/components/sections/ServiceGroupsIntro"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Safety consultancy & training, manpower placement, and general commerce services from Eagle Wings Services Ltd.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        eyebrow="What we deliver"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServiceGroupsIntro />
      <ServicesGrid showHeading={false} />
      <CtaBanner />
    </>
  )
}
