"use client";

import { useRouter } from "next/navigation";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { CompareButton } from "./compare-basket";
import { SystemLogo } from "./system-logo";

const frameworkColors: Record<string, string> = {
  react: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  vue: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  svelte: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  angular: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  solid: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  native: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  "web-components": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  html: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  astro: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  qwik: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
};

const stylingColors: Record<string, string> = {
  tailwind: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800",
  "css-in-js": "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
  headless: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
  bootstrap: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
  material: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
};

export type SystemCardView = "card" | "list" | "mini";

export function SystemCard({
  system,
  systems,
  view = "card",
}: {
  system: ComponentSystem;
  systems: ComponentSystem[];
  view?: SystemCardView;
}) {
  const router = useRouter();
  const detailsHref = `/${system.slug}`;
  const isList = view === "list";
  const isMini = view === "mini";
  const statusLabel = system.sponsored ? "Sponsored" : system.featured ? "Featured" : "";
  const description = system.description.length > 150
    ? `${system.description.slice(0, 147).trim()}...`
    : system.description;

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`View details for ${system.name}`}
      onClick={() => router.push(detailsHref)}
      onKeyDown={(event) => {
        if (event.currentTarget !== event.target) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          router.push(detailsHref);
        }
      }}
      className={`group relative flex cursor-pointer rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-brand-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700 ${
        isList
          ? "items-start gap-4 p-4"
          : isMini
            ? "min-h-[118px] items-start gap-3 p-4 sm:flex-row sm:items-center"
            : "flex-col p-5"
      }`}
    >
      {system.sponsored && !isList && !isMini && (
        <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          Sponsored
        </span>
      )}
      {system.featured && !system.sponsored && !isList && !isMini && (
        <span className="absolute right-3 top-3 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          Featured
        </span>
      )}

      <div
        className={`flex items-center gap-3 ${
          isList ? "min-w-0 flex-1" : isMini ? "min-w-0 flex-1" : "mb-3"
        }`}
      >
        <div
          className={`flex shrink-0 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-brand-900/40 dark:group-hover:text-brand-400 ${
            isMini ? "h-9 w-9" : "h-10 w-10"
          }`}
        >
          <SystemLogo name={system.name} logo={system.logo} />
        </div>
        <div className="min-w-0">
          <span
          className={`block truncate font-semibold text-gray-900 transition-colors group-hover:text-brand-600 dark:text-gray-100 dark:group-hover:text-brand-400 ${
            isMini ? "text-sm" : ""
          }`}
        >
            <span>{system.name}</span>
            {statusLabel && (isList || isMini) && (
              <span
                className={`ml-2 inline-flex translate-y-[-1px] rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  system.sponsored
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                    : "bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
                }`}
              >
                {statusLabel}
              </span>
            )}
          </span>
          {system.company && !isMini && (
            <p className="text-xs text-gray-500 dark:text-gray-400">by {system.company}</p>
          )}
          {(isList || isMini) && (
            <p
              className={`mt-1 text-sm leading-5 text-gray-600 dark:text-gray-400 ${
                isMini ? "line-clamp-2" : "line-clamp-2 max-w-3xl"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {!isMini && !isList && (
        <p
          className="mb-4 min-w-0 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
        >
          {description}
        </p>
      )}

      <div
        className={`${
          isList
            ? "flex w-full shrink-0 flex-col gap-3 sm:w-[360px]"
            : isMini
              ? "flex w-full shrink-0 flex-col gap-3 sm:w-[320px]"
              : "space-y-2"
        }`}
      >
        <div
          className={`flex flex-wrap gap-1 ${
            isList || isMini ? "justify-start sm:justify-end" : ""
          }`}
        >
          {system.frameworks.map((fw) => (
            <span
              key={fw}
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                frameworkColors[fw] ?? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {fw}
            </span>
          ))}
          {system.styling.map((s) => (
            <span
              key={s}
              className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${
                stylingColors[s] ?? "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <div
          className={`flex items-center gap-3 ${
            isList || isMini ? "justify-between sm:justify-end" : "justify-between pt-2"
          }`}
        >
          <span className="text-xs font-semibold text-brand-600 transition-colors group-hover:text-brand-700 dark:text-brand-400 dark:group-hover:text-brand-300">
            View details
          </span>
          <CompareButton system={system} systems={systems} />
        </div>
      </div>
    </article>
  );
}
