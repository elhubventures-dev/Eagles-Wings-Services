"use client"

import { useFormState, useFormStatus } from "react-dom"
import { submitContactForm, type ActionState } from "@/actions/contact"
import { services } from "@/content/services"
import { Button } from "@/components/ui/Button"

const initialState: ActionState = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <form
      action={formAction}
      className="shine-border space-y-5 rounded-2xl border border-black/5 bg-white/95 p-6 shadow-2xl shadow-brand-gold/10 backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          required
          error={state.fields?.name?.[0]}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={state.fields?.email?.[0]}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" error={state.fields?.phone?.[0]} />
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-brand-black">
            Service
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-md border border-black/10 bg-brand-warm/40 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/30"
            defaultValue=""
          >
            <option value="">General enquiry</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-black/10 bg-brand-warm/40 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/30"
        />
        {state.fields?.message?.[0] ? (
          <p className="mt-1 text-sm text-brand-red">{state.fields.message[0]}</p>
        ) : null}
      </div>

      <SubmitButton />

      {state.success ? (
        <p className="text-sm font-medium text-green-700">
          Thank you. Your message has been sent successfully.
        </p>
      ) : null}
      {state.error ? (
        <p className="text-sm font-medium text-brand-red">{state.error}</p>
      ) : null}
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-brand-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-black/10 bg-brand-warm/40 px-4 py-3 text-sm outline-none transition focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/30"
      />
      {error ? <p className="mt-1 text-sm text-brand-red">{error}</p> : null}
    </div>
  )
}
