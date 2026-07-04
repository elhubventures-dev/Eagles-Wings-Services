type EmailPayload = {
  from: string
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.info("[email:dev]", payload)
    return { id: "dev-mode" }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Email send failed: ${errorText}`)
  }

  return response.json() as Promise<{ id: string }>
}
