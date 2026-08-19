import { revalidatePath } from "next/cache";

import { verifySession } from "@/lib/dal";
import { saveSiteContent, type SiteContent } from "@/lib/site-content";

export async function PUT(request: Request) {
  const session = await verifySession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = (await request.json()) as SiteContent;

  await saveSiteContent(content);

  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/contact");

  return Response.json({ ok: true });
}
