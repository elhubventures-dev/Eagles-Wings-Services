"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { siteCopy } from "@/content/pages"
import { fadeUp, staggerContainer } from "@/lib/motion"

const stats = [
  { value: siteCopy.experienceYears, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "%", label: "Guarantee" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 3, suffix: "", label: "Core service lines" },
]

function CountUp({
  value,
  suffix,
  active,
}: {
  value: number
  suffix: string
  active: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const totalFrames = 40
    const timer = window.setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      setCount(Math.round(value * progress))
      if (frame >= totalFrames) window.clearInterval(timer)
    }, 24)
    return () => window.clearInterval(timer)
  }, [active, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section className="relative z-10 -mt-16">
      <div className="container-site">
        <motion.div
          ref={ref}
          className="gold-glow grid gap-4 rounded-2xl bg-gradient-to-br from-brand-gold via-[#e8b45a] to-brand-gold-dark p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-xl bg-black/5 px-4 py-3 text-center backdrop-blur-sm transition hover:bg-black/10 lg:text-left"
            >
              <p className="font-heading text-4xl font-bold text-brand-black">
                <CountUp value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="mt-1 text-sm font-medium text-brand-black/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
