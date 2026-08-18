import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { AvailabilityBlock } from "@/components/availability-block";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact — Udoy Majumder",
  description:
    "Have a project in mind, want to collaborate, or just want to say hello? Get in touch with Udoy Majumder.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ContactHero />
        <section className="flex w-full flex-col gap-16 px-5 py-16 sm:px-8 lg:flex-row lg:px-[135px] lg:py-24">
          <ContactForm />
          <ContactInfo />
        </section>
        <AvailabilityBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
