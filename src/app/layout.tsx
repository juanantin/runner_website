import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { UIProvider } from "@/lib/ui-store";
import Toast from "@/components/Toast";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import FilmGrainOverlay from "@/components/FilmGrainOverlay";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://vladrunner.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vlad Runner ($RUNNER) — The Future Is Hooded",
    template: "%s | Vlad Runner",
  },
  description:
    "VLAD RUNNER is a meme token on Robinhood Chain. By the people, for the people. No VC, no institution — just anonymous traders wearing the Hood.",
  keywords: [
    "Vlad Runner",
    "$RUNNER",
    "meme token",
    "Robinhood Chain",
    "crypto",
    "DeFi",
  ],
  openGraph: {
    title: "Vlad Runner ($RUNNER) — The Future Is Hooded",
    description:
      "A meme token on Robinhood Chain. By the people. For the people. We don't chase the system. We run it.",
    url: siteUrl,
    siteName: "Vlad Runner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlad Runner ($RUNNER) — The Future Is Hooded",
    description: "The old market had Hollywood. Crypto has Vlad Runner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${ibmPlexMono.variable} bg-void text-foreground antialiased`}
      >
        <UIProvider>
          {children}
          <Toast />
        </UIProvider>
        <ScanlineOverlay />
        <FilmGrainOverlay />
      </body>
    </html>
  );
}
