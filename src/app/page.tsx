import Image from "next/image";
import { OrpheionMark } from "@/components/OrpheionMark";
import { Reveal } from "@/components/Reveal";

const mailto =
  "mailto:hello@orpheion.com?subject=Orpheion%20inquiry";

const steps = [
  {
    n: "01",
    title: "Lock the file",
    body: "Ship a locked Figma with brief, assets, copy, and access. Incomplete packets wait — they never become the active request.",
  },
  {
    n: "02",
    title: "Queue the request",
    body: "One active request at a time. Backlog stays open; mid-flight redesigns restart unless the change is trivial.",
  },
  {
    n: "03",
    title: "Loom handoff",
    body: "Preview on Vercel, walkthrough on Loom, decisions on the board. No status meetings. No Zoom by default.",
  },
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <header className="relative isolate min-h-[100svh] overflow-hidden text-stone-50">
        <div className="hero-media-enter absolute inset-0 -z-10">
          <Image
            src="/orpheion-hero.jpg"
            alt="Sunlit limestone amphitheater overlooking a Mediterranean hillside"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[42%_55%] sm:object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#231e19]/72 via-[#231e19]/38 to-[#231e19]/12"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#231e19]/55 via-transparent to-[#231e19]/25"
            aria-hidden
          />
        </div>

        <nav
          aria-label="Primary"
          className="hero-enter absolute inset-x-0 top-0 z-10"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
            <a
              href="/"
              className="group inline-flex items-center gap-2.5 text-stone-50 transition-opacity duration-300 hover:opacity-90"
            >
              <OrpheionMark
                decorative
                className="h-8 w-8 shrink-0 text-stone-50 sm:h-9 sm:w-9"
              />
              <span className="font-[family-name:var(--font-brand)] text-xl tracking-[-0.02em] sm:text-2xl">
                Orpheion
              </span>
            </a>
            <a
              href={mailto}
              className="text-sm font-medium tracking-wide text-stone-50/90 transition-colors duration-300 hover:text-stone-50"
            >
              hello@orpheion.com
            </a>
          </div>
        </nav>

        <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="hero-enter flex items-center gap-3 sm:gap-4">
              <OrpheionMark
                decorative
                className="h-[clamp(2.25rem,7vw,3.75rem)] w-[clamp(2.25rem,7vw,3.75rem)] shrink-0 text-stone-50/95"
              />
              <span className="font-[family-name:var(--font-brand)] text-[clamp(3.25rem,12vw,6.75rem)] leading-[0.9] tracking-[-0.02em] text-stone-50">
                Orpheion
              </span>
            </p>

            <h1 className="hero-enter hero-enter-delay-1 mt-8 max-w-[18ch] font-[family-name:var(--font-body)] text-[clamp(1.55rem,3.8vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-50">
              Locked Figma in. Live Next.js out.
            </h1>

            <p className="hero-enter hero-enter-delay-2 mt-5 max-w-[34ch] text-base leading-relaxed text-stone-100/90 sm:text-lg">
              Async design-to-production for agencies — a monthly queue that
              turns finished design into shipping frontend.
            </p>

            <div className="hero-enter hero-enter-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={mailto}
                className="inline-flex items-center justify-center bg-stone-50 px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-sage-50"
              >
                Start a conversation
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center border border-stone-50/45 px-7 py-3.5 text-sm font-medium tracking-wide text-stone-50 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-stone-50 hover:bg-stone-50/10"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative overflow-hidden border-b border-stone-200/80 bg-paper">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 12% 0%, color-mix(in srgb, var(--sage-100) 55%, transparent), transparent 55%), radial-gradient(ellipse at 88% 100%, color-mix(in srgb, var(--stone-200) 45%, transparent), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-32">
            <Reveal as="header">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
                Who it&apos;s for
              </p>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.025em] text-ink">
                Agencies with locked designs — and overflow to ship.
              </h2>
            </Reveal>
            <Reveal delay={1} className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
                Orpheion is for design agencies and brand studios that already
                have UI locked in Figma. You keep the creative relationship; we
                take the production lane — Next.js, Tailwind, Vercel — when your
                bench is full.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                Not a design retainer. Not strategy workshops. Not “build
                anything.” Finished design in; production frontend out.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="how"
          className="border-b border-stone-200/80 bg-sage-800 text-stone-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <Reveal as="header" className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-300">
                How it works
              </p>
              <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.025em]">
                Three moves. Zero meetings.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-200/90 sm:text-lg">
                The queue is simple on purpose — so delivery stays calm when your
                client calendar is not.
              </p>
            </Reveal>

            <ol className="mt-16 space-y-0 divide-y divide-stone-50/15 border-y border-stone-50/15">
              {steps.map((step, i) => (
                <Reveal
                  key={step.n}
                  as="li"
                  delay={(Math.min(i, 3) as 0 | 1 | 2 | 3)}
                  className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr] sm:gap-10 lg:grid-cols-[6rem_14rem_1fr]"
                >
                  <span className="font-[family-name:var(--font-brand)] text-3xl leading-none text-stone-300/80">
                    {step.n}
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.02em] sm:pt-1">
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-stone-200/85 sm:pt-1 lg:justify-self-end">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="offer"
          className="relative overflow-hidden border-b border-stone-200/80 bg-paper"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-stone-100/70 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <Reveal as="header" className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
                Offer
              </p>
              <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.025em] text-ink">
                A production queue you can pause.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-14 lg:grid-cols-[1.35fr_0.9fr] lg:gap-20">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage-700">
                  Primary
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-brand)] text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-[-0.02em] text-ink">
                  $3,500–$4,500
                  <span className="ml-2 align-middle text-2xl font-[family-name:var(--font-body)] font-normal text-ink-soft">
                    / month
                  </span>
                </h3>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                  One active request. Unlimited backlog. Pause or cancel anytime.
                  Billed monthly in advance.
                </p>
                <ul className="mt-8 max-w-md space-y-3 text-base text-ink-muted">
                  <li className="flex gap-3 border-t border-stone-200 pt-3">
                    <span className="text-bronze" aria-hidden>
                      —
                    </span>
                    Next.js + Tailwind on Vercel, motion when the design asks
                  </li>
                  <li className="flex gap-3 border-t border-stone-200 pt-3">
                    <span className="text-bronze" aria-hidden>
                      —
                    </span>
                    Forms via SaaS destinations; responsive as designed
                  </li>
                  <li className="flex gap-3 border-t border-stone-200 pt-3">
                    <span className="text-bronze" aria-hidden>
                      —
                    </span>
                    24–48h updates; typical request 2–5 business days after packet
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={1} className="lg:pt-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage-700">
                  Optional
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] text-ink">
                  Kickoff Sprint
                </h3>
                <p className="mt-2 font-[family-name:var(--font-brand)] text-4xl leading-none text-ink">
                  $6,500{" "}
                  <span className="text-2xl text-ink-soft">/ $8,500</span>
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  For a full multi-page stand-up before — or instead of — entering
                  the monthly queue. Same rules: design lock, async only,
                  frontend-default.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Standard $6,500 · complex or rush $8,500
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-stone-100/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-32">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-bronze">
                Async promise
              </p>
              <h2 className="mt-4 max-w-[16ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.025em] text-ink">
                Board + Loom. Not another calendar invite.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
                Default communication is written on a shared board and recorded
                on Loom. No Zoom discovery calls. No weekly standups. You get
                production capacity that fits around agency hours — not through
                them.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink text-stone-50">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 70% 0%, color-mix(in srgb, var(--sage-700) 55%, transparent), transparent 55%), radial-gradient(ellipse at 10% 100%, color-mix(in srgb, var(--bronze) 28%, transparent), transparent 45%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <Reveal className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-brand)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
                Ready when the file is locked.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-200/90">
                Tell us about the agency, the overflow, and the next design
                waiting to ship. We reply on email — then the board.
              </p>
              <a
                href={mailto}
                className="mt-10 inline-flex items-center justify-center bg-stone-50 px-8 py-4 text-sm font-medium tracking-wide text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-sage-50"
              >
                Email hello@orpheion.com
              </a>
            </Reveal>
          </div>
        </section>
      </main>

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
              Async design-to-production for agencies. Locked Figma in, live
              Next.js out.
            </p>
          </div>
          <div className="text-sm text-stone-400">
            <a
              href={mailto}
              className="text-stone-200 transition-colors duration-300 hover:text-stone-50"
            >
              hello@orpheion.com
            </a>
            <p className="mt-2">© {new Date().getFullYear()} Orpheion LLC</p>
          </div>
        </div>
      </footer>
    </>
  );
}
