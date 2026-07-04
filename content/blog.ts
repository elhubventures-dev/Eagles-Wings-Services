export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string[]
  image: string
  category: string
  author: string
  publishedAt: string
}

export const posts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello world!",
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    content: [
      "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    ],
    image: "/images/blog/blog-1.jpg",
    category: "Uncategorized",
    author: "Info@e-wingss.com",
    publishedAt: "2025-08-12",
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
