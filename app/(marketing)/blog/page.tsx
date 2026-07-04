import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { posts } from "@/content/blog"
import { formatDate } from "@/lib/utils"
import { PageHero } from "@/components/sections/PageHero"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on electrical safety, energy efficiency, and OHS training.",
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        eyebrow="News & insights"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                    {post.category} · {formatDate(post.publishedAt)}
                  </p>
                  <h2 className="mt-3 font-heading text-xl font-bold text-brand-black">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-brand-muted">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
