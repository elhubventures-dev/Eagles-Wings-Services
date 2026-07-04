"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ButtonProps = {
  href?: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
}

const variants = {
  primary:
    "bg-gradient-to-r from-brand-gold via-[#e8b45a] to-brand-gold-dark text-brand-black shadow-lg shadow-brand-gold/25 hover:shadow-brand-gold/40",
  secondary:
    "bg-gradient-to-r from-brand-red to-[#ff2d55] text-white shadow-lg shadow-brand-red/20",
  outline:
    "border-2 border-white/80 text-white hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black",
  ghost: "bg-white text-brand-black hover:bg-brand-warm shadow-md",
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  )

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.div
        className="inline-flex"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
