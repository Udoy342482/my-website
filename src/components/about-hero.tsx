import Image from "next/image";

import { aboutBio, contactEmail } from "@/lib/portfolio-data";

export function AboutHero() {
  return (
    <section className="flex flex-col gap-10 px-5 py-16 sm:px-8 lg:flex-row lg:gap-16 lg:px-[135px] lg:py-24">
      <div className="flex flex-1 flex-col gap-8">
        <p className="font-mono text-base font-semibold text-brand">
          {aboutBio.eyebrow}
        </p>
        <h1 className="font-mono text-4xl leading-[1.15] font-bold text-foreground sm:text-5xl lg:text-[48px] lg:leading-[56px]">
          {aboutBio.heading}
        </h1>
        <p className="max-w-[640px] text-lg leading-8 text-foreground-secondary sm:text-xl">
          {aboutBio.intro}
        </p>
        <p className="max-w-[640px] text-base leading-[30px] text-muted-foreground sm:text-lg">
          {aboutBio.detail}
        </p>
        <div className="flex flex-col gap-2 py-3">
          <p className="font-mono text-[13px] tracking-[0.5px] text-muted-foreground">
            FOR DIRECT INQUIRIES & CONTRACTS:
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="font-mono text-lg font-bold text-foreground hover:text-brand"
          >
            {contactEmail}
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col overflow-hidden rounded-xl bg-card p-6 lg:w-[440px] lg:shrink-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
          <Image
            src={aboutBio.portrait.image}
            alt={aboutBio.portrait.name}
            fill
            sizes="(min-width: 1024px) 392px, 90vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-1 py-5">
          <p className="font-mono text-[15px] font-bold text-foreground">
            {aboutBio.portrait.name}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {aboutBio.portrait.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
