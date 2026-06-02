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
    <div className="bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-100">
      <section className="relative isolate overflow-hidden border-b border-gray-200 bg-gray-950 text-white dark:border-gray-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(132,255,180,0.16),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.2),transparent_30%),linear-gradient(135deg,#05070d_0%,#0b1020_48%,#111827_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-gray-950 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(520px,1.14fr)] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lime-200 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                Production Inspiration
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Interfaces worth studying.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Real product, marketing, marketplace, and developer sites where component systems
                shape the interface quality, interaction model, and delivery speed.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
                <StatCard label="Showcases" value={showcases.length} />
                <StatCard label="Sources" value={sourceCount} />
                <StatCard label="Systems" value={systemCount} />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Chakra UI", "MUI", "Ant Design", "Mantine", "Radix UI", "shadcn/ui"].map(
                  (system) => (
                    <span
                      key={system}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {system}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="group relative block">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-lime-300/20 via-brand-500/10 to-cyan-300/20 blur-2xl transition group-hover:opacity-80" />
              <div className="relative overflow-hidden rounded-xl border border-white/15 bg-gray-900 shadow-2xl shadow-black/50 transition duration-500 group-hover:-translate-y-1 group-hover:border-lime-300/40">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/95 px-4 py-3 text-gray-950">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-lime-400" />
                  </div>
                  <span className="rounded-full bg-gray-950 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-800">
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
                <div className="grid gap-5 border-t border-white/10 bg-gray-950/95 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      {featuredShowcase.category}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                      {featuredShowcase.name}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                      {featuredShowcase.highlight ?? featuredShowcase.description}
                    </p>
                    <TechnologyChips technologies={featuredShowcase.technologies} />
                  </div>
                  <a
                    href={featuredShowcase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300 transition hover:border-lime-300/50 hover:text-lime-200"
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
              Curated Showcases
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Verified from component-system showcases and technographic indexes.
            </p>
          </div>
          <a
            href="mailto:hello@componentsystem.directory?subject=Showcase%20submission"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 px-4 text-sm font-semibold text-gray-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-700 dark:hover:text-brand-300"
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
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700">
      <a href={showcase.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
              {showcase.category}
            </p>
            <h3 className="mt-2 text-lg font-bold text-gray-950 dark:text-white">
              <a href={showcase.url} target="_blank" rel="noopener noreferrer">
                {showcase.name}
              </a>
            </h3>
          </div>
          <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            {hostFromUrl(showcase.url)}
          </span>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {showcase.description}
        </p>
        <TechnologyChips technologies={showcase.technologies} />
        <a
          href={showcase.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
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
          className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-100 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:border-brand-700"
        >
          {technology.name}
        </a>
      ))}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-r border-white/10 p-4 last:border-r-0">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
        {label}
      </div>
    </div>
  );
}
