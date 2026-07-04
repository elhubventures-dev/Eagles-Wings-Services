"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { posts } from "@/content/blog"
import { formatDate } from "@/lib/utils"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function BlogGrid() {
  return (
    <section className="section-padding section-mesh bg-white">
      <motion.div
        className="container-site grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="card-surface group"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {post.category} · {formatDate(post.publishedAt)}
                </p>
                <h2 className="mt-3 font-heading text-xl font-bold text-brand-black transition group-hover:text-brand-gold">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-brand-muted">{post.excerpt}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
