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
    Hero.tsx, NetworkStatus.tsx, ContractCopy.tsx
    CreditsSection.tsx, NarrativeColumn.tsx
    TokenDashboard.tsx, Panel.tsx
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
| Trailer video | `trailerVideoUrl` | Currently `/videos/runner-trailer.mp4` (`public/videos/runner-trailer.mp4`), played inline in `TrailerSection.tsx` right after the hero and in the dashboard's trailer modal. Leave empty to fall back to the "Coming Soon" placeholder instead. |
| Explorer link | `explorerLink` | Block explorer token page. |
| Social links | `social.x`, `social.telegram` | Used in the header, footer, and dashboard panel. |

## Art direction / assets

- `src/assets/hero-city.jpg` — the cinematic rainy-city/hooded-protagonist
  plate. Used as the hero background (`Hero.tsx`) and, cropped to the
  figure, as the trailer thumbnail (`TokenDashboard.tsx`). Both are static
  `next/image` imports, so Next.js generates optimized/responsive variants
  automatically.
- `src/assets/logo-mark.png` — the VLAD (red) / RUNNER (green) wordmark,
  cropped to its content bounding box with the original alpha channel
  preserved so it drops cleanly onto the near-black theme. Rendered via
  `Logo.tsx` in the header, footer, and hero title.
- `public/videos/runner-trailer.mp4` — the official trailer, H.264/AAC,
  faststart-remuxed for progressive playback. Lives in `public/` (not
  `src/assets/`) since `<video>` needs a plain URL rather than a
  next/image-style static import. Played inline in `TrailerSection.tsx`
  and in the dashboard's trailer modal.
- **Film grain** — an inline SVG `feTurbulence` filter in `globals.css`
  (`.film-grain`), animated with `steps()` keyframes. No extra image
  request, no banding.
- **Rain** — a repeating CSS gradient (`.rain-layer`), layered at low
  opacity over the hero photo (which already has rain baked in) for a
  little extra motion.
- **Scanlines / CRT flicker / neon glow / chromatic aberration hover** — all
  CSS, see `globals.css`.

Swap `src/assets/hero-city.jpg` or `src/assets/logo-mark.png` for a new file
of the same name to update the art without touching component code — the
surrounding Framer Motion parallax wrapper in `Hero.tsx` doesn't need to
change.

## Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`), skip-friendly
  heading order.
- Trailer modal: focus is moved to the close button on open, `Tab`/`Shift+Tab`
  are trapped inside the dialog, `Escape` and backdrop click both close it.
- All interactive elements have visible focus states and accessible labels.
- Respects `prefers-reduced-motion` (animations collapse to near-zero
  duration).
