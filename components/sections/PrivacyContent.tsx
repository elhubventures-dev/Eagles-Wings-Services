"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"
import { privacyPolicy, type PrivacyBlock } from "@/content/privacy"
import { Button } from "@/components/ui/Button"
import {
  easeOut,
  fadeUp,
  scaleIn,
  slideInLeft,
  staggerContainer,
  staggerFast,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

function Block({ block }: { block: PrivacyBlock }) {
  if (block.type === "paragraph") {
    return (
      <motion.p
        variants={fadeUp}
        className="leading-relaxed text-brand-muted"
      >
        {block.text}
      </motion.p>
    )
  }

  if (block.type === "subtitle") {
    return (
      <motion.h4
        variants={fadeUp}
        className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-black"
      >
        {block.text}
      </motion.h4>
    )
  }

  if (block.type === "list") {
    return (
      <motion.ul
        className="mt-3 space-y-2"
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {block.items.map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    )
  }

  return (
    <motion.div
      className="mt-4 grid gap-3 sm:grid-cols-2"
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {block.items.map((item) => (
        <motion.div
          key={`${item.label}-${item.value}`}
          variants={scaleIn}
          whileHover={{ y: -3, scale: 1.02 }}
          className="rounded-xl border border-black/5 bg-brand-warm/50 px-4 py-3 transition hover:border-brand-gold/30 hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
            {item.label}
          </p>
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-1 block text-sm font-medium text-brand-black transition hover:text-brand-gold"
            >
              {item.value}
            </a>
          ) : (
            <p className="mt-1 text-sm font-medium text-brand-black">{item.value}</p>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

export function PrivacyContent() {
  const [activeId, setActiveId] = useState(privacyPolicy.sections[0]?.id ?? "")

  useEffect(() => {
    const sections = privacyPolicy.sections.map((section) =>
      document.getElementById(section.id)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding section-mesh relative bg-brand-warm">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl"
          animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl"
          animate={{ y: [0, -16, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container-site relative">
        <motion.div
          className="mb-10 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl shadow-brand-gold/10"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
            <motion.div
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold"
              initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 16 }}
              whileHover={{ rotate: 6, scale: 1.08 }}
            >
              <ShieldCheck className="h-8 w-8" />
            </motion.div>
            <div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <CalendarDays className="h-3.5 w-3.5" />
                Effective {privacyPolicy.effectiveDate}
              </motion.div>
              <motion.p
                className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                {privacyPolicy.intro}
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <motion.aside
            className="z-20 lg:sticky lg:top-28 lg:self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
          >
            <nav className="rounded-2xl border border-black/5 bg-white/95 p-5 shadow-sm backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                On this page
              </p>
              <motion.ul
                className="mt-4 max-h-[70vh] space-y-1 overflow-y-auto pr-1"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {privacyPolicy.sections.map((section) => {
                  const active = activeId === section.id
                  return (
                    <motion.li key={section.id} variants={fadeUp}>
                      <a
                        href={`#${section.id}`}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                          active
                            ? "bg-brand-gold/15 font-medium text-brand-black"
                            : "text-brand-muted hover:bg-brand-warm hover:text-brand-black"
                        )}
                      >
                        <span
                          className={cn(
                            "font-semibold transition",
                            active ? "text-brand-gold" : "text-brand-gold/70"
                          )}
                        >
                          {section.number}
                        </span>
                        <span className="line-clamp-1">{section.title}</span>
                        {active ? (
                          <motion.span
                            layoutId="privacy-toc-active"
                            className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-gold"
                          />
                        ) : null}
                      </a>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </nav>
          </motion.aside>

          <div className="space-y-5">
            {privacyPolicy.sections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-8"
                initial={{ opacity: 0, y: 48, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.03, 0.2),
                  ease: easeOut,
                }}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(214, 154, 70, 0.35)",
                  boxShadow: "0 18px 40px -20px rgba(214, 154, 70, 0.35)",
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-black font-heading text-sm font-bold text-brand-gold"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    {section.number}
                  </motion.span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-xl font-bold text-brand-black md:text-2xl">
                      {section.title}
                    </h2>
                    <motion.div
                      className="mt-3 h-1 origin-left rounded-full bg-gradient-to-r from-brand-gold to-transparent"
                      initial={{ scaleX: 0, width: 48 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
                    />
                    <motion.div
                      className="mt-5 space-y-3"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {section.blocks.map((block, blockIndex) => (
                        <Block
                          key={`${section.id}-${blockIndex}`}
                          block={block}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}

            <motion.div
              className="overflow-hidden rounded-3xl bg-brand-black p-6 text-white md:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Need help?
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold md:text-3xl">
                  Questions about your privacy?
                </h3>
                <p className="mt-3 max-w-2xl text-white/70">
                  Reach our team and we will help you exercise your privacy rights or
                  clarify how your information is handled.
                </p>
              </motion.div>

              <motion.div
                className="mt-6 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a
                  variants={fadeUp}
                  href="mailto:info@e-wingss.com"
                  className="inline-flex items-center gap-2 transition hover:text-brand-gold"
                >
                  <Mail className="h-4 w-4 text-brand-gold" />
                  info@e-wingss.com
                </motion.a>
                <motion.a
                  variants={fadeUp}
                  href="https://wa.me/237679226448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-brand-gold"
                >
                  <Phone className="h-4 w-4 text-brand-gold" />
                  (+237) 679 226 448
                </motion.a>
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4 text-brand-gold" />
                  Mile 2, Limbe, Cameroon
                </motion.span>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <Button href="/contact">Contact Us</Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
