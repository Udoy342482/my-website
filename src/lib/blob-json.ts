import "server-only";
import { head, put } from "@vercel/blob";

export async function readJsonBlob<T>(pathname: string): Promise<T | null> {
    try {
        const blob = await head(pathname, {
            token: process.env.PUBLIC_BLOB_READ_WRITE_TOKEN,
        });
        const res = await fetch(blob.url, { cache: "no-store" });
        if (!res.ok) return null;
        return (await res.json()) as T;
    } catch {
        return null;
    }
}

export async function writeJsonBlob(pathname: string, data: unknown) {
    await put(pathname, JSON.stringify(data, null, 2), {
        access: "public",
        contentType: "application/json",
        allowOverwrite: true,
        token: process.env.PUBLIC_BLOB_READ_WRITE_TOKEN,
    });
}
