"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { siteCopy } from "@/content/pages"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/images/bg/cta-bg.jpg"
        alt=""
        fill
        className="object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-brand-black/85" />
      <div className="absolute inset-0 section-mesh-dark" />

      <motion.div
        className="container-site relative text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold"
        >
          Eagle Wings Services Ltd
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mx-auto mt-5 max-w-3xl font-heading text-3xl font-bold text-white md:text-5xl"
        >
          {siteCopy.tagline}
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button href="/contact">Send your message</Button>
          <Button href="/services" variant="outline">
            Our Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
