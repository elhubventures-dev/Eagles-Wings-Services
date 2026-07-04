import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { CategoryIntro } from "@/components/sections/CategoryIntro"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { siteCopy } from "@/content/pages"

export const metadata: Metadata = {
  title: "General Commerce",
  description: siteCopy.serviceGroups.commerce.description,
}

export default function GeneralCommercePage() {
  return (
    <>
      <PageHero
        title="General Commerce"
        eyebrow="Our services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "General Commerce" },
        ]}
      />
      <CategoryIntro
        category="commerce"
        includesLabel="Our commerce solutions include:"
        whyLabel="Why choose our commerce services:"
      />
      <ServicesGrid category="commerce" showHeading={false} />
      <CtaBanner />
    </>
  )
}
