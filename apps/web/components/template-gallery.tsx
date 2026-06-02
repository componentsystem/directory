"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { Template, TemplateCategory, TemplatePriceType } from "@componentsystem/data/schema";

const PAGE_SIZE = 24;

const categoryLabels: Record<TemplateCategory, string> = {
  agency: "Agency",
  blog: "Blog",
  dashboard: "Dashboard",
  documentation: "Documentation",
  ecommerce: "Ecommerce",
  education: "Education",
  events: "Events",
  finance: "Finance",
  marketplace: "Marketplace",
  marketing: "Marketing",
  nonprofit: "Nonprofit",
  personal: "Personal",
  portfolio: "Portfolio",
  "real-estate": "Real estate",
  restaurant: "Restaurant",
  "saas-landing": "SaaS landing",
  startup: "Startup",
};

const categoryOrder: TemplateCategory[] = [
  "portfolio",
  "real-estate",
  "saas-landing",
  "blog",
  "ecommerce",
  "agency",
  "dashboard",
  "startup",
  "personal",
  "documentation",
  "restaurant",
  "education",
  "finance",
  "nonprofit",
  "marketplace",
  "marketing",
  "events",
];

const priceLabels: Record<TemplatePriceType, string> = {
  free: "Free",
  paid: "Paid",
  freemium: "Free and paid",
  unknown: "Unknown",
};

type TemplateGalleryProps = {
  templates: Template[];
};

