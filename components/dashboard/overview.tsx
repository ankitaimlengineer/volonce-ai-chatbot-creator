"use client";

import { useState } from "react";
import { Bot, Gauge, MessagesSquare, PlusCircle, Users } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/lib/site";
import { cn } from "@/lib/cn";

type View = "demo" | "empty";

const DEMO_STATS = [
  { label: "Chatbots", value: "1", note: "Sample: 1 draft chatbot", icon: Bot },
  { label: "Conversations", value: "0", note: "Sample: none yet", icon: MessagesSquare },
  { label: "Leads", value: "0", note: "Sample: none yet", icon: Users },
  { label: "Usage", value: "0%", note: "Sample: free plan limit not set", icon: Gauge },
] as const;

const DEMO_ACTIVITY = [
  "Sample: Chatbot draft created",
  "Sample: Business details entered",
  "Sample: Website knowledge not imported",
] as const;

export function DashboardOverview() {
  const [view, setView] = useState<View>("empty");
  const isDemo = view === "demo";

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">Overview</h1>
          <p className="mt-1 text-sm text-slate-400">
            Dashboard preview. This page is not connected to a database or an account.
          </p>
        </div>
        <ButtonLink href={ROUTES.newChatbot}>
          <PlusCircle className="h-4 w-4" aria-hidden="true" />
          Create Your First Chatbot
        </ButtonLink>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Preview mode">
        <span className="text-sm text-slate-400">Preview:</span>
        {(
          [
            ["empty", "New account (empty)"],
            ["demo", "Demonstration data"],
          ] as const
        ).map(([key, label]) => (
          <Button
            key={key}
            variant={view === key ? "primary" : "secondary"}
            onClick={() => setView(key)}
            aria-pressed={view === key}
            className="h-9"
          >
            {label}
          </Button>
        ))}
        {isDemo && <Badge tone="demo">Demonstration data, not real</Badge>}
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DEMO_STATS.map(({ label, value, note, icon: Icon }) => (
          <li key={label}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-300">{label}</h2>
                <Icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              </div>
              <p className="mt-3 text-3xl font-semibold text-white">{isDemo ? value : "-"}</p>
              <p className="mt-1 text-xs text-slate-500">{isDemo ? note : "No data yet"}</p>
            </Card>
          </li>
        ))}
      </ul>

      <Card className={cn("mt-6")}>
        <h2 className="text-base font-semibold text-white">Recent activity</h2>
        {isDemo ? (
          <ul className="mt-3 divide-y divide-white/10 text-sm text-slate-300">
            {DEMO_ACTIVITY.map((item) => (
              <li key={item} className="py-2.5">{item}</li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-lg border border-dashed border-white/15 px-6 py-10 text-center">
            <Bot className="mx-auto h-8 w-8 text-slate-500" aria-hidden="true" />
            <p className="mt-3 text-sm font-medium text-white">Nothing here yet</p>
            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-400">
              Create your first chatbot to start. Activity will appear here in a future step.
            </p>
            <div className="mt-5">
              <ButtonLink href={ROUTES.newChatbot}>Create Your First Chatbot</ButtonLink>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
