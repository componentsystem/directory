"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { SystemCard } from "./system-card";

export function SystemGrid({ systems }: { systems: ComponentSystem[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const framework = searchParams.get("framework") ?? "";
  const styling = searchParams.get("styling") ?? "";
  const category = searchParams.get("category") ?? "";

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

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {filtered.length} component {filtered.length === 1 ? "system" : "systems"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
          <p className="text-gray-500">No component systems match your filters.</p>
          <p className="mt-1 text-sm text-gray-400">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((system) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>
      )}
    </div>
  );
}
