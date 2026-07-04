"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import type { Service } from "@/content/services"
import { Button } from "@/components/ui/Button"
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion"

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="section-padding section-mesh bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <p className="text-sm leading-relaxed text-brand-muted md:text-base">
            {service.description}
          </p>
          {service.features.length > 0 ? (
            <>
              <h2 className="mt-8 font-heading text-2xl font-bold text-brand-black">
                Short Notes:
              </h2>
              <motion.ul
                className="mt-4 space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {service.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-xl bg-brand-warm/60 px-3 py-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                    <span className="text-brand-black">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </>
          ) : null}
          {service.benefit ? (
            <motion.div
              className="mt-8 rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-warm to-white p-6 shadow-sm"
              variants={fadeUp}
            >
              <h3 className="font-heading text-xl font-bold text-brand-black">
                Key Benefit:
              </h3>
              <p className="mt-2 text-brand-muted">{service.benefit}</p>
            </motion.div>
          ) : null}
          <div className="mt-8">
            <Button href="/contact">Request This Service</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
