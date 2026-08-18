import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyClosingBand({
  nextSlug,
  nextTitle,
  nextTeaser,
}: {
  nextSlug: string;
  nextTitle: string;
  nextTeaser: string;
}) {
  return (
    <section className="flex flex-col gap-10 bg-foreground px-5 py-20 sm:px-8 lg:px-[135px] lg:py-30">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex max-w-[700px] flex-col gap-6">
          <p className="font-mono text-3xl leading-tight font-semibold text-background sm:text-4xl">
            Next Case Study →<br />
            {nextTitle}
          </p>
          <Link
            href={`/work/${nextSlug}`}
            className="group flex items-center gap-2 text-lg text-background/90 hover:text-background"
          >
            {nextTeaser}
            <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex max-w-[300px] flex-col gap-3 text-muted-foreground">
          <p className="font-mono text-xs font-bold">UDOY&apos;S CASE ARCHIVE</p>
          <p className="text-sm leading-[22px]">
            Discover other system-design investigations built with absolute
            technical precision and frontend hand-off standards.
          </p>
        </div>
      </div>
    </section>
  );
}
