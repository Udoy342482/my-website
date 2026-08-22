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
import { ScrollReveal } from "@/components/scroll-reveal";
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
        <ScrollReveal>
          <CaseStudyOverview caseStudy={caseStudy} />
        </ScrollReveal>
        <ScrollReveal>
          <CaseStudyProblem caseStudy={caseStudy} />
        </ScrollReveal>
        {caseStudy.research ? (
          <ScrollReveal>
            <CaseStudyResearch caseStudy={caseStudy} />
          </ScrollReveal>
        ) : null}
        <ScrollReveal>
          <CaseStudyPersonas caseStudy={caseStudy} />
        </ScrollReveal>
        {caseStudy.designChallenge ? (
          <ScrollReveal>
            <CaseStudyDesignChallenge caseStudy={caseStudy} />
          </ScrollReveal>
        ) : null}
        {caseStudy.keyDecisions ? (
          <ScrollReveal>
            <CaseStudyKeyDecisions caseStudy={caseStudy} />
          </ScrollReveal>
        ) : null}
        {caseStudy.engineering ? (
          <ScrollReveal>
            <CaseStudyEngineering caseStudy={caseStudy} />
          </ScrollReveal>
        ) : null}
        {caseStudy.businessDecision ? (
          <ScrollReveal>
            <CaseStudyBusinessDecision caseStudy={caseStudy} />
          </ScrollReveal>
        ) : null}
        <ScrollReveal>
          <CaseStudyOutcome caseStudy={caseStudy} />
        </ScrollReveal>
        <ScrollReveal>
          <CaseStudyOpenProblems caseStudy={caseStudy} />
        </ScrollReveal>
        {caseStudy.reflection ? (
          <ScrollReveal>
            <CaseStudyReflection caseStudy={caseStudy} />
          </ScrollReveal>
        ) : null}
        <ScrollReveal>
          <CaseStudyClosingBand
            nextSlug={nextCaseStudy.slug}
            nextTitle={nextCaseStudy.title}
            nextTeaser={nextCaseStudy.summary}
          />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
}
