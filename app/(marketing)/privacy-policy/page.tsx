import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { PrivacyContent } from "@/components/sections/PrivacyContent"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Eagle Wings Services Ltd — how we collect, use, and protect personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        eyebrow="Legal"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <PrivacyContent />
    </>
  )
}
