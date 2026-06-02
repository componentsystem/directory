"use client";

import { useState } from "react";

export function NewsletterSignup({ variant = "brand" }: { variant?: "brand" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const isDark = variant === "dark";

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
    <section
      className={
        isDark
          ? "rounded-lg border border-white/10 bg-white/[0.04] px-5 py-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:px-6"
          : "rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 text-center text-white sm:px-12"
      }
    >
      <h2 className={isDark ? "text-xl font-semibold tracking-tight" : "text-2xl font-bold sm:text-3xl"}>
        Weekly Component Digest
      </h2>
      <p className={isDark ? "mt-3 max-w-xl text-sm leading-6 text-gray-400" : "mx-auto mt-3 max-w-xl text-brand-100"}>
        Get the latest component library updates, new additions, featured jobs, and
        practical frontend resources delivered to your inbox every week.
      </p>

      {status === "success" ? (
        <div
          className={
            isDark
              ? "mt-6 rounded-md border border-lime-300/20 bg-lime-300/10 p-4 text-sm text-lime-100"
              : "mt-6 rounded-lg bg-white/10 p-4 text-brand-100"
          }
        >
          Thanks for subscribing! Check your inbox to confirm.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={isDark ? "mt-6 flex flex-col gap-3 sm:flex-row" : "mx-auto mt-6 flex max-w-md gap-3"}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              isDark
                ? "h-11 flex-1 rounded-md border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-lime-300/60 focus:ring-2 focus:ring-lime-300/15"
                : "flex-1 rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-200 backdrop-blur-sm focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            }
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={
              isDark
                ? "h-11 whitespace-nowrap rounded-md bg-lime-300 px-5 text-sm font-semibold text-gray-950 transition hover:bg-lime-200 disabled:opacity-50"
                : "whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 disabled:opacity-50"
            }
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className={isDark ? "mt-3 text-sm text-red-300" : "mt-3 text-sm text-red-200"}>
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
