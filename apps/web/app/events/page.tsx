import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Frontend & Design System Events — componentsystem.directory",
  description:
    "Upcoming conferences, webinars, livestreams, and release events for frontend developers and design system teams.",
};

export default function EventsPage() {
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
            <span className="text-brand-600">Events</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Conferences, webinars, livestreams, and release events for frontend
            developers and design system teams. Never miss an important event in
            the component ecosystem.
          </p>
        </div>
      </section>

      {/* Event Types Preview */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Conferences",
              description: "Multi-day events with talks, workshops, and networking",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              ),
            },
            {
              name: "Webinars",
              description: "Live online sessions and AMAs with library authors",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              ),
            },
            {
              name: "Livestreams",
              description: "Live coding sessions building with component libraries",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              ),
            },
            {
              name: "Release Events",
              description: "Major version launches and migration workshops",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              ),
            },
          ].map((type) => (
            <div
              key={type.name}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center text-brand-600">
                {type.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {type.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gray-50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Never miss an event
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            Subscribe to get notified about upcoming events in the component
            library ecosystem. We&apos;ll curate the best events so you
            don&apos;t have to search.
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
