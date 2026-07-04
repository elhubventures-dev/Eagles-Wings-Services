import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const RATE_LIMIT = 60
const WINDOW_MS = 60_000
const hits = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  const ip = getClientIp(request)
  const now = Date.now()
  const current = hits.get(ip)

  if (!current || current.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return NextResponse.next()
  }

  current.count += 1
  hits.set(ip, current)

  if (current.count > RATE_LIMIT) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}
