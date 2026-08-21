"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#engagements", label: "How we work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-xl font-extrabold tracking-tight">
          Abdellah Smahi<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-bold text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="#contact" variant="primary" className="hidden sm:inline-flex">
            Let&apos;s talk
          </Button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground shadow-pop-sm md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-foreground bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-base font-bold"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="mt-2 justify-center" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
