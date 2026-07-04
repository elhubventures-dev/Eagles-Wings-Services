"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/content/testimonials"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding section-mesh bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our clients review"
          title="What they’re talking about our services"
          className="mb-12"
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="card-surface group relative bg-gradient-to-br from-brand-warm/80 to-white p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-brand-black">
                    {item.name}
                  </p>
                  <p className="text-sm text-brand-muted">{item.role}</p>
                </div>
              </div>
              <Quote className="h-8 w-8 text-brand-gold" />
              <div className="mt-2 flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                “{item.quote}”
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
