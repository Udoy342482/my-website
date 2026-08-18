import Image from "next/image";

import { cn } from "@/lib/utils";

export function PlaceholderBlock({
  caption,
  className,
  image,
}: {
  caption?: string;
  className?: string;
  image?: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-xl bg-[#ffeed6]",
          className
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={caption ?? ""}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain p-3"
          />
        ) : null}
      </div>
      {caption ? (
        <p className="text-center font-mono text-xs text-muted-foreground">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
