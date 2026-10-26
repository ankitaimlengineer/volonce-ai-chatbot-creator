"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Home, LayoutDashboard, PlusCircle } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ROUTES } from "@/lib/site";
import { cn } from "@/lib/cn";

const ITEMS = [
  { href: ROUTES.dashboard, label: "Overview", icon: LayoutDashboard },
  { href: ROUTES.newChatbot, label: "New chatbot", icon: PlusCircle },
  { href: ROUTES.home, label: "Back to website", icon: Home },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-white/10 bg-ink-900 md:w-60 md:shrink-0 md:border-b-0 md:border-r">
      <div className="flex items-center justify-between px-4 py-3 md:block md:py-5">
        <BrandLogo />
        <p className="hidden pt-5 text-xs text-slate-500 md:block">
          <Bot className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
          Preview only. No account is connected.
        </p>
      </div>
      <nav aria-label="Dashboard" className="px-2 pb-2 md:px-3">
        <ul className="flex gap-1 overflow-x-auto md:flex-col">
          {ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                    active ? "bg-brand-500/15 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
