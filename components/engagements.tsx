import { Star, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    title: "Consulting",
    tagline: "Stuck on something specific",
    points: ["Architecture or code review", "One-off debugging session", "Camera / coordinate-space audits"],
    featured: false,
  },
  {
    title: "Project-based",
    tagline: "A defined build, start to finish",
    points: ["Fixed scope & price", "MVPs, features, canvas work", "Async-first, clear check-ins"],
    featured: true,
  },
  {
    title: "Ongoing retainer",
    tagline: "Steady, continuous progress",
    points: ["Weekly hours block", "Bug triage & polish", "No fixed daily schedule"],
    featured: false,
  },
];

export function Engagements() {
  return (
    <section id="engagements" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-heading text-lg font-bold uppercase tracking-wide text-quaternary">
            How we work together
          </span>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            I work as a modern Frontend Developer — delivering fast, responsive, and pixel-perfect web applications tailored to your stack.
          </p>
        </div>

        <div className="mx-auto max-w-xl rounded-xl border-2 border-foreground bg-card p-8 shadow-[8px_8px_0px_0px_var(--color-border)]">
          <h3 className="font-heading text-xl font-extrabold">Frontend Developer</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Available for React, Next.js, and TypeScript project builds, UI component engineering, and design system integration
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Fast, responsive UI development with React.js, Next.js, & Tailwind CSS",
              "Interactive features, real-time engines, & custom design system implementations",
              "Clean, production-ready code with clear communication & transparent timelines",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-quaternary text-white">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}