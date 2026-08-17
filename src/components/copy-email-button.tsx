"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — nothing to fall back to silently.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-1 pt-1 font-mono text-[13px] font-semibold text-brand"
    >
      {copied ? "Copied!" : "Copy Email"}
      {copied ? (
        <Check className="size-3" />
      ) : (
        <ArrowRight className="size-3" />
      )}
    </button>
  );
}
