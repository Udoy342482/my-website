import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { AboutHero } from "@/components/about-hero";
import { ProcessPillars } from "@/components/process-pillars";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About — Udoy Majumder",
  description:
    "Product and UX designer with 4+ years of end-to-end experience shipping mobile-first products at scale.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <ProcessPillars />
      </main>
      <SiteFooter />
    </div>
  );
}
