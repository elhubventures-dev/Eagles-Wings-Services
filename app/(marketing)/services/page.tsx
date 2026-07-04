import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { siteCopy } from "@/content/pages"

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

      <section className="section-padding bg-brand-warm">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {Object.values(siteCopy.serviceGroups).map((group) => (
            <div key={group.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-brand-black">
                {group.title}
              </h2>
              <p className="mt-3 text-sm text-brand-muted">{group.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesGrid showHeading={false} />
      <CtaBanner />
    </>
  )
}
