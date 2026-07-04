import { siteConfig } from "@/config/site"

type EmailPayload = {
  from?: string
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
}

export function getAdminEmail() {
  return process.env.CONTACT_TO_EMAIL || siteConfig.email
}

export function getFromEmail() {
  return (
    process.env.CONTACT_FROM_EMAIL ||
    `Eagle Wings Services <noreply@e-wingss.com>`
  )
}

export async function sendEmail(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY
  const from = payload.from || getFromEmail()
  const requestBody = {
    from,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    reply_to: payload.replyTo,
  }

  if (!apiKey) {
    console.info("[email:dev]", {
      ...requestBody,
      html: `[html ${payload.html.length} chars]`,
    })
    return { id: "dev-mode" }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Email send failed: ${errorText}`)
  }

  return response.json() as Promise<{ id: string }>
}

export async function sendEmailPair(options: {
  admin: { subject: string; html: string; replyTo?: string }
  client: { to: string; subject: string; html: string }
}) {
  const adminEmail = getAdminEmail()

  await Promise.all([
    sendEmail({
      to: adminEmail,
      subject: options.admin.subject,
      html: options.admin.html,
      replyTo: options.admin.replyTo,
    }),
    sendEmail({
      to: options.client.to,
      subject: options.client.subject,
      html: options.client.html,
      replyTo: adminEmail,
    }),
  ])
}
