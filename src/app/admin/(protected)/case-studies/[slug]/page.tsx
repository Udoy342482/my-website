import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getCaseStudiesData, getCaseStudy } from "@/lib/case-studies";
import { CaseStudyEditor } from "./case-study-editor";

export default async function AdminCaseStudyPage(
  props: PageProps<"/admin/case-studies/[slug]">
) {
  const { slug } = await props.params;
  const caseStudies = await getCaseStudiesData();
  const caseStudy = getCaseStudy(caseStudies, slug);

  if (!caseStudy) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/admin/case-studies"
          className="mb-3 flex w-fit items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All case studies
        </Link>
        <h1 className="font-mono text-2xl font-bold text-foreground">
          {caseStudy.title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Editing /work/{caseStudy.slug}
        </p>
      </div>
      <CaseStudyEditor initialCaseStudy={caseStudy} />
    </div>
  );
}
