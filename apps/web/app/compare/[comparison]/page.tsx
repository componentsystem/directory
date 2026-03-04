import { notFound } from "next/navigation";
import Link from "next/link";
import { systems } from "@componentsystem/data";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { NewsletterSignup } from "@/components/newsletter-signup";

const popularComparisons = [
  "shadcn-ui-vs-mantine",
  "shadcn-ui-vs-radix-ui",
  "mui-vs-ant-design",
  "radix-ui-vs-headless-ui",
  "chakra-ui-vs-mantine",
  "mui-vs-chakra-ui",
  "nextui-vs-shadcn-ui",
  "daisy-ui-vs-flowbite",
  "vuetify-vs-element-plus",
  "primereact-vs-ant-design",
  "skeleton-vs-shadcn-svelte",
  "bits-ui-vs-melt-ui",
];

export function generateStaticParams() {
  return popularComparisons.map((comparison) => ({ comparison }));
}

function parseComparison(comparison: string): [string, string] | null {
  const match = comparison.match(/^(.+)-vs-(.+)$/);
  if (!match) return null;
  return [match[1], match[2]];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const parsed = parseComparison(comparison);
  if (!parsed) return {};

  const [slugA, slugB] = parsed;
  const a = systems.find((s) => s.slug === slugA);
  const b = systems.find((s) => s.slug === slugB);
  if (!a || !b) return {};

  return {
    title: `${a.name} vs ${b.name} — Component Library Comparison`,
    description: `Compare ${a.name} and ${b.name}: frameworks, styling approaches, components, maturity, and more. Find the best component library for your project.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const parsed = parseComparison(comparison);
  if (!parsed) notFound();

  const [slugA, slugB] = parsed;
  const a = systems.find((s) => s.slug === slugA);
  const b = systems.find((s) => s.slug === slugB);

  if (!a || !b) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-600">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <Link href="/compare" className="hover:text-brand-600">
          Compare
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">
          {a.name} vs {b.name}
        </span>
      </nav>

      <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
        {a.name} vs {b.name}
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        A detailed comparison of two popular component libraries to help you
        choose the right one for your project.
      </p>

      {/* Comparison Table */}
      <div className="mb-12 overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                Feature
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                <Link href={`/${a.slug}`} className="hover:text-brand-600">
                  {a.name}
                </Link>
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                <Link href={`/${b.slug}`} className="hover:text-brand-600">
                  {b.name}
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <CompareRow
              label="Website"
              a={<ExternalLink href={a.url}>{a.url}</ExternalLink>}
              b={<ExternalLink href={b.url}>{b.url}</ExternalLink>}
            />
            <CompareRow
              label="Frameworks"
              a={<Tags items={a.frameworks} />}
              b={<Tags items={b.frameworks} />}
            />
            <CompareRow
              label="Styling"
              a={<Tags items={a.styling} />}
              b={<Tags items={b.styling} />}
            />
            <CompareRow
              label="Category"
              a={<Tags items={a.category} />}
              b={<Tags items={b.category} />}
            />
            <CompareRow
              label="Maturity"
              a={<MaturityBadge maturity={a.maturity} />}
              b={<MaturityBadge maturity={b.maturity} />}
            />
            <CompareRow
              label="Components"
              a={
                <span className="text-sm text-gray-700">
                  {a.components.length > 0
                    ? `${a.components.length} components`
                    : "Not listed"}
                </span>
              }
              b={
                <span className="text-sm text-gray-700">
                  {b.components.length > 0
                    ? `${b.components.length} components`
                    : "Not listed"}
                </span>
              }
            />
            <CompareRow
              label="License"
              a={
                <span className="text-sm text-gray-700">
                  {a.license ?? "Open Source"}
                </span>
              }
              b={
                <span className="text-sm text-gray-700">
                  {b.license ?? "Open Source"}
                </span>
              }
            />
            {(a.github || b.github) && (
              <CompareRow
                label="GitHub"
                a={
                  a.github ? (
                    <ExternalLink href={a.github}>Repository</ExternalLink>
                  ) : (
                    <span className="text-sm text-gray-400">N/A</span>
                  )
                }
                b={
                  b.github ? (
                    <ExternalLink href={b.github}>Repository</ExternalLink>
                  ) : (
                    <span className="text-sm text-gray-400">N/A</span>
                  )
                }
              />
            )}
          </tbody>
        </table>
      </div>

      {/* Component comparison */}
      {(a.components.length > 0 || b.components.length > 0) && (
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Component Availability
          </h2>
          <ComponentComparison a={a} b={b} />
        </div>
      )}

      {/* Links */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        <Link
          href={`/${a.slug}`}
          className="rounded-xl border border-gray-200 p-6 text-center transition-all hover:border-brand-300 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Learn more about {a.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{a.description}</p>
        </Link>
        <Link
          href={`/${b.slug}`}
          className="rounded-xl border border-gray-200 p-6 text-center transition-all hover:border-brand-300 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Learn more about {b.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{b.description}</p>
        </Link>
      </div>

      <NewsletterSignup />
    </div>
  );
}

function CompareRow({
  label,
  a,
  b,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  return (
    <tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-500">{label}</td>
      <td className="px-6 py-4">{a}</td>
      <td className="px-6 py-4">{b}</td>
    </tr>
  );
}

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return <span className="text-sm text-gray-400">None</span>;
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function MaturityBadge({ maturity }: { maturity: string }) {
  const colors: Record<string, string> = {
    experimental: "bg-yellow-100 text-yellow-800",
    active: "bg-green-100 text-green-800",
    stable: "bg-blue-100 text-blue-800",
    deprecated: "bg-red-100 text-red-800",
    unmaintained: "bg-gray-100 text-gray-800",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
        colors[maturity] ?? "bg-gray-100 text-gray-800"
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
      className="text-sm text-brand-600 hover:text-brand-700 hover:underline"
    >
      {children}
    </a>
  );
}

function ComponentComparison({
  a,
  b,
}: {
  a: ComponentSystem;
  b: ComponentSystem;
}) {
  const allComponents = [
    ...new Set([...a.components, ...b.components]),
  ].sort();

  if (allComponents.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="grid grid-cols-3 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-500">
        <span>Component</span>
        <span className="text-center">{a.name}</span>
        <span className="text-center">{b.name}</span>
      </div>
      <div className="divide-y divide-gray-100">
        {allComponents.slice(0, 30).map((comp) => (
          <div key={comp} className="grid grid-cols-3 px-4 py-2 text-sm">
            <span className="text-gray-700">{comp}</span>
            <span className="text-center">
              {a.components.includes(comp) ? (
                <span className="text-green-600">Yes</span>
              ) : (
                <span className="text-gray-300">-</span>
              )}
            </span>
            <span className="text-center">
              {b.components.includes(comp) ? (
                <span className="text-green-600">Yes</span>
              ) : (
                <span className="text-gray-300">-</span>
              )}
            </span>
          </div>
        ))}
      </div>
      {allComponents.length > 30 && (
        <div className="bg-gray-50 px-4 py-2 text-center text-xs text-gray-500">
          + {allComponents.length - 30} more components
        </div>
      )}
    </div>
  );
}
