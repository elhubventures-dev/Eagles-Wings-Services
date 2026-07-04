import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, posts } from "@/content/blog"
import { formatDate } from "@/lib/utils"
import { PageHero } from "@/components/sections/PageHero"
import { CtaBanner } from "@/components/sections/CtaBanner"

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <PageHero
        title={post.title}
        eyebrow={post.category}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-padding section-mesh bg-brand-warm">
        <div className="container-site max-w-4xl rounded-2xl border border-black/5 bg-white p-6 shadow-xl shadow-brand-gold/5 md:p-10">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
            {post.author} · {formatDate(post.publishedAt)}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  )
}
