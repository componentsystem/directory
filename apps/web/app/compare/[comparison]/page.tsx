import { notFound } from "next/navigation";
import Link from "next/link";
import { systems } from "@componentsystem/data";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { CompareSelectionPanel } from "@/components/compare-builder";
import { SystemLogo } from "@/components/system-logo";
import { compareHref } from "@/lib/compare-url";

const stickyFeatureClass =
  "sticky left-0 z-10 border-r border-gray-200 bg-gray-50 shadow-[8px_0_18px_-18px_rgba(15,23,42,0.7)] dark:border-gray-800 dark:bg-gray-950";

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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-400">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <Link href="/compare" className="hover:text-brand-600 dark:hover:text-brand-400">
          Compare
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">
          {compared.length} libraries
        </span>
      </nav>

      <section className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          Component library comparison
        </p>
        <ComparisonHeading systems={compared} />
        <p className="mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
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
    <h1 className="mt-2 flex max-w-5xl flex-wrap items-center gap-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-100 sm:text-4xl">
      {systems.map((system, index) => {
        const nextSlugs = systems
          .filter((item) => item.slug !== system.slug)
          .map((item) => item.slug);
        const href = nextSlugs.length >= 2 ? compareHref(nextSlugs) : "/compare";

        return (
          <span key={system.slug} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-400 dark:text-gray-600">vs</span>
            )}
            <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <SystemLogo name={system.name} logo={system.logo} />
              </span>
              <span>{system.name}</span>
              <Link
                href={href}
                aria-label={`Remove ${system.name} from comparison`}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full text-base leading-none text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-300"
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
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div
            className="grid border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
            style={columns}
          >
            <div
              className={`${stickyFeatureClass} px-4 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400`}
            >
              Feature
            </div>
            {systems.map((system) => (
              <div key={system.slug} className="px-4 py-4">
                <Link
                  href={`/${system.slug}`}
                  className="flex items-center gap-3 hover:text-brand-600 dark:hover:text-brand-400"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    <SystemLogo name={system.name} logo={system.logo} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-gray-950 dark:text-gray-100">
                      {system.name}
                    </span>
                    {system.company && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
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
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {system.components.length > 0
                  ? `${system.components.length} listed`
                  : "Not listed"}
              </span>
            )}
          </CompareRow>
          <CompareRow label="Version" systems={systems} columns={columns}>
            {(system) => (
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {system.latestVersion}
              </span>
            )}
          </CompareRow>
          <CompareRow label="License" systems={systems} columns={columns}>
            {(system) => (
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {system.license ?? "Not listed"}
              </span>
            )}
          </CompareRow>
          <CompareRow label="GitHub" systems={systems} columns={columns}>
            {(system) =>
              system.github ? (
                <ExternalLink href={system.github}>Repository</ExternalLink>
              ) : (
                <span className="text-sm text-gray-400">N/A</span>
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
      className="grid border-b border-gray-100 last:border-b-0 dark:border-gray-800"
      style={columns}
    >
      <div
        className={`${stickyFeatureClass} px-4 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300`}
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
    return <span className="text-sm text-gray-400">{empty}</span>;
  }

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
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
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    active:
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    stable: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    deprecated: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    unmaintained: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
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
      className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300"
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
          <h2 className="text-2xl font-semibold text-gray-950 dark:text-gray-100">
            Component Availability
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Union of listed components across selected libraries.
          </p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {allComponents.length} components
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="max-h-[620px] overflow-auto">
          <div className="min-w-max">
            <div
              className="sticky top-0 grid border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400"
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
                className="grid border-b border-gray-100 text-sm last:border-b-0 dark:border-gray-800"
                style={columns}
              >
                <span
                  className={`${stickyFeatureClass} px-4 py-3 font-medium text-gray-800 dark:text-gray-200`}
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
                            ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                            : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
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
