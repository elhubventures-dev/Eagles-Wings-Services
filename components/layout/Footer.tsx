"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useFormState, useFormStatus } from "react-dom"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { subscribeNewsletter } from "@/actions/newsletter"
import type { ActionState } from "@/actions/contact"
import { ThankYouModal } from "@/components/ui/ThankYouModal"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { whatsappHref } from "@/lib/utils"

const initialState: ActionState = {}

function SubscribeButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark px-5 py-3 text-sm font-semibold uppercase text-brand-black transition hover:brightness-110 disabled:opacity-60"
    >
      {pending ? "..." : "Join"}
    </button>
  )
}

export function Footer() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(subscribeNewsletter, initialState)
  const [showThankYou, setShowThankYou] = useState(false)
  const [subscriberEmail, setSubscriberEmail] = useState("")

  useEffect(() => {
    if (!state.success) return
    formRef.current?.reset()
    setSubscriberEmail(state.data?.email || "")
    setShowThankYou(true)
  }, [state])

  return (
    <footer className="section-mesh-dark relative overflow-hidden bg-brand-black text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />

      <motion.div
        className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="space-y-5">
          <div className="relative h-16 w-52 rounded-md bg-white px-2 py-1 shadow-lg shadow-brand-gold/10">
            <Image
              src="/images/logo/logo-horizontal.png"
              alt={siteConfig.name}
              fill
              className="object-contain object-left p-1"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Manpower Placement and Safety Consultancy & Training — empowering
            businesses with skilled people, safe practices, and reliable solutions.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="mb-4 font-heading text-lg font-bold">Useful Links</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {siteConfig.footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block transition hover:translate-x-1 hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="mb-4 font-heading text-lg font-bold">Services</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {siteConfig.footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block transition hover:translate-x-1 hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="mb-4 font-heading text-lg font-bold">Get Updates</h3>
          <p className="mb-4 text-sm text-white/70">
            Subscribe for service tips, safety insights, and company news.
          </p>
          <form ref={formRef} action={formAction} className="flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
            />
            <SubscribeButton />
          </form>
          {state.error ? (
            <p className="mt-2 text-sm text-brand-red">{state.error}</p>
          ) : null}
        </motion.div>
      </motion.div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 transition hover:text-brand-gold"
          >
            <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
            {siteConfig.email}
          </a>
          <a
            href={whatsappHref(siteConfig.phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-brand-gold"
          >
            <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
            {siteConfig.phone}
          </a>
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-brand-gold" />
            {siteConfig.address}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="transition hover:text-brand-gold">
            Privacy Policy
          </Link>
        </div>
      </div>

      <ThankYouModal
        open={showThankYou}
        onClose={() => setShowThankYou(false)}
        title="You're subscribed"
        description="Thanks for joining the Eagle Wings newsletter. A confirmation email has been sent to your inbox."
        details={
          subscriberEmail
            ? [{ label: "Subscribed email", value: subscriberEmail }]
            : undefined
        }
      />
    </footer>
  )
}
