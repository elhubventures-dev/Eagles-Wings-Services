"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Clock3 } from "lucide-react"
import { siteConfig } from "@/config/site"
import { siteCopy } from "@/content/pages"
import { ContactForm } from "@/components/sections/ContactForm"
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion"
import { whatsappHref } from "@/lib/utils"

const infoCards = [
  {
    icon: MapPin,
    title: "Office Address",
    content: <p className="text-brand-muted">{siteCopy.contact.address}</p>,
  },
  {
    icon: Phone,
    title: "Office Line",
    content: (
      <a
        href={whatsappHref(siteConfig.phone)}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-brand-muted transition hover:text-brand-gold"
      >
        {siteConfig.phone}
      </a>
    ),
  },
  {
    icon: Clock3,
    title: "Office time",
    content: (
      <div>
        {siteCopy.contact.hours.map((line) => (
          <p key={line} className="text-brand-muted">
            {line}
          </p>
        ))}
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-brand-muted transition hover:text-brand-gold"
      >
        {siteConfig.email}
      </a>
    ),
  },
]

export function ContactSection() {
  return (
    <section className="section-padding section-mesh relative overflow-hidden bg-brand-warm">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-brand-red/5 blur-3xl" />

      <div className="container-site relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInLeft}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            <span className="mr-1 opacity-70">{"//"}</span>
            Get in touch
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-black md:text-4xl">
            Send your message
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-gold to-transparent" />
          <p className="mt-4 text-brand-muted">
            Reach Eagle Wings Services Ltd for manpower placement, safety
            consultancy & training, or general commerce enquiries.
          </p>

          <motion.div
            className="mt-8 space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white/90 p-5 shadow-sm backdrop-blur transition hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/10"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-black">
                  <card.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-black">{card.title}</p>
                  <div className="mt-1">{card.content}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInRight}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
