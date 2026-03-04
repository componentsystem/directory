import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Component Library News — componentsystem.directory",
  description:
    "Aggregated frontend component news from Reddit, Dev.to, Hacker News, and GitHub trending. Filtered specifically for component library content.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Coming Soon
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Component Library{" "}
            <span className="text-brand-600">News Feed</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Aggregated frontend component news from Reddit, Dev.to, Hacker
            News, and GitHub trending. Filtered specifically for component
            library content.
          </p>
        </div>
      </section>

      {/* Sources Preview */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Reddit",
              description: "r/reactjs, r/webdev, r/frontend",
              icon: "💬",
            },
            {
              name: "Dev.to",
              description: "Component library tags & articles",
              icon: "📝",
            },
            {
              name: "Hacker News",
              description: "Top frontend & UI stories",
              icon: "🔶",
            },
            {
              name: "GitHub Trending",
              description: "Trending component repositories",
              icon: "⭐",
            },
          ].map((source) => (
            <div
              key={source.name}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center"
            >
              <div className="text-3xl">{source.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {source.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {source.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center">
        <div className="rounded-2xl bg-gray-50 px-6 py-12 sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Be the first to know
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            Subscribe to our newsletter to get notified when the news feed
            launches. In the meantime, we&apos;ll send you a weekly roundup of
            the best component library content.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}
