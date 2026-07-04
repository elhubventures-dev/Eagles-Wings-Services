export type PortfolioItem = {
  slug: string
  title: string
  category: string
  image: string
  summary: string
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "electrical-repair",
    title: "Electrical Repair",
    category: "Repair",
    image: "/images/blog/blog-3.jpg",
    summary: "Featured project from Eagle Wings Services portfolio showcase.",
  },
  {
    slug: "renovation-wiring",
    title: "Renovation Wiring",
    category: "Repair",
    image: "/images/team/team-3.jpg",
    summary: "Featured project from Eagle Wings Services portfolio showcase.",
  },
  {
    slug: "circuit-breaker-panels",
    title: "Circuit Breaker Panels",
    category: "Repair",
    image: "/images/services/service-4.jpg",
    summary: "Featured project from Eagle Wings Services portfolio showcase.",
  },
  {
    slug: "inspections-testing",
    title: "Inspections & Testing",
    category: "Repair",
    image: "/images/services/service-1.jpg",
    summary: "Featured project from Eagle Wings Services portfolio showcase.",
  },
  {
    slug: "industrial-solution",
    title: "Industrial Solution",
    category: "Repair",
    image: "/images/services/service-industrial.jpg",
    summary: "Featured project from Eagle Wings Services portfolio showcase.",
  },
  {
    slug: "data-system-wiring",
    title: "Data System Wiring",
    category: "Repair",
    image: "/images/services/service-2.jpg",
    summary: "Featured project from Eagle Wings Services portfolio showcase.",
  },
]
