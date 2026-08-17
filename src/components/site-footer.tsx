import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactEmail, socials } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col gap-12 bg-muted px-5 pt-16 pb-10 sm:px-8 lg:gap-16 lg:px-20 lg:pt-30 lg:pb-16">

      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex max-w-[600px] flex-col gap-6">
          <h2 className="font-mono text-3xl leading-tight font-semibold text-foreground sm:text-4xl lg:text-[40px] lg:leading-[48px]">
            Interested about me?
            <br />
            {"Let's talk."}
          </h2>
          <a
            href={`mailto:${contactEmail}`}
            className="group flex items-center gap-2 font-mono text-lg font-medium text-foreground sm:text-xl lg:text-[22px]"
          >
            {contactEmail}
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto w-fit rounded-lg border-border bg-card px-5 py-2.5 font-mono text-sm font-semibold text-foreground hover:bg-background"
            )}
          >
            GET IN TOUCH
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-[300px]">
          <p className="font-mono text-sm font-bold tracking-[1px] text-muted-foreground">
            CONNECT / SOCIALS
          </p>
          <div className="flex flex-col gap-3">
            {socials.map((social) => {
              const isTel = social.href.startsWith("tel:");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isTel ? undefined : "_blank"}
                  rel={isTel ? undefined : "noopener noreferrer"}
                  className="text-lg text-foreground hover:text-brand"
                >
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 border-t border-border py-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:py-10">
        <p className="font-mono">
          DESIGNED AND BUILT WITH TECHNICAL PRECISION © 2026 UDOY MAJUMDER
        </p>
        <p>Based in Dhaka, Bangladesh • Remote Worldwide</p>
      </div>
    </footer>
  );
}
