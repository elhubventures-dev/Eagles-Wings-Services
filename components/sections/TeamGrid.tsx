"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { team } from "@/content/team"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function TeamGrid() {
  return (
    <section className="section-padding section-mesh bg-white">
      <div className="container-site mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          <span className="mr-1 opacity-70">{"//"}</span>
          Our Expert Team
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-5xl">
          Meet our Experienced Staff
        </h2>
      </div>
      <motion.div
        className="container-site grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {team.map((member) => (
          <motion.article
            key={member.name}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="card-surface group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-warm">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                  {member.role}
                </p>
                <h2 className="font-heading text-xl font-bold uppercase">
                  {member.name}
                </h2>
              </div>
            </div>
            <div className="space-y-2 p-5">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-brand-muted transition hover:text-brand-gold"
              >
                <Mail className="h-4 w-4" />
                {member.email}
              </a>
              <a
                href={`tel:${member.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-brand-muted transition hover:text-brand-gold"
              >
                <Phone className="h-4 w-4" />
                {member.phone}
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
