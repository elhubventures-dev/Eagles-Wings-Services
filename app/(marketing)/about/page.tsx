import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { AboutContent } from "@/components/sections/AboutContent"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { siteCopy } from "@/content/pages"

export const metadata: Metadata = {
  title: "About Us",
  description: siteCopy.aboutBody[0],
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Eagle Wings Services"
        eyebrow="Who we are"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutContent />
      <CtaBanner />
    </>
  )
}
