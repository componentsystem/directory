import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Weekly Component Digest Newsletter — componentsystem.directory",
  description:
    "Subscribe to the Weekly Component Digest for component system updates, frontend resources, featured jobs, and new directory additions.",
};

const digestSections = [
  {
    label: "01",
    title: "Release radar",
    description:
      "A concise scan of meaningful component-library releases, breaking changes, migration notes, and ecosystem shifts.",
  },
  {
    label: "02",
    title: "New systems",
    description:
      "Fresh additions to the directory with notes on framework support, styling model, maturity, and where they fit.",
  },
  {
    label: "03",
    title: "Team practice",
    description:
      "Short, practical links for UI engineering teams working on primitives, tokens, accessibility, and design-system delivery.",
  },
  {
    label: "04",
    title: "Selected roles",
    description:
      "A focused set of frontend, product engineering, design systems, and developer experience jobs from the jobs board.",
  },
];

const issueItems = [
  "Radix and shadcn/ui patterns showing up in production dashboards",
  "New design-system engineer roles across remote and hybrid teams",
  "Release notes worth reading from major React component libraries",
  "A practical accessibility checklist for reusable dialog components",
];

const stats = [
  { value: "Weekly", label: "Delivery" },
  { value: "5 min", label: "Read time" },
  { value: "Free", label: "Subscription" },
];

export default function NewsletterPage() {
  return (
    <div className="bg-[#090909] text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
              Weekly Component Digest
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              A sharp weekly brief for component-system teams.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
              Practical updates on UI libraries, design-system practice, directory additions,
              and the jobs worth noticing. Written for frontend teams that build with reusable
              components every day.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-lime-300 hover:text-lime-200"
          >
            Browse jobs
            <span className="ml-2 text-lg leading-none">+</span>
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
              <div className="border-b border-white/10 px-5 py-4 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Latest Issue Preview
                </p>
              </div>
              <div className="grid gap-0 lg:grid-cols-[280px_minmax(0,1fr)]">
                <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r sm:p-6">
                  <div className="text-5xl font-semibold tracking-tight text-white">#014</div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Component systems, interface infrastructure, and useful frontend practice.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-gray-950">
                      Releases
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                      Jobs
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                      Practice
                    </span>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {issueItems.map((item) => (
                    <div key={item} className="flex gap-4 px-5 py-4 sm:px-6">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-300" />
                      <p className="text-sm leading-6 text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Format
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">What lands each week</h2>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {digestSections.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-300/40 hover:bg-white/[0.05]"
                  >
                    <span className="text-xs font-semibold text-lime-300">{section.label}</span>
                    <h3 className="mt-4 text-base font-semibold text-white">{section.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">{section.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <NewsletterSignup variant="dark" />

            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Signal, not volume
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l border-white/10 pl-3 first:border-lime-300">
                    <div className="text-lg font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-gray-400">
                No broad industry roundup. Just the component ecosystem, UI engineering practice,
                and relevant roles.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
