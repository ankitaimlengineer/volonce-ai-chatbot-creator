import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "planned" | "demo" | "info";

const tones: Record<Tone, string> = {
  planned: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  demo: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  info: "border-white/15 bg-white/5 text-slate-300",
};

export function Badge({
  tone = "info",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
