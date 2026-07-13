import Link from "next/link";
import Image from "next/image";
import logoMark from "@/assets/logo-mark.png";

export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="#home"
      aria-label="Vlad Runner home"
      className={`inline-flex shrink-0 select-none ${className}`}
    >
      <Image
        src={logoMark}
        alt="Vlad Runner"
        priority={priority}
        className="h-9 w-auto drop-shadow-[0_0_12px_rgba(182,255,60,0.35)] sm:h-11"
      />
    </Link>
  );
}
