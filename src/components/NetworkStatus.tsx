import { siteConfig } from "@/lib/site-config";

export default function NetworkStatus() {
  return (
    <p className="hairline text-glow-breathe flex items-center gap-2 rounded-sm bg-void-raised/60 px-3 py-2 font-mono text-xs tracking-[0.2em] text-lime-300 uppercase backdrop-blur-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-lime-400" />
        <span className="led-blink relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
      </span>
      {siteConfig.network}
    </p>
  );
}
