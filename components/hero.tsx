import { Button } from "@/components/ui/button";
import { ConfettiCircle, ConfettiTriangle, Squiggle } from "@/components/decorations";

const cursors = [
  { name: "Yasmine", color: "var(--color-secondary)", top: "18%", left: "62%" },
  { name: "Karim", color: "var(--color-quaternary)", top: "58%", left: "20%" },
  { name: "You", color: "var(--color-tertiary)", top: "72%", left: "68%" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      {/* Massive yellow circle behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-130 w-130 rounded-full bg-tertiary/40 blur-0 sm:-left-24"
      />
      <ConfettiTriangle className="pointer-events-none absolute left-[8%] top-[14%] h-6 w-6 rotate-12 sm:h-8 sm:w-8" />
      <ConfettiCircle
        className="pointer-events-none absolute left-[4%] top-[62%] hidden h-5 w-5 sm:block"
        color="var(--color-secondary)"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide shadow-pop-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-quaternary" />
            Frontend Developer · Open for freelance
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Interfaces built to
            <span className="relative mx-2 inline-block whitespace-nowrap text-accent">
              move together
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I&apos;m <strong className="font-bold text-foreground">Abdellah Smahi</strong>, a
            frontend developer specializing in React, Next.js, and TypeScript. I build fast,
            responsive, well-structured interfaces — and I&apos;m comfortable taking a feature
            from architecture through to shipped, polished UI.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work" icon>
              See Texo in action
            </Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-heading text-2xl font-extrabold text-foreground">6+</span>
              <p>tools in daily stack</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="font-heading text-2xl font-extrabold text-foreground">1</span>
              <p>shipped multiplayer canvas</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="font-heading text-2xl font-extrabold text-foreground">Saïda</span>
              <p>Algeria, working worldwide</p>
            </div>
          </div>
        </div>

        {/* Right: illustrated live-canvas mock, dotted pattern behind, blob mask */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="bg-dot-grid absolute -right-6 -top-6 h-full w-full rounded-blob"
          />
          <div className="relative rounded-blob border-2 border-foreground bg-card p-4 shadow-[10px_10px_0px_0px_var(--shadow-color)] animate-float">
            {/* fake browser chrome */}
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
              <span className="h-2.5 w-2.5 rounded-full bg-quaternary" />
              <span className="ml-3 rounded-full bg-muted px-3 py-1 font-heading text-[11px] font-bold text-muted-foreground">
                texo.app/board/design-review
              </span>
            </div>

            {/* canvas surface */}
            <div className="relative h-72 overflow-hidden rounded-lg border-2 border-foreground bg-muted sm:h-80">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none">
                <rect x="28" y="28" width="120" height="80" rx="10" fill="var(--color-secondary)" fillOpacity="0.25" stroke="var(--color-secondary)" strokeWidth="2.5" />
                <circle cx="290" cy="90" r="46" fill="var(--color-accent)" fillOpacity="0.2" stroke="var(--color-accent)" strokeWidth="2.5" />
                <path
                  d="M50 210C90 170 130 240 170 200C210 160 250 220 290 190"
                  stroke="var(--color-quaternary)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <rect x="200" y="205" width="90" height="60" rx="8" fill="var(--color-tertiary)" fillOpacity="0.3" stroke="var(--color-tertiary)" strokeWidth="2.5" />
              </svg>

              {cursors.map((c) => (
                <div
                  key={c.name}
                  className="absolute flex items-center gap-1.5"
                  style={{ top: c.top, left: c.left }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 1L15 7L8 8.5L6 15L1 1Z" fill={c.color} stroke="var(--color-foreground)" strokeWidth="1" />
                  </svg>
                  <span
                    className="rounded-full border border-foreground px-2 py-0.5 font-heading text-[10px] font-bold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 -right-3 rounded-full border-2 border-foreground bg-quaternary px-4 py-2 font-heading text-xs font-bold shadow-pop-sm sm:-right-6">
            Live · synced in ~40ms
          </div>
        </div>
      </div>
    </section>
  );
}
