"use client"

import { motion, type Variants } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  amount?: number
  as?: "div" | "section" | "article" | "ul" | "li"
}

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.2,
  as = "div",
}: AnimatedSectionProps) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

export function StaggerGroup({
  children,
  className,
  once = true,
  amount = 0.15,
}: {
  children: React.ReactNode
  className?: string
  once?: boolean
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

export function HoverCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}
