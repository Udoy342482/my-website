import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";
import { PlaceholderBlock } from "@/components/case-study/placeholder-block";

export function CaseStudyEngineering({ caseStudy }: { caseStudy: CaseStudy }) {
  const { engineering } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:p-20 lg:py-24">
      <CaseStudySectionHeader
        eyebrow="WORKING WITH ENGINEERING"
        title={engineering.title}
        description={engineering.description}
      />

      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-1 flex-col gap-4 rounded-xl bg-card p-6">
          <p className="font-mono text-xs font-bold text-muted-foreground">
            ENGINEERING&apos;S CASE
          </p>
          <p className="text-base leading-[26px] text-foreground-secondary">
            {engineering.theirCase}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border-2 border-brand bg-card p-6">
          <p className="font-mono text-xs font-bold text-brand">
            MY CASE (ADOPTED)
          </p>
          <p className="text-base leading-[26px] text-foreground-secondary">
            {engineering.myCase}
          </p>
        </div>
      </div>

      <div className="rounded-md bg-background-tertiary p-5 text-base leading-6 text-foreground-secondary">
        <span className="font-bold text-foreground">Resolution: </span>
        {engineering.resolution}
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        {engineering.steps.map((step) => (
          <PlaceholderBlock key={step} caption={step} className="aspect-[3/4]" />
        ))}
      </div>
    </section>
  );
}
