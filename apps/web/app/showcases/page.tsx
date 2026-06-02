import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Real-World Showcases — componentsystem.directory",
  description:
    "A curated gallery of real websites and products built with production component systems including Chakra UI, MUI, Ant Design, Mantine, Radix UI, and shadcn/ui.",
};

type ComponentTechnology = {
  name: string;
  href: string;
};

type Showcase = {
  name: string;
  url: string;
  description: string;
  category: string;
  sourceName: string;
  sourceUrl: string;
  technologies: ComponentTechnology[];
  highlight?: string;
  featured?: boolean;
};

const showcases: Showcase[] = [
  {
    name: "Vimeo",
    url: "https://vimeo.com",
    description:
      "A creator-first video platform with polished publishing, discovery, and commerce surfaces.",
    category: "Creator Platform",
    sourceName: "Chakra UI Showcase",
    sourceUrl: "https://chakra-ui.com/showcase",
    technologies: [{ name: "Chakra UI", href: "/chakra-ui" }],
    highlight: "High-density product UI, navigation, and creator workflows.",
    featured: true,
  },
  {
    name: "Ethereum.org",
    url: "https://ethereum.org",
    description:
      "The public education hub for Ethereum, combining documentation, guides, learning paths, and ecosystem entry points.",
    category: "Documentation",
    sourceName: "Chakra UI Showcase",
    sourceUrl: "https://chakra-ui.com/showcase",
    technologies: [{ name: "Chakra UI", href: "/chakra-ui" }],
  },
  {
    name: "Socket",
    url: "https://socket.dev",
    description:
      "Security tooling for open-source dependencies, with dashboards, reports, alerts, and developer-focused workflows.",
    category: "Developer Tooling",
    sourceName: "Chakra UI Showcase",
    sourceUrl: "https://chakra-ui.com/showcase",
    technologies: [{ name: "Chakra UI", href: "/chakra-ui" }],
  },
  {
    name: "Housecall Pro",
    url: "https://www.housecallpro.com",
    description:
      "Operations software for home-service businesses, spanning scheduling, estimates, invoices, and field workflows.",
    category: "SaaS",
    sourceName: "MUI Showcase",
    sourceUrl: "https://mui.com/material-ui/discover-more/showcase/",
    technologies: [{ name: "MUI", href: "/mui" }],
  },
  {
    name: "QuintoAndar",
    url: "https://www.quintoandar.com.br",
    description:
      "A real-estate marketplace with search, listings, transaction flows, and consumer-facing product journeys.",
    category: "Marketplace",
    sourceName: "MUI Showcase",
    sourceUrl: "https://mui.com/material-ui/discover-more/showcase/",
    technologies: [{ name: "MUI", href: "/mui" }],
  },
  {
    name: "OpenClassrooms",
    url: "https://openclassrooms.com",
    description:
      "A learning platform with structured courses, dashboards, certification flows, and student progress surfaces.",
    category: "Education",
    sourceName: "MUI Showcase",
    sourceUrl: "https://mui.com/material-ui/discover-more/showcase/",
    technologies: [{ name: "MUI", href: "/mui" }],
  },
  {
    name: "TikTok Ads",
    url: "https://ads.tiktok.com",
    description:
      "A global advertising platform with campaign onboarding, product education, account surfaces, and high-volume growth UI.",
    category: "Marketing Platform",
    sourceName: "Wappalyzer Ant Design index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/ant-design/",
    technologies: [{ name: "Ant Design", href: "/ant-design" }],
  },
  {
    name: "Notta",
    url: "https://www.notta.ai",
    description:
      "An AI meeting and transcription product with dashboards, workspace flows, conversion pages, and collaboration UI.",
    category: "AI Productivity",
    sourceName: "Wappalyzer Ant Design index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/ant-design/",
    technologies: [{ name: "Ant Design", href: "/ant-design" }],
  },
  {
    name: "Stockbit",
    url: "https://stockbit.com",
    description:
      "An investing community and trading product with market data, education content, onboarding, and account workflows.",
    category: "Fintech",
    sourceName: "Wappalyzer Ant Design index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/ant-design/",
    technologies: [{ name: "Ant Design", href: "/ant-design" }],
  },
  {
    name: "Contra",
    url: "https://contra.com",
    description:
      "A professional network and freelance marketplace with profile builders, project discovery, and hiring workflows.",
    category: "Marketplace",
    sourceName: "Wappalyzer Mantine index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/mantine/",
    technologies: [{ name: "Mantine", href: "/mantine" }],
  },
  {
    name: "Civitai",
    url: "https://civitai.com",
    description:
      "A generative AI community with model browsing, creator pages, media grids, filters, and dense moderation surfaces.",
    category: "AI Community",
    sourceName: "Wappalyzer Mantine index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/mantine/",
    technologies: [{ name: "Mantine", href: "/mantine" }],
  },
  {
    name: "3dicons",
    url: "https://3dicons.co",
    description:
      "A polished icon resource with downloadable assets, gallery browsing, creator presentation, and visual catalog UI.",
    category: "Design Asset",
    sourceName: "Wappalyzer Mantine index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/mantine/",
    technologies: [{ name: "Mantine", href: "/mantine" }],
  },
  {
    name: "Cursor",
    url: "https://cursor.com",
    description:
      "An AI code editor website with product storytelling, docs entry points, account flows, and developer-focused navigation.",
    category: "Developer Tooling",
    sourceName: "Wappalyzer Radix UI index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/radix-ui/",
    technologies: [{ name: "Radix UI", href: "/radix-ui" }],
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    description:
      "A developer learning and interview platform with problem navigation, filters, discussions, ranking, and learning paths.",
    category: "Developer Education",
    sourceName: "Wappalyzer Radix UI index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/radix-ui/",
    technologies: [{ name: "Radix UI", href: "/radix-ui" }],
  },
  {
    name: "Polymarket",
    url: "https://polymarket.com",
    description:
      "A prediction-market product with live market cards, filters, portfolios, event pages, and data-heavy interaction states.",
    category: "Fintech",
    sourceName: "Wappalyzer Radix UI index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/radix-ui/",
    technologies: [{ name: "Radix UI", href: "/radix-ui" }],
  },
  {
    name: "OpenRouter",
    url: "https://openrouter.ai",
    description:
      "An AI model gateway with model catalogs, usage dashboards, docs, billing paths, and comparison-oriented product UI.",
    category: "AI Infrastructure",
    sourceName: "Wappalyzer shadcn/ui index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/shadcn-ui/",
    technologies: [{ name: "shadcn/ui", href: "/shadcn-ui" }],
  },
  {
    name: "Cal.com",
    url: "https://cal.com",
    description:
      "Scheduling infrastructure with booking pages, routing forms, app marketplace surfaces, and workspace management.",
    category: "Scheduling",
    sourceName: "Wappalyzer shadcn/ui index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/shadcn-ui/",
    technologies: [{ name: "shadcn/ui", href: "/shadcn-ui" }],
  },
  {
    name: "Lovable",
    url: "https://lovable.dev",
    description:
      "An AI app-building product with prompt flows, project surfaces, account onboarding, and marketing-to-product transitions.",
    category: "AI Builder",
    sourceName: "Wappalyzer shadcn/ui index",
    sourceUrl: "https://www.wappalyzer.com/technologies/ui-frameworks/shadcn-ui/",
    technologies: [{ name: "shadcn/ui", href: "/shadcn-ui" }],
  },
];

