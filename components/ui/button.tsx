import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex items-center gap-2.5 font-heading font-bold text-[15px] rounded-full border-2 border-foreground px-6 py-3.5 min-h-12 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-pop hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_var(--shadow-color)]",
  secondary:
    "bg-transparent text-foreground hover:bg-tertiary hover:-translate-x-0.5 hover:-translate-y-0.5",
};

function Icon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-accent">
      <ArrowRight size={14} strokeWidth={2.75} />
    </span>
  );
}

interface CommonProps {
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  icon = false,
  className,
  children,
  href,
  ...props
}: CommonProps & { href?: string } & Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, "className">) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon && <Icon />}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon && <Icon />}
    </button>
  );
}
