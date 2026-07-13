"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useUI } from "@/lib/ui-store";

export default function Toast() {
  const { toast } = useUI();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[110] flex justify-center px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="border-glow-lime pointer-events-auto flex items-center gap-2 rounded-sm border bg-void-raised px-4 py-3 font-mono text-sm text-lime-300 shadow-lg"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
