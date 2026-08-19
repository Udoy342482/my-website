"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  { label: "Homepage", href: "/admin/homepage" },
  { label: "Case Studies", href: "/admin/case-studies" },
];

export function AdminNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {links.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "font-mono text-sm transition-colors",
              active
                ? "font-bold text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
