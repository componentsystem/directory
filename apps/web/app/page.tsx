import { Suspense } from "react";
import { systems } from "@componentsystem/data";
import { SearchBar } from "@/components/search-bar";
import { SystemGrid } from "@/components/system-grid";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          The Definitive Directory of
          <br />
          <span className="text-brand-600">UI Component Systems</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Discover, compare, and choose from {systems.length}+ frontend component
          systems, design systems, and UI libraries. Community-driven and open
          source.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            {systems.length} libraries listed
          </span>
          <span>|</span>
          <span>
            {systems.filter((s) => s.frameworks.includes("react")).length} React
          </span>
          <span>|</span>
          <span>
            {systems.filter((s) => s.frameworks.includes("vue")).length} Vue
          </span>
          <span>|</span>
          <span>
            {systems.filter((s) => s.frameworks.includes("svelte")).length} Svelte
          </span>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mb-8">
        <Suspense fallback={<div className="h-24" />}>
          <SearchBar />
        </Suspense>
      </section>

      {/* Grid */}
      <section className="mb-16">
        <Suspense
          fallback={
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-48 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800"
                />
              ))}
            </div>
          }
        >
          <SystemGrid systems={systems} />
        </Suspense>
      </section>

      {/* Newsletter */}
      <section className="mb-16">
        <NewsletterSignup />
      </section>

      {/* SEO Content */}
      <section className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
        <h2>What is a Component System?</h2>
        <p>
          A component system (also known as a component library, UI library, or
          design system) is a collection of reusable UI components that help
          developers build consistent, accessible, and beautiful user interfaces.
          From buttons and modals to complex data tables and charts, component
          systems provide the building blocks for modern web and mobile
          applications.
        </p>
        <h2>How to Choose a Component Library</h2>
        <p>
          Choosing the right component library depends on your framework (React,
          Vue, Svelte, Angular), styling preferences (Tailwind, CSS-in-JS,
          headless), and project requirements (accessibility, customizability,
          bundle size). Use our filters and comparison pages to find the perfect
          fit for your project.
        </p>
      </section>
    </div>
  );
}
