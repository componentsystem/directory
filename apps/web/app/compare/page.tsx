import { systems } from "@componentsystem/data";
import type { Metadata } from "next";
import { ComparePageClient } from "@/components/compare-page-client";

export const metadata: Metadata = {
  title: "Compare Component Libraries — componentsystem.directory",
  description:
    "Side-by-side comparisons of popular UI component libraries. Compare shadcn/ui vs Mantine, Radix UI vs Headless UI, MUI vs Ant Design, and more.",
};

const popularComparisons = [
  {
    title: "React design system staples",
    description: "Polished React libraries with broad component coverage.",
    slugs: ["shadcn-ui", "mantine", "mui", "chakra-ui"],
  },
  {
    title: "Headless and primitive stack",
    description: "Composable foundations for custom design systems.",
    slugs: ["radix-ui", "headless-ui", "react-aria", "ariakit"],
  },
  {
    title: "Enterprise React suites",
    description: "Large component sets for internal tools and admin apps.",
    slugs: ["ant-design", "mui", "primereact", "fluent-ui"],
  },
  {
    title: "Tailwind-friendly choices",
    description: "Libraries that pair naturally with utility-first styling.",
    slugs: ["shadcn-ui", "daisy-ui", "flowbite", "preline"],
  },
  {
    title: "Vue ecosystem",
    description: "Popular Vue component libraries and design systems.",
    slugs: ["vuetify", "element-plus", "quasar", "vue-material"],
  },
  {
    title: "Svelte ecosystem",
    description: "Svelte-first libraries for applications and primitives.",
    slugs: ["shadcn-svelte", "skeleton", "bits-ui", "melt-ui"],
  },
];

export default function ComparePage() {
  return <ComparePageClient systems={systems} presets={popularComparisons} />;
}
