import { notFound } from "next/navigation";
import Link from "next/link";
import { systems } from "@componentsystem/data";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { CompareSelectionPanel } from "@/components/compare-builder";
import { SystemLogo } from "@/components/system-logo";
import { compareHref } from "@/lib/compare-url";

const stickyFeatureClass =
  "sticky left-0 z-10 border-r border-[color:var(--border)] bg-[color:var(--surface-strong)] shadow-[8px_0_18px_-18px_rgba(0,0,0,0.55)]";

const popularComparisons = [
  "shadcn-ui;mantine;mui;chakra-ui",
  "radix-ui;headless-ui;react-aria;ariakit",
  "ant-design;mui;primereact;fluent-ui",
  "shadcn-ui;daisy-ui;flowbite;preline",
  "vuetify;element-plus;quasar;vue-material",
  "shadcn-svelte;skeleton;bits-ui;melt-ui",
  "shadcn-ui-vs-mantine",
  "mui-vs-ant-design",
];

export function generateStaticParams() {
  return popularComparisons.map((comparison) => ({ comparison }));
}

function parseComparison(comparison: string) {
  const decoded = decodeURIComponent(comparison);
  const slugs = decoded.includes(";")
    ? decoded.split(";")
    : decoded.split("-vs-");

  return Array.from(new Set(slugs.map((slug) => slug.trim()).filter(Boolean)));
}

function findSystems(slugs: string[]) {
  return slugs
    .map((slug) => systems.find((system) => system.slug === slug))
    .filter((system): system is ComponentSystem => Boolean(system));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const compared = findSystems(parseComparison(comparison));

  if (compared.length < 2) return {};

  const names = compared.map((system) => system.name).join(" vs ");

  return {
    title: `${names} - Component Library Comparison`,
    description: `Compare ${names}: frameworks, styling approaches, components, maturity, links, and more.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const slugs = parseComparison(comparison);
  const compared = findSystems(slugs);

  if (compared.length < 2 || compared.length !== slugs.length) {
    notFound();
  }

  return (
    <div className="theme-page mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="theme-muted mb-6 text-sm">
        <Link href="/" className="hover:text-[color:var(--accent)]">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <Link href="/compare" className="hover:text-[color:var(--accent)]">
          Compare
        </Link>
        <span className="mx-2">/</span>
        <span className="theme-muted-strong">
          {compared.length} libraries
        </span>
      </nav>

      <section className="mb-8">
        <p className="theme-kicker">
          Component library comparison
        </p>
        <ComparisonHeading systems={compared} />
        <p className="theme-muted mt-3 max-w-3xl text-sm leading-6">
          Compare capabilities across selected UI systems. Add or remove
          libraries to narrow the decision without losing the current set.
        </p>
      </section>

      <CompareSelectionPanel
        systems={systems}
        initialSlugs={compared.map((system) => system.slug)}
      />

      <ComparisonMatrix systems={compared} />

      <ComponentMatrix systems={compared} />

      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </div>
  );
}

function ComparisonHeading({ systems }: { systems: ComponentSystem[] }) {
  return (
    <h1 className="mt-3 flex max-w-5xl flex-wrap items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
      {systems.map((system, index) => {
        const nextSlugs = systems
          .filter((item) => item.slug !== system.slug)
          .map((item) => item.slug);
        const href = nextSlugs.length >= 2 ? compareHref(nextSlugs) : "/compare";

        return (
          <span key={system.slug} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span className="theme-muted">vs</span>
            )}
            <span className="theme-chip inline-flex items-center gap-2 rounded-lg px-3 py-1.5">
              <span className="theme-logo-tile flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-sm font-bold">
                <SystemLogo name={system.name} logo={system.logo} />
              </span>
              <span>{system.name}</span>
              <Link
                href={href}
                aria-label={`Remove ${system.name} from comparison`}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full text-base leading-none text-[color:var(--muted)] transition-colors hover:text-[color:var(--danger)]"
              >
                x
              </Link>
            </span>
          </span>
        );
      })}
    </h1>
  );
}

function ComparisonMatrix({ systems }: { systems: ComponentSystem[] }) {
  const columns = {
    gridTemplateColumns: `minmax(180px, 0.75fr) repeat(${systems.length}, minmax(190px, 1fr))`,
  };

  return (
    <section className="theme-card-flat overflow-hidden rounded-lg">
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div
            className="grid border-b border-[color:var(--border)] bg-[color:var(--surface-strong)]"
            style={columns}
          >
            <div
              className={`${stickyFeatureClass} theme-muted px-4 py-4 text-sm font-semibold`}
            >
              Feature
            </div>
            {systems.map((system) => (
              <div key={system.slug} className="px-4 py-4">
                <Link
                  href={`/${system.slug}`}
                  className="flex items-center gap-3 hover:text-[color:var(--accent)]"
                >
                  <span className="theme-logo-tile flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-sm font-bold">
                    <SystemLogo name={system.name} logo={system.logo} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">
                      {system.name}
                    </span>
                    {system.company && (
                      <span className="theme-muted block text-xs">
                        {system.company}
                      </span>
                    )}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <CompareRow label="Website" systems={systems} columns={columns}>
            {(system) => <ExternalLink href={system.url}>{new URL(system.url).host}</ExternalLink>}
          </CompareRow>
          <CompareRow label="Frameworks" systems={systems} columns={columns}>
            {(system) => <Tags items={system.frameworks} />}
          </CompareRow>
          <CompareRow label="Styling" systems={systems} columns={columns}>
            {(system) => <Tags items={system.styling} empty="Not listed" />}
          </CompareRow>
          <CompareRow label="Category" systems={systems} columns={columns}>
            {(system) => <Tags items={system.category} />}
          </CompareRow>
          <CompareRow label="Maturity" systems={systems} columns={columns}>
            {(system) => <MaturityBadge maturity={system.maturity} />}
          </CompareRow>
          <CompareRow label="Components" systems={systems} columns={columns}>
            {(system) => (
              <span className="theme-muted-strong text-sm">
                {system.components.length > 0
                  ? `${system.components.length} listed`
                  : "Not listed"}
              </span>
            )}
          </CompareRow>
          <CompareRow label="Version" systems={systems} columns={columns}>
            {(system) => (
              <span className="theme-muted-strong text-sm">
                {system.latestVersion}
              </span>
            )}
          </CompareRow>
          <CompareRow label="License" systems={systems} columns={columns}>
            {(system) => (
              <span className="theme-muted-strong text-sm">
                {system.license ?? "Not listed"}
              </span>
            )}
          </CompareRow>
          <CompareRow label="GitHub" systems={systems} columns={columns}>
            {(system) =>
              system.github ? (
                <ExternalLink href={system.github}>Repository</ExternalLink>
              ) : (
                <span className="theme-muted text-sm">N/A</span>
              )
            }
          </CompareRow>
        </div>
      </div>
    </section>
  );
}

function CompareRow({
  label,
  systems,
  columns,
  children,
}: {
  label: string;
  systems: ComponentSystem[];
  columns: React.CSSProperties;
  children: (system: ComponentSystem) => React.ReactNode;
}) {
  return (
    <div
      className="grid border-b border-[color:var(--border)] last:border-b-0"
      style={columns}
    >
      <div
        className={`${stickyFeatureClass} theme-muted-strong px-4 py-4 text-sm font-semibold`}
      >
        {label}
      </div>
      {systems.map((system) => (
        <div key={system.slug} className="px-4 py-4">
          {children(system)}
        </div>
      ))}
    </div>
  );
}

function Tags({
  items,
  empty = "None",
}: {
  items: string[];
  empty?: string;
}) {
  if (items.length === 0) {
    return <span className="theme-muted text-sm">{empty}</span>;
  }

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span
          key={item}
          className="theme-chip rounded-full px-2 py-0.5 text-xs font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function MaturityBadge({ maturity }: { maturity: string }) {
  const colors: Record<string, string> = {
    experimental:
      "border border-yellow-400/30 bg-yellow-300/15 text-yellow-700 dark:text-yellow-200",
    active:
      "border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] text-[color:var(--muted-strong)]",
    stable: "border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] text-[color:var(--muted-strong)]",
    deprecated: "border border-red-400/30 bg-red-300/15 text-red-600 dark:text-red-200",
    unmaintained: "theme-chip",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
        colors[maturity] ?? colors.unmaintained
      }`}
    >
      {maturity}
    </span>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="theme-link text-sm font-medium hover:underline"
    >
      {children}
    </a>
  );
}

