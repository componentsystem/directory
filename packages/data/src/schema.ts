import { z } from "zod";

export const Framework = z.enum([
  "react",
  "vue",
  "svelte",
  "angular",
  "solid",
  "native",
  "web-components",
  "astro",
  "qwik",
  "html",
]);

export const StylingApproach = z.enum([
  "tailwind",
  "css-in-js",
  "css-modules",
  "headless",
  "styled-components",
  "bootstrap",
  "material",
  "vanilla-css",
  "design-tokens",
]);

export const Category = z.enum([
  "general",
  "data-viz",
  "native",
  "enterprise",
  "animation",
  "layout",
  "forms",
  "charts",
  "primitives",
  "design-system",
  "documentation",
  "dashboard",
  "mobile",
]);

export const Maturity = z.enum([
  "experimental",
  "active",
  "stable",
  "deprecated",
  "unmaintained",
]);

export const TemplateCategory = z.enum([
  "agency",
  "blog",
  "dashboard",
  "documentation",
  "ecommerce",
  "education",
  "events",
  "finance",
  "marketplace",
  "marketing",
  "nonprofit",
  "personal",
  "portfolio",
  "real-estate",
  "restaurant",
  "saas-landing",
  "startup",
]);

export const TemplatePriceType = z.enum([
  "free",
  "paid",
  "freemium",
  "unknown",
]);

export const ComponentDefinitionSchema = z.object({
  name: z.string().min(1),
  description: z.string().default(""),
  link: z.union([z.string().url(), z.literal("")]).default(""),
});

export const ComponentSystemSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  name: z.string().min(1),
  url: z.string().url(),
  logo: z.string().regex(/^\/.+/, "Logo must be a public asset path"),
  latestVersion: z.string().min(1),
  github: z.string().url().optional(),
  npm: z.string().optional(),
  description: z.string().min(10).max(300),
  frameworks: z.array(Framework).min(1),
  styling: z.array(StylingApproach).default([]),
  category: z.array(Category).min(1),
  maturity: Maturity.default("active"),
  components: z.array(ComponentDefinitionSchema).default([]),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
  license: z.string().optional(),
  company: z.string().optional(),
  author: z
    .object({
      name: z.string(),
      url: z.string().url().optional(),
      avatar: z.string().url().optional(),
    })
    .optional(),
});

export const TemplateSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  name: z.string().min(1),
  description: z.string().min(10).max(300),
  sourceName: z.string().min(1),
  sourceUrl: z.string().url(),
  url: z.string().url(),
  referralUrl: z.string().url(),
  previewImage: z.union([
    z.string().regex(/^\/templates\/.+/, "Preview image must be a public templates asset path"),
    z.string().url(),
  ]),
  categories: z.array(TemplateCategory).min(1),
  tools: z.array(z.string().min(1)).default([]),
  priceType: TemplatePriceType,
  priceText: z.string().min(1).optional(),
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
});

export type ComponentDefinition = z.infer<typeof ComponentDefinitionSchema>;
export type ComponentSystem = z.infer<typeof ComponentSystemSchema>;
export type ComponentSystemSource = ComponentSystem;
export type Template = z.infer<typeof TemplateSchema>;
export type Framework = z.infer<typeof Framework>;
export type StylingApproach = z.infer<typeof StylingApproach>;
export type Category = z.infer<typeof Category>;
export type Maturity = z.infer<typeof Maturity>;
export type TemplateCategory = z.infer<typeof TemplateCategory>;
export type TemplatePriceType = z.infer<typeof TemplatePriceType>;
