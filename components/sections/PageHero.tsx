"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"

type PageHeroProps = {
  title: string
  eyebrow?: string
  breadcrumbs?: { label: string; href?: string }[]
}

export function PageHero({ title, eyebrow, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-black pb-20 pt-40">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/bg/page-banner.jpg"
          alt=""
          fill
          className="object-cover opacity-30 animate-ken-burns"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
      <div className="absolute inset-0 section-mesh-dark" />
      <div className="pointer-events-none absolute -right-10 top-20 h-56 w-56 rounded-full bg-brand-gold/15 blur-3xl animate-float" />

      <motion.div
        className="container-site relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {eyebrow ? (
          <motion.p
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl font-bold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {breadcrumbs ? (
          <motion.nav
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/70"
          >
            {breadcrumbs.map((crumb, index) => (
              <span
                key={`${crumb.label}-${index}`}
                className="inline-flex items-center gap-2"
              >
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition hover:text-brand-gold"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </motion.nav>
        ) : null}
        <motion.div
          variants={fadeUp}
          className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