function ComponentMatrix({ systems }: { systems: ComponentSystem[] }) {
  const allComponents = Array.from(
    new Set(systems.flatMap((system) => system.components.map((component) => component.name)))
  ).sort((a, b) => a.localeCompare(b));

  if (allComponents.length === 0) return null;

  const columns = {
    gridTemplateColumns: `minmax(180px, 0.75fr) repeat(${systems.length}, minmax(120px, 1fr))`,
  };

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            Component Availability
          </h2>
          <p className="theme-muted mt-1 text-sm">
            Union of listed components across selected libraries.
          </p>
        </div>
        <span className="theme-muted text-sm">
          {allComponents.length} components
        </span>
      </div>

      <div className="theme-card-flat overflow-hidden rounded-lg">
        <div className="max-h-[620px] overflow-auto">
          <div className="min-w-max">
            <div
              className="sticky top-0 grid border-b border-[color:var(--border)] bg-[color:var(--surface-strong)] text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]"
              style={columns}
            >
              <span className={`${stickyFeatureClass} z-20 px-4 py-3`}>
                Component
              </span>
              {systems.map((system) => (
                <span key={system.slug} className="px-4 py-3 text-center">
                  {system.name}
                </span>
              ))}
            </div>
            {allComponents.map((component) => (
              <div
                key={component}
                className="grid border-b border-[color:var(--border)] text-sm last:border-b-0"
                style={columns}
              >
                <span
                  className={`${stickyFeatureClass} px-4 py-3 font-medium`}
                >
                  {component}
                </span>
                {systems.map((system) => {
                  const available = system.components.some(
                    (item) => item.name === component
                  );
                  return (
                    <span key={system.slug} className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-xs font-semibold ${
                          available
                            ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
                            : "theme-chip text-[color:var(--muted)]"
                        }`}
                      >
                        {available ? "Yes" : "-"}
                      </span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
