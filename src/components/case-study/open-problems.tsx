import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";

export function CaseStudyOpenProblems({ caseStudy }: { caseStudy: CaseStudy }) {
  const { openProblems } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader
        eyebrow="WHAT'S STILL BROKEN"
        title={openProblems.title}
        description={openProblems.description}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        {openProblems.issues.map((issue) => (
          <div
            key={issue.title}
            className="flex flex-1 flex-col gap-6 rounded-xl bg-card p-5"
          >
            <span className="w-fit rounded border border-orange-200 bg-orange-50 px-2 py-1 font-mono text-xs font-bold text-orange-700">
              OPEN ISSUE
            </span>
            <div className="flex flex-col gap-3">
              <p className="font-mono text-base font-bold text-foreground">
                {issue.title}
              </p>
              <p className="text-sm text-foreground-secondary">
                {issue.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
