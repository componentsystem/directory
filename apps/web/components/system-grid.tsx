"use client";

import { useMemo, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { SystemCard, type SystemCardView } from "./system-card";

const viewModes: { value: SystemCardView; label: string; icon: "card" | "list" | "mini" }[] = [
  { value: "card", label: "Card view", icon: "card" },
  { value: "list", label: "List view", icon: "list" },
  { value: "mini", label: "Mini card view", icon: "mini" },
];

function parseView(value: string | null): SystemCardView {
  return value === "list" || value === "mini" ? value : "card";
}

export function SystemGrid({ systems }: { systems: ComponentSystem[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const query = searchParams.get("q") ?? "";
  const framework = searchParams.get("framework") ?? "";
  const styling = searchParams.get("styling") ?? "";
  const category = searchParams.get("category") ?? "";
  const view = parseView(searchParams.get("view"));

  const fuse = useMemo(
    () =>
      new Fuse(systems, {
        keys: ["name", "description", "tags", "components", "company"],
        threshold: 0.3,
      }),
    [systems]
  );

  const filtered = useMemo(() => {
    let results = query
      ? fuse.search(query).map((r) => r.item)
      : [...systems].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.sponsored && !b.sponsored) return -1;
          if (!a.sponsored && b.sponsored) return 1;
          return a.name.localeCompare(b.name);
        });

    if (framework) {
      results = results.filter((s) =>
        s.frameworks.includes(framework as ComponentSystem["frameworks"][number])
      );
    }
    if (styling) {
      results = results.filter((s) =>
        s.styling.includes(styling as ComponentSystem["styling"][number])
      );
    }
    if (category) {
      results = results.filter((s) =>
        s.category.includes(category as ComponentSystem["category"][number])
      );
    }

    return results;
  }, [query, framework, styling, category, systems, fuse]);

  const updateView = (nextView: SystemCardView) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextView === "card") {
      params.delete("view");
    } else {
      params.set("view", nextView);
    }
    const queryString = params.toString();
    startTransition(() => {
      router.push(queryString ? `${pathname}?${queryString}` : pathname);
    });
  };

  const gridClassName =
    view === "list"
      ? "grid gap-3"
      : view === "mini"
        ? "grid gap-3 lg:grid-cols-2"
        : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          {filtered.length} component {filtered.length === 1 ? "system" : "systems"}
        </p>
        <div className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {viewModes.map((mode) => (
            <button
              key={mode.value}
              type="button"
              onClick={() => updateView(mode.value)}
              title={mode.label}
              aria-label={mode.label}
              aria-pressed={view === mode.value}
              disabled={isPending}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors disabled:opacity-60 ${
                view === mode.value
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              }`}
            >
              <ViewIcon name={mode.icon} />
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
          <p className="text-gray-500">No component systems match your filters.</p>
          <p className="mt-1 text-sm text-gray-400">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className={gridClassName}>
          {filtered.map((system) => (
            <SystemCard key={system.slug} system={system} systems={systems} view={view} />
          ))}
        </div>
      )}
    </div>
  );
}

function ViewIcon({ name }: { name: "card" | "list" | "mini" }) {
  if (name === "list") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 4.25h10M3 8h10M3 11.75h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "mini") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 3.5h10v9H3zM5 6h6M5 8.5h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
