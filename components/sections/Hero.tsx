"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { siteCopy } from "@/content/pages"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-black">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero/hero-training.png"
          alt="Eagle Wings safety consultancy and training"
          fill
          priority
          className="object-cover opacity-50 animate-ken-burns"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/35" />
      <div className="absolute inset-0 section-mesh-dark" />
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl animate-float-delayed" />

      <div className="container-site relative flex min-h-screen items-center pb-20 pt-40">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
            <span className="opacity-70">{"//"}</span>
            Eagle Wings Services Ltd
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-gold animate-gradient-x bg-[length:200%_auto]">
              {siteCopy.heroSlides[0].title}
            </span>
            <span className="mt-2 block text-3xl text-white sm:text-4xl lg:text-5xl">
              & Manpower Placement
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {siteCopy.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button href="/services">Discover More</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {siteCopy.highlights.map((item) => (
              <motion.div
                key={item}
                className="shine-border rounded-xl glass-panel px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                whileHover={{ y: -4, scale: 1.03 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
