import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CaseStudyHero } from "@/components/case-study/hero";
import { CaseStudyOverview } from "@/components/case-study/overview";
import { CaseStudyProblem } from "@/components/case-study/problem";
import { CaseStudyResearch } from "@/components/case-study/research";
import { CaseStudyPersonas } from "@/components/case-study/personas";
import { CaseStudyDesignChallenge } from "@/components/case-study/design-challenge";
import { CaseStudyEngineering } from "@/components/case-study/engineering";
import { CaseStudyBusinessDecision } from "@/components/case-study/business-decision";
import { CaseStudyOutcome } from "@/components/case-study/outcome";
import { CaseStudyOpenProblems } from "@/components/case-study/open-problems";
import { CaseStudyReflection } from "@/components/case-study/reflection";
import { CaseStudyClosingBand } from "@/components/case-study/closing-band";
import { caseStudies, getCaseStudy, getNextCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return {};

  return {
    title: `${caseStudy.title} — Case Study — Udoy Majumder`,
    description: caseStudy.summary,
  };
}

export default async function WorkCaseStudyPage(
  props: PageProps<"/work/[slug]">
) {
  const { slug } = await props.params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  const nextCaseStudy = getNextCaseStudy(slug);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <CaseStudyHero caseStudy={caseStudy} />
        <CaseStudyOverview caseStudy={caseStudy} />
        <CaseStudyProblem caseStudy={caseStudy} />
        <CaseStudyResearch caseStudy={caseStudy} />
        <CaseStudyPersonas caseStudy={caseStudy} />
        <CaseStudyDesignChallenge caseStudy={caseStudy} />
        <CaseStudyEngineering caseStudy={caseStudy} />
        <CaseStudyBusinessDecision caseStudy={caseStudy} />
        <CaseStudyOutcome caseStudy={caseStudy} />
        <CaseStudyOpenProblems caseStudy={caseStudy} />
        <CaseStudyReflection caseStudy={caseStudy} />
        <CaseStudyClosingBand
          nextSlug={nextCaseStudy.slug}
          nextTitle={nextCaseStudy.title}
          nextTeaser={nextCaseStudy.summary}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
