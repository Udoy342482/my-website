import { contactHero } from "@/lib/portfolio-data";

export function ContactHero() {
  return (
    <section className="flex flex-col gap-10 border-b border-border px-5 py-16 sm:px-8 lg:px-20 lg:py-28">
      <p className="font-mono text-base font-semibold text-brand">
        {contactHero.eyebrow}
      </p>
      <h1 className="font-mono text-4xl leading-[1.15] font-bold text-foreground sm:text-5xl lg:text-[48px] lg:leading-[64px]">
        {contactHero.heading}
      </h1>
      <p className="max-w-[840px] text-lg leading-8 text-foreground-secondary sm:text-xl">
        {contactHero.description}
      </p>
    </section>
  );
}
