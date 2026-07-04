import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { CategoryIntro } from "@/components/sections/CategoryIntro"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { siteCopy } from "@/content/pages"

export const metadata: Metadata = {
  title: "Consultancy & Safety Trainings",
  description: siteCopy.serviceGroups.safety.description,
}

export default function ConsultancySafetyTrainingsPage() {
  return (
    <>
      <PageHero
        title="Consultancy & Safety Trainings"
        eyebrow="Our services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Consultancy & Safety Trainings" },
        ]}
      />
      <CategoryIntro
        category="safety"
        includesLabel="Our safety solutions include:"
        whyLabel="Why choose our safety services:"
      />
      <ServicesGrid category="safety" showHeading={false} />
      <CtaBanner />
    </>
  )
}
