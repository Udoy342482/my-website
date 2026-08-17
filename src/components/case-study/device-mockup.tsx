import Image from "next/image";

export function DeviceMockup({ caption }: { caption: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#ffeed6]">
        <Image
          src="/images/case-study/blob-large.svg"
          alt=""
          width={534}
          height={534}
          className="pointer-events-none absolute -right-10 -bottom-24 h-auto w-1/3 max-w-[420px]"
        />
        <Image
          src="/images/case-study/blob-small.svg"
          alt=""
          width={746}
          height={395}
          className="pointer-events-none absolute -top-1/4 -left-[6%] h-auto w-[60%] max-w-[600px] opacity-70"
        />
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 sm:gap-6">
          {[0, 1, 2].map((i) => (
            <Image
              key={i}
              src="/images/case-study/iphone-mockup.svg"
              alt=""
              width={255}
              height={552}
              className="h-[55vw] max-h-[420px] w-auto sm:h-[38vw] lg:h-[420px]"
              priority={i === 1}
            />
          ))}
        </div>
      </div>
      <p className="text-center font-mono text-xs text-muted-foreground">
        {caption}
      </p>
    </div>
  );
}
