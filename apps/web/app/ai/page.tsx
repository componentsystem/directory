import type { Metadata } from "next";
import { AiChat } from "./ai-chat";

export const metadata: Metadata = {
  title: "AI Library Finder — componentsystem.directory",
  description:
    "Use AI to find the perfect component library for your project. Describe your needs and get personalized recommendations.",
};

export default function AiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-2xl text-white">
          AI
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          AI Library Finder
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          Describe your project requirements and get personalized component
          library recommendations powered by AI.
        </p>
      </section>

      <AiChat />

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Try asking about:
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "I'm building a B2B SaaS in React with dark mode and good TypeScript support",
            "I need a headless component library for a Svelte project",
            "What's the best Vue component library for enterprise apps?",
            "I want a Tailwind-based component library with copy-paste components",
            "Looking for a React Native UI library with Material Design",
            "I need an accessible component library with great documentation",
          ].map((prompt) => (
            <div
              key={prompt}
              className="rounded-lg border border-gray-200 p-3 text-sm text-gray-600"
            >
              {prompt}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
