"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/portfolio-data";

function isLinkActive(pathname: string, href: string) {
  if (href === "/about") return pathname === "/about";
  if (href === "/#work") return pathname === "/work" || pathname.startsWith("/work/");
  if (href === "/contact") return pathname === "/contact";
  return false;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex items-center justify-between px-5 py-6 sm:px-8 lg:px-[135px] lg:py-8">
        <Link
          href="/"
          className="flex items-baseline gap-1 font-mono text-xl font-bold tracking-[-0.5px]"
        >
          <span className="text-foreground">udoy</span>
          <span className="text-brand">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);
            const isFile = link.href.endsWith(".pdf");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={isFile ? "_blank" : undefined}
                rel={isFile ? "noopener noreferrer" : undefined}
                className={cn(
                  "group flex flex-col gap-1 font-mono text-[15px] transition-colors",
                  active
                    ? "font-bold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "h-0.5 w-full bg-foreground transition-transform",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "hidden h-auto rounded-lg border-border bg-card px-5 py-2.5 font-mono text-sm font-semibold text-foreground hover:bg-muted lg:inline-flex"
          )}
        >
          GET IN TOUCH
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-6 lg:hidden">
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);
            const isFile = link.href.endsWith(".pdf");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={isFile ? "_blank" : undefined}
                rel={isFile ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-3 font-mono text-[15px] hover:bg-muted hover:text-foreground",
                  active ? "font-bold text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-2 h-auto rounded-lg border-border bg-card px-5 py-2.5 font-mono text-sm font-semibold text-foreground"
            )}
          >
            GET IN TOUCH
          </Link>
        </nav>
      )}
    </header>
  );
}
