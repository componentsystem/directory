"use client";

import { useState } from "react";
import type { ComponentDefinition } from "@componentsystem/data";
import { getComponentIcon } from "./component-icons";
import { getComponentUrl } from "@/lib/component-url";

export function ComponentGrid({
  components,
  systemSlug,
  systemUrl,
}: {
  components: ComponentDefinition[];
  systemSlug: string;
  systemUrl: string;
}) {
  const [search, setSearch] = useState("");

  const filtered = components.filter((c) =>
    `${c.name} ${c.description}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Components ({components.length})
        </h2>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-48 rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 sm:w-64"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
          No components match &ldquo;{search}&rdquo;
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((component) => (
            <a
              key={component.name}
              href={
                component.link ??
                getComponentUrl(systemSlug, systemUrl, component.name)
              }
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-brand-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700"
            >
              <div className="mb-3 flex justify-center text-gray-600 dark:text-gray-400 [&_svg]:dark:opacity-80 [&_svg_rect[fill='white']]:dark:fill-gray-800 [&_svg_text[fill='#374151']]:dark:fill-gray-300 [&_svg_text[fill='#6b7280']]:dark:fill-gray-400">
                {getComponentIcon(component.name)}
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {component.name}
              </span>
              {component.description && (
                <span className="mt-1 line-clamp-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {component.description}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
