import { cn } from "@/lib/utils";

const dotColors = ["bg-accent", "bg-secondary", "bg-tertiary", "bg-quaternary"];

export function Badge({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-card px-3.5 py-1.5 font-heading text-[13px] font-bold shadow-pop-sm",
        className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", dotColors[index % dotColors.length])} />
      {children}
    </span>
  );
}
