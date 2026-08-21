export function Squiggle({ className = "", color = "var(--color-accent)" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 14C20 4 38 4 56 14C74 24 92 24 110 14C128 4 146 4 164 14C182 24 200 24 218 14C226 10 234 8 238 6"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ConfettiTriangle({ className = "", color = "var(--color-tertiary)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 2L38 36H2L20 2Z" fill={color} />
    </svg>
  );
}

export function ConfettiCircle({ className = "", color = "var(--color-quaternary)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill={color} />
    </svg>
  );
}

export function ConfettiPill({ className = "", color = "var(--color-secondary)" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="60" height="24" rx="12" fill={color} />
    </svg>
  );
}

/** Dashed SVG line meant to visually connect a row of feature cards. */
export function DashedConnector({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20H800"
        stroke="var(--color-border)"
        strokeWidth="2.5"
        strokeDasharray="10 10"
        strokeLinecap="round"
      />
    </svg>
  );
}
