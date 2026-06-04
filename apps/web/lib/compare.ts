export const popularComparisonSlugs = [
  "shadcn-ui;mantine;mui;chakra-ui",
  "radix-ui;headless-ui;react-aria;ariakit",
  "ant-design;mui;primereact;fluent-ui",
  "shadcn-ui;daisy-ui;flowbite;preline",
  "vuetify;element-plus;quasar;vue-material",
  "shadcn-svelte;skeleton;bits-ui;melt-ui",
  "shadcn-ui-vs-mantine",
  "mui-vs-ant-design",
];

export function parseComparison(comparison: string) {
  const decoded = decodeURIComponent(comparison);
  const slugs = decoded.includes(";")
    ? decoded.split(";")
    : decoded.split("-vs-");

  return Array.from(new Set(slugs.map((slug) => slug.trim()).filter(Boolean)));
}
