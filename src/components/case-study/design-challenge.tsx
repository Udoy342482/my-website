import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";
import { PlaceholderBlock } from "@/components/case-study/placeholder-block";

export function CaseStudyDesignChallenge({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const { designChallenge } = caseStudy;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader
        eyebrow="THE CORE DESIGN CHALLENGE"
        title={designChallenge.title}
        description={designChallenge.description}
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          {designChallenge.options.map((option) => (
            <div
              key={option.label}
              className="flex flex-1 flex-col gap-6 rounded-xl bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground-secondary">
                  {option.label}
                </p>
                <span className="rounded bg-red-50 px-3 py-2 font-mono text-xs font-bold text-red-700">
                  {option.badge}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-mono text-base font-bold text-foreground">
                  {option.title}
                </p>
                <p className="text-sm text-foreground-secondary">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 rounded-xl border-y border-r border-l-4 border-border border-l-brand bg-card p-5">
          <span className="w-fit rounded border border-teal-200 bg-teal-50 px-2 py-1 font-mono text-xs font-bold text-teal-800">
            {designChallenge.adopted.badge}
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-base font-bold text-foreground">
              {designChallenge.adopted.title}
            </p>
            <p className="max-w-[800px] text-sm text-foreground-secondary">
              {designChallenge.adopted.description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        {designChallenge.comparisonCaptions.map((caption, i) => (
          <PlaceholderBlock
            key={caption}
            caption={caption}
            className="aspect-[4/3]"
            images={designChallenge.comparisonImages?.[i]}
          />
        ))}
      </div>
    </section>
  );
}
