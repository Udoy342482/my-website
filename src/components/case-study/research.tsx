import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";
import { PlaceholderBlock } from "@/components/case-study/placeholder-block";

export function CaseStudyResearch({ caseStudy }: { caseStudy: CaseStudy }) {
  const { research } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader eyebrow="RESEARCH" title={research.title} />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-4 text-lg leading-8 text-foreground-secondary">
          {research.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:w-[500px] lg:shrink-0">
          {research.notes.map((note) => (
            <div
              key={note.label}
              className="flex flex-col gap-3 rounded-xl bg-card p-5"
            >
              <p className="font-mono text-[11px] font-bold text-brand">
                {note.label}
              </p>
              <p className="text-[15px] leading-6 text-foreground-secondary">
                {note.quote}
              </p>
              <p className="text-[13px] font-bold text-foreground">
                {note.insight}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <PlaceholderBlock />
          <PlaceholderBlock />
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground">
          {research.imageCaption}
        </p>
      </div>
    </section>
  );
}
