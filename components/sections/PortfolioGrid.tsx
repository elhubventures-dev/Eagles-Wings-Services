"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { portfolio } from "@/content/portfolio"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function PortfolioGrid() {
  return (
    <section className="section-padding section-mesh bg-white">
      <motion.div
        className="container-site grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {portfolio.map((item) => (
          <motion.article
            key={item.slug}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="card-surface group"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-70" />
              <span className="absolute bottom-4 left-4 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-black">
                {item.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-brand-black transition group-hover:text-brand-gold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-brand-muted">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
