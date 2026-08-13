import type { ReactNode } from "react";
import Link from "next/link";
import { OrpheionMark } from "@/components/OrpheionMark";
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

      <header className="border-b border-stone-200/80 bg-paper">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 sm:px-10 sm:py-6"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-ink transition-opacity duration-300 hover:opacity-80"
          >
            <OrpheionMark
              decorative
              className="h-8 w-8 shrink-0 text-ink sm:h-9 sm:w-9"
            />
            <span className="font-[family-name:var(--font-brand)] text-xl tracking-[-0.02em] sm:text-2xl">
              Orpheion
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-ink-muted transition-colors duration-300 hover:text-ink"
          >
            Back to home
          </Link>
        </nav>
      </header>

      <main id="main" className="flex-1 bg-paper">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
            Legal
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-brand)] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ink-soft">Last updated: {updated}</p>

          <aside className="mt-8 border-l-2 border-bronze/40 pl-4 text-sm leading-relaxed text-ink-muted">
            This page is standard boilerplate for a US solo / small productized
            studio. It is <strong className="font-medium text-ink">not</strong>{" "}
            attorney-reviewed legal advice. Have counsel review before relying on
            it for high-stakes work.
          </aside>

          <div className="legal-prose mt-12 space-y-10 text-base leading-relaxed text-ink-muted">
            {children}
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
