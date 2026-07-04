import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { TeamGrid } from "@/components/sections/TeamGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the Eagle Wings specialists behind our electrical and training services.",
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        eyebrow="People behind the work"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team" },
        ]}
      />
      <TeamGrid />
      <CtaBanner />
    </>
  )
}
