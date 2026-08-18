export const resumeUrl = "/resume.pdf";

export const navLinks = [
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/about" },
  { label: "RESUME", href: resumeUrl },
  { label: "CONTACT", href: "/contact" },
] as const;

export const stats = [
  { value: "4+", label: "YEARS OF DESIGNING EXPERIENCE" },
  { value: "6", label: "LIVE PRODUCT, 100M+ DOWNLOADS" },
  { value: "150+", label: "SUCCESSFUL PROJECT COMPLETION" },
  { value: "$700M+", label: "PORTFOLIO SYSTEM VALUATION" },
] as const;

export const projects = [
  {
    slug: "squadin",
    title: "Squadin - Sports Booking",
    tag: "BOOKING PLATFORM",
    description:
      "Engineered scalable slot-allocation grids that reduced field-cancellation rates by 30% through real-time push and automatic fallback matching.",
    image: "/images/projects/squadin-card.png",
  },
  {
    slug: "tagcam",
    title: "Tagcam - AI Camera Platform",
    tag: "AI / CAMERA",
    description:
      "Building an agentic video-first platform capturing dynamic parameters and rendering metadata at the edge. Over 10M+ operations handled monthly.",
    image: "/images/projects/tagcam.png",
  },
  {
    slug: "cordia",
    title: "Cordia - Communication Hub",
    tag: "SAAS / PRODUCTIVITY",
    description:
      "A centralized secure communication system built for distributed technical teams. Shrank notification fatigue by 43% with context routing.",
    image: "/images/projects/cordia.png",
  },
  {
    slug: "epicnap",
    title: "Epicnap - Sleep & Wellness App",
    tag: "MOBILE / HEALTH",
    description:
      "A data-intensive sleep tracker and mindfulness application designed with high visual coherence. Attained 4.8 star average rating from 250k+ active sessions.",
    image: "/images/projects/epicnap.png",
  },
] as const;

export const skills = [
  {
    title: "Figma Mastery",
    description:
      "Advanced variables, component sets, and autolayout mapping to match exact CSS structures.",
  },
  {
    title: "AI-Assisted Workflow",
    description:
      "Leveraging LLMs and generative agents to accelerate design exploration and prototype velocity.",
  },
  {
    title: "Scalable Design Systems",
    description:
      "Drafting multi-platform design-token systems spanning iOS, Android, and web products.",
  },
] as const;

export const aboutBio = {
  eyebrow: "ABOUT ME",
  heading: "Hello, I'm Udoy 👋",
  intro:
    "Product and UX designer with 4+ years of end-to-end experience shipping mobile-first products at scale. I've contributed to products with 100M+ downloads and a combined portfolio valuation of 700M+.",
  detail:
    "I'm comfortable working across the design-to-code boundary - mapping states and edge cases, preparing build-ready handoff documentation, and prototyping with AI-assisted tools to validate product decisions before development.",
  portrait: {
    image: "/images/udoymajumder.png",
    name: "UDOY MAJUMDER",
    caption: "[ SENIOR PRODUCT DESIGNER BASED IN DHAKA ]",
  },
} as const;

export const processPillars = [
  {
    index: "01",
    title: "Product Thinking",
    description:
      "Focusing deep on problem framing and retention loops. Mapping complex logic matrices and engineering high-impact decisions backed by behavioral metrics.",
  },
  {
    index: "02",
    title: "End-to-End Ownership",
    description:
      "Shaping raw requirements from early discovery workshops down into production. Owning the component design libraries and keeping sprint velocity aligned.",
  },
  {
    index: "03",
    title: "Research-Driven Methods",
    description:
      "Implementing user-interview guides, systematic usability auditing, A/B validation paradigms, and competitor analysis models to root choices in solid validation.",
  },
  {
    index: "04",
    title: "Design Engineering",
    description:
      "Bridging modern frontend technologies (HTML, CSS, Tailwind) with technical mockup specs, easing engineers' integration paths and reducing build friction.",
  },
] as const;

export const contactEmail = "official.udoymajumder@gmail.com";
export const contactPhone = "+880 1894 622060";
export const contactLocation = "Dhaka, Bangladesh";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/udoymajumder/" },
  { label: "Dribbble", href: "https://dribbble.com/udoymajumder" },
  { label: contactPhone, href: `tel:${contactPhone.replace(/[^+\d]/g, "")}` },
  { label: "Read.cv", href: resumeUrl },
] as const;

export const contactHero = {
  eyebrow: "GET IN TOUCH",
  heading: "Let's connect",
  description:
    "Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you. I'm currently open to freelance projects, full-time roles, and design consulting.",
} as const;

export const contactSubjects = [
  { value: "new-project", label: "New Project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "job-opportunity", label: "Job Opportunity" },
  { value: "design-consulting", label: "Design Consulting" },
  { value: "other", label: "Other" },
] as const;

export const availability = {
  badge: "CURRENTLY AVAILABLE",
  note: "[ GLOBAL CONTRACTS OK ]",
  heading: "Now booking for Q2/Q3 2026",
  description:
    "Typical response time is within 24 hours. Based in Dhaka, Bangladesh (GMT+6) — fully comfortable working across global time zones with asynchronous tools, technical specification docs, and robust handoff systems.",
} as const;
