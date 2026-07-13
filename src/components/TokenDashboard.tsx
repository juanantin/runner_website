"use client";

import type { ReactNode } from "react";
import { ExternalLink, Feather, Flame } from "lucide-react";
import Panel from "./Panel";
import { XLogo, TelegramLogo } from "./icons";
import { siteConfig } from "@/lib/site-config";

function PanelHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-mono text-xs font-semibold tracking-[0.25em] text-lime-400 uppercase">
      {children}
    </h3>
  );
}

export default function TokenDashboard() {
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}
