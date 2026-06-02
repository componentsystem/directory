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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-100">
              Website Templates
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Browse image-first templates for portfolios, real estate sites,
              SaaS landing pages, blogs, ecommerce stores, dashboards, and more.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-3xl font-bold text-gray-950 dark:text-gray-100">{templates.length}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">templates indexed</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-3xl font-bold text-gray-950 dark:text-gray-100">{sourceCount}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">sources indexed</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-100">
              Featured Templates
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
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
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-brand-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
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
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-100">
                      {template.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {template.sourceName}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                    {template.priceText}
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {template.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-600 dark:text-brand-400">
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
