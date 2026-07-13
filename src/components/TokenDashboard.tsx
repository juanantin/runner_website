"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ExternalLink, Feather, Flame, Play } from "lucide-react";
import Panel from "./Panel";
import { XLogo, TelegramLogo } from "./icons";
import heroCity from "@/assets/hero-city.jpg";
import { siteConfig } from "@/lib/site-config";
import { useUI } from "@/lib/ui-store";

function PanelHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-mono text-xs font-semibold tracking-[0.25em] text-lime-400 uppercase">
      {children}
    </h3>
  );
}

export default function TokenDashboard() {
  const { openTrailer } = useUI();

  return (
    <section
      id="tokenomics"
      className="relative border-b border-lime-400/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center font-mono text-xs tracking-[0.3em] text-olive-500 uppercase">
          Dashboard
        </p>
        <h2 className="font-display text-glow-breathe mb-16 text-center text-3xl font-bold tracking-wide text-lime-400 italic sm:text-4xl">
          Everything You Need To Run With The Hood
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Panel 1 — Built on */}
          <Panel index={0}>
            <PanelHeading>Built On</PanelHeading>
            <div className="mt-5 flex items-center gap-3">
              <span className="border-glow-lime flex h-11 w-11 items-center justify-center rounded-full text-lime-400">
                <Feather className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold text-foreground italic">
                Robinhood Chain
              </span>
            </div>
          </Panel>

          {/* Panel 2 — Token info */}
          <Panel index={1}>
            <PanelHeading>Token Info</PanelHeading>
            <dl className="mt-5 space-y-2 font-mono text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-foreground/50">Name</dt>
                <dd className="text-foreground/90">{siteConfig.tokenInfo.name}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-foreground/50">Ticker</dt>
                <dd className="text-lime-300">{siteConfig.tokenInfo.ticker}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-foreground/50">Supply</dt>
                <dd className="text-foreground/90">{siteConfig.tokenInfo.supply}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-foreground/50">Tax</dt>
                <dd className="text-foreground/90">{siteConfig.tokenInfo.tax}</dd>
              </div>
            </dl>
          </Panel>

          {/* Panel 3 — Liquidity */}
          <Panel index={2}>
            <PanelHeading>Liquidity</PanelHeading>
            <div className="mt-5 flex items-center gap-2 font-display text-2xl font-bold text-orange-500 italic">
              <Flame className="h-5 w-5" />
              {siteConfig.tokenInfo.liquidity}
            </div>
            {/* TODO: point at the real block explorer token page. */}
            <a
              href={siteConfig.explorerLink}
              className="chromatic-hover mt-4 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] text-foreground/70 uppercase hover:text-lime-400"
            >
              View on Explorer
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Panel>

          {/* Panel 4 — Join the crew */}
          <Panel index={3}>
            <PanelHeading>Join The Crew</PanelHeading>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow on X"
                className="hairline flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
              >
                <XLogo className="h-[18px] w-[18px]" />
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Join Telegram"
                className="hairline flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
              >
                <TelegramLogo className="h-[18px] w-[18px]" />
              </a>
            </div>
          </Panel>

          {/* Panel 5 — Trailer thumbnail */}
          <Panel index={4} className="p-0 overflow-hidden">
            <button
              type="button"
              onClick={openTrailer}
              aria-label="Watch official trailer"
              className="group relative flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 p-6"
            >
              <Image
                src={heroCity}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-[38%_30%] transition-transform duration-300 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/20"
              />
              <span className="glow-pulse-box float-slow relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-lime-400/55 bg-void/60 text-lime-400 transition-transform group-hover:scale-110">
                <Play className="ml-1 h-5 w-5" fill="currentColor" />
              </span>
              <span className="relative z-10 font-mono text-xs tracking-[0.25em] text-foreground/70 uppercase">
                Official Trailer
              </span>
              <span className="font-display text-glow-orange relative z-10 text-xl font-bold italic">
                Watch Now
              </span>
            </button>
          </Panel>
        </div>
      </div>
    </section>
  );
}
