"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SaveStatus = {
  type: "idle" | "success" | "error";
  message?: string;
};

export function SaveBar({
  onSave,
  pending,
  status,
}: {
  onSave: () => void;
  pending: boolean;
  status: SaveStatus;
}) {
  return (
    <div className="sticky bottom-4 z-40 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <p
        className={cn(
          "font-mono text-xs tracking-[0.5px] uppercase",
          status.type === "error"
            ? "text-destructive"
            : status.type === "success"
              ? "text-brand"
              : "text-muted-foreground"
        )}
      >
        {status.message ?? "Unsaved changes are local until you save."}
      </p>
      <Button type="button" onClick={onSave} disabled={pending} className="shrink-0">
        {pending ? "Saving…" : "Save changes"}
      </Button>
    </div>
  );
}
