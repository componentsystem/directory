import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Weekly Component Digest Newsletter — componentsystem.directory",
  description:
    "Subscribe to the Weekly Component Digest. Get component library news, new additions, featured jobs, and AI prompts delivered to your inbox every week.",
};

const benefits = [
  {
    title: "Component Library News",
    description:
      "Curated updates on new releases, breaking changes, and major announcements from the most popular component systems.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    title: "New Additions to the Directory",
    description:
      "Be the first to know when new component libraries, design systems, and UI kits are added to our directory.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Featured Jobs",
    description:
      "Hand-picked frontend and design system roles from companies that value component-driven development.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "AI Prompts of the Week",
    description:
      "Ready-to-use prompts for Cursor, Claude, Copilot, and v0 to accelerate your component development workflow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Weekly{" "}
            <span className="text-brand-600">Component Digest</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            The essential weekly newsletter for frontend developers who work with
            component libraries and design systems. Join{" "}
            <span className="font-semibold text-gray-900">0</span> developers
            who stay ahead of the curve.
          </p>
        </div>
      </section>

      {/* Prominent Newsletter Signup */}
      <section className="mb-16">
        <NewsletterSignup />
      </section>

      {/* What You Get */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
          What you&apos;ll get every week
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gray-50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Trusted by frontend developers
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            From solo developers to design system teams at top companies, our
            newsletter keeps you informed about the component ecosystem that
            matters most to your work.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Weekly</div>
              <div>Delivery</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Free</div>
              <div>Forever</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5 min</div>
              <div>Read time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
