import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteCopy } from "@/content/pages"
import { team } from "@/content/team"

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

      <section className="section-padding section-mesh bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/hero/hero-training.png"
              alt="About Eagle Wings Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute left-4 top-4 rounded-xl bg-brand-black px-5 py-4 text-white">
              <p className="font-heading text-3xl font-bold text-brand-gold">
                {siteCopy.experienceYears}+
              </p>
              <p className="text-sm">Years of experience</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About Eagle Wings Services"
              title={siteCopy.aboutTitle}
            />
            <div className="mt-6 space-y-4 text-brand-muted">
              {siteCopy.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-warm">
        <div className="container-site grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Our Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {siteCopy.vision}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Our Core Values
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              {siteCopy.values.map((value) => (
                <li key={value}>- {value}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Why Choose Us
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              {siteCopy.whyChoose.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Expert Team"
            title="Meet our Experienced Staff"
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-2xl border border-black/5">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                    {member.role}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold uppercase text-brand-black">
                    {member.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
