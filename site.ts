export const siteConfig = {
  name: "VECTORA AI",
  tagline: "Building smarter businesses with AI.",
  description: "VECTORA AI designs practical AI agents, automations, websites and business systems that help teams move faster.",
  email: "hello@vectoraai.tech",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
};

export const services = [
  { number: "01", title: "AI Agents", description: "Useful AI teammates that understand requests, qualify leads and take action across your tools.", tags: ["WhatsApp agents", "Voice AI", "Support assistants"] },
  { number: "02", title: "Workflow Automation", description: "Connect the apps your team already uses and remove repetitive work from everyday operations.", tags: ["n8n workflows", "App integrations", "Process automation"] },
  { number: "03", title: "Lead Systems", description: "Capture, qualify, route and follow up with leads so promising conversations do not go cold.", tags: ["Lead capture", "CRM sync", "Follow-up"] },
  { number: "04", title: "Websites & Platforms", description: "Fast, conversion-focused websites and internal tools designed around the way your business works.", tags: ["Business websites", "Dashboards", "Web applications"] },
  { number: "05", title: "CRM & Operations", description: "Bring customer information and daily processes into a more organised, measurable system.", tags: ["CRM setup", "Data workflows", "Reporting"] },
  { number: "06", title: "Custom AI Solutions", description: "Explore and build a focused solution for a specific bottleneck, team or customer experience.", tags: ["AI prototypes", "Knowledge assistants", "Custom integrations"] },
];

// Replace these illustrative concept demos with approved client work before publishing.
export const projects = [
  { category: "CONCEPT DEMO / CUSTOMER EXPERIENCE", title: "WhatsApp lead assistant", description: "A sample flow that captures enquiries, asks qualifying questions and routes a lead to the right person.", outcome: "Designed to reduce manual first-response work", stack: ["WhatsApp", "n8n", "AI"] },
  { category: "CONCEPT DEMO / OPERATIONS", title: "Appointment workflow", description: "A sample booking journey connecting an enquiry, appointment confirmation and team notification.", outcome: "Designed for a clearer booking process", stack: ["Automation", "Calendar", "CRM"] },
  { category: "CONCEPT DEMO / BUSINESS SYSTEMS", title: "Website-to-CRM pipeline", description: "A sample website form workflow that validates details and sends structured enquiries into a CRM.", outcome: "Designed to keep enquiries organised", stack: ["Next.js", "API", "CRM"] },
];

export function whatsappUrl(message = "Hi VECTORA AI, I'd like to discuss an automation project.") {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
