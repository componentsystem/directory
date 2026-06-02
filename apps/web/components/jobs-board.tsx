"use client";

import type { ReactNode, TransitionEvent } from "react";
import { useMemo, useState } from "react";

type WorkMode = "Remote" | "Hybrid" | "On-site";
type JobLevel = "Senior" | "Staff" | "Lead" | "Principal";
type RoleType = "Frontend" | "Design Systems" | "Developer Experience" | "Product Engineering";

type Job = {
  id: string;
  company: string;
  title: string;
  summary: string;
  location: string;
  timezone?: string;
  mode: WorkMode;
  level: JobLevel;
  roleType: RoleType;
  salary: string;
  logo: string;
  accent: string;
  featured?: boolean;
};

const jobs: Job[] = [
  {
    id: "speakeasy-product-engineer",
    company: "Speakeasy",
    title: "Product Engineer",
    summary:
      "Build API infrastructure and polished developer surfaces for teams shipping SDKs, docs, and workflow tools.",
    location: "San Francisco, CA",
    mode: "Remote",
    level: "Senior",
    roleType: "Product Engineering",
    salary: "$160k - $220k",
    logo: "S",
    accent: "bg-lime-400 text-gray-950",
    featured: true,
  },
  {
    id: "trigger-platform-engineer",
    company: "Trigger.dev",
    title: "Senior Platform Engineer",
    summary:
      "Scale an open-source cloud product with deep TypeScript, infrastructure, and developer workflow ownership.",
    location: "United Kingdom",
    timezone: "GMT+1 to GMT-5",
    mode: "Hybrid",
    level: "Senior",
    roleType: "Developer Experience",
    salary: "GBP 95k - 130k",
    logo: "T",
    accent: "bg-emerald-400 text-gray-950",
    featured: true,
  },
  {
    id: "parkflow-visual-dev",
    company: "ParkFlow",
    title: "Visual Workflow Developer",
    summary:
      "Create visual workflow builders for parking automation, mapping complex operations into simple UI flows.",
    location: "Remote",
    mode: "Remote",
    level: "Senior",
    roleType: "Frontend",
    salary: "$140k - $190k",
    logo: "P",
    accent: "bg-gray-800 text-gray-100",
    featured: true,
  },
  {
    id: "cursor-community",
    company: "Cursor",
    title: "Community at Cursor",
    summary:
      "Support advanced users, write sharp product education, and improve the experience around AI-assisted coding.",
    location: "Global",
    mode: "Remote",
    level: "Lead",
    roleType: "Developer Experience",
    salary: "Competitive",
    logo: "C",
    accent: "bg-white text-gray-950",
    featured: true,
  },
  {
    id: "vend-typescript",
    company: "Vend Park",
    title: "Senior TypeScript Engineer",
    summary:
      "Own full-stack product systems for customer-facing workflows, internal tools, and operations dashboards.",
    location: "US East Coast",
    mode: "Hybrid",
    level: "Senior",
    roleType: "Product Engineering",
    salary: "$150k - $205k",
    logo: "V",
    accent: "bg-sky-400 text-gray-950",
  },
  {
    id: "infisical-solutions",
    company: "Infisical",
    title: "Solutions Engineer",
    summary:
      "Help engineering teams adopt secure developer infrastructure through onboarding, demos, and hands-on builds.",
    location: "San Francisco, CA",
    mode: "Remote",
    level: "Senior",
    roleType: "Developer Experience",
    salary: "$145k - $190k",
    logo: "I",
    accent: "bg-violet-400 text-gray-950",
  },
  {
    id: "novis-founder-engineer",
    company: "Novis",
    title: "Founding Engineer",
    summary:
      "Design and ship an AI product for knowledge workflows across drafting, transcription, and content systems.",
    location: "Worldwide",
    mode: "Remote",
    level: "Staff",
    roleType: "Product Engineering",
    salary: "Equity + salary",
    logo: "N",
    accent: "bg-cyan-300 text-gray-950",
  },
  {
    id: "mixedbread-ai",
    company: "Mixedbread",
    title: "AI Software Baker",
    summary:
      "Bake next-generation search interfaces and model-powered product surfaces for open-source AI teams.",
    location: "San Francisco, CA",
    mode: "Remote",
    level: "Senior",
    roleType: "Frontend",
    salary: "$150k - $210k",
    logo: "M",
    accent: "bg-amber-300 text-gray-950",
  },
  {
    id: "gordian-senior-software",
    company: "Gordian Software",
    title: "Senior Software Engineer",
    summary:
      "Remove friction from travel systems with product engineering across booking flows, APIs, and support tooling.",
    location: "Bellevue, WA",
    mode: "On-site",
    level: "Senior",
    roleType: "Product Engineering",
    salary: "$155k - $215k",
    logo: "G",
    accent: "bg-stone-200 text-gray-950",
  },
  {
    id: "shortwave-staff-ai",
    company: "Shortwave",
    title: "Staff AI Agent Engineer",
    summary:
      "Build advanced AI workflows inside email with product-grade interfaces, retrieval, and agentic systems.",
    location: "San Francisco, CA",
    mode: "On-site",
    level: "Staff",
    roleType: "Developer Experience",
    salary: "$190k - $260k",
    logo: "S",
    accent: "bg-blue-300 text-gray-950",
  },
  {
    id: "veed-ios",
    company: "VEED",
    title: "Senior iOS Engineer",
    summary:
      "Shape mobile creation tools with fast editing workflows, reusable UI primitives, and creator-focused polish.",
    location: "Amsterdam",
    mode: "Hybrid",
    level: "Senior",
    roleType: "Frontend",
    salary: "EUR 90k - 130k",
    logo: "V",
    accent: "bg-zinc-100 text-gray-950",
  },
  {
    id: "resend-full-stack",
    company: "Resend",
    title: "Software Engineer, Full-stack",
    summary:
      "Support millions of emails with clean product interfaces, internal tooling, and API-first developer workflows.",
    location: "Americas",
    mode: "Remote",
    level: "Senior",
    roleType: "Product Engineering",
    salary: "$150k - $230k",
    logo: "R",
    accent: "bg-gray-100 text-gray-950",
  },
  {
    id: "linear-design-systems",
    company: "Linear",
    title: "Design Systems Engineer",
    summary:
      "Evolve a precise product design system across interface primitives, interaction states, and implementation quality.",
    location: "North America",
    mode: "Remote",
    level: "Staff",
    roleType: "Design Systems",
    salary: "$180k - $250k",
    logo: "L",
    accent: "bg-indigo-300 text-gray-950",
  },
  {
    id: "figma-product-systems",
    company: "Figma",
    title: "Frontend Engineer, Product Systems",
    summary:
      "Build reusable product infrastructure for complex collaborative interfaces, editor surfaces, and shared UI systems.",
    location: "New York, NY",
    mode: "Hybrid",
    level: "Senior",
    roleType: "Design Systems",
    salary: "$170k - $240k",
    logo: "F",
    accent: "bg-pink-300 text-gray-950",
  },
];

