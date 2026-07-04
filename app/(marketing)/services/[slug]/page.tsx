import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { getServiceBySlug, services } from "@/content/services"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Button } from "@/components/ui/Button"

type ServicePageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.excerpt,
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return (
    <>
      <PageHero
        title={service.title}
        eyebrow="Service details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-base leading-relaxed text-brand-muted">
              {service.description}
            </p>
            {service.features.length > 0 ? (
              <>
                <h2 className="mt-8 font-heading text-2xl font-bold text-brand-black">
                  Short Notes:
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                      <span className="text-brand-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {service.benefit ? (
              <div className="mt-8 rounded-xl bg-brand-warm p-5">
                <h3 className="font-heading text-xl font-bold text-brand-black">
                  Key Benefit:
                </h3>
                <p className="mt-2 text-brand-muted">{service.benefit}</p>
              </div>
            ) : null}
            <div className="mt-8">
              <Button href="/contact">Request This Service</Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
