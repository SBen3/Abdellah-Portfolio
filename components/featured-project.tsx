import { Layers, MousePointer2, ZoomIn, Github } from "lucide-react";
import { Card, CardIcon } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfettiPill } from "@/components/decorations";
import { TexoPreview } from "@/components/texo-preview";

const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Liveblocks", "Convex", "Clerk"];

const highlights = [
  {
    icon: MousePointer2,
    title: "Live multiplayer presence",
    body: "Cursors, selections, and edits sync across every collaborator through Liveblocks storage and presence.",
    color: "var(--color-accent)",
  },
  {
    icon: ZoomIn,
    title: "Touch, pinch & zoom",
    body: "A full mobile interaction layer — panning, pinch-to-zoom, and a camera system that keeps coordinates honest at any scale.",
    color: "var(--color-secondary)",
  },
  {
    icon: Layers,
    title: "Freehand drawing engine",
    body: "Pressure-shaped strokes via perfect-freehand, with keyboard shortcuts, copy/paste, and layer z-ordering.",
    color: "var(--color-quaternary)",
  },
];

export function FeaturedProject() {
  return (
    <section id="work" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <TexoPreview />
        </div>

        <div className="mb-12 max-w-2xl">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-secondary">
            Featured build
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Texo — a real-time collaborative whiteboard
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            My main portfolio project, built solo from the ground up: a Figma-style canvas for
            teams to sketch, plan, and leave sticky notes together, live.
          </p>
        </div>

        <Card featured className="overflow-visible" hover={false}>
          <CardIcon>
            <Layers size={20} strokeWidth={2.5} />
          </CardIcon>

          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((s, i) => (
              <Badge key={s} index={i}>
                {s}
              </Badge>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="relative">
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground text-white shadow-pop-sm"
                  style={{ backgroundColor: h.color }}
                >
                  <h.icon size={18} strokeWidth={2.5} />
                </div>
                <h3 className="font-heading text-base font-bold">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 border-t-2 border-dashed border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-muted-foreground">
              Built end to end — from the canvas math to the design system on top of it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="https://texo-nz2g-seven.vercel.app/" variant="primary" icon>
                Live demo
              </Button>
              <Button href="https://github.com/SBen3" variant="secondary">
                <Github size={16} strokeWidth={2.5} />
                Code
              </Button>
            </div>
          </div>
        </Card>

        <ConfettiPill className="pointer-events-none mx-auto mt-6 h-4 w-16 rotate-3" />
      </div>
    </section>
  );
}
