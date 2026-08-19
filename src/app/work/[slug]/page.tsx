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
import { CaseStudyKeyDecisions } from "@/components/case-study/key-decisions";
import { CaseStudyEngineering } from "@/components/case-study/engineering";
import { CaseStudyBusinessDecision } from "@/components/case-study/business-decision";
import { CaseStudyOutcome } from "@/components/case-study/outcome";
import { CaseStudyOpenProblems } from "@/components/case-study/open-problems";
import { CaseStudyReflection } from "@/components/case-study/reflection";
import { CaseStudyClosingBand } from "@/components/case-study/closing-band";
import { getCaseStudiesData, getCaseStudy, getNextCaseStudy } from "@/lib/case-studies";

export async function generateStaticParams() {
  const caseStudies = await getCaseStudiesData();
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudies = await getCaseStudiesData();
  const caseStudy = getCaseStudy(caseStudies, slug);

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
  const caseStudies = await getCaseStudiesData();
  const caseStudy = getCaseStudy(caseStudies, slug);

  if (!caseStudy) notFound();

  const nextCaseStudy = getNextCaseStudy(caseStudies, slug);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <CaseStudyHero caseStudy={caseStudy} />
        <CaseStudyOverview caseStudy={caseStudy} />
        <CaseStudyProblem caseStudy={caseStudy} />
        {caseStudy.research ? <CaseStudyResearch caseStudy={caseStudy} /> : null}
        <CaseStudyPersonas caseStudy={caseStudy} />
        {caseStudy.designChallenge ? (
          <CaseStudyDesignChallenge caseStudy={caseStudy} />
        ) : null}
        {caseStudy.keyDecisions ? (
          <CaseStudyKeyDecisions caseStudy={caseStudy} />
        ) : null}
        {caseStudy.engineering ? (
          <CaseStudyEngineering caseStudy={caseStudy} />
        ) : null}
        {caseStudy.businessDecision ? (
          <CaseStudyBusinessDecision caseStudy={caseStudy} />
        ) : null}
        <CaseStudyOutcome caseStudy={caseStudy} />
        <CaseStudyOpenProblems caseStudy={caseStudy} />
        {caseStudy.reflection ? (
          <CaseStudyReflection caseStudy={caseStudy} />
        ) : null}
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
