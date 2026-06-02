"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { compareHref } from "@/lib/compare-url";
import { SystemLogo } from "./system-logo";

const STORAGE_KEY = "componentsystem.compare";
const EVENT_NAME = "componentsystem:compare";
const MAX_COMPARE_ITEMS = 6;

type CompareSystem = Pick<ComponentSystem, "slug" | "name" | "frameworks" | "logo">;

function uniqueSlugs(slugs: string[], validSlugs: Set<string>) {
  return Array.from(new Set(slugs)).filter((slug) => validSlugs.has(slug));
}

function readStoredSlugs(validSlugs: Set<string>) {
  if (typeof window === "undefined") return [];

  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed)
      ? uniqueSlugs(parsed.filter((item) => typeof item === "string"), validSlugs)
      : [];
  } catch {
    return [];
  }
}

export function useCompareBasket(systems: CompareSystem[]) {
  const validSlugs = useMemo(
    () => new Set(systems.map((system) => system.slug)),
    [systems]
  );
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setSlugs(readStoredSlugs(validSlugs));

    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(EVENT_NAME, sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(EVENT_NAME, sync);
    };
  }, [validSlugs]);

  const commit = useCallback((nextSlugs: string[]) => {
    const next = uniqueSlugs(nextSlugs, validSlugs).slice(0, MAX_COMPARE_ITEMS);
    setSlugs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT_NAME));
  }, [validSlugs]);

  const selected = slugs
    .map((slug) => systems.find((system) => system.slug === slug))
    .filter((system): system is CompareSystem => Boolean(system));

  return {
    slugs,
    selected,
    isFull: slugs.length >= MAX_COMPARE_ITEMS,
    add: (slug: string) => commit([...slugs, slug]),
    addMany: (nextSlugs: string[]) => commit([...slugs, ...nextSlugs]),
    remove: (slug: string) => commit(slugs.filter((item) => item !== slug)),
    clear: () => commit([]),
    replace: commit,
    has: (slug: string) => slugs.includes(slug),
    href: compareHref(slugs),
  };
}

export function CompareButton({
  system,
  systems,
}: {
  system: CompareSystem;
  systems: CompareSystem[];
}) {
  const basket = useCompareBasket(systems);
  const selected = basket.has(system.slug);
  const disabled = !selected && basket.isFull;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        if (selected) {
          basket.remove(system.slug);
        } else {
          basket.add(system.slug);
        }
      }}
      className={`inline-flex h-9 items-center justify-center rounded-md border px-3 text-xs font-semibold transition-colors ${
        selected
          ? "border-brand-500 bg-brand-600 text-white hover:bg-brand-700"
          : "border-gray-200 bg-white text-gray-700 hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-brand-600 dark:hover:text-brand-300"
      }`}
      aria-pressed={selected}
      title={disabled ? `Compare up to ${MAX_COMPARE_ITEMS} libraries` : undefined}
    >
      {selected ? "Selected" : "+ Compare"}
    </button>
  );
}

export function CompareTray({ systems }: { systems: CompareSystem[] }) {
  const basket = useCompareBasket(systems);

  if (basket.selected.length === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 pb-6 pt-4 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur dark:border-gray-800 dark:bg-gray-950/95 sm:pb-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Compare basket
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {basket.selected.map((system) => (
              <span
                key={system.slug}
                className="inline-flex min-h-9 items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <SystemLogo name={system.name} logo={system.logo} />
                </span>
                {system.name}
                <button
                  type="button"
                  onClick={() => basket.remove(system.slug)}
                  className="rounded-full text-gray-400 hover:text-red-500"
                  aria-label={`Remove ${system.name} from comparison`}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={basket.clear}
            className="h-10 rounded-md border border-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            Clear
          </button>
          {basket.selected.length >= 2 ? (
            <Link
              href={basket.href}
              className="inline-flex h-10 items-center rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Compare {basket.selected.length}
            </Link>
          ) : (
            <span className="inline-flex h-10 items-center rounded-md bg-gray-100 px-4 text-sm font-semibold text-gray-400 dark:bg-gray-800">
              Add one more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
