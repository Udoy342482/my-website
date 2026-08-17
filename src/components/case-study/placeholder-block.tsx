import { cn } from "@/lib/utils";

export function PlaceholderBlock({
  caption,
  className,
}: {
  caption?: string;
  className?: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div
        className={cn(
          "aspect-video w-full rounded-xl bg-[#ffeed6]",
          className
        )}
      />
      {caption ? (
        <p className="text-center font-mono text-xs text-muted-foreground">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
