export type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Jean-Paul Ndzi",
    role: "Construction Project Manager",
    quote:
      "Eagle Wings Services Ltd provided us with skilled manpower and strong safety support on our project. Their professionalism and attention to safety standards were impressive. I highly recommend their services.",
    image: "/images/about/about-2.jpg",
  },
  {
    name: "Clarisse Ndziyem",
    role: "Human Resource Officer",
    quote:
      "Their recruitment and onboarding process was smooth and efficient. Eagle Wings helped us place qualified staff within a short time, and the support was excellent from start to finish.",
    image: "/images/about/about-3.jpg",
  },
  {
    name: "Martin Tchinda",
    role: "Operations Supervisor",
    quote:
      "The safety training and workplace audits carried out by Eagle Wings Services greatly improved our safety compliance. Their team is knowledgeable and very practical in approach.",
    image: "/images/about/about-4.jpg",
  },
  {
    name: "Florence Mbarga",
    role: "Procurement Manager",
    quote:
      "Eagle Wings Services Ltd supported our procurement and supply chain needs professionally. Their reliability and clear communication made our operations much easier.",
    image: "/images/team/team-member.jpg",
  },
  {
    name: "Samuel Ndzi",
    role: "Logistics & Site Coordinator",
    quote:
      "We engaged Eagle Wings for contract manpower supply, and the experience was outstanding. The workers were disciplined, skilled, and well-managed throughout the contract period.",
    image: "/images/team/team-lead.jpg",
  },
]
