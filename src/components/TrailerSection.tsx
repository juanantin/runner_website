"use client";

import { motion } from "framer-motion";
import heroCity from "@/assets/hero-city.jpg";
import { siteConfig } from "@/lib/site-config";

export default function TrailerSection() {
  return (
    <section
      id="trailer"
      className="relative scroll-mt-16 border-b border-lime-400/10 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center font-mono text-xs tracking-[0.3em] text-lime-400 uppercase"
        >
          Official Trailer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-glow-lime overflow-hidden rounded-sm border"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={heroCity.src}
            className="aspect-video w-full bg-black object-cover object-[65%_35%]"
          >
            <source src={siteConfig.trailerVideoUrl} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
