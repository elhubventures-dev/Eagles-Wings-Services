import type { Metadata } from "next"
import { PageHero } from "@/components/sections/PageHero"
import { BlogGrid } from "@/components/sections/BlogGrid"
import { CtaBanner } from "@/components/sections/CtaBanner"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest news and articles from Eagle Wings Services Ltd.",
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        eyebrow="Our article and blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogGrid />
      <CtaBanner />
    </>
  )
}
