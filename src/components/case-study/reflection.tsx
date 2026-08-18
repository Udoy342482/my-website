import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";

export function CaseStudyReflection({ caseStudy }: { caseStudy: CaseStudy }) {
  const { reflection } = caseStudy;

  return (
    <section className="flex flex-col gap-8 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader eyebrow="REFLECTION" title={reflection.title} />

      <div className="flex flex-col gap-8 text-lg leading-8 text-foreground-secondary sm:flex-row sm:gap-12">
        {reflection.paragraphs.map((paragraph, i) => (
          <p key={i} className="flex-1">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
