import "server-only";
import { cache } from "react";

import { readJsonBlob, writeJsonBlob } from "@/lib/blob-json";

export type Stat = { value: string; label: string };
export type ProjectCard = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
};
export type Skill = { title: string; description: string };
export type ProcessPillar = { index: string; title: string; description: string };
export type SocialLink = { label: string; href: string };

export type SiteContent = {
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    ctaLabel: string;
    ctaHref: string;
  };
  stats: Stat[];
  projects: ProjectCard[];
  skills: Skill[];
  aboutBio: {
    eyebrow: string;
    heading: string;
    intro: string;
    detail: string;
    portrait: { image: string; name: string; caption: string };
  };
  processPillars: ProcessPillar[];
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  socials: SocialLink[];
  contactHero: { eyebrow: string; heading: string; description: string };
  availability: {
    badge: string;
    note: string;
    heading: string;
    description: string;
  };
};

export const defaultSiteContent: SiteContent = {
  hero: {
    eyebrow: "Hello world!",
    headline:
      "I'm Udoy, a full-spectrum product designer crafting intuitive AI-driven, agentic experiences and scalable design systems.",
    subtext:
      "4+ years shipping mobile-first products at scale. 100M+ global downloads. 700M+ collective portfolio valuation through engineered experiences.",
    ctaLabel: "VIEW MY WORK ↓",
    ctaHref: "#work",
  },
  stats: [
    { value: "4+", label: "YEARS OF DESIGNING EXPERIENCE" },
    { value: "6", label: "LIVE PRODUCT, 100M+ DOWNLOADS" },
    { value: "150+", label: "SUCCESSFUL PROJECT COMPLETION" },
    { value: "$700M+", label: "PORTFOLIO SYSTEM VALUATION" },
  ],
  projects: [
    {
      slug: "squadin",
      title: "Squadin - Sports Booking",
      tag: "BOOKING PLATFORM",
      description:
        "Engineered scalable slot-allocation grids that reduced field-cancellation rates by 30% through real-time push and automatic fallback matching.",
      image: "/images/projects/squadin-card.png",
    },
    {
      slug: "cordia",
      title: "Cordia - Dating App",
      tag: "DATING APPLICATION",
      description:
        "Cordia is a dating app for single parents and professionals seeking real relationships based on availability, values, and life stage, not endless swiping.",
      image: "/images/projects/cordia-card.png",
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
      slug: "epicnap",
      title: "Epicnap - Sleep & Wellness App",
      tag: "MOBILE / HEALTH",
      description:
        "A data-intensive sleep tracker and mindfulness application designed with high visual coherence. Attained 4.8 star average rating from 250k+ active sessions.",
      image: "/images/projects/epicnap.png",
    },
  ],
  skills: [
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
  ],
  aboutBio: {
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
  },
  processPillars: [
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
  ],
  contactEmail: "official.udoymajumder@gmail.com",
  contactPhone: "+880 1894 622060",
  contactLocation: "Dhaka, Bangladesh",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/udoymajumder/" },
    { label: "Dribbble", href: "https://dribbble.com/udoymajumder" },
    { label: "+880 1894 622060", href: "tel:+8801894622060" },
    { label: "Read.cv", href: "/resume.pdf" },
  ],
  contactHero: {
    eyebrow: "GET IN TOUCH",
    heading: "Let's connect",
    description:
      "Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you. I'm currently open to freelance projects, full-time roles, and design consulting.",
  },
  availability: {
    badge: "CURRENTLY AVAILABLE",
    note: "[ GLOBAL CONTRACTS OK ]",
    heading: "Now booking for Q2/Q3 2026",
    description:
      "Typical response time is within 24 hours. Based in Dhaka, Bangladesh (GMT+6) — fully comfortable working across global time zones with asynchronous tools, technical specification docs, and robust handoff systems.",
  },
};

const CONTENT_PATHNAME = "content/site.json";

export async function getSiteContent(): Promise<SiteContent> {
    const stored = await readJsonBlob<SiteContent>(CONTENT_PATHNAME);
    return stored ?? defaultSiteContent;
}
export async function saveSiteContent(content: SiteContent) {
  await writeJsonBlob(CONTENT_PATHNAME, content);
}
