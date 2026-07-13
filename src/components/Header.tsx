"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Feather, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { XLogo, TelegramLogo } from "./icons";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-lime-400/20 bg-void/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="chromatic-hover font-mono text-xs tracking-[0.25em] text-foreground/80 uppercase transition-colors hover:text-lime-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow on X"
              className="hairline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <XLogo className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Join Telegram"
              className="hairline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <TelegramLogo className="h-4 w-4" />
            </a>
            <a
              href="#tokenomics"
              aria-label="Built on Robinhood Chain"
              className="hairline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:border-lime-400/60 hover:text-lime-400"
            >
              <Feather className="h-4 w-4" />
            </a>
          </div>

          <a
            href={siteConfig.buyLink}
            className="border-glow-lime hidden rounded-sm border px-4 py-2 font-mono text-xs font-semibold tracking-[0.2em] text-lime-400 uppercase transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Buy {siteConfig.ticker}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="hairline flex h-9 w-9 items-center justify-center rounded-sm text-lime-400 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-lime-400/20 bg-void/95 backdrop-blur-md md:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-4 py-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-3 font-mono text-sm tracking-[0.2em] text-foreground/85 uppercase hover:bg-hood-900 hover:text-lime-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.buyLink}
                onClick={() => setOpen(false)}
                className="border-glow-lime mt-2 rounded-sm border px-3 py-3 text-center font-mono text-sm font-semibold tracking-[0.2em] text-lime-400 uppercase"
              >
                Buy {siteConfig.ticker}
              </a>
              <div className="mt-3 flex items-center gap-2 px-3">
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Follow on X"
                  className="hairline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80"
                >
                  <XLogo className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Join Telegram"
                  className="hairline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80"
                >
                  <TelegramLogo className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
