import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { siteCopy } from "@/content/pages"

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
      <section className="section-padding bg-white">
        <div
          className="container-site max-w-4xl space-y-4 text-brand-muted [&_a]:text-brand-gold [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-brand-black [&_h5]:mt-4 [&_h5]:font-semibold [&_h5]:text-brand-black [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_strong]:text-brand-black"
          dangerouslySetInnerHTML={{ __html: siteCopy.privacyHtml }}
        />
      </section>
    </>
  )
}
