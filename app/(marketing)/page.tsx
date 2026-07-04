import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { WhyChoose } from "@/components/sections/WhyChoose"
import { Testimonials } from "@/components/sections/Testimonials"
import { CtaBanner } from "@/components/sections/CtaBanner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesGrid limit={6} />
      <WhyChoose />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
