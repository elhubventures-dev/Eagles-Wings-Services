export type ServiceCategory = 'safety' | 'manpower' | 'commerce'

export type Service = {
  slug: string
  title: string
  category: ServiceCategory
  icon: 'shield' | 'users' | 'globe'
  excerpt: string
  description: string
  features: string[]
  benefit: string
  image: string
}

export const services: Service[] = [
  {
    slug: "regulatory-compliance-support",
    title: "Regulatory Compliance Support",
    category: "safety",
    icon: "shield",
    excerpt: "Regulatory Compliance Support helps organizations meet all local and international safety, labor, and operational regulations required by law and industry standards",
    description: "Regulatory Compliance Support helps organizations meet all local and international safety, labor, and operational regulations required by law and industry standards",
    features: [
    "Guidance on compliance with health, safety, labor, and environmental regulations",
    "Identification of legal gaps and non-compliance risks",
    "Support in meeting government, industry, and client safety requirements",
    "Preparation for inspections, audits, and certifications",
    "Assistance with documentation, permits, and compliance reports",
    "Reduces legal risks, penalties, and operational disruptions"
    ],
    benefit: "Ensures your business operates legally, safely, and confidently",
    image: "/images/hero/hero-secondary.jpg",
  },
  {
    slug: "risk-assessment-hazard-identification",
    title: "Risk Assessment & Hazard Identification",
    category: "safety",
    icon: "shield",
    excerpt: "Risk Assessment & Hazard Identification involves systematically identifying workplace hazards and evaluating risks to prevent accidents, injuries, and operational losses.",
    description: "Risk Assessment & Hazard Identification involves systematically identifying workplace hazards and evaluating risks to prevent accidents, injuries, and operational losses.",
    features: [
    "Identification of physical, chemical, biological, and operational hazards",
    "Evaluation of risk levels and potential impact on workers and assets",
    "Job Safety Analysis (JSA) and task-based risk assessments",
    "Development of control measures to eliminate or reduce risks",
    "Compliance with safety regulations and best practices",
    "Improves employee awareness and accident prevention"
    ],
    benefit: "Creates a safer work environment by preventing incidents before they occur",
    image: "/images/services/service-site.jpg",
  },
  {
    slug: "emergency-preparedness-response-planning",
    title: "Emergency Preparedness & Response Planning",
    category: "safety",
    icon: "shield",
    excerpt: "Emergency Preparedness & Response Planning ensures organizations are fully ready to respond effectively to emergencies, minimizing injuries, damage, and downtime.",
    description: "Emergency Preparedness & Response Planning ensures organizations are fully ready to respond effectively to emergencies, minimizing injuries, damage, and downtime.",
    features: [
    "Development of customized emergency response plans",
    "Fire safety, evacuation, and emergency drill coordination",
    "First aid and basic life support preparedness",
    "Identification of emergency risks and response procedures",
    "Training staff on emergency roles and responsibilities",
    "Coordination with local emergency services where required"
    ],
    benefit: "Protects lives and assets through fast, organized emergency response",
    image: "/images/uploads/125792.jpg",
  },
  {
    slug: "detailed-safety-inspections",
    title: "Detailed Safety Inspections",
    category: "safety",
    icon: "shield",
    excerpt: "Detailed Safety Inspections involve thorough examination of workplaces, equipment, and operations to identify hazards, non-compliance issues, and unsafe practices.",
    description: "Detailed Safety Inspections involve thorough examination of workplaces, equipment, and operations to identify hazards, non-compliance issues, and unsafe practices.",
    features: [
    "Comprehensive inspection of work areas, machinery, tools, and processes",
    "Identification of unsafe conditions and unsafe acts",
    "Evaluation of compliance with safety policies and regulations",
    "Documentation of findings with corrective action recommendations",
    "Support for continuous safety improvement and risk reduction",
    "Helps prevent accidents, injuries, and operational downtime"
    ],
    benefit: "Detects and corrects safety issues before they lead to incidents",
    image: "/images/hero/hero-field.jpg",
  },
  {
    slug: "workplace-safety-audits",
    title: "Workplace Safety Audits",
    category: "safety",
    icon: "shield",
    excerpt: "Workplace Safety Audits are systematic evaluations of an organization’s safety systems, policies, and practices to ensure effectiveness and compliance.",
    description: "Workplace Safety Audits are systematic evaluations of an organization’s safety systems, policies, and practices to ensure effectiveness and compliance.",
    features: [
    "Review of safety policies, procedures, and documentation",
    "Assessment of workplace conditions and operational practices",
    "Evaluation of employee safety awareness and training",
    "Identification of gaps, risks, and non-compliance issues",
    "Detailed audit reports with improvement recommendations",
    "Supports continuous improvement and regulatory compliance"
    ],
    benefit: "Strengthens safety systems and ensures ongoing compliance",
    image: "/images/services/service-safety.jpg",
  },
  {
    slug: "safety-policy-development",
    title: "Safety Policy Development",
    category: "safety",
    icon: "shield",
    excerpt: "Safety Policy Development involves creating clear, structured, and compliant safety policies that guide safe behavior and operations within an organization.",
    description: "Safety Policy Development involves creating clear, structured, and compliant safety policies that guide safe behavior and operations within an organization.",
    features: [
    "Development of customized safety policies aligned with company operations",
    "Compliance with local and international safety regulations",
    "Clear definition of safety roles, responsibilities, and procedures",
    "Integration of safety culture across all levels of the organization",
    "Documentation for audits, inspections, and regulatory requirements",
    "Continuous review and updates to reflect operational changes"
    ],
    benefit: "Establishes a strong safety culture and clear safety direction",
    image: "/images/about/team-work.jpg",
  },
  {
    slug: "incident-investigation-reporting",
    title: "Incident Investigation & Reporting",
    category: "safety",
    icon: "shield",
    excerpt: "Incident Investigation & Reporting focuses on identifying the root causes of workplace incidents to prevent recurrence and improve overall safety performance.",
    description: "Incident Investigation & Reporting focuses on identifying the root causes of workplace incidents to prevent recurrence and improve overall safety performance.",
    features: [
    "Investigation of accidents, near-misses, and unsafe incidents",
    "Root cause analysis to determine underlying factors",
    "Collection of evidence, witness statements, and observations",
    "Preparation of detailed incident and investigation reports",
    "Recommendations for corrective and preventive actions",
    "Support for regulatory and insurance reporting requirements"
    ],
    benefit: "Prevents repeat incidents and strengthens workplace safety systems",
    image: "/images/services/service-6.jpg",
  },
  {
    slug: "temporary-permanent-staffing",
    title: "Temporary & Permanent Staffing",
    category: "manpower",
    icon: "users",
    excerpt: "Temporary & Permanent Staffing services provide businesses with qualified and reliable personnel to meet both short-term operational needs and long-term workforce goals.",
    description: "Temporary & Permanent Staffing services provide businesses with qualified and reliable personnel to meet both short-term operational needs and long-term workforce goals.",
    features: [
    "Supply of skilled and semi-skilled workers for various industries",
    "Temporary staffing for projects, peak periods, and urgent needs",
    "Permanent recruitment for long-term roles and organizational growth",
    "Candidate screening, selection, and placement",
    "Flexible staffing solutions tailored to business requirements",
    "Reduced recruitment time and operational costs"
    ],
    benefit: "Ensures the right talent is available at the right time",
    image: "/images/uploads/125761.jpg",
  },
  {
    slug: "contract-based-manpower-supply",
    title: "Contract-Based Manpower Supply",
    category: "manpower",
    icon: "users",
    excerpt: "Contract-Based Manpower Supply provides skilled personnel on a contractual basis to support specific projects, operations, or time-bound assignments.",
    description: "Contract-Based Manpower Supply provides skilled personnel on a contractual basis to support specific projects, operations, or time-bound assignments.",
    features: [
    "Provision of qualified manpower for short-term and long-term contracts",
    "Suitable for construction, industrial, technical, and service projects",
    "Flexible workforce deployment based on project requirements",
    "Management of contracts, payroll, and compliance obligations",
    "Reduced administrative burden for client organizations",
    "Scalable manpower solutions for project-based operations"
    ],
    benefit: "Offers flexibility and cost-effective workforce management",
    image: "/images/uploads/59698.jpg",
  },
  {
    slug: "workforce-outsourcing-solutions",
    title: "Workforce Outsourcing Solutions",
    category: "manpower",
    icon: "users",
    excerpt: "Workforce Outsourcing Solutions allow organizations to delegate workforce management to professionals, improving efficiency while reducing operational costs.",
    description: "Workforce Outsourcing Solutions allow organizations to delegate workforce management to professionals, improving efficiency while reducing operational costs.",
    features: [
    "End-to-end workforce management and supervision",
    "Outsourcing of non-core and support functions",
    "Recruitment, deployment, and performance management",
    "Payroll administration and compliance handling",
    "Improved operational focus and productivity",
    "Scalable solutions aligned with business needs"
    ],
    benefit: "Enables businesses to focus on core operations while experts manage the workforce",
    image: "/images/uploads/126917.jpg",
  },
  {
    slug: "recruitment-support-employee-onboarding",
    title: "Recruitment Support & Employee Onboarding",
    category: "manpower",
    icon: "users",
    excerpt: "Recruitment Support & Employee Onboarding services help organizations attract, select, and integrate the right talent smoothly and efficiently.",
    description: "Recruitment Support & Employee Onboarding services help organizations attract, select, and integrate the right talent smoothly and efficiently.",
    features: [
    "Support throughout the recruitment and selection process",
    "Candidate screening, interviews, and background checks",
    "Assistance with job offers and employment documentation",
    "Structured onboarding and staff induction programs",
    "Orientation on company policies, roles, and expectations",
    "Faster employee integration and improved retention"
    ],
    benefit: "Ensures a smooth hiring process and successful employee integration",
    image: "/images/uploads/120810.jpg",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    category: "commerce",
    icon: "globe",
    excerpt: "Eagle Wings Services Ltd provides reliable real estate solutions tailored to individuals, businesses, and investors, with a focus on value, transparency, and long-term returns.",
    description: "Eagle Wings Services Ltd provides reliable real estate solutions tailored to individuals, businesses, and investors, with a focus on value, transparency, and long-term returns.",
    features: [
    "Property sales and leasing (residential & commercial)",
    "Land acquisition and documentation support",
    "Property management and maintenance coordination",
    "Real estate advisory and investment guidance",
    "Site inspections and property valuation support"
    ],
    benefit: "Secure, well-managed property solutions that protect and grow your investment",
    image: "/images/services/service-industrial.jpg",
  },
  {
    slug: "import-export-of-goods",
    title: "Import & Export of Goods",
    category: "commerce",
    icon: "globe",
    excerpt: "Eagle Wings Services Ltd facilitates smooth and compliant international trade by managing the movement of goods across borders with efficiency and reliability.",
    description: "Eagle Wings Services Ltd facilitates smooth and compliant international trade by managing the movement of goods across borders with efficiency and reliability.",
    features: [
    "Import and export of general and specialized goods",
    "Customs documentation and clearance support",
    "International freight coordination (sea, air & land)",
    "Compliance with trade regulations and standards",
    "Timely delivery and cargo tracking support"
    ],
    benefit: "Seamless cross-border trade with reduced delays and risks",
    image: "/images/hero/hero-logistics.jpg",
  },
  {
    slug: "wholesale-retail-distribution",
    title: "Wholesale & Retail Distribution",
    category: "commerce",
    icon: "globe",
    excerpt: "Eagle Wings Services Ltd offers efficient wholesale and retail distribution services, ensuring products move smoothly from suppliers to end users across local and regional markets.",
    description: "Eagle Wings Services Ltd offers efficient wholesale and retail distribution services, ensuring products move smoothly from suppliers to end users across local and regional markets.",
    features: [
    "Bulk supply of goods to wholesalers and retailers",
    "Retail product distribution to shops and businesses",
    "Inventory handling and stock replenishment support",
    "Reliable transportation and last-mile delivery coordination",
    "Market coverage across multiple locations"
    ],
    benefit: "Consistent product availability with efficient market reach",
    image: "/images/services/service-power.jpg",
  },
  {
    slug: "procurement-services",
    title: "Procurement Services",
    category: "commerce",
    icon: "globe",
    excerpt: "Eagle Wings Services Ltd delivers professional procurement solutions that help organizations source quality goods and services at competitive prices while ensuring transparency and...",
    description: "Eagle Wings Services Ltd delivers professional procurement solutions that help organizations source quality goods and services at competitive prices while ensuring transparency and efficiency.",
    features: [
    "Supplier identification and vendor evaluation",
    "Competitive sourcing and price negotiation",
    "Purchase order management and tracking",
    "Quality assurance and compliance checks",
    "Cost optimization and timely delivery coordination"
    ],
    benefit: "Reliable sourcing that reduces costs and ensures quality assurance",
    image: "/images/services/service-2.jpg",
  },
  {
    slug: "supply-chain-management",
    title: "Supply Chain Management",
    category: "commerce",
    icon: "globe",
    excerpt: "Eagle Wings Services Ltd provides end-to-end supply chain management solutions designed to optimize the flow of goods, information, and resources from suppliers to final customers.",
    description: "Eagle Wings Services Ltd provides end-to-end supply chain management solutions designed to optimize the flow of goods, information, and resources from suppliers to final customers.",
    features: [
    "End-to-end coordination of supply chain activities",
    "Inventory planning and stock control",
    "Transportation and logistics management",
    "Supplier and vendor relationship management",
    "Risk mitigation and supply chain optimization"
    ],
    benefit: "Improved efficiency, reduced costs, and reliable delivery performance",
    image: "/images/services/service-field.jpg",
  },
  {
    slug: "product-sourcing-branding",
    title: "Product Sourcing & Branding",
    category: "commerce",
    icon: "globe",
    excerpt: "Eagle Wings Services Ltd supports businesses in sourcing quality products and building strong, market-ready brands that stand out and compete effectively.",
    description: "Eagle Wings Services Ltd supports businesses in sourcing quality products and building strong, market-ready brands that stand out and compete effectively.",
    features: [
    "Identification and sourcing of reliable product suppliers",
    "Quality assessment and supplier verification",
    "Private labeling and custom branding solutions",
    "Packaging design and brand presentation support",
    "Market positioning and product launch guidance"
    ],
    benefit: "High-quality products with strong branding that enhance market appeal and customer trust",
    image: "/images/services/service-ops.jpg",
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
