"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useUI } from "@/lib/ui-store";
import { siteConfig } from "@/lib/site-config";

export default function TrailerModal() {
  const { trailerOpen, closeTrailer } = useUI();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!trailerOpen) return;

    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeTrailer();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [trailerOpen, closeTrailer]);

  return (
    <AnimatePresence>
      {trailerOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="trailer-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close trailer"
            onClick={closeTrailer}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="hairline border-glow-lime relative z-10 w-full max-w-2xl rounded-sm bg-void-raised p-8"
          >
            <button
              ref={closeBtnRef}
              onClick={closeTrailer}
              aria-label="Close"
              className="absolute top-4 right-4 text-foreground/70 transition-colors hover:text-lime-400"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="font-mono text-xs tracking-[0.3em] text-lime-400 uppercase">
              Official Trailer
            </p>
            <h2
              id="trailer-modal-title"
              className="font-display text-glow-orange mt-2 text-4xl font-bold italic"
            >
              Coming Soon
            </h2>

            {siteConfig.trailerVideoUrl ? (
              <video
                controls
                className="mt-6 aspect-video w-full rounded-sm bg-black"
                src={siteConfig.trailerVideoUrl}
              />
            ) : (
              <div className="hairline mt-6 flex aspect-video w-full items-center justify-center rounded-sm bg-gradient-to-br from-hood-900 to-void">
                <span className="border-glow-lime flex h-16 w-16 items-center justify-center rounded-full text-lime-400">
                  <Play className="ml-1 h-6 w-6" fill="currentColor" />
                </span>
              </div>
            )}

            <p className="mt-6 font-mono text-sm leading-relaxed text-foreground/75">
              The Hood is being cut in the editing room. Follow the crew so
              you don&rsquo;t miss the premiere.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
