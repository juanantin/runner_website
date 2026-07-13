import { siteConfig } from "@/lib/site-config";

export default function NetworkStatus() {
  return (
    <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-lime-300/90 uppercase">
      <span className="relative flex h-2.5 w-2.5">
        <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-lime-400" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
      </span>
      {siteConfig.network}
    </p>
  );
}
