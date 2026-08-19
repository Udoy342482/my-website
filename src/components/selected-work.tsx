import { getSiteContent } from "@/lib/site-content";
import { ProjectCard } from "@/components/project-card";

export async function SelectedWork() {
  const { projects } = await getSiteContent();

  return (
    <section
      id="work"
      className="flex w-full flex-col gap-12 px-5 py-16 sm:px-8 lg:px-[135px] lg:py-24"
    >
      <div className="flex flex-col items-baseline justify-between gap-2 sm:flex-row">
        <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl lg:text-[32px]">
          SELECTED WORK
        </h2>
        <p className="font-mono text-sm text-muted-foreground">
          [ {projects.length} ACTIVE CASE STUDIES ]
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