export function TemplateGallery({ templates }: TemplateGalleryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TemplateCategory | "">("");
  const [priceType, setPriceType] = useState<TemplatePriceType | "">("");
  const [sourceName, setSourceName] = useState("");
  const [tool, setTool] = useState("");
  const [page, setPage] = useState(1);

  const sources = useMemo(
    () => Array.from(new Set(templates.map((template) => template.sourceName))).sort(),
    [templates]
  );
  const tools = useMemo(
    () =>
      Array.from(new Set(templates.flatMap((template) => template.tools))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [templates]
  );

  const fuse = useMemo(
    () =>
      new Fuse(templates, {
        keys: ["name", "description", "sourceName", "categories", "tools"],
        threshold: 0.32,
      }),
    [templates]
  );

  const filtered = useMemo(() => {
    let results = query.trim() ? fuse.search(query).map((result) => result.item) : [...templates];

    if (category) {
      results = results.filter((template) => template.categories.includes(category));
    }
    if (priceType) {
      results = results.filter((template) => template.priceType === priceType);
    }
    if (sourceName) {
      results = results.filter((template) => template.sourceName === sourceName);
    }
    if (tool) {
      results = results.filter((template) => template.tools.includes(tool));
    }

    return results.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.sponsored && !b.sponsored) return -1;
      if (!a.sponsored && b.sponsored) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [category, fuse, priceType, query, sourceName, templates, tool]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const firstResult = filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const lastResult = Math.min(page * PAGE_SIZE, filtered.length);

  useEffect(() => {
    setPage(1);
  }, [category, priceType, query, sourceName, tool]);

  useEffect(() => {
    if (page > pageCount) {
      setPage(pageCount);
    }
  }, [page, pageCount]);

  function clearFilters() {
    setQuery("");
    setCategory("");
    setPriceType("");
    setSourceName("");
    setTool("");
    setPage(1);
  }

  const hasFilters = query || category || priceType || sourceName || tool;

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="theme-card-flat rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h2 className="theme-kicker">
              Filters
            </h2>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="theme-link text-sm font-medium"
              >
                Clear
              </button>
            ) : null}
          </div>

          <label className="theme-muted-strong mt-4 block text-sm font-medium">
            Search templates
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="SaaS, portfolio, real estate..."
              className="theme-input mt-2 w-full rounded-md px-3 py-2 text-sm"
            />
          </label>

          <div className="mt-5">
            <p className="theme-muted-strong text-sm font-medium">Category</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {categoryOrder.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(category === item ? "" : item)}
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    category === item
                      ? "theme-chip-active"
                      : "theme-chip hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent)]"
                  }`}
                >
                  {categoryLabels[item]}
                </button>
              ))}
            </div>
          </div>

          <label className="theme-muted-strong mt-5 block text-sm font-medium">
            Pricing
            <select
              value={priceType}
              onChange={(event) => setPriceType(event.target.value as TemplatePriceType | "")}
              className="theme-input mt-2 w-full rounded-md px-3 py-2 text-sm"
            >
              <option value="">Any price</option>
              {Object.entries(priceLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="theme-muted-strong mt-5 block text-sm font-medium">
            Source
            <select
              value={sourceName}
              onChange={(event) => setSourceName(event.target.value)}
              className="theme-input mt-2 w-full rounded-md px-3 py-2 text-sm"
            >
              <option value="">Any source</option>
              {sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </label>

          <label className="theme-muted-strong mt-5 block text-sm font-medium">
            Tool
            <select
              value={tool}
              onChange={(event) => setTool(event.target.value)}
              className="theme-input mt-2 w-full rounded-md px-3 py-2 text-sm"
            >
              <option value="">Any tool</option>
              {tools.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </aside>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">
              Template Library
            </h2>
            <p className="theme-muted mt-1 text-sm">
              {filtered.length === 0
                ? `0 of ${templates.length} templates`
                : `${firstResult}-${lastResult} of ${filtered.length} templates`}
            </p>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="theme-card-flat rounded-lg border-dashed py-16 text-center">
            <p className="theme-muted">No templates match these filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="theme-button-primary mt-3 rounded-md px-4 py-2 text-sm font-semibold"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {paginated.map((template) => (
                <a
                  key={template.slug}
                  href={template.referralUrl || template.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="theme-card-flat theme-card-hover group overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--surface-muted)]">
                    <Image
                      src={template.previewImage}
                      alt={`${template.name} template preview`}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold group-hover:text-[color:var(--accent)]">
                          {template.name}
                        </h3>
                        <p className="theme-muted mt-1 text-sm">
                          {template.sourceName}
                        </p>
                      </div>
                      <span className="theme-chip shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold">
                        {template.priceText ?? priceLabels[template.priceType]}
                      </span>
                    </div>
                    <p className="theme-muted mt-3 line-clamp-2 text-sm">
                      {template.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {template.categories.slice(0, 2).map((item) => (
                        <span
                          key={item}
                          className="theme-chip rounded-full px-2.5 py-1 text-xs font-semibold"
                        >
                          {categoryLabels[item]}
                        </span>
                      ))}
                      {template.tools.slice(0, 2).map((item) => (
                        <span
                          key={item}
                          className="theme-chip rounded-full px-2.5 py-1 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {pageCount > 1 ? (
              <div className="theme-card-flat mt-8 flex flex-col items-center justify-between gap-4 rounded-lg px-4 py-3 sm:flex-row">
                <p className="theme-muted text-sm">
                  Page {page} of {pageCount}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                    disabled={page === 1}
                    className="theme-button-secondary rounded-md px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: pageCount }).map((_, index) => {
                    const pageNumber = index + 1;
                    if (
                      pageCount > 7 &&
                      pageNumber !== 1 &&
                      pageNumber !== pageCount &&
                      Math.abs(pageNumber - page) > 1
                    ) {
                      if (pageNumber === 2 || pageNumber === pageCount - 1) {
                        return (
                          <span
                            key={pageNumber}
                            className="theme-muted px-1 text-sm"
                          >
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={pageNumber}
                        type="button"
                        onClick={() => setPage(pageNumber)}
                        aria-current={page === pageNumber ? "page" : undefined}
                        className={`h-10 min-w-10 rounded-md px-3 text-sm font-semibold transition ${
                            page === pageNumber
                            ? "theme-chip-active"
                            : "theme-button-secondary"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
                    disabled={page === pageCount}
                    className="theme-button-secondary rounded-md px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}
