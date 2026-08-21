# Abdellah — Portfolio

A single-page portfolio built with Next.js (App Router) + TypeScript + Tailwind CSS v4,
implementing the "Playful Geometric" design system with full light/dark mode support
(via `next-themes`, class-based).

## Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`)
- `next-themes` for dark mode
- `lucide-react` for icons
- Self-hosted fonts via `@fontsource/outfit` and `@fontsource/plus-jakarta-sans`
  (Google Fonts' CDN wasn't reachable from the build sandbox, so fonts are bundled
  locally instead — this also means zero runtime requests to Google)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/globals.css` — design tokens (colors, radii, shadows, fonts) for light + dark,
  plus the hard "pop shadow" and dot-grid utility classes
- `components/ui/` — `Button`, `Badge`, `Card` primitives
- `components/` — page sections: `Navbar`, `Hero`, `Marquee`, `FeaturedProject` (Texo),
  `Skills`, `Engagements`, `Contact`, `Footer`
- `components/decorations.tsx` — reusable squiggle / confetti / dashed-connector SVGs

## Before you ship this

The content is scaffolded with placeholder contact links — update these before deploying:

- `components/contact.tsx` — real email, GitHub, LinkedIn, Upwork URLs
- `app/layout.tsx` — swap the `metadata` description/title if needed, add an OG image
- Texo project section (`components/featured-project.tsx`) — swap in a real screenshot
  of the canvas once you're happy with it instead of the illustrated mock, and link the
  live demo / repo once public
