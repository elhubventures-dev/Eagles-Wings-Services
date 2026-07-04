"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { serviceMenu, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const closeMenu = () => {
    setOpen(false)
    setServicesOpen(false)
    setOpenGroup(null)
  }

  return (
    <div className="lg:hidden">
      <motion.button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white backdrop-blur"
        onClick={() => setOpen((value) => !value)}
        whileTap={{ scale: 0.92 }}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-brand-black/95 px-6 py-8 backdrop-blur-xl"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="font-heading text-lg font-bold text-white">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                className="rounded-full bg-white/10 p-2 text-white"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 pb-10">
              {siteConfig.nav.map((item, index) => {
                if ("mega" in item && item.mega) {
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-lg font-medium text-white transition hover:bg-white/5"
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            servicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen ? (
                          <motion.div
                            className="mt-1 space-y-2 border-l border-brand-gold/40 pl-3"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <Link
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm font-semibold text-brand-gold"
                              onClick={closeMenu}
                            >
                              All Services
                            </Link>

                            {serviceMenu.map((group) => {
                              const isOpen = openGroup === group.category
                              return (
                                <div
                                  key={group.category}
                                  className="rounded-xl bg-white/5"
                                >
                                  <button
                                    type="button"
                                    className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-semibold text-white"
                                    onClick={() =>
                                      setOpenGroup(isOpen ? null : group.category)
                                    }
                                  >
                                    {group.label}
                                    <ChevronDown
                                      className={cn(
                                        "h-4 w-4 text-brand-gold transition-transform",
                                        isOpen && "rotate-180"
                                      )}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {isOpen ? (
                                      <motion.div
                                        className="space-y-1 px-2 pb-2"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                      >
                                        <Link
                                          href={group.href}
                                          className="block rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide text-brand-gold/80"
                                          onClick={closeMenu}
                                        >
                                          View category
                                        </Link>
                                        {group.children.map((child) => (
                                          <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block rounded-md px-3 py-2 text-sm text-white/75 transition hover:bg-brand-gold/10 hover:text-brand-gold"
                                            onClick={closeMenu}
                                          >
                                            {child.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    ) : null}
                                  </AnimatePresence>
                                </div>
                              )
                            })}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-lg font-medium text-white transition hover:bg-white/5 hover:text-brand-gold"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
