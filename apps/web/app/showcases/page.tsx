import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Real-World Showcases — componentsystem.directory",
  description:
    "Community submissions of real-world projects built with component libraries. Discover inspiration and see how teams use design systems in production.",
};

export default function ShowcasesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Coming Soon
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Real-World{" "}
            <span className="text-brand-600">Showcases</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Community submissions of projects built with component libraries.
            See how teams and developers use design systems in production, and
            find inspiration for your next project.
          </p>
        </div>
      </section>

      {/* Placeholder Gallery */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50" />
              <div className="p-5">
                <div className="h-4 w-3/4 rounded bg-gray-100" />
                <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />
                <div className="mt-4 flex gap-2">
                  <div className="h-5 w-16 rounded-full bg-gray-100" />
                  <div className="h-5 w-12 rounded-full bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit CTA */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gray-50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Submit your showcase
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            Built something great with a component library? We&apos;d love to
            feature it. Showcase submissions will open when this page launches.
            Subscribe to be the first to know.
          </p>
          <button
            disabled
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit a Showcase
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}
