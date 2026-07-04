"use client"

import { useFormState, useFormStatus } from "react-dom"
import { motion } from "framer-motion"
import { submitContactForm, type ActionState } from "@/actions/contact"
import { services } from "@/content/services"
import { Button } from "@/components/ui/Button"
import { fadeUp, staggerContainer } from "@/lib/motion"

const initialState: ActionState = {}

const fieldClass =
  "w-full rounded-xl border border-black/10 bg-brand-warm/50 px-4 py-3.5 text-sm outline-none transition duration-300 placeholder:text-brand-muted/60 focus:border-brand-gold focus:bg-white focus:shadow-md focus:shadow-brand-gold/10 focus:ring-2 focus:ring-brand-gold/20"

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
    <motion.form
      action={formAction}
      className="shine-border h-fit space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-2xl shadow-brand-gold/10 md:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Contact form
        </p>
        <h3 className="mt-2 font-heading text-2xl font-bold text-brand-black">
          How can we help?
        </h3>
      </motion.div>

      <motion.div variants={fadeUp} className="grid gap-5 md:grid-cols-2">
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
      </motion.div>
      <motion.div variants={fadeUp}>
        <Field label="Phone" name="phone" type="tel" error={state.fields?.phone?.[0]} />
      </motion.div>
      <motion.div variants={fadeUp}>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-brand-black">
          Service
        </label>
        <select
          id="service"
          name="service"
          className={fieldClass}
          defaultValue=""
        >
          <option value="">General enquiry</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </motion.div>
      <motion.div variants={fadeUp}>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your project or enquiry..."
        />
        {state.fields?.message?.[0] ? (
          <p className="mt-1 text-sm text-brand-red">{state.fields.message[0]}</p>
        ) : null}
      </motion.div>

      <motion.div variants={fadeUp}>
        <SubmitButton />
      </motion.div>

      {state.success ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
        >
          Thank you. Your message has been sent successfully.
        </motion.p>
      ) : null}
      {state.error ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-brand-red"
        >
          {state.error}
        </motion.p>
      ) : null}
    </motion.form>
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
        className={fieldClass}
      />
      {error ? <p className="mt-1 text-sm text-brand-red">{error}</p> : null}
    </div>
  )
}
