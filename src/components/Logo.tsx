import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#home"
      aria-label="Vlad Runner home"
      className={`font-display flex flex-col leading-[0.82] italic tracking-wide select-none ${className}`}
    >
      <span
        className="scanline-text text-glow-orange text-3xl font-black sm:text-4xl"
        style={{ transform: "skewX(-6deg)" }}
      >
        VLAD
      </span>
      <span
        className="scanline-text text-glow-lime text-3xl font-black sm:text-4xl"
        style={{ transform: "skewX(-6deg)" }}
      >
        RUNNER
      </span>
    </Link>
  );
}
