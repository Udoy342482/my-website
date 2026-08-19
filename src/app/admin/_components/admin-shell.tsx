import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AdminNav } from "@/app/admin/_components/admin-nav";
import { logout } from "@/app/admin/actions";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/admin"
            className="flex items-baseline gap-2 font-mono text-lg font-bold tracking-[-0.5px]"
          >
            <span className="flex items-baseline gap-1">
              <span className="text-foreground">udoy</span>
              <span className="text-brand">.</span>
            </span>
            <span className="rounded-sm bg-background-tertiary px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.5px] text-muted-foreground">
              ADMIN
            </span>
          </Link>

          <AdminNav className="hidden sm:flex" />

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "font-mono"
              )}
            >
              View site
              <ArrowUpRight className="size-3.5" />
            </Link>
            <form action={logout}>
              <Button variant="ghost" size="sm" type="submit" className="font-mono">
                Log out
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-border px-5 py-2 sm:hidden">
          <AdminNav />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8">
        {children}
      </main>
    </div>
  );
}
