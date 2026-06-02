"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { compareHref } from "@/lib/compare-url";
import { useCompareBasket } from "./compare-basket";
import { SystemLogo } from "./system-logo";

type ComparePreset = {
  title: string;
  description: string;
  slugs: string[];
};

export function CompareBuilder({
  systems,
  presets,
}: {
  systems: ComponentSystem[];
  presets: ComparePreset[];
}) {
  const basket = useCompareBasket(systems);
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const available = systems.filter((system) => !basket.has(system.slug));

    if (!normalized) {
      return available.slice(0, 8);
    }

    return available
      .filter((system) =>
        [
          system.name,
          system.slug,
          system.description,
          system.frameworks.join(" "),
          system.styling.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
      )
      .slice(0, 8);
  }, [basket, query, systems]);

  return (
    <section className="mb-12 rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-100">
                Build a comparison
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Add two or more libraries, then compare capabilities side by side.
              </p>
            </div>
            {basket.selected.length >= 2 && (
              <Link
                href={basket.href}
                className="inline-flex h-10 items-center justify-center rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Compare {basket.selected.length}
              </Link>
            )}
          </div>

          <div className="mt-5">
            <label
              htmlFor="compare-search"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Add libraries
            </label>
            <input
              id="compare-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search shadcn/ui, MUI, Mantine..."
              className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            />
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {matches.map((system) => (
              <button
                key={system.slug}
                type="button"
                onClick={() => basket.add(system.slug)}
                disabled={basket.isFull}
              className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-left transition hover:border-brand-300 hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-brand-700 dark:hover:bg-brand-950/30"
            >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-sm font-bold text-gray-700 dark:bg-gray-900 dark:text-gray-200">
                    <SystemLogo name={system.name} logo={system.logo} />
                  </span>
                  <span className="min-w-0">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {system.name}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {system.frameworks.join(", ")}
                  </span>
                  </span>
                </span>
                <span className="text-lg text-brand-600 dark:text-brand-400">+</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Current basket
            </h3>
            {basket.selected.length > 0 && (
              <button
                type="button"
                onClick={basket.clear}
                className="text-xs font-semibold text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
              >
                Clear
              </button>
            )}
          </div>

          {basket.selected.length === 0 ? (
            <p className="mt-4 rounded-md border border-dashed border-gray-300 px-3 py-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              No libraries selected yet.
            </p>
          ) : (
            <div className="mt-4 space-y-2">
              {basket.selected.map((system) => (
                <div
                  key={system.slug}
                  className="flex items-center justify-between gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span className="flex min-w-0 items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                      <SystemLogo name={system.name} logo={system.logo} />
                    </span>
                    <span className="truncate">{system.name}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => basket.remove(system.slug)}
                    className="text-sm text-gray-400 hover:text-red-500"
                    aria-label={`Remove ${system.name}`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 grid gap-2">
            {presets.slice(0, 3).map((preset) => (
              <Link
                key={preset.title}
                href={compareHref(preset.slugs)}
                onClick={() => basket.replace(preset.slugs)}
                className="rounded-md border border-gray-200 bg-white px-3 py-2 hover:border-brand-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700"
              >
                <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {preset.title}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {preset.slugs.length} libraries
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompareSelectionPanel({
  systems,
  initialSlugs,
}: {
  systems: ComponentSystem[];
  initialSlugs: string[];
}) {
  const basket = useCompareBasket(systems);
  const replaceBasket = basket.replace;
  const [slugs, setSlugs] = useState(initialSlugs);
  const [query, setQuery] = useState("");
  const initialKey = initialSlugs.join(";");

  useEffect(() => {
    const nextSlugs = initialKey.split(";").filter(Boolean);
    setSlugs(nextSlugs);
    replaceBasket(nextSlugs);
  }, [initialKey, replaceBasket]);

  const selected = slugs
    .map((slug) => systems.find((system) => system.slug === slug))
    .filter((system): system is ComponentSystem => Boolean(system));

  const matches = systems
    .filter((system) => !slugs.includes(system.slug))
    .filter((system) =>
      query
        ? system.name.toLowerCase().includes(query.toLowerCase()) ||
          system.slug.toLowerCase().includes(query.toLowerCase())
        : true
    )
    .slice(0, 6);

  const updateSlugs = (nextSlugs: string[]) => {
    setSlugs(nextSlugs);
    basket.replace(nextSlugs);
  };

  return (
    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Adjust comparison
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {selected.map((system) => (
              <span
                key={system.slug}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-xs font-bold text-gray-700 dark:bg-gray-900 dark:text-gray-200">
                  <SystemLogo name={system.name} logo={system.logo} />
                </span>
                {system.name}
                <button
                  type="button"
                  onClick={() =>
                    updateSlugs(slugs.filter((slug) => slug !== system.slug))
                  }
                  className="text-gray-400 hover:text-red-500"
                  aria-label={`Remove ${system.name}`}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-96">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Add another library..."
            className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
          />
          {query && matches.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-30 mt-2 grid max-h-80 gap-1 overflow-y-auto rounded-lg border border-gray-200 bg-white p-1 shadow-xl dark:border-gray-700 dark:bg-gray-950">
              {matches.map((system) => (
                <button
                  key={system.slug}
                  type="button"
                  onClick={() => {
                    updateSlugs([...slugs, system.slug]);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-brand-50 dark:text-gray-200 dark:hover:bg-brand-950/30"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    <SystemLogo name={system.name} logo={system.logo} />
                  </span>
                  <span>{system.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {slugs.length >= 2 ? (
          <Link
            href={compareHref(slugs)}
            className="inline-flex h-10 items-center rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Update comparison
          </Link>
        ) : (
          <span className="inline-flex h-10 items-center rounded-md bg-gray-100 px-4 text-sm font-semibold text-gray-400 dark:bg-gray-800">
            Select at least two
          </span>
        )}
        <Link
          href="/compare"
          className="inline-flex h-10 items-center rounded-md border border-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-950"
        >
          Start over
        </Link>
      </div>
    </div>
  );
}
