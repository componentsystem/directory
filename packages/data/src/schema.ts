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

export const ComponentSystemSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  name: z.string().min(1),
  url: z.string().url(),
  github: z.string().url().optional(),
  npm: z.string().optional(),
  description: z.string().min(10).max(300),
  frameworks: z.array(Framework).min(1),
  styling: z.array(StylingApproach).default([]),
  category: z.array(Category).min(1),
  maturity: Maturity.default("active"),
  components: z.array(z.string()).default([]),
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

export type ComponentSystem = z.infer<typeof ComponentSystemSchema>;
export type Framework = z.infer<typeof Framework>;
export type StylingApproach = z.infer<typeof StylingApproach>;
export type Category = z.infer<typeof Category>;
export type Maturity = z.infer<typeof Maturity>;
