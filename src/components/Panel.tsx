"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Panel({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      className={`hairline rounded-sm bg-void-raised/50 p-6 transition-colors hover:border-lime-400/40 ${className}`}
    >
      {children}
    </motion.div>
  );
}
