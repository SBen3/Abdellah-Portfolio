import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Squiggle, ConfettiTriangle, ConfettiCircle } from "@/components/decorations";

const links = [
  { icon: Mail, label: "Email", href: "mailto:smahiabdellahv1@gmail.com", color: "var(--shadow-color-pink)" },
  { icon: Github, label: "GitHub", href: "https://github.com/SBen3", color: "var(--color-foreground)" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/smahi-abdellah/", color: "var(--blue)" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-quaternary/25"
      />
      <ConfettiTriangle className="pointer-events-none absolute right-[12%] top-[20%] h-7 w-7 -rotate-12" />
      <ConfettiCircle className="pointer-events-none absolute left-[10%] bottom-[15%] h-6 w-6" color="var(--color-tertiary)" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-accent">
          Get in touch
        </span>
        <h2 className="relative mt-3 inline-block font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          Got a real-time idea?
          <Squiggle className="absolute -bottom-3 left-1/2 h-3 w-40 -translate-x-1/2" />
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Tell me what you&apos;re building. I reply to every message, usually within a day.
        </p>

        <div className="mt-9 flex justify-center">
          <Button href="mailto:smahiabdellahv1@gmail.com" icon>
            Say hello
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-5 py-2.5 font-heading text-sm font-bold shadow-pop-sm transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-10"
                style={{ backgroundColor: link.color }}
              >
                <link.icon size={13} strokeWidth={2.5} />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
