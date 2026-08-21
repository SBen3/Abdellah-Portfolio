const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Liveblocks",
  "Convex",
  "Clerk",
  "Zustand",
  "shadcn/ui",
];

export function Marquee() {
  const items = [...stack, ...stack];

  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-foreground py-4">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-heading text-lg font-extrabold uppercase tracking-wide text-background/90"
          >
            {item}
            <span className="ml-10 text-tertiary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}