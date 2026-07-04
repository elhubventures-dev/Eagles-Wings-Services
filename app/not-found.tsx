import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-brand-black px-4 pt-32 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            404
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white md:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            The page you are looking for may have been moved or no longer exists.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
