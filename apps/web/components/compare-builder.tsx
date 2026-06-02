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
    <section className="theme-card mb-12 rounded-lg p-5">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Build a comparison
              </h2>
              <p className="theme-muted mt-1 text-sm">
                Add two or more libraries, then compare capabilities side by side.
              </p>
            </div>
            {basket.selected.length >= 2 && (
              <Link
                href={basket.href}
                className="theme-button-primary inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold"
              >
                Compare {basket.selected.length}
              </Link>
            )}
          </div>

          <div className="mt-5">
            <label
              htmlFor="compare-search"
              className="theme-muted-strong text-sm font-medium"
            >
              Add libraries
            </label>
            <input
              id="compare-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search shadcn/ui, MUI, Mantine..."
              className="theme-input mt-2 h-11 w-full rounded-md px-3 text-sm"
            />
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {matches.map((system) => (
              <button
                key={system.slug}
                type="button"
                onClick={() => basket.add(system.slug)}
                disabled={basket.isFull}
              className="theme-card-flat theme-card-hover flex items-center justify-between rounded-md px-3 py-2 text-left disabled:cursor-not-allowed disabled:opacity-50"
            >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="theme-logo-tile flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold">
                    <SystemLogo name={system.name} logo={system.logo} />
                  </span>
                  <span className="min-w-0">
                  <span className="block text-sm font-semibold">
                    {system.name}
                  </span>
                  <span className="theme-muted block text-xs">
                    {system.frameworks.join(", ")}
                  </span>
                  </span>
                </span>
                <span className="text-lg text-[color:var(--accent)]">+</span>
              </button>
            ))}
          </div>
        </div>

        <div className="theme-card-flat rounded-lg p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="theme-kicker">
              Current basket
            </h3>
            {basket.selected.length > 0 && (
              <button
                type="button"
                onClick={basket.clear}
                className="theme-muted text-xs font-semibold hover:text-[color:var(--danger)]"
              >
                Clear
              </button>
            )}
          </div>

          {basket.selected.length === 0 ? (
            <p className="theme-muted mt-4 rounded-md border border-dashed border-[color:var(--border)] px-3 py-8 text-center text-sm">
              No libraries selected yet.
            </p>
          ) : (
            <div className="mt-4 space-y-2">
              {basket.selected.map((system) => (
                <div
                  key={system.slug}
                  className="theme-card-flat flex items-center justify-between gap-3 rounded-md px-3 py-2"
                >
                  <span className="flex min-w-0 items-center gap-2 text-sm font-medium">
                    <span className="theme-logo-tile flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                      <SystemLogo name={system.name} logo={system.logo} />
                    </span>
                    <span className="truncate">{system.name}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => basket.remove(system.slug)}
                    className="theme-muted text-sm hover:text-[color:var(--danger)]"
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
                className="theme-card-flat theme-card-hover rounded-md px-3 py-2"
              >
                <span className="block text-sm font-semibold">
                  {preset.title}
                </span>
                <span className="theme-muted block text-xs">
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
    <div className="theme-card-flat mb-8 rounded-lg p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="theme-kicker">
            Adjust comparison
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {selected.map((system) => (
              <span
                key={system.slug}
                className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
              >
                <span className="theme-logo-tile flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                  <SystemLogo name={system.name} logo={system.logo} />
                </span>
                {system.name}
                <button
                  type="button"
                  onClick={() =>
                    updateSlugs(slugs.filter((slug) => slug !== system.slug))
                  }
                  className="theme-muted hover:text-[color:var(--danger)]"
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
            className="theme-input h-10 w-full rounded-md px-3 text-sm"
          />
          {query && matches.length > 0 && (
            <div className="theme-card-strong absolute left-0 right-0 top-full z-30 mt-2 grid max-h-80 gap-1 overflow-y-auto rounded-lg p-1">
              {matches.map((system) => (
                <button
                  key={system.slug}
                  type="button"
                  onClick={() => {
                    updateSlugs([...slugs, system.slug]);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--accent)]"
                >
                  <span className="theme-logo-tile flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold">
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
            className="theme-button-primary inline-flex h-10 items-center rounded-md px-4 text-sm font-semibold"
          >
            Update comparison
          </Link>
        ) : (
          <span className="theme-chip inline-flex h-10 items-center rounded-md px-4 text-sm font-semibold opacity-70">
            Select at least two
          </span>
        )}
        <Link
          href="/compare"
          className="theme-button-secondary inline-flex h-10 items-center rounded-md px-4 text-sm font-medium"
        >
          Start over
        </Link>
      </div>
    </div>
  );
}
