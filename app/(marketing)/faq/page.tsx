import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { FaqSection } from "@/components/sections/FaqSection"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Eagle Wings services and support.",
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="FAQ"
        eyebrow="Common questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
