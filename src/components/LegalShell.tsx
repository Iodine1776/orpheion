import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type LegalShellProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalShell({ title, updated, children }: LegalShellProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1 bg-paper">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-bronze-deep">
            Legal
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-brand)] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ink-soft">Last updated: {updated}</p>

          <div className="legal-prose mt-12 space-y-10 text-base leading-relaxed text-ink-muted">
            {children}
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
