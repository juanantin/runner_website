"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useUI } from "@/lib/ui-store";

export default function ContractCopy({
  className = "",
}: {
  className?: string;
}) {
  const { showToast } = useUI();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contractAddressFull);
    } catch {
      // Clipboard API can be unavailable (insecure context, permissions).
      // The address is still visible on screen for a manual copy.
    }
    setCopied(true);
    showToast("Contract address copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`hairline flex items-center justify-between gap-3 rounded-sm bg-void-raised/60 px-4 py-3 ${className}`}
    >
      <div className="min-w-0">
        <p className="font-mono text-[10px] tracking-[0.25em] text-olive-500 uppercase">
          Contract Address
        </p>
        <code className="block truncate font-mono text-sm text-lime-300">
          {siteConfig.contractAddress}
        </code>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy contract address"
        className="hairline flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-lime-400 transition-colors hover:border-lime-400/60 hover:bg-hood-900"
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
