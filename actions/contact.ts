"use server"

import { siteConfig } from "@/config/site"
import { sendEmail } from "@/lib/email/resend"
import { contactSchema } from "@/lib/validations/contact"

export type ActionState = {
  success?: boolean
  error?: string
  fields?: Record<string, string[] | undefined>
}

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    service: formData.get("service") || undefined,
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return {
      error: "Please check the form and try again.",
      fields: parsed.error.flatten().fieldErrors,
    }
  }

  const { name, email, phone, service, message } = parsed.data

  try {
    await sendEmail({
      from: process.env.CONTACT_FROM_EMAIL || "noreply@e-wingss.com",
      to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "General enquiry"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return { success: true }
  } catch {
    return { error: "Unable to send your message right now. Please try again later." }
  }
}
