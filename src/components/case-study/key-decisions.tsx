import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";
import { cn } from "@/lib/utils";

export function CaseStudyKeyDecisions({ caseStudy }: { caseStudy: CaseStudy }) {
  const { keyDecisions } = caseStudy;
  if (!keyDecisions) return null;

  const [first, second, ...rest] = keyDecisions.decisions;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader
        eyebrow="KEY DECISIONS"
        title={keyDecisions.title}
        description={keyDecisions.description}
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          {[first, second].map((decision) => (
            <div
              key={decision.title}
              className="flex flex-1 flex-col gap-6 rounded-xl bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground-secondary">
                  {decision.number}
                </p>
                <span className="rounded bg-[#edf0f7] px-3 py-2 font-mono text-xs font-bold text-[#234e52]">
                  {decision.badge}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-mono text-base font-bold text-foreground">
                  {decision.title}
                </p>
                <p className="text-sm text-foreground-secondary">
                  {decision.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {rest.map((decision) => (
          <div
            key={decision.title}
            className={cn(
              "flex flex-col gap-6 rounded-xl border-y border-r border-l-4 border-border bg-card p-5",
              decision.highlighted && "border-l-brand"
            )}
          >
            <span className="w-fit rounded border border-[#b2f5ea] bg-[#edf0f7] px-2 py-1 font-mono text-xs font-bold text-[#234e52]">
              {decision.badge}
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-base font-bold text-foreground">
                {decision.title}
              </p>
              <p className="max-w-[800px] text-sm text-foreground-secondary">
                {decision.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
