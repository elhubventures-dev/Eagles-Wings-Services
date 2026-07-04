"use client"

import Image from "next/image"
import Link from "next/link"
import { useFormState, useFormStatus } from "react-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { subscribeNewsletter } from "@/actions/newsletter"
import type { ActionState } from "@/actions/contact"

const initialState: ActionState = {}

function SubscribeButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-gradient-to-r from-brand-gold to-brand-gold-dark px-4 py-3 text-sm font-semibold uppercase text-brand-black transition hover:brightness-110 disabled:opacity-60"
    >
      {pending ? "..." : "Join"}
    </button>
  )
}

export function Footer() {
  const [state, formAction] = useFormState(subscribeNewsletter, initialState)

  return (
    <footer className="section-mesh-dark relative overflow-hidden bg-brand-black text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <div className="relative h-16 w-52 rounded-md bg-white px-2 py-1">
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
          <div className="space-y-3 text-sm text-white/80">
            <p className="inline-flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand-gold" />
              {siteConfig.email}
            </p>
            <p className="inline-flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-brand-gold" />
              {siteConfig.phone}
            </p>
            <p className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-gold" />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Get Updates</h3>
          <p className="mb-4 text-sm text-white/70">
            Subscribe for service tips, safety insights, and company news.
          </p>
          <form action={formAction} className="flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-brand-gold placeholder:text-white/40 focus:ring-2"
            />
            <SubscribeButton />
          </form>
          {state.success ? (
            <p className="mt-2 text-sm text-brand-gold">Thanks for subscribing.</p>
          ) : null}
          {state.error ? (
            <p className="mt-2 text-sm text-brand-red">{state.error}</p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built for performance. Zero WordPress dependency.</p>
        </div>
      </div>
    </footer>
  )
}
