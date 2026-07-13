// Pure decorative background art for the hero: a vector cyberpunk skyline,
// neon signage, distant flyers, and an abstract hooded silhouette. Everything
// here is hand-built SVG/CSS (no binary image assets) so it renders crisp at
// any density and never blocks on artwork. Window placement uses a
// deterministic formula (not Math.random) to avoid SSR/CSR hydration
// mismatches.
//
// TODO: once final cinematic plates exist (hero-city.webp / hooded-runner.webp),
// they can replace the <Skyline/> and <HoodedSilhouette/> layers directly —
// the surrounding motion/parallax wrapper in Hero.tsx does not need to change.

function Skyline() {
  const buildings = Array.from({ length: 14 }).map((_, i) => {
    const height = 60 + ((i * 37) % 140);
    const width = 26 + ((i * 13) % 30);
    const x = i * 48;
    return { x, width, height, i };
  });

  return (
    <svg
      viewBox="0 0 700 260"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bld" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4530" />
          <stop offset="100%" stopColor="#06120d" />
        </linearGradient>
      </defs>
      {buildings.map(({ x, width, height, i }) => (
        <g key={i}>
          <rect
            x={x}
            y={260 - height}
            width={width}
            height={height}
            fill="url(#bld)"
            stroke="rgba(182,255,60,0.22)"
          />
          {Array.from({ length: Math.floor(height / 18) }).map((_, r) =>
            Array.from({ length: Math.max(1, Math.floor(width / 12)) }).map(
              (_, c) => {
                const lit = (i * 7 + r * 3 + c * 5) % 5 === 0;
                if (!lit) return null;
                const orange = (i + r + c) % 3 === 0;
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={x + 6 + c * 12}
                    y={260 - height + 8 + r * 18}
                    width={5}
                    height={7}
                    fill={orange ? "#ff6a2b" : "#b6ff3c"}
                    opacity={0.85}
                  />
                );
              },
            ),
          )}
        </g>
      ))}
      {/* feather glyph atop the tallest distant tower */}
      <g transform="translate(118, 26)" opacity="0.9">
        <path
          d="M8 2 1 14h6l-1 8 10-14h-7l1-6Z"
          fill="none"
          stroke="#b6ff3c"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}

function HoodedSilhouette() {
  return (
    <svg
      viewBox="0 0 400 520"
      className="h-full w-full"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#123321" />
          <stop offset="55%" stopColor="#071410" />
          <stop offset="100%" stopColor="#05070a" />
        </linearGradient>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(182,255,60,0)" />
          <stop offset="100%" stopColor="rgba(182,255,60,0.55)" />
        </linearGradient>
      </defs>
      {/* shoulders / cloak */}
      <path
        d="M40 520V330c0-70 60-130 160-130s160 60 160 130v190Z"
        fill="url(#hood)"
      />
      {/* hood */}
      <path
        d="M200 40c-58 0-96 46-96 108 0 46 20 84 40 112 12 16 20 34 20 54h72c0-20 8-38 20-54 20-28 40-66 40-112 0-62-38-108-96-108Z"
        fill="url(#hood)"
      />
      {/* face shadow void */}
      <ellipse cx="200" cy="176" rx="46" ry="58" fill="#05070a" opacity="0.92" />
      {/* rim light down the right edge, catching neon from the city */}
      <path
        d="M292 148c4 44-16 84-36 112-12 16-20 34-20 54"
        fill="none"
        stroke="url(#rim)"
        strokeWidth="5"
      />
    </svg>
  );
}

function Flyer({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 80 24"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="12" rx="34" ry="6" fill="rgba(6,10,8,0.95)" />
      <rect x="4" y="10.5" width="66" height="3" rx="1.5" fill="rgba(182,255,60,0.85)" />
      <circle cx="8" cy="12" r="3" fill="#ff6a2b" />
      <circle cx="72" cy="12" r="3" fill="#b6ff3c" />
      <rect x="0" y="11" width="14" height="2" fill="rgba(255,106,43,0.55)" />
      <rect x="66" y="11" width="14" height="2" fill="rgba(182,255,60,0.55)" />
    </svg>
  );
}

export default function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c2118] via-[#071410] to-void" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] opacity-90">
        <Skyline />
      </div>
      <div className="absolute right-[4%] bottom-0 hidden h-[80%] w-[46%] max-w-[420px] opacity-95 sm:block sm:h-[92%] sm:right-[10%]">
        <HoodedSilhouette />
      </div>
      <Flyer className="absolute top-[18%] left-[8%] hidden w-16 opacity-70 sm:block" />
      <Flyer
        className="absolute top-[30%] right-[20%] hidden w-12 opacity-50 sm:block"
        flip
      />
      <div
        aria-hidden="true"
        className="rain-layer absolute inset-0 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />
    </>
  );
}
