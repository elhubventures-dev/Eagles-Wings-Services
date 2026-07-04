"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Phone, ChevronDown, ArrowRight } from "lucide-react"
import { serviceMenu, siteConfig } from "@/config/site"
import { Button } from "@/components/ui/Button"
import { MobileNav } from "@/components/layout/MobileNav"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="hidden border-b border-white/10 bg-brand-black/90 text-sm text-white/80 backdrop-blur md:block">
        <div className="container-site flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 transition hover:text-white">
              <MapPin className="h-4 w-4 text-brand-gold" />
              {siteConfig.address}
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand-gold" />
              {siteConfig.email}
            </a>
          </div>
          <a
            href={siteConfig.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-brand-gold"
          >
            <Phone className="h-4 w-4 animate-pulse text-brand-gold" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <motion.div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "fixed inset-x-0 top-0 border-b border-white/10 bg-brand-black/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "bg-transparent"
        )}
        animate={{
          paddingTop: scrolled ? 4 : 0,
          paddingBottom: scrolled ? 4 : 0,
        }}
      >
        <div className="container-site flex items-center justify-between py-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="relative block h-14 w-48 shrink-0 rounded-md bg-white px-2 py-1 shadow-sm transition hover:shadow-lg hover:shadow-brand-gold/20"
            >
              <Image
                src="/images/logo/logo-horizontal.png"
                alt={siteConfig.name}
                fill
                className="object-contain object-left p-1"
                priority
              />
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => {
              if ("mega" in item && item.mega) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="nav-link inline-flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 w-[min(92vw,920px)] -translate-x-1/2 pt-4 opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-black via-[#1d1e22] to-[#2a2118] shadow-2xl shadow-black/50">
                        <div className="grid gap-0 md:grid-cols-3">
                          {serviceMenu.map((group, index) => (
                            <div
                              key={group.category}
                              className={cn(
                                "p-5",
                                index < serviceMenu.length - 1 &&
                                  "md:border-r md:border-brand-gold/15"
                              )}
                            >
                              <Link
                                href={group.href}
                                className="group/cat flex items-start justify-between gap-2 rounded-lg px-2 py-1 transition hover:bg-white/5"
                              >
                                <div>
                                  <p className="text-sm font-semibold text-brand-gold">
                                    {group.label}
                                  </p>
                                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/50">
                                    {group.description}
                                  </p>
                                </div>
                                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold/60 transition group-hover/cat:translate-x-0.5 group-hover/cat:text-brand-gold" />
                              </Link>

                              <ul className="mt-4 space-y-1">
                                {group.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className="block rounded-lg px-2 py-2 text-sm text-white/80 transition hover:bg-brand-gold/10 hover:pl-3 hover:text-brand-gold"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-brand-gold/15 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/5 px-5 py-3">
                          <p className="text-xs text-white/50">
                            Explore all manpower, safety, and commerce solutions
                          </p>
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-gold transition hover:text-white"
                          >
                            View all services
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/contact">Free Estimate</Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {scrolled ? (
          <motion.div
            className="pointer-events-none fixed inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : null}
      </AnimatePresence>
    </header>
  )
}
