import { Suspense } from "react";
import { systems } from "@componentsystem/data";
import { SearchBar } from "@/components/search-bar";
import { SystemGrid } from "@/components/system-grid";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function HomePage() {
  return (
    <div className="theme-page mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-8 flex flex-col gap-5 border-b border-[color:var(--border)] pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="theme-kicker">Component Systems</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
          The definitive directory of
          <br />
          <span className="text-[color:var(--accent)]">UI component systems.</span>
        </h1>
          <p className="theme-muted mt-4 max-w-2xl text-sm leading-6">
          Discover, compare, and choose from {systems.length}+ frontend component
          systems, design systems, and UI libraries. Community-driven and open
          source.
        </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[420px]">
          {[
            { value: systems.length, label: "Libraries" },
            { value: systems.filter((s) => s.frameworks.includes("react")).length, label: "React" },
            { value: systems.filter((s) => s.frameworks.includes("vue")).length, label: "Vue" },
            { value: systems.filter((s) => s.frameworks.includes("svelte")).length, label: "Svelte" },
          ].map((stat) => (
            <div key={stat.label} className="theme-stat-card rounded-lg px-4 py-3">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="theme-muted mt-1 text-xs uppercase tracking-[0.14em]">{stat.label}</div>
            </div>
          ))}
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
                  className="theme-card-flat h-48 animate-pulse rounded-lg"
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
      <section className="theme-card-flat prose prose-sm max-w-none rounded-lg p-6 prose-headings:text-[color:var(--foreground)] prose-p:text-[color:var(--muted)] dark:prose-invert">
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
