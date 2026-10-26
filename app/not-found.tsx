import { SiteShell } from "@/components/layout/site-shell";
import { ButtonLink } from "@/components/ui/button";
import { ROUTES } from "@/lib/site";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-sm font-medium text-cyan-300">Error 404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-slate-400">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink href={ROUTES.home} size="lg">Back to the landing page</ButtonLink>
        </div>
      </div>
    </SiteShell>
  );
}
