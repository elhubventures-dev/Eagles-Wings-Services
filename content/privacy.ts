export type PrivacyBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subtitle"; text: string }
  | { type: "details"; items: { label: string; value: string; href?: string }[] }

export type PrivacySection = {
  id: string
  number: string
  title: string
  blocks: PrivacyBlock[]
}

export const privacyPolicy = {
  effectiveDate: "January 16th, 2026",
  intro:
    "Eagle Wings Services Ltd is committed to protecting the privacy and personal information of our clients, partners, website visitors, job applicants, and service users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.e-wingss.com or engage our services.",
  sections: [
    {
      id: "company-information",
      number: "01",
      title: "Company Information",
      blocks: [
        {
          type: "details",
          items: [
            { label: "Company Name", value: "Eagle Wings Services Ltd" },
            { label: "Address", value: "Mile 2, Limbe, Cameroon" },
            {
              label: "Email",
              value: "info@e-wingss.com",
              href: "mailto:info@e-wingss.com",
            },
            {
              label: "Phone",
              value: "(+237) 679 226 448",
              href: "https://wa.me/237679226448",
            },
          ],
        },
      ],
    },
    {
      id: "information-we-collect",
      number: "02",
      title: "Information We Collect",
      blocks: [
        {
          type: "paragraph",
          text: "We may collect the following types of information:",
        },
        { type: "subtitle", text: "a. Personal Information" },
        {
          type: "list",
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Company name and job title",
            "Address and location details",
            "CVs, qualifications, and employment history (for manpower recruitment)",
          ],
        },
        { type: "subtitle", text: "b. Business & Service Information" },
        {
          type: "list",
          items: [
            "Service inquiries and project details",
            "Procurement and logistics information",
            "Safety consultancy and training data",
            "Import/export documentation details",
          ],
        },
        { type: "subtitle", text: "c. Technical Information" },
        {
          type: "list",
          items: [
            "IP address",
            "Browser type and version",
            "Device information",
            "Website usage data (via cookies and analytics tools)",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      number: "03",
      title: "How We Use Your Information",
      blocks: [
        { type: "paragraph", text: "We use collected information to:" },
        {
          type: "list",
          items: [
            "Provide manpower placement and recruitment services",
            "Deliver safety consultancy, training, and compliance services",
            "Manage procurement, logistics, and supply chain services",
            "Respond to inquiries and customer support requests",
            "Process job applications and onboarding",
            "Improve website functionality and user experience",
            "Comply with legal and regulatory obligations",
          ],
        },
      ],
    },
    {
      id: "legal-basis",
      number: "04",
      title: "Legal Basis for Processing",
      blocks: [
        { type: "paragraph", text: "We process personal data based on:" },
        {
          type: "list",
          items: [
            "Your consent",
            "Contractual necessity",
            "Legal obligations",
            "Legitimate business interests",
          ],
        },
      ],
    },
    {
      id: "information-sharing",
      number: "05",
      title: "Information Sharing & Disclosure",
      blocks: [
        {
          type: "paragraph",
          text: "We do not sell or rent personal information. We may share information only with:",
        },
        {
          type: "list",
          items: [
            "Clients requiring manpower or consultancy services",
            "Trusted service providers and partners",
            "Regulatory authorities where legally required",
            "Internal staff strictly for service delivery purposes",
          ],
        },
        {
          type: "paragraph",
          text: "All third parties are required to maintain confidentiality and data protection standards.",
        },
      ],
    },
    {
      id: "data-security",
      number: "06",
      title: "Data Security",
      blocks: [
        {
          type: "paragraph",
          text: "We implement appropriate technical and organizational security measures to protect personal information against:",
        },
        {
          type: "list",
          items: [
            "Unauthorized access",
            "Loss or misuse",
            "Disclosure or alteration",
          ],
        },
        {
          type: "paragraph",
          text: "While we strive to protect your data, no online transmission is 100% secure.",
        },
      ],
    },
    {
      id: "data-retention",
      number: "07",
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: "We retain personal information only for as long as necessary to:",
        },
        {
          type: "list",
          items: [
            "Fulfill service obligations",
            "Meet legal, contractual, or regulatory requirements",
            "Maintain business records",
          ],
        },
        {
          type: "paragraph",
          text: "Recruitment data may be retained for future opportunities unless you request deletion.",
        },
      ],
    },
    {
      id: "cookies",
      number: "08",
      title: "Cookies & Tracking Technologies",
      blocks: [
        { type: "paragraph", text: "Our website may use cookies to:" },
        {
          type: "list",
          items: [
            "Improve website performance",
            "Analyze traffic and user behavior",
            "Enhance user experience",
          ],
        },
        {
          type: "paragraph",
          text: "You can control or disable cookies through your browser settings.",
        },
      ],
    },
    {
      id: "privacy-rights",
      number: "09",
      title: "Your Privacy Rights",
      blocks: [
        { type: "paragraph", text: "You have the right to:" },
        {
          type: "list",
          items: [
            "Access your personal data",
            "Request correction or updates",
            "Request deletion of your data",
            "Withdraw consent at any time",
            "Object to certain data processing activities",
          ],
        },
        {
          type: "paragraph",
          text: "To exercise these rights, contact us at info@e-wingss.com.",
        },
      ],
    },
    {
      id: "third-party-links",
      number: "10",
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.",
        },
      ],
    },
    {
      id: "international-transfers",
      number: "11",
      title: "International Data Transfers",
      blocks: [
        {
          type: "paragraph",
          text: "Where necessary, your information may be transferred or processed outside Cameroon in connection with international clients or partners. Appropriate safeguards will be applied.",
        },
      ],
    },
    {
      id: "updates",
      number: "12",
      title: "Updates to This Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
        },
      ],
    },
    {
      id: "contact-us",
      number: "13",
      title: "Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions or concerns about this Privacy Policy or how your data is handled, please contact us:",
        },
        {
          type: "details",
          items: [
            {
              label: "Email",
              value: "info@e-wingss.com",
              href: "mailto:info@e-wingss.com",
            },
            {
              label: "Phone",
              value: "(+237) 679 226 448",
              href: "https://wa.me/237679226448",
            },
            { label: "Address", value: "Mile 2, Limbe, Cameroon" },
          ],
        },
      ],
    },
  ] satisfies PrivacySection[],
}
