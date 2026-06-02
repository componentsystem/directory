import type { Metadata } from "next";
import { AiChat } from "./ai-chat";

export const metadata: Metadata = {
  title: "AI Library Finder — componentsystem.directory",
  description:
    "Use AI to find the perfect component library for your project. Describe your needs and get personalized recommendations.",
};

export default function AiPage() {
  return (
    <div className="theme-page mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[color:var(--accent)] text-2xl font-black text-[color:var(--accent-foreground)]">
          AI
        </div>
        <p className="theme-kicker">Static Preview</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          AI Library Finder
        </h1>
        <p className="theme-muted mx-auto mt-4 max-w-xl text-sm leading-6">
          Describe your project requirements and get personalized component
          library recommendations powered by AI.
        </p>
      </section>

      <AiChat />

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold">
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
              className="theme-card-flat rounded-lg p-3 text-sm text-[color:var(--muted)]"
            >
              {prompt}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
