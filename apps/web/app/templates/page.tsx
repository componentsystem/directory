import Image from "next/image";
import type { Metadata } from "next";
import { templates } from "@componentsystem/data";
import { TemplateGallery } from "@/components/template-gallery";

export const metadata: Metadata = {
  title: "Website Templates — componentsystem.directory",
  description:
    "Find website templates for portfolios, real estate, SaaS landing pages, blogs, ecommerce, dashboards, and more.",
};

const sourceCount = new Set(templates.map((template) => template.sourceName)).size;
const featuredTemplates = templates.filter((template) => template.featured).slice(0, 3);

export default function TemplatesPage() {
  return (
    <div className="theme-page mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-10 border-b border-[color:var(--border)] pb-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="theme-kicker">Template Index</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Website Templates
            </h1>
            <p className="theme-muted mt-4 text-sm leading-6">
              Browse image-first templates for portfolios, real estate sites,
              SaaS landing pages, blogs, ecommerce stores, dashboards, and more.
            </p>
          </div>
          <div className="theme-stat-card rounded-lg px-5 py-4">
            <p className="text-3xl font-semibold">{templates.length}</p>
            <p className="theme-muted text-sm">templates indexed</p>
          </div>
          <div className="theme-stat-card rounded-lg px-5 py-4">
            <p className="text-3xl font-semibold">{sourceCount}</p>
            <p className="theme-muted text-sm">sources indexed</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">
              Featured Templates
            </h2>
            <p className="theme-muted mt-1 text-sm">
              Three strong starting points selected from the template index.
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredTemplates.map((template) => (
            <a
              key={template.slug}
              href={template.referralUrl || template.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="theme-card theme-card-hover group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--surface-muted)]">
                <Image
                  src={template.previewImage}
                  alt={`${template.name} template preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  unoptimized
                  priority
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-[color:var(--accent)]">
                      {template.name}
                    </h3>
                    <p className="theme-muted mt-1 text-sm">
                      {template.sourceName}
                    </p>
                  </div>
                  <span className="theme-chip shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold">
                    {template.priceText}
                  </span>
                </div>
                <p className="theme-muted mt-3 line-clamp-2 text-sm leading-6">
                  {template.description}
                </p>
                <p className="theme-link mt-4 text-sm font-semibold">
                  View template
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <TemplateGallery templates={templates} />
    </div>
  );
}
