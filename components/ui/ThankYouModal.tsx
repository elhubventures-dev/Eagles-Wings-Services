"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

type ThankYouModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description: string
  details?: { label: string; value: string }[]
}

export function ThankYouModal({
  open,
  onClose,
  title,
  description,
  details,
}: ThankYouModalProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close thank you dialog"
            className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thank-you-title"
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-brand-gold/20 bg-white shadow-2xl shadow-brand-gold/20"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <div className="bg-gradient-to-br from-brand-black via-[#1d1e22] to-[#2a2118] px-6 py-8 text-center text-white">
              <motion.div
                className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-black"
                initial={{ scale: 0.6, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.05 }}
              >
                <CheckCircle2 className="h-8 w-8" />
              </motion.div>
              <h3
                id="thank-you-title"
                className="mt-4 font-heading text-2xl font-bold"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {description}
              </p>
            </div>

            {details && details.length > 0 ? (
              <div className="space-y-3 px-6 py-5">
                {details.map((detail) => (
                  <div
                    key={`${detail.label}-${detail.value}`}
                    className="rounded-xl bg-brand-warm/70 px-4 py-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-brand-black">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-6 py-4" />
            )}

            <div className="flex justify-center px-6 pb-6">
              <Button type="button" onClick={onClose} className="min-w-32">
                Close
              </Button>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
