export function CaseStudySectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-sm font-bold text-brand">{eyebrow}</p>
      <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl lg:text-[32px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[840px] text-lg leading-8 text-foreground-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
