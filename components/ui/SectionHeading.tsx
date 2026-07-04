"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      {eyebrow ? (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.2em]",
            light ? "text-brand-gold" : "text-brand-red"
          )}
        >
          <span className="mr-1 opacity-70">{"//"}</span>
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-brand-black"
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className={cn(
          "mt-4 h-1 rounded-full bg-gradient-to-r from-brand-gold to-transparent",
          align === "center" ? "mx-auto w-24" : "w-20"
        )}
      />
      {description ? (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-brand-muted"
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
