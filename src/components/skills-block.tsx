import { skills } from "@/lib/portfolio-data";

export function SkillsBlock() {
  return (
    <section
      id="about"
      className="flex w-full flex-col gap-12 border-t border-border px-5 py-16 sm:px-8 lg:px-20 lg:py-24"
    >
      <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl lg:text-[32px]">
        TECHNICAL CAPABILITIES
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-1 flex-col gap-3 rounded-xl bg-card p-6"
          >
            <p className="font-mono text-lg font-bold text-foreground">
              {skill.title}
            </p>
            <p className="text-sm leading-[22px] text-foreground-secondary">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
