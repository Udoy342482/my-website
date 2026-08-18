import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";
import { cn } from "@/lib/utils";

export function CaseStudyOutcome({ caseStudy }: { caseStudy: CaseStudy }) {
  const { outcome } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader
        eyebrow="OUTCOME"
        title={outcome.title}
        description={outcome.description}
      />

      <div className="flex flex-col gap-6 sm:flex-row">
        {outcome.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-1 flex-col gap-2 rounded-xl bg-card p-6"
          >
            <p
              className={cn(
                "font-mono text-[40px] font-bold sm:text-[48px]",
                metric.tone === "brand" && "text-brand",
                metric.tone === "destructive" && "text-destructive",
                !metric.tone && "text-foreground"
              )}
            >
              {metric.value}
            </p>
            <p className="font-mono text-xs font-bold text-muted-foreground">
              {metric.label}
            </p>
            <p className="text-sm text-foreground-secondary">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
