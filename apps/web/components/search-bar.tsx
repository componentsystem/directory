"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "solid", label: "Solid" },
  { value: "web-components", label: "Web Components" },
  { value: "native", label: "React Native" },
  { value: "html", label: "HTML/CSS" },
];

const stylings = [
  { value: "tailwind", label: "Tailwind" },
  { value: "css-in-js", label: "CSS-in-JS" },
  { value: "headless", label: "Headless" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "material", label: "Material" },
];

const categories = [
  { value: "general", label: "General" },
  { value: "enterprise", label: "Enterprise" },
  { value: "data-viz", label: "Data Viz" },
  { value: "native", label: "Mobile" },
  { value: "primitives", label: "Primitives" },
  { value: "design-system", label: "Design System" },
  { value: "dashboard", label: "Dashboard" },
  { value: "animation", label: "Animation" },
];

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const activeFramework = searchParams.get("framework") ?? "";
  const activeStyling = searchParams.get("styling") ?? "";
  const activeCategory = searchParams.get("category") ?? "";

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      startTransition(() => {
        router.push(`/?${params.toString()}`);
      });
    },
    [router, searchParams, startTransition]
  );

  return (
    <div className="theme-card-flat rounded-lg p-4">
      <div className="relative">
        <svg
          className="theme-muted absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
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
          placeholder="Search component systems..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            updateParams("q", e.target.value);
          }}
          className="theme-input w-full rounded-md py-3 pl-12 pr-4 text-base"
        />
        {isPending && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-[color:var(--accent)] border-t-transparent" />
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <FilterGroup
          label="Framework"
          options={frameworks}
          value={activeFramework}
          onChange={(v) => updateParams("framework", v)}
        />
        <FilterGroup
          label="Styling"
          options={stylings}
          value={activeStyling}
          onChange={(v) => updateParams("styling", v)}
        />
        <FilterGroup
          label="Category"
          options={categories}
          value={activeCategory}
          onChange={(v) => updateParams("category", v)}
        />
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="theme-muted text-sm font-medium">{label}:</span>
      <div className="flex flex-wrap gap-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() =>
              onChange(value === option.value ? "" : option.value)
            }
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              value === option.value
                ? "theme-chip-active"
                : "theme-chip hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent)]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
