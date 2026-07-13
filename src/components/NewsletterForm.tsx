"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useUI } from "@/lib/ui-store";

export default function NewsletterForm() {
  const { showToast } = useUI();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      // TODO: replace with a real provider/route handler. This currently
      // points at a placeholder endpoint and will 404 in dev — that's
      // expected until the backend exists, so we don't treat it as fatal.
      await fetch(siteConfig.newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => null);
    } finally {
      setSubmitting(false);
      setEmail("");
      showToast("You're on the list. Watch for signal.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-4">
      <div className="hairline flex items-center rounded-sm bg-void/60 pr-1 focus-within:border-lime-400/60">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="w-full bg-transparent px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          aria-label="Subscribe"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-lime-400 transition-colors hover:bg-hood-900 disabled:opacity-50"
        >
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowUpRight className="h-4 w-4" />
          )}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 font-mono text-xs text-orange-500">
          {error}
        </p>
      )}
    </form>
  );
}
