import { NextResponse } from "next/server"
import { sendEmailPair } from "@/lib/email/resend"
import {
  enquiryAdminEmail,
  enquiryClientEmail,
} from "@/lib/email/templates"
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

    const data = parsed.data
    const admin = enquiryAdminEmail(data)
    const client = enquiryClientEmail(data)

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

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Unable to send message" },
      { status: 500 }
    )
  }
}
