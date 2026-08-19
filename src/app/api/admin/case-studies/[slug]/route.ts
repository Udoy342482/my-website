import { revalidatePath } from "next/cache";

import { verifySession } from "@/lib/dal";
import { saveCaseStudy } from "@/lib/case-studies";
import type { CaseStudy } from "@/lib/case-studies-defaults";

export async function PUT(
  request: Request,
  ctx: RouteContext<"/api/admin/case-studies/[slug]">
) {
  const session = await verifySession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await ctx.params;
  const caseStudy = (await request.json()) as CaseStudy;

  if (caseStudy.slug !== slug) {
    return Response.json({ error: "Slug mismatch" }, { status: 400 });
  }

  await saveCaseStudy(caseStudy);

  revalidatePath(`/work/${slug}`);
  revalidatePath("/");

  return Response.json({ ok: true });
}
