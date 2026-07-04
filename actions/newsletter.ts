"use server"

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

  const audienceId = process.env.RESEND_AUDIENCE_ID
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey || !audienceId) {
    console.info("[newsletter:dev]", parsed.data.email)
    return { success: true }
  }

  try {
    const response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: parsed.data.email }),
      }
    )

    if (!response.ok) {
      return { error: "Subscription failed. Please try again." }
    }

    return { success: true }
  } catch {
    return { error: "Subscription failed. Please try again." }
  }
}
