import { getSiteContent } from "@/lib/site-content";

export async function ProcessPillars() {
  const { processPillars } = await getSiteContent();

  return (
    <section className="flex w-full flex-col gap-8 border-y border-border bg-muted px-5 py-16 sm:px-8 lg:gap-12 lg:px-[135px] lg:py-24">
      <div className="flex flex-col items-baseline justify-between gap-2 sm:flex-row">
        <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl lg:text-[32px]">
          PROCESS PILLARS
        </h2>
        <p className="font-mono text-sm text-muted-foreground">
          [ CORE METHODOLOGY ]
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {processPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-1 flex-col gap-4 rounded-xl bg-card p-8"
          >
            <div className="flex items-center justify-between font-mono">
              <p className="text-[22px] font-bold text-foreground">
                {pillar.title}
              </p>
              <p className="text-sm text-brand">{`// ${pillar.index}`}</p>
            </div>
            <p className="text-[15px] leading-6 text-foreground-secondary">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
