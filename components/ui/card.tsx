import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  featured = false,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border-2 border-foreground bg-card p-6 sm:p-8",
        featured ? "shadow-pop-pink" : "shadow-[8px_8px_0px_0px_var(--color-border)]",
        hover && "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Floating icon circle that sits half-in/half-out of the card's top border. */
export function CardIcon({
  children,
  bg = "var(--color-accent)",
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground text-white shadow-pop-sm"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}
