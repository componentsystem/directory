import { notFound } from "next/navigation";
import Link from "next/link";
import { systems } from "@componentsystem/data";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ComponentGrid } from "@/components/component-grid";
import { SystemLogo } from "@/components/system-logo";

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
    <div className="theme-page mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="theme-muted mb-6 text-sm">
        <Link href="/" className="hover:text-[color:var(--accent)]">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <span className="theme-muted-strong">{system.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="theme-logo-tile flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-bold">
            <SystemLogo name={system.name} logo={system.logo} />
          </div>
          <div className="flex-1">
            <p className="theme-kicker">Component System</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{system.name}</h1>
            {system.company && (
              <p className="theme-muted mt-1">by {system.company}</p>
            )}
            <p className="theme-muted mt-3 text-sm leading-6">{system.description}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={system.url}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-button-primary inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold"
          >
            Visit Website
            <ExternalIcon />
          </a>
          {system.github && (
            <a
              href={system.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-button-secondary inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium"
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
              className="theme-button-secondary inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium"
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

        <DetailCard title="Version">
          <span className="theme-muted-strong text-sm">{system.latestVersion}</span>
        </DetailCard>

        {system.license && (
          <DetailCard title="License">
            <span className="theme-muted-strong text-sm">{system.license}</span>
          </DetailCard>
        )}
      </div>

      {/* Components grid */}
      {system.components.length > 0 && (
        <ComponentGrid
          components={system.components}
          systemSlug={system.slug}
          systemUrl={system.url}
        />
      )}

      {/* Tags */}
      {system.tags.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {system.tags.map((tag) => (
              <span
                key={tag}
                className="theme-chip rounded-full px-3 py-1 text-sm"
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
          <h2 className="mb-4 text-xl font-semibold">
            Similar Libraries
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <Link
                key={alt.slug}
                href={`/${alt.slug}`}
                className="theme-card-flat theme-card-hover rounded-lg p-4"
              >
                <h3 className="font-medium">{alt.name}</h3>
                <p className="theme-muted mt-1 line-clamp-2 text-sm">
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
    <div className="theme-card-flat rounded-lg p-4">
      <h3 className="theme-muted mb-2 text-sm font-medium">{title}</h3>
      {children}
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="theme-chip rounded-full px-3 py-1 text-sm font-medium">
      {label}
    </span>
  );
}

function MaturityBadge({ maturity }: { maturity: string }) {
  const colors: Record<string, string> = {
    experimental: "border border-yellow-400/30 bg-yellow-300/15 text-yellow-700 dark:text-yellow-200",
    active: "border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] text-[color:var(--muted-strong)]",
    stable: "border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] text-[color:var(--muted-strong)]",
    deprecated: "border border-red-400/30 bg-red-300/15 text-red-600 dark:text-red-200",
    unmaintained: "theme-chip",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
        colors[maturity] ?? "theme-chip"
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
