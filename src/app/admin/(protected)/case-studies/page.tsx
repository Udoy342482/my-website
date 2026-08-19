import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { getCaseStudiesData } from "@/lib/case-studies";

export default async function AdminCaseStudiesPage() {
  const caseStudies = await getCaseStudiesData();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-mono text-2xl font-bold text-foreground">
          Case studies
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Edit the full write-up for each project on /work.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/admin/case-studies/${study.slug}`}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
          >
            <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
              {study.heroImage ? (
                <Image
                  src={study.heroImage}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="font-mono text-base font-bold text-foreground">
                  {study.title}
                </p>
                <span className="rounded-sm bg-background-tertiary px-2 py-0.5 font-mono text-[11px] font-semibold text-muted-foreground">
                  {study.tag}
                </span>
              </div>
              <p className="line-clamp-1 text-sm text-muted-foreground">
                {study.summary}
              </p>
            </div>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
