import { randomUUID } from "crypto";
import { put } from "@vercel/blob";

import { verifySession } from "@/lib/dal";

const MAX_SIZE_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return Response.json({ error: "Unsupported file type" }, { status: 400 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return Response.json({ error: "File is larger than 8MB" }, { status: 400 });
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "-").slice(-80);
  const pathname = `images/${randomUUID()}-${safeName}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: file.type,
    token: process.env.PUBLIC_BLOB_READ_WRITE_TOKEN,
  });

  return Response.json({ url: blob.url });
}
