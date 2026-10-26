import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = { title: "Features" };

const FEATURES = [
  { title: "Website knowledge import", step: "Steps 5 and 6", text: "Add your website address and let the product read eligible public pages. You review and approve what it found before the chatbot uses it." },
  { title: "Business-specific AI responses", step: "Step 7", text: "Answers are meant to be based on your approved business information, not guesses." },
  { title: "Multilingual chatbot experience", step: "Step 7 onwards", text: "Choose a primary language for the chatbot. The language list in the onboarding form is a preview of this." },
  { title: "Chatbot customization", step: "Steps 4 and 10", text: "Choose the chatbot name, greeting, colours and position on your website." },
  { title: "Website embed widget", step: "Step 8", text: "Copy one small script into your website to show the chatbot to your visitors." },
  { title: "Conversation management", step: "Step 9", text: "Read past conversations to understand what visitors ask." },
  { title: "Lead management", step: "Step 9", text: "Keep track of visitors who share contact details, with privacy and consent in mind." },
  { title: "Usage limits and subscription plans", step: "Steps 11 and 12", text: "Start on a free plan and upgrade when you need more. Plans and prices are not decided yet." },
] as const;

export default function FeaturesPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Badge tone="planned">Planned: nothing on this page works yet</Badge>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Features</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          This is what VOLONCE AI Chatbot Creator is designed to do. Each feature below is
          planned and will arrive in a future step. Step 1 delivers only the interface and
          project foundation.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.title}>
              <Card className="h-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-base font-semibold text-white">{f.title}</h2>
                  <Badge tone="planned">Coming in future steps: {f.step}</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={ROUTES.newChatbot}>Get Started</ButtonLink>
          <ButtonLink href={ROUTES.dashboard} variant="secondary">View dashboard preview</ButtonLink>
        </div>
      </div>
    </SiteShell>
  );
}
