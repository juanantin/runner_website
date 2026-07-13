// Central place for the placeholder values called out in the brief.
// Swap these for real values before launch — nothing else in the
// component tree needs to change.
export const siteConfig = {
  name: "Vlad Runner",
  ticker: "$RUNNER",
  tagline: "THE FUTURE IS HOODED.",
  network: "LIVE ON ROBINHOOD CHAIN",

  contractAddress: "0x1F6e...58d1",
  contractAddressFull: "0x1F6ec2A069B2809738ADF282e8d2Ff65707b58d1",

  buyLink:
    "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0x1f6ec2a069b2809738adf282e8d2ff65707b58d1",

  trailerVideoUrl: "/videos/runner-trailer.mp4",

  // TODO: point at the real block explorer token page.
  explorerLink: "#",

  bullshotUrl:
    "https://bullshot.io/tokens/0x1F6ec2A069B2809738ADF282e8d2Ff65707b58d1",

  tokenInfo: {
    name: "Vlad Runner",
    ticker: "$RUNNER",
    supply: "1,000,000,000",
    tax: "0/0",
    liquidity: "Burnt",
  },

  social: {
    x: "https://x.com/VladRunnerHood",
    telegram: "https://t.me/vladrunner_portal",
  },

  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Trailer", href: "#trailer" },
  { label: "Story", href: "#story" },
  { label: "Tokenomics", href: "#tokenomics" },
] as const;

export const narrativeColumns = [
  {
    title: "THE WORLD",
    lines: [
      "The year is 2049.",
      "Markets aren't run by people anymore.",
      "They're ruled by invisible algorithms, dark pools, AI market makers, and institutions that see every move before you make it.",
      "Retail was never supposed to win.",
    ],
  },
  {
    title: "THE LEGEND",
    lines: [
      "They called him Vlad.",
      "Some saw a CEO. Some saw a villain. Others saw the man who accidentally created a generation of traders.",
      "But legends aren't remembered for what they did.",
      "They're remembered for what they started.",
      "The Hood became bigger than the man.",
    ],
  },
  {
    title: "THE MISSION",
    lines: [
      "VLAD RUNNER isn't another token.",
      "It's the blockbuster where retail gets top billing.",
      "The old market had Hollywood.",
      "Crypto has VLAD RUNNER.",
    ],
  },
  {
    title: "THE ENEMY",
    lines: [
      "The suits.",
      "The gatekeepers.",
      "The market makers.",
      "The insiders.",
      "The ones who always arrive before everyone else.",
      "Until now.",
    ],
  },
  {
    title: "THE HERO",
    lines: [
      "No chosen one.",
      "No VC.",
      "No institution.",
      "Just anonymous traders wearing the Hood.",
      "Running toward the volatility everyone else fears.",
    ],
  },
  {
    title: "THE FUTURE",
    lines: [
      "This is more than a token.",
      "It's a movement.",
      "It's a movie.",
      "It's history in the making.",
      "Welcome to VLAD RUNNER.",
      "THE FUTURE IS HOODED.",
    ],
  },
] as const;

export const disclaimer =
  "$RUNNER is a community-driven meme token created for entertainment. Nothing on this website constitutes financial advice.";
