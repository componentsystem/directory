import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { CopyButton } from "./copy-button";

export const metadata: Metadata = {
  title: "AI Prompts for Component Libraries — componentsystem.directory",
  description:
    "Curated AI prompts for Cursor, Claude, Copilot, and v0. Generate components, layouts, and patterns for popular UI libraries.",
};

const prompts = [
  {
    library: "shadcn/ui",
    tool: "Cursor",
    text: "Generate a Shadcn/ui data table with server-side pagination using TanStack Query",
  },
  {
    library: "Mantine",
    tool: "Claude",
    text: "Create a Mantine dashboard layout with sidebar navigation and dark mode toggle",
  },
  {
    library: "Radix UI",
    tool: "Copilot",
    text: "Build an accessible modal dialog using Radix UI primitives with animations",
  },
  {
    library: "Chakra UI",
    tool: "v0",
    text: "Design a responsive card grid with Chakra UI and framer-motion hover effects",
  },
  {
    library: "React Aria",
    tool: "Claude",
    text: "Implement a multi-step form wizard using React Aria for accessibility",
  },
];

const toolColors: Record<string, string> = {
  Cursor: "bg-purple-100 text-purple-700",
  Claude: "bg-orange-100 text-orange-700",
  Copilot: "bg-sky-100 text-sky-700",
  v0: "bg-gray-900 text-white",
};

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            AI-Powered
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            AI Prompts for{" "}
            <span className="text-brand-600">Component Libraries</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Curated prompts for Cursor, Claude, Copilot, and v0. Copy and paste
            them into your favorite AI tool to generate components, layouts, and
            patterns for popular UI libraries.
          </p>
        </div>
      </section>

      {/* Prompt Cards */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.map((prompt) => (
            <div
              key={prompt.text}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                  {prompt.library}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${toolColors[prompt.tool] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {prompt.tool}
                </span>
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-700">
                &ldquo;{prompt.text}&rdquo;
              </p>
              <CopyButton text={prompt.text} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gray-50 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            More prompts coming soon
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-600">
            We&apos;re building a searchable library of hundreds of AI prompts
            across every major component system. Subscribe to get new prompts
            delivered weekly.
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
