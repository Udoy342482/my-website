"use client";

import { useState } from "react";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ImageUploadField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Upload failed");
      }
      const { url } = (await res.json()) as { url: string };
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase">
        {label}
      </Label>
      <div className="flex items-center gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
          {value ? (
            <Image src={value} alt="" fill sizes="80px" className="object-cover" />
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-fit cursor-pointer font-mono"
            )}
          >
            {uploading ? "Uploading…" : "Upload image"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
              disabled={uploading}
            />
          </label>
          {error ? <p className="text-xs text-destructive">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}
