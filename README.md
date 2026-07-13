# Vlad Runner ($RUNNER)

A cinematic, cyberpunk landing page for **Vlad Runner** — a meme token on
Robinhood Chain. Built with Next.js 15 (App Router), TypeScript, Tailwind
CSS v4, and Framer Motion.

## Tech stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** — theme tokens live in `src/app/globals.css` under
  `@theme inline` (colors, fonts) rather than a `tailwind.config.ts`, which
  is how Tailwind v4 prefers configuration.
- **Framer Motion** — scroll parallax, reveal animations, modal/menu
  transitions.
- **lucide-react** — icon set (X/Telegram brand marks are hand-drawn SVGs in
  `src/components/icons.tsx` since Lucide doesn't ship them).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx       # fonts, SEO metadata, providers, global overlays
    page.tsx          # assembles the sections
    globals.css        # theme tokens + scanline/grain/neon/CRT effects
  components/
    Header.tsx, Logo.tsx, icons.tsx
    Hero.tsx, HeroBackdrop.tsx, NetworkStatus.tsx, ContractCopy.tsx
    CreditsSection.tsx, NarrativeColumn.tsx
    TokenDashboard.tsx, Panel.tsx, NewsletterForm.tsx
    TrailerModal.tsx, Toast.tsx
    Footer.tsx
    ScanlineOverlay.tsx, FilmGrainOverlay.tsx
  lib/
    site-config.ts     # all copy + placeholder values (see below)
    ui-store.tsx        # React context for the trailer modal + toast
```

## Where to plug in real values

Everything that needs to change before launch is centralized in
`src/lib/site-config.ts`, and marked with `// TODO:` comments:

| Value | Field | Notes |
|---|---|---|
| Contract address | `contractAddress`, `contractAddressFull` | The short form is shown in the UI; the full form is what gets copied to the clipboard. |
| Buy link | `buyLink` | Point at your DEX/aggregator swap URL. |
| Trailer video | `trailerVideoUrl` | Leave empty to show the "Coming Soon" placeholder in the modal; set to an MP4 URL to embed a real `<video>`. |
| Explorer link | `explorerLink` | Block explorer token page. |
| Social links | `social.x`, `social.telegram` | Used in the header, footer, and dashboard panel. |
| Newsletter endpoint | `newsletterEndpoint` | `NewsletterForm.tsx` POSTs `{ email }` as JSON here. Currently a placeholder path (`/api/newsletter`) with no backend — wire it up to a real provider (Mailchimp, Beehiiv, ConvertKit, a Next.js route handler, etc). The form doesn't currently fail loudly if the request 404s, since there's nothing behind it yet. |

## Art direction / placeholder assets

The brief calls for `hero-city.webp`, `hooded-runner.webp`,
`trailer-thumbnail.webp`, `city-texture.webp`, and `grain.png`. Rather than
ship binary placeholder images, the equivalent art is built procedurally:

- **Skyline, hooded silhouette, flying vehicles** — hand-built SVG in
  `src/components/HeroBackdrop.tsx`. Window lighting uses a deterministic
  formula (not `Math.random`) so server and client render identically.
- **Film grain** — an inline SVG `feTurbulence` filter in `globals.css`
  (`.film-grain`), animated with `steps()` keyframes. No image request, no
  banding.
- **Rain** — a repeating CSS gradient (`.rain-layer`).
- **Scanlines / CRT flicker / neon glow / chromatic aberration hover** — all
  CSS, see `globals.css`.

This keeps the page fast and dependency-free while still matching the
"fallback gradients so the layout still works before final images are
supplied" requirement — arguably permanently, since there's no image to load
in the first place. When final cinematic plates are ready, they can replace
the `<Skyline/>` / `<HoodedSilhouette/>` layers in `HeroBackdrop.tsx` (e.g.
swap in a `next/image` background) without touching the surrounding
Framer Motion parallax wrapper in `Hero.tsx`.

## Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`), skip-friendly
  heading order.
- Trailer modal: focus is moved to the close button on open, `Tab`/`Shift+Tab`
  are trapped inside the dialog, `Escape` and backdrop click both close it.
- All interactive elements have visible focus states and accessible labels.
- Respects `prefers-reduced-motion` (animations collapse to near-zero
  duration).
