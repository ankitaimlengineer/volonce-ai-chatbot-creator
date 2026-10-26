import {
  Bot,
  Globe2,
  LayoutDashboard,
  MessagesSquare,
  Palette,
  Puzzle,
  TrendingUp,
} from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WidgetPreview } from "@/components/chatbot/widget-preview";
import { ROADMAP, ROUTES, TAGLINE } from "@/lib/site";

const FEATURES = [
  { icon: Globe2, title: "Website Knowledge", text: "Bring in public information from your website so the chatbot can learn about your business. You review it before it is used." },
  { icon: Bot, title: "AI Chatbot Builder", text: "Set up a chatbot for your business type, language and tone, and test it before it goes live." },
  { icon: Puzzle, title: "Website Widget", text: "Add the chatbot to your own website with a small embed script." },
  { icon: MessagesSquare, title: "Conversations and Leads", text: "See what visitors ask and keep track of people who want to hear from you." },
  { icon: Palette, title: "Customization", text: "Choose the name, colours and greeting so the chatbot matches your brand." },
  { icon: TrendingUp, title: "Business Growth", text: "Answer visitors at any hour and learn which questions come up most." },
] as const;

const STEPS = [
  { title: "Connect Website", text: "Enter your business name and website address." },
  { title: "Configure Chatbot", text: "Review the knowledge, then choose how the chatbot looks and speaks." },
  { title: "Publish", text: "Copy the embed script into your website." },
] as const;

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(47,107,240,0.25),transparent),radial-gradient(40%_40%_at_10%_30%,rgba(25,184,255,0.10),transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <div>
            <Badge tone="planned">Step 1 of 15: interface prototype</Badge>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Build an AI chatbot for your business website
            </h1>
            <p className="mt-4 text-lg font-medium text-cyan-300">{TAGLINE}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              VOLONCE AI Chatbot Creator is being built so any business can set up a chatbot that
              answers visitor questions using its own website information. Right now you can explore
              the planned interface. The AI, website import and chat features are not connected yet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={ROUTES.newChatbot} size="lg">Get Started</ButtonLink>
              <ButtonLink href={ROUTES.features} variant="secondary" size="lg">Explore Features</ButtonLink>
            </div>
          </div>
          <WidgetPreview />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl font-semibold text-white sm:text-3xl">
          What the product is designed to do
        </h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          These are the planned capabilities. They are added step by step, and none of them work yet.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-cyan-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-white/10 bg-ink-900" aria-labelledby="how-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 id="how-heading" className="text-2xl font-semibold text-white sm:text-3xl">How it will work</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-white/10 bg-ink-800/70 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="stages-heading">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 id="stages-heading" className="text-2xl font-semibold text-white sm:text-3xl">
              Built in stages
            </h2>
            <p className="mt-3 max-w-lg text-slate-300">
              VOLONIS TECHNOLOGIES is building this product one step at a time. Step 1 is the
              project foundation and the interface. There is no sign-up, database, website scanning,
              AI, payments or live chat in this version.
            </p>
            <div className="mt-6">
              <ButtonLink href={ROUTES.dashboard} variant="secondary">
                <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                View dashboard preview
              </ButtonLink>
            </div>
          </div>
          <ol className="space-y-2 text-sm">
            {ROADMAP.map((item, i) => (
              <li key={item} className="flex gap-3 rounded-lg border border-white/10 bg-ink-800/50 px-3 py-2">
                <span className="w-14 shrink-0 text-slate-500">Step {i + 1}</span>
                <span className="text-slate-200">{item}</span>
                {i === 0 && <Badge tone="demo" className="ml-auto self-center">Current</Badge>}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
