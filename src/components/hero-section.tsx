import Link from "next/link";

import { TypewriterHeading } from "@/components/typewriter-heading";

export function HeroSection() {
  return (
    <section
      id="top"
      className="flex flex-col gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:gap-10 lg:px-20 lg:py-28"
    >
      <div className="flex items-center gap-2">
        <p className="font-mono text-base font-semibold text-brand">
          Hello world!
        </p>
      </div>

      <TypewriterHeading
        text="I'm Udoy, a full-spectrum product designer crafting intuitive AI-driven, agentic experiences and scalable design systems."
        className="max-w-[1280px] font-mono text-4xl leading-[1.15] font-bold text-foreground sm:text-5xl lg:text-[48px] lg:leading-[64px]"
      />

      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-[640px] text-lg leading-8 text-foreground-secondary sm:text-xl">
          4+ years shipping mobile-first products at scale. 100M+ global
          downloads. 700M+ collective portfolio valuation through engineered
          experiences.
        </p>
        <Link
          href="#work"
          className="flex shrink-0 items-center gap-2 font-mono text-base font-bold text-foreground hover:text-brand"
        >
          VIEW MY WORK ↓
        </Link>
      </div>
    </section>
  );
}
