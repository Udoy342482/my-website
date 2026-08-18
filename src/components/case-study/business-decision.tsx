import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudySectionHeader } from "@/components/case-study/section-header";

export function CaseStudyBusinessDecision({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const { businessDecision } = caseStudy;
  const [colA, colB] = businessDecision.columnLabels;

  return (
    <section className="flex flex-col gap-10 border-b border-border p-5 py-16 sm:p-8 sm:py-20 lg:px-[135px] lg:py-24">
      <CaseStudySectionHeader
        eyebrow="A BUSINESS DECISION, NOT JUST A DESIGN ONE"
        title={businessDecision.title}
        description={businessDecision.description}
      />

      <div className="overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-background-tertiary font-mono text-[13px] font-bold text-muted-foreground">
                <th className="w-[220px] px-4 py-5 font-bold">STAGE</th>
                <th className="px-4 py-5 font-bold">{colA}</th>
                <th className="px-4 py-5 font-bold">{colB}</th>
              </tr>
            </thead>
            <tbody>
              {businessDecision.rows.map((row) => (
                <tr
                  key={row.stage}
                  className="border-b border-border bg-card text-sm last:border-b-0"
                >
                  <td className="px-4 py-5 font-mono font-bold text-foreground">
                    {row.stage}
                  </td>
                  <td className="px-4 py-5 text-foreground-secondary">
                    {row.a}
                  </td>
                  <td className="px-4 py-5 text-foreground-secondary">
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
