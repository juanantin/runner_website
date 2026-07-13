"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
import ContractCopy from "./ContractCopy";
import NetworkStatus from "./NetworkStatus";
import { siteConfig } from "@/lib/site-config";
import { useUI } from "@/lib/ui-store";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { openTrailer } = useUI();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const citySlow = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fogDrift = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-lime-400/10 pt-16"
    >
      {/* Background plate: rainy cyberpunk skyline + hooded protagonist */}
      <motion.div style={{ y: citySlow }} className="absolute inset-0 scale-110">
        <Image
          src={heroCity}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[62%_center] lg:object-[50%_center]"
        />
      </motion.div>

      {/* Legibility scrims over the photo plate */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-void/10 sm:from-void sm:via-void/50 sm:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-void/50"
      />
      <motion.div
        style={{ y: fogDrift }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-hood-950/80 to-transparent blur-2xl"
      />
      <div
        aria-hidden="true"
        className="rain-layer pointer-events-none absolute inset-0 opacity-20"
      />

      {/* Extra neon signage — the plate carries "WALL STREET IS OBSOLETE" and
          "ROBINHOOD CHAIN" already; this one is layered in since it isn't. */}
      <div className="font-display text-glow-lime absolute top-[8%] right-[4%] hidden rotate-2 text-base font-bold tracking-widest italic opacity-90 md:block lg:text-lg">
        IN $VLAD WE TRUST
      </div>

      <motion.div
        style={{ opacity: contentFade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display flex flex-col text-7xl leading-[0.85] font-black tracking-wide italic sm:text-8xl md:text-9xl"
          >
            <span className="scanline-text text-glow-orange">VLAD</span>
            <span className="scanline-text text-glow-lime">RUNNER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-display mt-4 text-2xl font-semibold tracking-[0.15em] text-lime-300 italic sm:text-3xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-5 max-w-lg font-mono text-sm leading-relaxed text-foreground/80 sm:text-base"
          >
            A meme token on Robinhood Chain. By the people. For the people.
            <br />
            We don&rsquo;t chase the system. We run it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={siteConfig.buyLink}
              className="border-glow-lime group inline-flex items-center gap-2 rounded-sm border bg-lime-400/10 px-6 py-3 font-mono text-sm font-semibold tracking-[0.2em] text-lime-300 uppercase transition-transform hover:-translate-y-0.5"
            >
              Buy {siteConfig.ticker}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={openTrailer}
              className="hairline chromatic-hover inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-sm font-semibold tracking-[0.2em] text-foreground uppercase transition-colors hover:border-orange-500/60 hover:text-orange-500"
            >
              View Trailer
              <Play className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-sm"
          >
            <ContractCopy />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-5"
          >
            <NetworkStatus />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
