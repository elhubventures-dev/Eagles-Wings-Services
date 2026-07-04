import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { siteCopy } from "@/content/pages"
import { SectionHeading } from "@/components/ui/SectionHeading"

export const metadata: Metadata = {
  title: "Manpower Supplies",
  description: siteCopy.serviceGroups.manpower.description,
}

export default function ManpowerSuppliesPage() {
  return (
    <>
      <PageHero
        title="Manpower Placement"
        eyebrow="Manpower Supplies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Manpower Supplies" },
        ]}
      />

      <section className="section-padding bg-brand-warm">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <SectionHeading
            title={siteCopy.serviceGroups.manpower.title}
            description={siteCopy.serviceGroups.manpower.description}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-black">
                Our manpower solutions include:
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                {siteCopy.serviceGroups.manpower.includes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-black">
                Why choose our manpower services:
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                {siteCopy.serviceGroups.manpower.why.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid category="manpower" showHeading={false} />
      <CtaBanner />
    </>
  )
}