const modeOptions: Array<WorkMode | "All"> = ["All", "Remote", "Hybrid", "On-site"];
const roleOptions: Array<RoleType | "All"> = [
  "All",
  "Frontend",
  "Design Systems",
  "Developer Experience",
  "Product Engineering",
];
const levelOptions: Array<JobLevel | "All"> = ["All", "Senior", "Staff", "Lead", "Principal"];

export function JobsBoard() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<WorkMode | "All">("All");
  const [roleType, setRoleType] = useState<RoleType | "All">("All");
  const [level, setLevel] = useState<JobLevel | "All">("All");
  const [location, setLocation] = useState("");
  const [featuredOffset, setFeaturedOffset] = useState(0);
  const [featuredDirection, setFeaturedDirection] = useState<"next" | "previous">("next");
  const [isFeaturedSliding, setIsFeaturedSliding] = useState(false);

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location))).sort(),
    []
  );
  const featuredJobs = jobs.filter((job) => job.featured);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const text = [
        job.title,
        job.company,
        job.summary,
        job.location,
        job.mode,
        job.level,
        job.roleType,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!normalizedQuery || text.includes(normalizedQuery)) &&
        (mode === "All" || job.mode === mode) &&
        (roleType === "All" || job.roleType === roleType) &&
        (level === "All" || job.level === level) &&
        (!location || job.location === location)
      );
    });
  }, [level, location, mode, query, roleType]);

  const orderedFeaturedJobs = featuredJobs
    .slice(featuredOffset)
    .concat(featuredJobs.slice(0, featuredOffset));
  const visibleFeaturedJobs = orderedFeaturedJobs.slice(0, 4);
  const previousFeaturedJob =
    featuredJobs[(featuredOffset - 1 + featuredJobs.length) % featuredJobs.length];
  const nextFeaturedJob = featuredJobs[(featuredOffset + 4) % featuredJobs.length];
  const featuredTrackJobs = [previousFeaturedJob, ...visibleFeaturedJobs, nextFeaturedJob];
  const featuredTrackTransform = isFeaturedSliding
    ? featuredDirection === "previous"
      ? "translateX(0)"
      : "translateX(calc(0px - var(--featured-card-width) - var(--featured-gap) - var(--featured-card-width) - var(--featured-gap)))"
    : "translateX(calc(0px - var(--featured-card-width) - var(--featured-gap)))";

  function clearFilters() {
    setQuery("");
    setMode("All");
    setRoleType("All");
    setLevel("All");
    setLocation("");
  }

  function rotateFeaturedJobs(direction: "next" | "previous") {
    if (isFeaturedSliding) return;

    setFeaturedDirection(direction);
    setIsFeaturedSliding(true);
  }

  function handleFeaturedTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || !isFeaturedSliding) return;

    setFeaturedOffset((current) => {
      if (featuredDirection === "previous") {
        return current === 0 ? featuredJobs.length - 1 : current - 1;
      }

      return (current + 1) % featuredJobs.length;
    });
    setIsFeaturedSliding(false);
  }

  const hasFilters = query || mode !== "All" || roleType !== "All" || level !== "All" || location;

  return (
    <div className="theme-page">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8 flex flex-col gap-5 border-b border-[color:var(--border)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="theme-kicker">
              Featured Jobs
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frontend and design system jobs
            </h1>
            <p className="theme-muted mt-3 max-w-2xl text-sm leading-6">
              Browse focused roles for component systems, UI engineering, design tooling, and
              developer experience teams.
            </p>
          </div>
          <a
            href="mailto:hello@componentsystem.directory?subject=Job%20listing"
            className="theme-button-secondary inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold"
          >
            Add job listing
            <span className="ml-2 text-lg leading-none">+</span>
          </a>
        </section>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="theme-kicker">
              Featured
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => rotateFeaturedJobs("previous")}
                disabled={isFeaturedSliding}
                className="theme-button-secondary flex h-9 w-9 items-center justify-center rounded-full active:scale-90"
                aria-label="Previous featured jobs"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => rotateFeaturedJobs("next")}
                disabled={isFeaturedSliding}
                className="theme-button-secondary flex h-9 w-9 items-center justify-center rounded-full active:scale-90"
                aria-label="Next featured jobs"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden [--featured-card-width:100%] [--featured-gap:1rem] md:[--featured-card-width:calc(50%_-_0.5rem)] xl:[--featured-card-width:calc(25%_-_0.75rem)]">
            <div
              onTransitionEnd={handleFeaturedTransitionEnd}
              className={`flex gap-4 ${
                isFeaturedSliding
                  ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
              }`}
              style={{ transform: featuredTrackTransform }}
            >
              {featuredTrackJobs.map((job, index) => (
                <FeaturedJobCard key={`${job.id}-${index}`} job={job} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="theme-card-flat mb-5 grid gap-3 rounded-lg p-4 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
              <label className="theme-kicker block">
                Search
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Company, title, skills..."
                  className="theme-input mt-2 h-10 w-full rounded-md px-3 text-sm normal-case tracking-normal"
                />
              </label>
              <FilterSelect label="Location" value={location} onChange={setLocation}>
                <option value="">All locations</option>
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FilterSelect>
              <FilterSelect
                label="Remote"
                value={mode}
                onChange={(value) => setMode(value as WorkMode | "All")}
              >
                {modeOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FilterSelect>
              <FilterSelect
                label="Role"
                value={roleType}
                onChange={(value) => setRoleType(value as RoleType | "All")}
              >
                {roleOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </FilterSelect>
            </div>

            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--border)] pb-4">
              <p className="theme-muted text-sm">
                <span className="font-semibold text-[color:var(--foreground)]">{filteredJobs.length}</span>{" "}
                {filteredJobs.length === 1 ? "role" : "roles"} available
              </p>
              <div className="flex items-center gap-3">
                <select
                  value={level}
                  onChange={(event) => setLevel(event.target.value as JobLevel | "All")}
                  className="theme-input h-9 rounded-full px-3 text-sm"
                  aria-label="Filter by seniority"
                >
                  {levelOptions.map((item) => (
                    <option key={item} value={item}>
                      {item === "All" ? "All levels" : item}
                    </option>
                  ))}
                </select>
                {hasFilters ? (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="theme-link text-sm font-semibold"
                  >
                    Clear filters
                  </button>
                ) : null}
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="divide-y divide-white/10">
                {filteredJobs.map((job) => (
                  <JobRow key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="theme-card-flat rounded-lg border-dashed px-6 py-14 text-center">
                <p className="text-sm font-semibold">No jobs match these filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="theme-button-secondary mt-3 rounded-full px-4 py-2 text-sm"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="theme-card-flat theme-stripes overflow-hidden rounded-lg p-7">
              <h2 className="max-w-xs text-3xl font-semibold tracking-tight">
                Reach component-minded developers.
              </h2>
              <p className="theme-muted mt-4 text-sm leading-6">
                Post roles for frontend engineers, design system teams, and developer tooling
                specialists.
              </p>
              <a
                href="mailto:hello@componentsystem.directory?subject=Job%20listing"
                className="theme-button-secondary mt-7 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              >
                Add job listing
              </a>
            </div>

            <div className="theme-card-flat rounded-lg p-5">
              <p className="theme-kicker">
                Focus
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Stat label="Remote roles" value={jobs.filter((job) => job.mode === "Remote").length} />
                <Stat label="Design systems" value={jobs.filter((job) => job.roleType === "Design Systems").length} />
                <Stat label="Featured" value={featuredJobs.length} />
                <Stat label="Locations" value={locations.length} />
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

function FeaturedJobCard({ job }: { job: Job }) {
  return (
    <article className="theme-card-flat theme-card-hover group flex min-h-40 shrink-0 basis-[var(--featured-card-width)] flex-col rounded-lg p-4">
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-sm font-black ${job.accent}`}
        >
          {job.logo}
        </span>
        <div className="min-w-0">
          <p className="theme-muted truncate text-xs font-semibold">
            {job.company} · {job.mode}
          </p>
          <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-5">
            {job.title}
          </h3>
        </div>
      </div>
      <p className="theme-muted mt-4 line-clamp-2 text-sm leading-6">{job.summary}</p>
      <div className="mt-auto pt-4">
        <span className="theme-chip inline-flex rounded-full px-3 py-1 text-xs font-semibold group-hover:text-[color:var(--accent)]">
          View
        </span>
      </div>
    </article>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <article className="group grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div className="min-w-0">
        <div className="theme-muted flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-black ${job.accent}`}
          >
            {job.logo}
          </span>
          <span>{job.company}</span>
          <span>·</span>
          <span>{job.location}</span>
          <span>·</span>
          <span>{job.mode}</span>
          {job.timezone ? (
            <>
              <span>·</span>
              <span>{job.timezone}</span>
            </>
          ) : null}
        </div>
        <h3 className="mt-2 text-base font-semibold group-hover:text-[color:var(--accent)]">
          {job.title}
        </h3>
        <p className="theme-muted mt-2 line-clamp-2 max-w-3xl text-sm leading-6">
          {job.summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[job.roleType, job.level, job.salary].map((tag) => (
            <span
              key={tag}
              className="theme-chip rounded-full px-2.5 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href="mailto:hello@componentsystem.directory?subject=Job%20application"
        className="theme-button-secondary inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-semibold hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-foreground)]"
      >
        View
      </a>
    </article>
  );
}

function FilterSelect({
  children,
  label,
  onChange,
  value,
}: {
  children: ReactNode;
  label: string;
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <label className="theme-kicker block">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="theme-input mt-2 h-10 w-full rounded-md px-3 text-sm normal-case tracking-normal"
      >
        {children}
      </select>
    </label>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="theme-card-flat rounded-md p-3">
      <div className="text-xl font-semibold">{value}</div>
      <div className="theme-muted mt-1 text-xs">{label}</div>
    </div>
  );
}
