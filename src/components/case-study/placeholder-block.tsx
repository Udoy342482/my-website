import Image from "next/image";

import { cn } from "@/lib/utils";

export function PlaceholderBlock({
  caption,
  className,
  image,
  sizes = "(min-width: 1024px) calc(100vw - 270px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
}: {
  caption?: string;
  className?: string;
  image?: string;
  sizes?: string;
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
            sizes={sizes}
            quality={100}
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
