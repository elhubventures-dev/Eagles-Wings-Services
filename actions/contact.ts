"use server"

import { sendEmailPair } from "@/lib/email/resend"
import {
  enquiryAdminEmail,
  enquiryClientEmail,
} from "@/lib/email/templates"
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

  const data = parsed.data
  const admin = enquiryAdminEmail(data)
  const client = enquiryClientEmail(data)

  try {
    await sendEmailPair({
      admin: {
        subject: admin.subject,
        html: admin.html,
        replyTo: data.email,
      },
      client: {
        to: data.email,
        subject: client.subject,
        html: client.html,
      },
    })

    return { success: true }
  } catch {
    return {
      error: "Unable to send your message right now. Please try again later.",
    }
  }
}
