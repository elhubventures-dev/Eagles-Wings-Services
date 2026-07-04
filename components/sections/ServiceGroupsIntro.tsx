"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Users, Globe, ArrowRight } from "lucide-react"
import { serviceMenu } from "@/config/site"
import { fadeUp, staggerContainer } from "@/lib/motion"

const icons = {
  safety: Shield,
  manpower: Users,
  commerce: Globe,
}

export function ServiceGroupsIntro() {
  return (
    <section className="section-padding section-mesh bg-brand-warm">
      <motion.div
        className="container-site grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {serviceMenu.map((group) => {
          const Icon = icons[group.category]
          return (
            <motion.div
              key={group.category}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-brand-black">
                {group.label}
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-brand-gold" />
              <p className="mt-4 text-sm text-brand-muted">{group.description}</p>
              <Link
                href={group.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:text-brand-gold"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
