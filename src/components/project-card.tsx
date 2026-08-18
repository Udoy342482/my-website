import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { projects } from "@/lib/portfolio-data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-1 flex-col gap-5 rounded-xl border border-transparent bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-border hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) calc(50vw - 147px), (min-width: 768px) calc(50vw - 44px), calc(100vw - 40px)"
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-mono text-lg font-bold text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-sm bg-background-tertiary px-2 py-1 font-mono text-[11px] font-semibold text-muted-foreground">
            {project.tag}
          </span>
        </div>

        <p className="line-clamp-2 text-[15px] leading-6 text-foreground-secondary">
          {project.description}
        </p>

        <span className="flex items-center gap-1 py-2 font-mono text-[13px] font-semibold text-foreground">
          VIEW CASE STUDY
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
