"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteCopy } from "@/content/pages"
import { team } from "@/content/team"
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion"

export function AboutContent() {
  return (
    <>
      <section className="section-padding section-mesh bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <Image
              src="/images/hero/hero-training.png"
              alt="About Eagle Wings Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute left-4 top-4 rounded-xl bg-brand-black/95 px-5 py-4 text-white shadow-xl backdrop-blur">
              <p className="font-heading text-3xl font-bold text-brand-gold">
                {siteCopy.experienceYears}+
              </p>
              <p className="text-sm">Years of experience</p>
            </div>
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
            />
            <div className="mt-6 space-y-4 text-brand-muted">
              {siteCopy.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-mesh bg-brand-warm">
        <motion.div
          className="container-site grid gap-6 md:grid-cols-3"
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
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Our Vision
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-brand-gold" />
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              {siteCopy.vision}
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Our Core Values
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-brand-gold" />
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {siteCopy.values.map((value) => (
                <li key={value}>- {value}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <h3 className="font-heading text-2xl font-bold text-brand-black">
              Why Choose Us
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-brand-gold" />
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {siteCopy.whyChoose.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding section-mesh bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Expert Team"
            title="Meet our Experienced Staff"
            className="mb-10"
          />
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {team.map((member) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="card-surface group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {member.role}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold uppercase">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Link
              href="/team"
              className="text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:text-brand-gold"
            >
              View full team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
