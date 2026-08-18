import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";
import { DeviceMockup } from "@/components/case-study/device-mockup";

export function CaseStudyOverview({ caseStudy }: { caseStudy: CaseStudy }) {
  const { overview } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader eyebrow="OVERVIEW" title={overview.title} />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 text-lg leading-8 text-foreground-secondary">
          {overview.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:w-[440px] lg:shrink-0">
          {overview.highlights.map((highlight) => (
            <div
              key={highlight.index}
              className="flex flex-col gap-2 rounded-xl bg-card p-4"
            >
              <p className="font-mono text-sm font-bold text-brand">
                {highlight.index}
              </p>
              <p className="text-[15px] leading-[22px] text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <DeviceMockup caption={overview.imageCaption} />
    </section>
  );
}
