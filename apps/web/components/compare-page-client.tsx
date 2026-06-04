"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Framework, ComponentSystem } from "@componentsystem/data/schema";
import { CompareBuilder } from "@/components/compare-builder";
import { ComparisonPageView } from "@/components/comparison-page-view";
import { SystemLogo } from "@/components/system-logo";
import { compareHref } from "@/lib/compare-url";
import { parseComparison } from "@/lib/compare";

type ComparePreset = {
  title: string;
  description: string;
  slugs: string[];
};

const frameworkComparisons: { fw: Framework; label: string }[] = [
  { fw: "react", label: "React Libraries" },
  { fw: "vue", label: "Vue Libraries" },
  { fw: "svelte", label: "Svelte Libraries" },
  { fw: "angular", label: "Angular Libraries" },
  { fw: "solid", label: "Solid Libraries" },
  { fw: "web-components", label: "Web Component Libraries" },
];

export function ComparePageClient({
  systems,
  presets,
}: {
  systems: ComponentSystem[];
  presets: ComparePreset[];
}) {
  const [pathComparison, setPathComparison] = useState<string | null>(null);

  useEffect(() => {
    const prefix = "/compare/";
    const fallbackPath = (
      window as Window & { __COMPARE_FALLBACK_PATH?: string }
    ).__COMPARE_FALLBACK_PATH;
    const requestedPath = fallbackPath ?? window.location.pathname;
    const pathname = requestedPath.split("?")[0];

    if (
      fallbackPath &&
      `${window.location.pathname}${window.location.search}` !== fallbackPath
    ) {
      window.history.replaceState(window.history.state, "", fallbackPath);
    }

    setPathComparison(
      pathname.startsWith(prefix)
        ? pathname.slice(prefix.length).replace(/\/$/, "")
        : null
    );
  }, []);

  const pathSlugs = useMemo(
    () => (pathComparison ? parseComparison(pathComparison) : []),
    [pathComparison]
  );
  const compared = useMemo(
    () =>
      pathSlugs
        .map((slug) => systems.find((system) => system.slug === slug))
        .filter((system): system is ComponentSystem => Boolean(system)),
    [pathSlugs, systems]
  );

  if (
    pathComparison &&
    compared.length >= 2 &&
    compared.length === pathSlugs.length
  ) {
    return <ComparisonPageView compared={compared} systems={systems} />;
  }

  return <CompareIndex systems={systems} presets={presets} />;
}

function CompareIndex({
  systems,
  presets,
}: {
  systems: ComponentSystem[];
  presets: ComparePreset[];
}) {
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

      <CompareBuilder systems={systems} presets={presets} />

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">
          Popular Comparisons
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {presets.map((preset) => {
            const selected = preset.slugs
              .map((slug) => systems.find((system) => system.slug === slug))
              .filter((system): system is ComponentSystem => Boolean(system));

            return (
              <Link
                key={preset.title}
                href={compareHref(preset.slugs)}
                className="theme-card-flat theme-card-hover group rounded-lg p-5"
              >
                <div className="flex -space-x-2">
                  {selected.map((system) => (
                    <div
                      key={system.slug}
                      className="theme-logo-tile flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold group-hover:text-[color:var(--accent)]"
                    >
                      <SystemLogo name={system.name} logo={system.logo} />
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
