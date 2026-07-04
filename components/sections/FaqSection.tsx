"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/content/faq"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"

type FaqSectionProps = {
  limit?: number
}

export function FaqSection({ limit }: FaqSectionProps) {
  const items = limit ? faqs.slice(0, limit) : faqs
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding section-mesh bg-brand-warm">
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Our FAQs"
          title="Answers to common service questions"
          description="Need something specific? Reach out and our team will guide you through the next step."
        />
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {items.map((item, index) => {
            const open = openIndex === index
            return (
              <motion.div
                key={item.question}
                variants={fadeUp}
                className={cn(
                  "overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300",
                  open
                    ? "border-brand-gold/40 shadow-lg shadow-brand-gold/10"
                    : "border-black/5 hover:border-brand-gold/20"
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span className="font-heading text-lg font-semibold text-brand-black">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition",
                      open
                        ? "bg-brand-gold text-brand-black"
                        : "bg-brand-warm text-brand-gold"
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        open && "rotate-180"
                      )}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
