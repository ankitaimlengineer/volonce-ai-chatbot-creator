import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { COMPANY_NAME, COMPANY_URL, DESCRIPTION, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <BrandLogo />
          <p className="mt-3 text-sm text-slate-400">{DESCRIPTION}</p>
          <p className="mt-3 text-sm text-slate-400">
            A product of{" "}
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-300 underline-offset-4 hover:underline"
            >
              {COMPANY_NAME}
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                www.volonis.in
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        &copy; {COMPANY_NAME}. VOLONCE AI Chatbot Creator is under development (Step 1 of 15).
      </div>
    </footer>
  );
}
