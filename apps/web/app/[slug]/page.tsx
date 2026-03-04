import { notFound } from "next/navigation";
import Link from "next/link";
import { systems } from "@componentsystem/data";
import type { ComponentSystem } from "@componentsystem/data/schema";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const system = systems.find((s) => s.slug === slug);
    if (!system) return {};
    return {
      title: `${system.name} — componentsystem.directory`,
      description: system.description,
    };
  });
}

export default async function SystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);

  if (!system) {
    notFound();
  }

  const alternatives = systems
    .filter(
      (s) =>
        s.slug !== system.slug &&
        s.frameworks.some((f) => system.frameworks.includes(f))
    )
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-400">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{system.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-2xl font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            {system.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{system.name}</h1>
            {system.company && (
              <p className="mt-1 text-gray-500 dark:text-gray-400">by {system.company}</p>
            )}
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{system.description}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={system.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
          >
            Visit Website
            <ExternalIcon />
          </a>
          {system.github && (
            <a
              href={system.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {system.npm && (
            <a
              href={`https://www.npmjs.com/package/${system.npm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              npm
            </a>
          )}
        </div>
      </div>

      {/* Details grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <DetailCard title="Frameworks">
          <div className="flex flex-wrap gap-2">
            {system.frameworks.map((fw) => (
              <Tag key={fw} label={fw} />
            ))}
          </div>
        </DetailCard>

        {system.styling.length > 0 && (
          <DetailCard title="Styling Approach">
            <div className="flex flex-wrap gap-2">
              {system.styling.map((s) => (
                <Tag key={s} label={s} />
              ))}
            </div>
          </DetailCard>
        )}

        <DetailCard title="Category">
          <div className="flex flex-wrap gap-2">
            {system.category.map((c) => (
              <Tag key={c} label={c} />
            ))}
          </div>
        </DetailCard>

        <DetailCard title="Maturity">
          <MaturityBadge maturity={system.maturity} />
        </DetailCard>

        {system.license && (
          <DetailCard title="License">
            <span className="text-sm text-gray-700 dark:text-gray-300">{system.license}</span>
          </DetailCard>
        )}
      </div>

      {/* Components list */}
      {system.components.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Components ({system.components.length})
          </h2>
          <div className="flex flex-wrap gap-2">
            {system.components.map((comp) => (
              <span
                key={comp}
                className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {system.tags.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {system.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Similar Libraries
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <Link
                key={alt.slug}
                href={`/${alt.slug}`}
                className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/50 dark:border-gray-800 dark:hover:border-brand-700 dark:hover:bg-brand-900/20"
              >
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{alt.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  {alt.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <NewsletterSignup />
    </div>
  );
}

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
      <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      {children}
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      {label}
    </span>
  );
}

function MaturityBadge({ maturity }: { maturity: string }) {
  const colors: Record<string, string> = {
    experimental: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    active: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    stable: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    deprecated: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    unmaintained: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
        colors[maturity] ?? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      }`}
    >
      {maturity}
    </span>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
