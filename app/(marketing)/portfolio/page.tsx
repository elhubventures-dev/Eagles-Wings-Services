import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected Eagle Wings projects across electrical, industrial, and training work.",
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        eyebrow="Selected work"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
      />
      <PortfolioGrid />
      <CtaBanner />
    </>
  )
}
