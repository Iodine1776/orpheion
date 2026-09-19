import { OrpheionMark } from "@/components/OrpheionMark";

const mailto =
  "mailto:hello@orpheion.com?subject=Orpheion%20inquiry";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/30 bg-ink text-stone-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <p className="inline-flex items-center gap-2.5 text-stone-50">
            <OrpheionMark decorative className="h-7 w-7 text-stone-50" />
            <span className="font-[family-name:var(--font-brand)] text-2xl">
              Orpheion
            </span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-400">
            Practical AI consulting for independent insurance agencies.
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-stone-300">
            <span className="font-medium">Mailing address</span><br />
            Orpheion<br />
            11205 Lebanon Road, Suite 509<br />
            Mount Juliet, TN 37122-5545
          </address>
          <p className="mt-1 text-xs text-stone-400">Mail correspondence only; no walk-in office.</p>
        </div>
        <div className="text-sm text-stone-400">
          <a
            href={mailto}
            className="text-stone-200 transition-colors duration-300 hover:text-stone-50"
          >
            hello@orpheion.com
          </a>
          <p className="mt-2 max-w-xs text-xs leading-relaxed">Questions and introductions only. Please leave confidential files out of your email; we arrange any approved document transfer separately.</p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="/terms"
              className="text-stone-300 transition-colors duration-300 hover:text-stone-50"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-stone-300 transition-colors duration-300 hover:text-stone-50"
            >
              Privacy
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Orpheion</p>
        </div>
      </div>
    </footer>
  );
}
