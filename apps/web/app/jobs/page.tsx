import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Frontend & Design System Jobs — componentsystem.directory",
  description:
    "Find frontend jobs focused on component systems, design systems, and UI engineering. Post jobs to reach the right audience of skilled developers.",
};

const tiers = [
  {
    name: "Free Basic",
    price: "$0",
    period: "",
    description: "Get your listing in front of component system developers.",
    features: [
      "Listed for 30 days",
      "Job title & company name",
      "Location & remote tags",
      "Link to application page",
    ],
    cta: "Post for Free",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$99",
    period: "/ 30 days",
    description: "Stand out with enhanced visibility and branding.",
    features: [
      "Everything in Free Basic",
      "Company logo displayed",
      "Highlighted in listing",
      "Shared in weekly newsletter",
      "Pinned for first 7 days",
    ],
    cta: "Post Standard",
    highlighted: true,
  },
  {
    name: "Featured",
    price: "$249",
    period: "/ 30 days",
    description: "Maximum exposure for your most important roles.",
    features: [
      "Everything in Standard",
      "Featured banner on homepage",
      "Top of all search results",
      "Dedicated newsletter spotlight",
      "Social media promotion",
      "60-day listing duration",
    ],
    cta: "Post Featured",
    highlighted: false,
  },
];

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Coming Soon
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frontend &amp; Design System{" "}
            <span className="text-brand-600">Jobs</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            A focused job board for roles mentioning component systems, design
            systems, and UI engineering. Find the right role or the right
            candidate in a community that speaks your language.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
          Job Posting Tiers
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-brand-500 bg-white shadow-lg shadow-brand-100 ring-1 ring-brand-500"
                  : "border-gray-200 bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="ml-1 text-sm text-gray-500">
                    {tier.period}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                  tier.highlighted
                    ? "bg-brand-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Post a Job CTA */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gray-50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to post a job?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            The job board is launching soon. Subscribe to our newsletter to be
            notified when it goes live and get early access to post your
            listings.
          </p>
          <button
            disabled
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Post a Job
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
