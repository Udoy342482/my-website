import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";

export function CaseStudyPersonas({ caseStudy }: { caseStudy: CaseStudy }) {
  const { personas } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:p-20 lg:py-24">
      <CaseStudySectionHeader
        eyebrow="WHO I WAS DESIGNING FOR"
        title={personas.title}
        description={personas.description}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {personas.items.map((persona) => (
          <div
            key={persona.title}
            className="flex flex-col gap-4 rounded-xl bg-card p-6"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-muted">
              <persona.icon className="size-5 text-brand" />
            </div>
            <div className="flex items-center justify-between font-mono">
              <p className="text-lg font-bold text-foreground">
                {persona.title}
              </p>
              <p className="text-xs text-muted-foreground">{persona.tag}</p>
            </div>
            <p className="text-[15px] leading-6 text-foreground-secondary">
              {persona.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
