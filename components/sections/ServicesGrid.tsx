"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Users, Globe, ArrowRight } from "lucide-react"
import { services, type ServiceCategory } from "@/content/services"
import { siteCopy } from "@/content/pages"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { fadeUp, staggerContainer } from "@/lib/motion"

const icons = {
  shield: Shield,
  users: Users,
  globe: Globe,
}

const categoryLabels: Record<ServiceCategory, string> = {
  safety: siteCopy.serviceGroups.safety.title,
  manpower: siteCopy.serviceGroups.manpower.title,
  commerce: siteCopy.serviceGroups.commerce.title,
}

type ServicesGridProps = {
  limit?: number
  showHeading?: boolean
  category?: ServiceCategory
}

export function ServicesGrid({
  limit,
  showHeading = true,
  category,
}: ServicesGridProps) {
  let items = category
    ? services.filter((service) => service.category === category)
    : services
  if (limit) items = items.slice(0, limit)

  return (
    <section className="section-padding section-mesh bg-white">
      <div className="container-site">
        {showHeading ? (
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Services"
              title="Our Services"
              description={
                category
                  ? siteCopy.serviceGroups[category].description
                  : "Manpower Placement, Safety Consultancy & Training, and General Commerce solutions."
              }
            />
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:text-brand-gold"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        ) : null}

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {items.map((service) => {
            const Icon = icons[service.icon]
            return (
              <motion.article
                key={service.slug}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="card-surface group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-black shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                    {categoryLabels[service.category]}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-brand-black transition group-hover:text-brand-gold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {service.excerpt}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red transition group-hover:gap-3 group-hover:text-brand-gold"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
