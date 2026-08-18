import { availability } from "@/lib/portfolio-data";

export function AvailabilityBlock() {
  return (
    <section className="flex w-full flex-col gap-4 bg-muted px-5 py-16 sm:px-8 lg:px-[135px] lg:py-24">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#b2f5ea] bg-[#e6fffa] px-2.5 py-1">
          <span className="size-2 rounded-full bg-[#38b2ac]" />
          <span className="font-mono text-[11px] font-bold text-[#234e52]">
            {availability.badge}
          </span>
        </span>
        <p className="font-mono text-[13px] text-muted-foreground">
          {availability.note}
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-3">
        <p className="font-mono text-2xl font-bold text-foreground sm:text-[32px]">
          {availability.heading}
        </p>
        <p className="max-w-[900px] text-base leading-7 text-foreground-secondary sm:text-[17px] sm:leading-[28px]">
          {availability.description}
        </p>
      </div>
    </section>
  );
}
