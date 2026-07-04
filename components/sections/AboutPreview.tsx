"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { siteCopy } from "@/content/pages"
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion"

export function AboutPreview() {
  return (
    <section className="section-padding section-mesh bg-brand-warm">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero/hero-training.png"
              alt="Eagle Wings safety consultancy and training"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <motion.div
            className="absolute left-4 top-4 rounded-xl bg-brand-black/95 px-5 py-4 text-white shadow-xl backdrop-blur animate-float"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-3xl font-bold text-brand-gold">
              {siteCopy.experienceYears}+
            </p>
            <p className="text-sm">Years of experience</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <SectionHeading
            eyebrow="About Eagle Wings Services"
            title={siteCopy.aboutTitle}
            description={siteCopy.aboutBody[0]}
          />
          <p className="mt-4 text-brand-muted">{siteCopy.aboutBody[1]}</p>
          <motion.ul
            className="mt-8 space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {siteCopy.whyChoose.slice(0, 4).map((point) => (
              <motion.li
                key={point}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-lg bg-white/60 px-3 py-2 text-brand-black shadow-sm backdrop-blur transition hover:bg-white"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-8">
            <Button href="/about">Read More...</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
