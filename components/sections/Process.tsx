"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/lib/motion"

const steps = [
  {
    step: "01",
    title: "Identify the problem",
    description:
      "We assess the site, diagnose faults, and define the safest path forward.",
  },
  {
    step: "02",
    title: "Provide time & cost",
    description:
      "You receive a clear scope, timeline, and transparent pricing before work begins.",
  },
  {
    step: "03",
    title: "Implement the service",
    description:
      "Our technicians deliver the work with professional standards and minimal disruption.",
  },
  {
    step: "04",
    title: "Handover & support",
    description:
      "We walk you through the outcome and remain available for follow-up support.",
  },
]

export function Process() {
  return (
    <section className="section-padding section-mesh-dark relative overflow-hidden bg-brand-black">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      <div className="container-site">
        <SectionHeading
          eyebrow="Our working steps"
          title="We provide professional services end to end"
          description="A clear process keeps projects predictable, safe, and accountable."
          light
          className="mb-12"
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="shine-border group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <span className="absolute right-4 top-4 text-6xl font-bold text-white/5 transition group-hover:text-brand-gold/10">
                {item.step}
              </span>
              <p className="font-heading text-4xl font-bold text-brand-gold">
                {item.step}
              </p>
              <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-brand-gold to-transparent transition-all duration-500 group-hover:w-16" />
              <h3 className="mt-4 font-heading text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
              {index < steps.length - 1 ? (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-brand-gold/40 xl:block" />
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
