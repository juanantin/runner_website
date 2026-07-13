"use client";

import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import NarrativeColumn from "./NarrativeColumn";
import { narrativeColumns } from "@/lib/site-config";

export default function CreditsSection() {
  return (
    <section
      id="story"
      className="relative border-b border-lime-400/10 bg-void-raised/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-glow-breathe mx-auto max-w-3xl text-center text-3xl font-bold tracking-wide text-lime-400 italic sm:text-4xl"
        >
          Legends don&rsquo;t die. They decentralize.
        </motion.h2>

        {/* Mobile / tablet: slow horizontal snap-scroll of stacked cards */}
        <div className="relative mt-16 lg:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-0 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]">
            {narrativeColumns.map((column, i) => (
              <div key={column.title} className="w-[82vw] shrink-0 snap-center sm:w-[60vw]">
                <div className="hairline h-full rounded-sm bg-void/60 p-6">
                  <NarrativeColumn column={column} index={i} className="!p-0 lg:border-l-0" />
                </div>
              </div>
            ))}
          </div>
          {/* Fade + nudge hinting there's more to the right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-void-raised to-transparent"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[11px] tracking-[0.25em] text-lime-400/80 uppercase"
          >
            <span>Swipe to continue the story</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex"
            >
              <ChevronsRight className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </div>

        {/* Desktop: full six-column credits roll */}
        <div className="mt-16 hidden grid-cols-6 lg:grid">
          {narrativeColumns.map((column, i) => (
            <NarrativeColumn key={column.title} column={column} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="terminal-cursor font-display mt-20 text-center text-lg tracking-[0.35em] text-olive-500 italic"
        >
          TO BE CONTINUED
        </motion.p>
      </div>
    </section>
  );
}
