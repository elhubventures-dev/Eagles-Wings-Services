/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://api.resend.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tp-services/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/checkout",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/my-account",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/wishlist",
        destination: "/services",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
