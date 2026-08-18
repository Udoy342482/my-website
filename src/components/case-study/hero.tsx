import type { CaseStudy } from "@/lib/case-studies";
import { DeviceMockup } from "@/components/case-study/device-mockup";

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <section className="flex flex-col gap-8 border-b border-border p-5 sm:p-8 lg:gap-12 lg:px-[135px] lg:py-20">
      <p className="font-mono text-sm font-bold text-brand">
        PRODUCT DESIGN CASE STUDY
      </p>

      <h1 className="font-mono text-5xl font-bold text-foreground sm:text-6xl lg:text-[64px]">
        {caseStudy.title}
      </h1>

      <p className="max-w-[960px] text-xl leading-9 text-foreground-secondary sm:text-2xl">
        {caseStudy.summary}
      </p>

      <div className="grid grid-cols-2 gap-8 border-y border-border py-8 sm:grid-cols-4">
        {caseStudy.meta.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <p className="font-mono text-xs font-bold text-muted-foreground">
              {item.label}
            </p>
            <p className="text-base font-semibold text-foreground">
              {item.value}
            </p>
            <p className="text-sm text-foreground-secondary">{item.sub}</p>
          </div>
        ))}
      </div>

      <DeviceMockup
        caption={caseStudy.heroImageCaption}
        image={caseStudy.heroImage}
      />
    </section>
  );
}
