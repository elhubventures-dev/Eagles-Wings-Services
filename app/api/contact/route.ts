import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"
import { sendEmail } from "@/lib/email/resend"
import { contactSchema } from "@/lib/validations/contact"

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", fields: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, phone, service, message } = parsed.data

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

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Unable to send message" },
      { status: 500 }
    )
  }
}
