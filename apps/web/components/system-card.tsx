import Link from "next/link";
import type { ComponentSystem } from "@componentsystem/data/schema";

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

export function SystemCard({ system }: { system: ComponentSystem }) {
  return (
    <Link
      href={`/${system.slug}`}
      className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-brand-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700"
    >
      {system.sponsored && (
        <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          Sponsored
        </span>
      )}
      {system.featured && !system.sponsored && (
        <span className="absolute right-3 top-3 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          Featured
        </span>
      )}

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-brand-900/40 dark:group-hover:text-brand-400">
          {system.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 dark:text-gray-100 dark:group-hover:text-brand-400">
            {system.name}
          </h3>
          {system.company && (
            <p className="text-xs text-gray-500 dark:text-gray-400">by {system.company}</p>
          )}
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {system.description}
      </p>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
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
        </div>

        {system.styling.length > 0 && (
          <div className="flex flex-wrap gap-1">
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
        )}

        {system.components.length > 0 && (
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {system.components.length} components
          </p>
        )}
      </div>
    </Link>
  );
}
