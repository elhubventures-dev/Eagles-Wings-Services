"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteCopy } from "@/content/pages"
import type { ServiceCategory } from "@/content/services"
import { fadeUp, staggerContainer } from "@/lib/motion"

type CategoryIntroProps = {
  category: ServiceCategory
  includesLabel: string
  whyLabel: string
}

export function CategoryIntro({
  category,
  includesLabel,
  whyLabel,
}: CategoryIntroProps) {
  const group = siteCopy.serviceGroups[category]

  return (
    <section className="section-padding section-mesh bg-brand-warm">
      <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-start">
        <SectionHeading title={group.title} description={group.description} />
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <h3 className="font-heading text-xl font-bold text-brand-black">
              {includesLabel}
            </h3>
            <div className="mt-3 h-1 w-10 rounded-full bg-brand-gold" />
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {group.includes.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <h3 className="font-heading text-xl font-bold text-brand-black">
              {whyLabel}
            </h3>
            <div className="mt-3 h-1 w-10 rounded-full bg-brand-gold" />
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {group.why.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
