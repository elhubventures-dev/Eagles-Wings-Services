"use server"

import { sendEmailPair } from "@/lib/email/resend"
import {
  newsletterAdminEmail,
  newsletterClientEmail,
} from "@/lib/email/templates"
import { newsletterSchema } from "@/lib/validations/contact"
import type { ActionState } from "./contact"

export async function subscribeNewsletter(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
  })

  if (!parsed.success) {
    return {
      error: "Please enter a valid email address.",
      fields: parsed.error.flatten().fieldErrors,
    }
  }

  const email = parsed.data.email
  const admin = newsletterAdminEmail(email)
  const client = newsletterClientEmail(email)

  try {
    await sendEmailPair({
      admin: {
        subject: admin.subject,
        html: admin.html,
        replyTo: email,
      },
      client: {
        to: email,
        subject: client.subject,
        html: client.html,
      },
    })

    // Optional Resend audience sync when configured
    const audienceId = process.env.RESEND_AUDIENCE_ID
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey && audienceId) {
      await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }).catch(() => undefined)
    }

    return {
      success: true,
      data: { email },
    }
  } catch {
    return { error: "Subscription failed. Please try again." }
  }
}
