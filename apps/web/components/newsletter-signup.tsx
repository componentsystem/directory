"use client";

import { useState } from "react";

export function NewsletterSignup({ variant = "dark" }: { variant?: "brand" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const isCompact = variant === "dark" || variant === "brand";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("success");
    setEmail("");
  }

  return (
    <section
      className="theme-card rounded-lg px-5 py-6 sm:px-6"
    >
      <p className="theme-kicker mb-3">Newsletter</p>
      <h2 className={isCompact ? "text-xl font-semibold tracking-tight" : "text-2xl font-bold sm:text-3xl"}>
        Weekly Component Digest
      </h2>
      <p className="theme-muted mt-3 max-w-xl text-sm leading-6">
        Get the latest component library updates, new additions, featured jobs, and
        practical frontend resources delivered to your inbox every week.
      </p>

      {status === "success" ? (
        <div
          className={
            "mt-6 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] p-4 text-sm text-[color:var(--muted-strong)]"
          }
        >
          Newsletter signup is coming soon. Thanks for your interest.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="theme-input h-11 flex-1 rounded-md px-4 text-sm"
          />
          <button
            type="submit"
            className="theme-button-primary h-11 whitespace-nowrap rounded-md px-5 text-sm font-semibold disabled:opacity-50"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
