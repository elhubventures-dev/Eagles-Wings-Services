"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react"
import { siteConfig } from "@/config/site"
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
              if ("children" in item && item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="nav-link inline-flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-3 rounded-xl border border-white/10 bg-brand-black/95 p-3 opacity-0 shadow-2xl backdrop-blur transition duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-brand-gold/10 hover:pl-4 hover:text-brand-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
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
