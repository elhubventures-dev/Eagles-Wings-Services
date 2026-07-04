"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { siteCopy } from "@/content/pages"
import { siteConfig } from "@/config/site"
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion"

export function WhyChoose() {
  return (
    <section className="section-padding section-mesh bg-white">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={slideInLeft}
        >
          <SectionHeading
            eyebrow="Why choose us"
            title="WHY CHOOSE US"
            description={siteCopy.vision}
          />
          <motion.div
            className="mt-8 space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {siteCopy.whyChoose.map((reason) => (
              <motion.div
                key={reason}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-gradient-to-br from-brand-warm to-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                <p className="font-medium text-brand-black">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact">Contact Us</Button>
            <a
              href={siteConfig.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-red transition hover:text-brand-gold"
            >
              {siteConfig.phone}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <Image
            src="/images/about/team-work.jpg"
            alt="Eagle Wings professional team"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  )
}
