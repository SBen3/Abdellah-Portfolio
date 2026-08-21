import { Code2, Sparkles, Rocket } from "lucide-react";
import { Card, CardIcon } from "@/components/ui/card";
import { DashedConnector } from "@/components/decorations";

const skills = [
  {
    icon: Code2,
    color: "var(--color-accent)",
    title: "Engineering",
    body: "React, Next.js and TypeScript, daily. I split real-time mutations from plain UI callbacks so multiplayer state never fights the render loop.",
  },
  {
    icon: Sparkles,
    color: "var(--color-secondary)",
    title: "Design systems",
    body: "I translate a token system — color, radius, shadow, type scale — into consistent components instead of one-off styles. Ask about the Bauhaus pass I did on Texo's UI.",
  },
  {
    icon: Rocket,
    color: "var(--color-tertiary)",
    title: "Shipping speed",
    body: "AI-accelerated where it counts, hand-debugged where it matters. I move fast on scaffolding and slow down for coordinate math and edge cases.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent">
            What I bring
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three things every project gets
          </h2>
        </div>

        <div className="relative">
          <DashedConnector className="pointer-events-none absolute left-0 right-0 top-14 hidden h-8 w-full md:block" />

          <div className="grid grid-cols-1 gap-10 pt-6 md:grid-cols-3 md:gap-8">
            {skills.map((s) => (
              <Card key={s.title} className="pt-8">
                <CardIcon bg={s.color}>
                  <s.icon size={20} strokeWidth={2.5} />
                </CardIcon>
                <h3 className="font-heading text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
