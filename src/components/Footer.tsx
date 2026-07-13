import { Feather } from "lucide-react";
import Logo from "./Logo";
import { XLogo, TelegramLogo } from "./icons";
import { siteConfig, disclaimer } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative bg-void-raised/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <div className="mt-4 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-foreground/60 uppercase">
              <Feather className="h-3.5 w-3.5 text-lime-400" />
              Built on Robinhood Chain
            </div>
          </div>

          <div className="max-w-xs">
            <p className="font-mono text-[10px] tracking-[0.25em] text-olive-500 uppercase">
              Contract Address
            </p>
            <code className="mt-1 block break-all font-mono text-sm text-lime-300">
              {siteConfig.contractAddress}
            </code>
          </div>

          <div className="flex items-center gap-2">
            {/* TODO: replace with the real X (Twitter) profile. */}
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow on X"
              className="hairline flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <XLogo className="h-4 w-4" />
            </a>
            {/* TODO: replace with the real Telegram invite link. */}
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Join Telegram"
              className="hairline flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <TelegramLogo className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-lime-400/10 pt-8">
          <p className="mx-auto max-w-3xl text-center font-mono text-xs leading-relaxed text-foreground/45">
            {disclaimer}
          </p>
          <p className="mt-4 text-center font-mono text-xs tracking-[0.15em] text-foreground/40 uppercase">
            &copy; {siteConfig.copyrightYear} Vlad Runner. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
