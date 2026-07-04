import type { Metadata } from "next"
import { Mail, MapPin, Phone, Clock3 } from "lucide-react"
import { siteConfig } from "@/config/site"
import { siteCopy } from "@/content/pages"
import { PageHero } from "@/components/sections/PageHero"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Eagle Wings Services Ltd in Mile 2, Limbe – Cameroon for manpower, safety consultancy, and commerce services.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        eyebrow="Get in touch"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-padding bg-brand-warm">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-black">
              Send your message
            </h2>
            <p className="mt-4 text-brand-muted">
              Reach Eagle Wings Services Ltd for manpower placement, safety
              consultancy & training, or general commerce enquiries.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-gold" />
                <div>
                  <p className="font-semibold text-brand-black">Office Address</p>
                  <p className="text-brand-muted">{siteCopy.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                <Phone className="mt-0.5 h-5 w-5 text-brand-gold" />
                <div>
                  <p className="font-semibold text-brand-black">Contact us</p>
                  <a href={siteConfig.phoneHref} className="block text-brand-muted">
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block text-brand-muted"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                <Clock3 className="mt-0.5 h-5 w-5 text-brand-gold" />
                <div>
                  <p className="font-semibold text-brand-black">Office time</p>
                  {siteCopy.contact.hours.map((line) => (
                    <p key={line} className="text-brand-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                <Mail className="mt-0.5 h-5 w-5 text-brand-gold" />
                <div>
                  <p className="font-semibold text-brand-black">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand-muted"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <iframe
                title={siteCopy.contact.address}
                src={siteCopy.contact.mapEmbed}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
