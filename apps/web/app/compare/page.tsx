import Link from "next/link";
import { systems } from "@componentsystem/data";
import type { Framework } from "@componentsystem/data/schema";
import type { Metadata } from "next";
import { CompareBuilder } from "@/components/compare-builder";
import { SystemLogo } from "@/components/system-logo";
import { compareHref } from "@/lib/compare-url";

export const metadata: Metadata = {
  title: "Compare Component Libraries — componentsystem.directory",
  description:
    "Side-by-side comparisons of popular UI component libraries. Compare shadcn/ui vs Mantine, Radix UI vs Headless UI, MUI vs Ant Design, and more.",
};

const popularComparisons = [
  {
    title: "React design system staples",
    description: "Polished React libraries with broad component coverage.",
    slugs: ["shadcn-ui", "mantine", "mui", "chakra-ui"],
  },
  {
    title: "Headless and primitive stack",
    description: "Composable foundations for custom design systems.",
    slugs: ["radix-ui", "headless-ui", "react-aria", "ariakit"],
  },
  {
    title: "Enterprise React suites",
    description: "Large component sets for internal tools and admin apps.",
    slugs: ["ant-design", "mui", "primereact", "fluent-ui"],
  },
  {
    title: "Tailwind-friendly choices",
    description: "Libraries that pair naturally with utility-first styling.",
    slugs: ["shadcn-ui", "daisy-ui", "flowbite", "preline"],
  },
  {
    title: "Vue ecosystem",
    description: "Popular Vue component libraries and design systems.",
    slugs: ["vuetify", "element-plus", "quasar", "vue-material"],
  },
  {
    title: "Svelte ecosystem",
    description: "Svelte-first libraries for applications and primitives.",
    slugs: ["shadcn-svelte", "skeleton", "bits-ui", "melt-ui"],
  },
];

const frameworkComparisons: { fw: Framework; label: string }[] = [
  { fw: "react", label: "React Libraries" },
  { fw: "vue", label: "Vue Libraries" },
  { fw: "svelte", label: "Svelte Libraries" },
  { fw: "angular", label: "Angular Libraries" },
  { fw: "solid", label: "Solid Libraries" },
  { fw: "web-components", label: "Web Component Libraries" },
];

export default function ComparePage() {
  return (
    <div className="theme-page mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8 border-b border-[color:var(--border)] pb-8">
        <p className="theme-kicker">Decision Matrix</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Compare Component Libraries
        </h1>
        <p className="theme-muted mt-4 max-w-2xl text-sm leading-6">
          Select libraries from the directory, keep them in your compare basket,
          and inspect features across two or more systems.
        </p>
      </section>

      <CompareBuilder systems={systems} presets={popularComparisons} />

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">
          Popular Comparisons
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularComparisons.map((preset) => {
            const selected = preset.slugs
              .map((slug) => systems.find((system) => system.slug === slug))
              .filter((system) => Boolean(system));

            return (
              <Link
                key={preset.title}
                href={compareHref(preset.slugs)}
                className="theme-card-flat theme-card-hover group rounded-lg p-5"
              >
                <div className="flex -space-x-2">
                  {selected.map((system) => (
                    <div
                      key={system!.slug}
                      className="theme-logo-tile flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold group-hover:text-[color:var(--accent)]"
                    >
                      <SystemLogo name={system!.name} logo={system!.logo} />
                    </div>
                  ))}
                </div>
                <h3 className="mt-4 font-semibold group-hover:text-[color:var(--accent)]">
                  {preset.title}
                </h3>
                <p className="theme-muted mt-1 text-sm">
                  {preset.description}
                </p>
                <p className="theme-link mt-3 text-xs font-semibold uppercase tracking-wide">
                  Compare {selected.length} libraries
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Compare by Framework
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frameworkComparisons.map(({ fw, label }) => {
            const count = systems.filter((s) =>
              s.frameworks.includes(fw)
            ).length;
            return (
              <Link
                key={fw}
                href={`/?framework=${fw}`}
                className="theme-card-flat theme-card-hover rounded-lg p-5"
              >
                <h3 className="font-semibold">{label}</h3>
                <p className="theme-muted mt-1 text-sm">
                  {count} libraries to compare
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
