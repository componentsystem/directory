import Link from "next/link";
import type { ComponentSystem } from "@componentsystem/data/schema";

const frameworkColors: Record<string, string> = {
  react: "bg-sky-100 text-sky-700",
  vue: "bg-emerald-100 text-emerald-700",
  svelte: "bg-orange-100 text-orange-700",
  angular: "bg-red-100 text-red-700",
  solid: "bg-blue-100 text-blue-700",
  native: "bg-purple-100 text-purple-700",
  "web-components": "bg-yellow-100 text-yellow-700",
  html: "bg-gray-100 text-gray-700",
  astro: "bg-indigo-100 text-indigo-700",
  qwik: "bg-violet-100 text-violet-700",
};

const stylingColors: Record<string, string> = {
  tailwind: "bg-cyan-50 text-cyan-700 border-cyan-200",
  "css-in-js": "bg-pink-50 text-pink-700 border-pink-200",
  headless: "bg-gray-50 text-gray-700 border-gray-200",
  bootstrap: "bg-purple-50 text-purple-700 border-purple-200",
  material: "bg-blue-50 text-blue-700 border-blue-200",
};

export function SystemCard({ system }: { system: ComponentSystem }) {
  return (
    <Link
      href={`/${system.slug}`}
      className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
    >
      {system.sponsored && (
        <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
          Sponsored
        </span>
      )}
      {system.featured && !system.sponsored && (
        <span className="absolute right-3 top-3 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
          Featured
        </span>
      )}

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-600 group-hover:bg-brand-50 group-hover:text-brand-600">
          {system.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-brand-600">
            {system.name}
          </h3>
          {system.company && (
            <p className="text-xs text-gray-500">by {system.company}</p>
          )}
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {system.description}
      </p>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {system.frameworks.map((fw) => (
            <span
              key={fw}
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                frameworkColors[fw] ?? "bg-gray-100 text-gray-600"
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
                  stylingColors[s] ?? "bg-gray-50 text-gray-600 border-gray-200"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {system.components.length > 0 && (
          <p className="text-xs text-gray-400">
            {system.components.length} components
          </p>
        )}
      </div>
    </Link>
  );
}