const featuredShowcase = showcases.find((showcase) => showcase.featured) ?? showcases[0];
const showcaseGrid = showcases.filter((showcase) => showcase.name !== featuredShowcase.name);
const sourceCount = new Set(showcases.map((showcase) => showcase.sourceName)).size;
const systemCount = new Set(
  showcases.flatMap((showcase) => showcase.technologies.map((technology) => technology.href))
).size;

function screenshotUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400`;
}

function hostFromUrl(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export default function ShowcasesPage() {
  return (
    <div className="theme-page">
      <section className="relative isolate overflow-hidden border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(520px,1.14fr)] lg:items-center">
            <div>
              <div className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                Production Inspiration
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Interfaces worth studying.
              </h1>
              <p className="theme-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg">
                Real product, marketing, marketplace, and developer sites where component systems
                shape the interface quality, interaction model, and delivery speed.
              </p>

              <div className="theme-card mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg backdrop-blur">
                <StatCard label="Showcases" value={showcases.length} />
                <StatCard label="Sources" value={sourceCount} />
                <StatCard label="Systems" value={systemCount} />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Chakra UI", "MUI", "Ant Design", "Mantine", "Radix UI", "shadcn/ui"].map(
                  (system) => (
                    <span
                      key={system}
                      className="theme-chip rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {system}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="group relative block">
              <div className="relative overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] shadow-2xl transition duration-500 group-hover:-translate-y-1 group-hover:border-[color:var(--border-strong)]">
                <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-[color:var(--accent)]" />
                  </div>
                  <span className="theme-chip-active rounded-full px-3 py-1 text-xs font-semibold">
                    Featured
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--surface-muted)]">
                  <Image
                    src={screenshotUrl(featuredShowcase.url)}
                    alt={`${featuredShowcase.name} website screenshot`}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    unoptimized
                    priority
                  />
                </div>
                <div className="grid gap-5 border-t border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <div>
                    <p className="theme-kicker">
                      {featuredShowcase.category}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                      {featuredShowcase.name}
                    </h2>
                    <p className="theme-muted mt-3 max-w-2xl text-sm leading-6">
                      {featuredShowcase.highlight ?? featuredShowcase.description}
                    </p>
                    <TechnologyChips technologies={featuredShowcase.technologies} />
                  </div>
                  <a
                    href={featuredShowcase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-button-secondary rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {hostFromUrl(featuredShowcase.url)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Curated Showcases
            </h2>
            <p className="theme-muted mt-2 text-sm">
              Verified from component-system showcases and technographic indexes.
            </p>
          </div>
          <a
            href="mailto:hello@componentsystem.directory?subject=Showcase%20submission"
            className="theme-button-secondary inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold"
          >
            Submit a showcase
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {showcaseGrid.map((showcase) => (
            <ShowcaseCard key={showcase.name} showcase={showcase} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ShowcaseCard({ showcase }: { showcase: Showcase }) {
  return (
    <article className="theme-card-flat theme-card-hover group overflow-hidden rounded-lg transition hover:-translate-y-0.5">
      <a href={showcase.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--surface-muted)]">
          <Image
            src={screenshotUrl(showcase.url)}
            alt={`${showcase.name} website screenshot`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.035]"
            unoptimized
          />
        </div>
      </a>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="theme-kicker">
              {showcase.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold group-hover:text-[color:var(--accent)]">
              <a href={showcase.url} target="_blank" rel="noopener noreferrer">
                {showcase.name}
              </a>
            </h3>
          </div>
          <span className="theme-chip shrink-0 rounded-full px-2.5 py-1 text-xs font-medium">
            {hostFromUrl(showcase.url)}
          </span>
        </div>
        <p className="theme-muted mt-3 line-clamp-3 text-sm leading-6">
          {showcase.description}
        </p>
        <TechnologyChips technologies={showcase.technologies} />
        <a
          href={showcase.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-link mt-4 inline-flex text-xs font-semibold"
        >
          Verified via {showcase.sourceName}
        </a>
      </div>
    </article>
  );
}

function TechnologyChips({ technologies }: { technologies: ComponentTechnology[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <a
          key={technology.href}
          href={technology.href}
          className="theme-chip rounded-full px-3 py-1 text-xs font-semibold transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent)]"
        >
          {technology.name}
        </a>
      ))}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-r border-[color:var(--border)] p-4 last:border-r-0">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="theme-muted mt-1 text-xs font-medium uppercase tracking-[0.12em]">
        {label}
      </div>
    </div>
  );
}
