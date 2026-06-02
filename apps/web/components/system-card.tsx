"use client";

import { useRouter } from "next/navigation";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { CompareButton } from "./compare-basket";
import { SystemLogo } from "./system-logo";

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
      className={`theme-card theme-card-hover group relative flex cursor-pointer rounded-lg ${
        isList
          ? "items-start gap-4 p-4"
          : isMini
            ? "min-h-[118px] items-start gap-3 p-4 sm:flex-row sm:items-center"
            : "flex-col p-5"
      }`}
    >
      {system.sponsored && !isList && !isMini && (
        <span className="absolute right-3 top-3 rounded-full border border-amber-400/40 bg-amber-300/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-500 dark:text-amber-200">
          Sponsored
        </span>
      )}
      {system.featured && !system.sponsored && !isList && !isMini && (
        <span className="absolute right-3 top-3 rounded-full bg-[color:var(--accent)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--accent-foreground)]">
          Featured
        </span>
      )}

      <div
        className={`flex items-center gap-3 ${
          isList ? "min-w-0 flex-1" : isMini ? "min-w-0 flex-1" : "mb-3"
        }`}
      >
        <div
          className={`theme-logo-tile flex shrink-0 items-center justify-center rounded-md text-lg font-bold group-hover:text-[color:var(--accent)] ${
            isMini ? "h-9 w-9" : "h-10 w-10"
          }`}
        >
          <SystemLogo name={system.name} logo={system.logo} />
        </div>
        <div className="min-w-0">
          <span
          className={`block truncate font-semibold transition-colors group-hover:text-[color:var(--accent)] ${
            isMini ? "text-sm" : ""
          }`}
        >
            <span>{system.name}</span>
            {statusLabel && (isList || isMini) && (
              <span
                className={`ml-2 inline-flex translate-y-[-1px] rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  system.sponsored
                    ? "border border-amber-400/40 bg-amber-300/15 text-amber-600 dark:text-amber-200"
                    : "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
                }`}
              >
                {statusLabel}
              </span>
            )}
          </span>
          {system.company && !isMini && (
            <p className="theme-muted text-xs">by {system.company}</p>
          )}
          {(isList || isMini) && (
            <p
              className={`theme-muted mt-1 text-sm leading-5 ${
                isMini ? "theme-muted line-clamp-2" : "theme-muted line-clamp-2 max-w-3xl"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {!isMini && !isList && (
        <p
          className="theme-muted mb-4 min-w-0 flex-1 text-sm leading-relaxed"
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
              className="theme-chip rounded-full px-2 py-0.5 text-[11px] font-medium"
            >
              {fw}
            </span>
          ))}
          {system.styling.map((s) => (
            <span
              key={s}
              className="theme-chip rounded-full px-2 py-0.5 text-[11px] font-medium"
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
          <span className="theme-link text-xs font-semibold">
            View details
          </span>
          <CompareButton system={system} systems={systems} />
        </div>
      </div>
    </article>
  );
}
