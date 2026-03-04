"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 text-center text-white sm:px-12">
      <h2 className="text-2xl font-bold sm:text-3xl">
        Weekly Component Digest
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-brand-100">
        Get the latest component library news, new additions, featured jobs, and
        AI prompts delivered to your inbox every week.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-lg bg-white/10 p-4 text-brand-100">
          Thanks for subscribing! Check your inbox to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-3">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-200 backdrop-blur-sm focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-200">
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
