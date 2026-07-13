"use client";

import { motion } from "framer-motion";
import type { narrativeColumns } from "@/lib/site-config";

type Column = (typeof narrativeColumns)[number];

export default function NarrativeColumn({
  column,
  index,
  className = "",
}: {
  column: Column;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className={`min-w-0 px-6 first:pl-0 lg:border-l lg:border-lime-400/15 lg:first:border-l-0 ${className}`}
    >
      <h3 className="crt-flicker font-display mb-4 text-xl font-bold tracking-[0.15em] text-lime-400 italic">
        {column.title}
      </h3>
      <div className="space-y-3">
        {column.lines.map((line, i) => (
          <p
            key={i}
            className="font-mono text-[13px] leading-relaxed text-foreground/75"
          >
            {line}
          </p>
        ))}
      </div>
    </motion.article>
  );
}
