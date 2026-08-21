const cursors = [
  { name: "Yasmine", color: "var(--color-secondary)", top: "20%", left: "72%" },
  { name: "Karim", color: "var(--color-quaternary)", top: "62%", left: "14%" },
];

const tools = ["cursor", "pen", "square", "circle", "sticky", "text"];

export function TexoPreview() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="rounded-blob border-2 border-foreground bg-card p-3 shadow-[10px_10px_0px_0px_var(--shadow-color)] sm:p-4">
        {/* browser chrome */}
        <div className="mb-3 flex items-center gap-2 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
          <span className="h-2.5 w-2.5 rounded-full bg-quaternary" />
          <span className="ml-2 flex-1 truncate rounded-full bg-muted px-3 py-1.5 text-center font-heading text-[11px] font-bold text-muted-foreground sm:text-xs">
            texo-nz2g-seven.vercel.app
          </span>
        </div>

        <div className="flex gap-3">
          {/* left toolbar */}
          <div className="hidden flex-col gap-2 rounded-full border-2 border-foreground bg-card p-2 shadow-pop-sm sm:flex">
            {tools.map((tool, i) => (
              <div
                key={tool}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground text-[10px] font-bold text-white"
                style={{
                  backgroundColor: i === 0 ? "var(--color-accent)" : "var(--color-muted)",
                  color: i === 0 ? "white" : "var(--color-foreground)",
                }}
                aria-hidden
              >
                <ToolGlyph tool={tool} />
              </div>
            ))}
          </div>

          {/* canvas */}
          <div className="bg-dot-grid relative h-72 flex-1 overflow-hidden rounded-lg border-2 border-foreground bg-muted sm:h-96">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 380" fill="none">
              {/* sticky note */}
              <g transform="rotate(-4 130 90)">
                <rect x="70" y="50" width="120" height="80" rx="6" fill="var(--color-tertiary)" stroke="var(--color-foreground)" strokeWidth="2.5" />
                <line x1="86" y1="80" x2="174" y2="80" stroke="var(--color-foreground)" strokeWidth="2" strokeOpacity="0.35" />
                <line x1="86" y1="94" x2="160" y2="94" stroke="var(--color-foreground)" strokeWidth="2" strokeOpacity="0.35" />
              </g>

              {/* rectangle frame */}
              <rect x="250" y="40" width="160" height="110" rx="8" fill="var(--color-accent)" fillOpacity="0.18" stroke="var(--color-accent)" strokeWidth="2.5" />
              {/* selection handles on the rectangle */}
              <rect x="246" y="36" width="8" height="8" fill="white" stroke="var(--color-accent)" strokeWidth="2" />
              <rect x="406" y="36" width="8" height="8" fill="white" stroke="var(--color-accent)" strokeWidth="2" />
              <rect x="246" y="146" width="8" height="8" fill="white" stroke="var(--color-accent)" strokeWidth="2" />
              <rect x="406" y="146" width="8" height="8" fill="white" stroke="var(--color-accent)" strokeWidth="2" />

              {/* circle */}
              <circle cx="540" cy="100" r="52" fill="var(--color-secondary)" fillOpacity="0.18" stroke="var(--color-secondary)" strokeWidth="2.5" />

              {/* freehand squiggle stroke */}
              <path
                d="M60 230C110 190 150 270 200 230C250 190 290 260 340 230C390 200 430 250 480 225"
                stroke="var(--color-quaternary)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              {/* text layer */}
              <rect x="500" y="230" width="150" height="70" rx="8" fill="var(--color-card)" stroke="var(--color-foreground)" strokeWidth="2.5" />
              <line x1="516" y1="252" x2="634" y2="252" stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" />
              <line x1="516" y1="266" x2="610" y2="266" stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
              <line x1="516" y1="280" x2="590" y2="280" stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />

              {/* pill shape bottom left */}
              <rect x="70" y="270" width="140" height="46" rx="23" fill="var(--color-tertiary)" fillOpacity="0.25" stroke="var(--color-tertiary)" strokeWidth="2.5" />
            </svg>

            {cursors.map((c) => (
              <div key={c.name} className="absolute flex items-center gap-1.5" style={{ top: c.top, left: c.left }}>
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

            {/* zoom control */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border-2 border-foreground bg-card px-1 py-1 shadow-pop-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full font-heading text-xs font-bold">−</span>
              <span className="px-1 font-heading text-[11px] font-bold">100%</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full font-heading text-xs font-bold">+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-6 rounded-full border-2 border-foreground bg-quaternary px-4 py-2 font-heading text-xs font-bold shadow-pop-sm">
        Live · synced across every cursor
      </div>
    </div>
  );
}

function ToolGlyph({ tool }: { tool: string }) {
  switch (tool) {
    case "cursor":
      return <span>↖</span>;
    case "pen":
      return <span>✎</span>;
    case "square":
      return <span className="block h-2.5 w-2.5 rounded-xs border-[1.5px] border-current" />;
    case "circle":
      return <span className="block h-2.5 w-2.5 rounded-full border-[1.5px] border-current" />;
    case "sticky":
      return <span className="block h-2.5 w-2.5 rounded-xs bg-current" />;
    case "text":
      return <span>T</span>;
    default:
      return null;
  }
}
