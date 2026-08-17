import { stats } from "@/lib/portfolio-data";

export function StatsStrip() {
  return (
    <section className="w-full bg-muted px-5 py-10 sm:px-8 lg:px-20 lg:py-14">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-20">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-3">
            <p className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
              {stat.value}
            </p>
            <p className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
