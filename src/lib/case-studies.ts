import "server-only";
import { cache } from "react";

import { readJsonBlob, writeJsonBlob } from "@/lib/blob-json";
import { defaultCaseStudies, type CaseStudy } from "@/lib/case-studies-defaults";

export type {
  CaseStudy,
  CaseStudyMeta,
  Highlight,
  FieldNote,
  PersonaItem,
  OptionCard,
  MetricCard,
  IssueCard,
  KeyDecisionCard,
} from "@/lib/case-studies-defaults";

const CASE_STUDIES_PATHNAME = "content/case-studies.json";

export const getCaseStudiesData = cache(async (): Promise<CaseStudy[]> => {
  const stored = await readJsonBlob<CaseStudy[]>(CASE_STUDIES_PATHNAME);
  return stored ?? defaultCaseStudies;
});

export async function saveCaseStudy(updated: CaseStudy) {
  const current = await readJsonBlob<CaseStudy[]>(CASE_STUDIES_PATHNAME);
  const list = current ?? defaultCaseStudies;
  const index = list.findIndex((study) => study.slug === updated.slug);
  const next =
    index === -1
      ? [...list, updated]
      : list.map((study, i) => (i === index ? updated : study));
  await writeJsonBlob(CASE_STUDIES_PATHNAME, next);
  return next;
}

export function getCaseStudy(list: CaseStudy[], slug: string) {
  return list.find((study) => study.slug === slug);
}

export function getNextCaseStudy(list: CaseStudy[], slug: string) {
  const index = list.findIndex((study) => study.slug === slug);
  return list[(index + 1) % list.length];
}
