import { siteConfig } from "@/config/site"

const brand = {
  black: "#16171a",
  gold: "#d69a46",
  goldDark: "#c4872f",
  warm: "#f2edeb",
  muted: "#727272",
  white: "#ffffff",
  red: "#dd0733",
}

const siteUrl = process.env.NEXT_PUBLIC_URL || siteConfig.url

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function emailShell({
  preheader,
  title,
  eyebrow,
  bodyHtml,
}: {
  preheader: string
  title: string
  eyebrow: string
  bodyHtml: string
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${brand.warm};font-family:Arial,Helvetica,sans-serif;color:${brand.black};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brand.warm};padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:${brand.white};border-radius:18px;overflow:hidden;box-shadow:0 18px 40px rgba(22,23,26,0.08);">
          <tr>
            <td style="background:${brand.black};padding:28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${brand.gold};font-weight:700;">
                      ${escapeHtml(eyebrow)}
                    </div>
                    <div style="margin-top:10px;font-size:26px;line-height:1.25;font-weight:700;color:${brand.white};">
                      ${escapeHtml(siteConfig.shortName)}
                    </div>
                    <div style="margin-top:4px;font-size:13px;color:rgba(255,255,255,0.72);">
                      Manpower Placement · Safety Consultancy & Training
                    </div>
                  </td>
                  <td align="right" valign="middle">
                    <div style="display:inline-block;padding:10px 14px;border-radius:999px;background:${brand.gold};color:${brand.black};font-size:12px;font-weight:700;letter-spacing:0.04em;">
                      OFFICE LINE
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:linear-gradient(90deg, ${brand.gold}, ${brand.goldDark});font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:${brand.black};">
                ${escapeHtml(title)}
              </h1>
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brand.warm};border-radius:14px;padding:18px 20px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:${brand.gold};font-weight:700;margin-bottom:10px;">
                      Contact
                    </div>
                    <div style="font-size:14px;line-height:1.7;color:${brand.muted};">
                      <div><strong style="color:${brand.black};">Email:</strong> <a href="mailto:${siteConfig.email}" style="color:${brand.gold};text-decoration:none;">${siteConfig.email}</a></div>
                      <div><strong style="color:${brand.black};">Phone:</strong> <a href="${siteConfig.phoneHref}" style="color:${brand.gold};text-decoration:none;">${siteConfig.phone}</a></div>
                      <div><strong style="color:${brand.black};">Address:</strong> ${escapeHtml(siteConfig.address)}</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:${brand.black};padding:22px 32px;text-align:center;">
              <div style="font-size:13px;color:rgba(255,255,255,0.78);">
                © ${new Date().getFullYear()} ${escapeHtml(siteConfig.name)}
              </div>
              <div style="margin-top:8px;">
                <a href="${siteUrl}" style="color:${brand.gold};font-size:13px;text-decoration:none;">${siteUrl.replace(/^https?:\/\//, "")}</a>
                &nbsp;·&nbsp;
                <a href="${siteUrl}/privacy-policy" style="color:rgba(255,255,255,0.7);font-size:13px;text-decoration:none;">Privacy Policy</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #eee;width:34%;font-size:13px;font-weight:700;color:${brand.black};vertical-align:top;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:${brand.muted};vertical-align:top;">
      ${value}
    </td>
  </tr>`
}

function ctaButton(label: string, href: string) {
  return `<a href="${href}" style="display:inline-block;margin-top:8px;padding:12px 22px;border-radius:10px;background:${brand.gold};color:${brand.black};font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;">
    ${escapeHtml(label)}
  </a>`
}

export type EnquiryEmailData = {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export function enquiryAdminEmail(data: EnquiryEmailData) {
  const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br />")
  const bodyHtml = `
    <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:${brand.muted};">
      A new enquiry was submitted on the Eagle Wings website. Reply directly to this email to respond to the client.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;">
      ${detailRow("Name", escapeHtml(data.name))}
      ${detailRow("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:${brand.gold};text-decoration:none;">${escapeHtml(data.email)}</a>`)}
      ${detailRow("Phone", escapeHtml(data.phone || "Not provided"))}
      ${detailRow("Service", escapeHtml(data.service || "General enquiry"))}
    </table>
    <div style="margin-top:8px;padding:16px 18px;border-radius:12px;background:${brand.warm};">
      <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${brand.gold};font-weight:700;margin-bottom:8px;">Message</div>
      <div style="font-size:14px;line-height:1.7;color:${brand.black};">${messageHtml}</div>
    </div>
    <div style="margin-top:24px;">
      ${ctaButton("Open website", siteUrl)}
    </div>
  `

  return {
    subject: `New enquiry from ${data.name}`,
    html: emailShell({
      preheader: `New website enquiry from ${data.name}`,
      title: "New website enquiry",
      eyebrow: "Admin notification",
      bodyHtml,
    }),
  }
}

export function enquiryClientEmail(data: EnquiryEmailData) {
  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${brand.muted};">
      Hi ${escapeHtml(data.name)},
    </p>
    <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:${brand.muted};">
      Thank you for contacting <strong style="color:${brand.black};">${escapeHtml(siteConfig.name)}</strong>.
      We have received your enquiry and our team will get back to you shortly.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;">
      ${detailRow("Service", escapeHtml(data.service || "General enquiry"))}
      ${detailRow("Phone", escapeHtml(data.phone || "Not provided"))}
    </table>
    <div style="margin-top:8px;padding:16px 18px;border-radius:12px;background:${brand.warm};">
      <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${brand.gold};font-weight:700;margin-bottom:8px;">Your message</div>
      <div style="font-size:14px;line-height:1.7;color:${brand.black};">${escapeHtml(data.message).replace(/\n/g, "<br />")}</div>
    </div>
    <p style="margin:22px 0 0;font-size:15px;line-height:1.7;color:${brand.muted};">
      If your request is urgent, reach us on WhatsApp or call our office line.
    </p>
    <div style="margin-top:20px;">
      ${ctaButton("Message us on WhatsApp", siteConfig.phoneHref)}
    </div>
  `

  return {
    subject: `We received your enquiry | ${siteConfig.shortName}`,
    html: emailShell({
      preheader: "We received your enquiry and will respond shortly.",
      title: "Thanks for reaching out",
      eyebrow: "Enquiry confirmation",
      bodyHtml,
    }),
  }
}

export function newsletterAdminEmail(email: string) {
  const bodyHtml = `
    <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:${brand.muted};">
      A new subscriber joined the Eagle Wings newsletter list.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      ${detailRow("Subscriber email", `<a href="mailto:${escapeHtml(email)}" style="color:${brand.gold};text-decoration:none;">${escapeHtml(email)}</a>`)}
      ${detailRow("Source", "Website footer newsletter form")}
    </table>
    <div style="margin-top:24px;">
      ${ctaButton("View website", siteUrl)}
    </div>
  `

  return {
    subject: `New newsletter subscriber: ${email}`,
    html: emailShell({
      preheader: `New newsletter subscriber: ${email}`,
      title: "New newsletter subscriber",
      eyebrow: "Admin notification",
      bodyHtml,
    }),
  }
}

export function newsletterClientEmail(email: string) {
  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${brand.muted};">
      Welcome,
    </p>
    <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:${brand.muted};">
      You are now subscribed to updates from <strong style="color:${brand.black};">${escapeHtml(siteConfig.name)}</strong>.
      Expect practical insights on manpower placement, safety consultancy, and our commercial services.
    </p>
    <div style="padding:16px 18px;border-radius:12px;background:${brand.warm};font-size:14px;line-height:1.7;color:${brand.black};">
      Subscribed as <strong>${escapeHtml(email)}</strong>
    </div>
    <p style="margin:22px 0 0;font-size:15px;line-height:1.7;color:${brand.muted};">
      You can explore our services any time on our website.
    </p>
    <div style="margin-top:20px;">
      ${ctaButton("Explore services", `${siteUrl}/services`)}
    </div>
  `

  return {
    subject: `Welcome to ${siteConfig.shortName}`,
    html: emailShell({
      preheader: "You are subscribed to Eagle Wings updates.",
      title: "Subscription confirmed",
      eyebrow: "Newsletter welcome",
      bodyHtml,
    }),
  }
}
