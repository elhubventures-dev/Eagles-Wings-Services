import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceBySlug, services } from "@/content/services"
import { PageHero } from "@/components/sections/PageHero"
import { ServiceDetail } from "@/components/sections/ServiceDetail"
import { CtaBanner } from "@/components/sections/CtaBanner"

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
      <ServiceDetail service={service} />
      <CtaBanner />
    </>
  )
}
