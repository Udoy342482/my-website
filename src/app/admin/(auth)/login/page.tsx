"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login, type LoginState } from "./actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    undefined
  );

  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-background px-5 py-16">
      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="flex items-baseline gap-1 font-mono text-2xl font-bold tracking-[-0.5px]">
            <span className="text-foreground">udoy</span>
            <span className="text-brand">.</span>
          </span>
          <p className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase">
            Admin access
          </p>
        </div>

        <form
          action={formAction}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              placeholder="••••••••"
              aria-invalid={state?.error ? true : undefined}
            />
          </div>

          {state?.error ? (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {state.error}
            </p>
          ) : null}

          <Button type="submit" disabled={pending} className="mt-1 h-9 w-full">
            {pending ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
