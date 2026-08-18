import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";

export function CaseStudyProblem({ caseStudy }: { caseStudy: CaseStudy }) {
  const { problem } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader eyebrow="THE PROBLEM" title={problem.title} />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 text-lg leading-8 text-foreground-secondary">
          {problem.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="flex items-center gap-5 lg:w-[528px] lg:shrink-0">
          <div className="h-full w-1 shrink-0 self-stretch rounded-full bg-brand" />
          <div className="flex flex-col gap-3">
            <p className="text-xl leading-8 font-semibold text-foreground">
              {problem.quote}
            </p>
            <p className="font-mono text-[13px] text-muted-foreground">
              {problem.quoteAttribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
