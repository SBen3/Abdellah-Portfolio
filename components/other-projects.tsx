import { BarChart3, Gamepad2 } from "lucide-react";
import { Card, CardIcon } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    icon: BarChart3,
    color: "var(--color-accent)",
    title: "Admin Dashboard",
    stack: ["React.js"],
    body: "An interactive analytics dashboard with line, area, and bar charts, built to visualize multi-dimensional datasets at a glance.",
  },
  {
    icon: Gamepad2,
    color: "var(--color-secondary)",
    title: "Dinosaur Game",
    stack: ["JavaScript", "OOP"],
    body: "A fully functional browser game built with object-oriented JavaScript — covering the game loop, collision detection, and state management from scratch.",
  },
];

export function OtherProjects() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-xl">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-tertiary">
            Other projects
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
            A couple more from the archive
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="pt-8">
              <CardIcon bg={p.color}>
                <p.icon size={20} strokeWidth={2.5} />
              </CardIcon>
              <h3 className="font-heading text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s, i) => (
                  <Badge key={s} index={i}>
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
