type UrlPattern = {
  base: string;
  pattern: (slug: string) => string;
};

const urlPatterns: Record<string, UrlPattern> = {
  "ant-design": {
    base: "https://ant.design",
    pattern: (s) => `https://ant.design/components/${s}`,
  },
  "shadcn-ui": {
    base: "https://ui.shadcn.com",
    pattern: (s) => `https://ui.shadcn.com/docs/components/${s}`,
  },
  mui: {
    base: "https://mui.com",
    pattern: (s) => `https://mui.com/material-ui/react-${s}/`,
  },
  "chakra-ui": {
    base: "https://www.chakra-ui.com",
    pattern: (s) => `https://www.chakra-ui.com/docs/components/${s}`,
  },
  mantine: {
    base: "https://mantine.dev",
    pattern: (s) => `https://mantine.dev/core/${s}/`,
  },
  "radix-ui": {
    base: "https://www.radix-ui.com",
    pattern: (s) => `https://www.radix-ui.com/primitives/docs/components/${s}`,
  },
  "radix-themes": {
    base: "https://www.radix-ui.com",
    pattern: (s) => `https://www.radix-ui.com/themes/docs/components/${s}`,
  },
  "headless-ui": {
    base: "https://headlessui.com",
    pattern: (s) => `https://headlessui.com/react/${s}`,
  },
  "react-aria": {
    base: "https://react-spectrum.adobe.com",
    pattern: (s) => `https://react-spectrum.adobe.com/react-aria/${s}.html`,
  },
  bootstrap: {
    base: "https://getbootstrap.com",
    pattern: (s) => `https://getbootstrap.com/docs/5.3/components/${s}/`,
  },
  vuetify: {
    base: "https://vuetifyjs.com",
    pattern: (s) => `https://vuetifyjs.com/en/components/${s}s/`,
  },
  nextui: {
    base: "https://nextui.org",
    pattern: (s) => `https://nextui.org/docs/components/${s}`,
  },
  "daisy-ui": {
    base: "https://daisyui.com",
    pattern: (s) => `https://daisyui.com/components/${s}/`,
  },
  flowbite: {
    base: "https://flowbite.com",
    pattern: (s) => `https://flowbite.com/docs/components/${s}/`,
  },
  "element-plus": {
    base: "https://element-plus.org",
    pattern: (s) => `https://element-plus.org/en-US/component/${s}.html`,
  },
  primereact: {
    base: "https://primereact.org",
    pattern: (s) => `https://primereact.org/${s}/`,
  },
  blueprint: {
    base: "https://blueprintjs.com",
    pattern: (s) => `https://blueprintjs.com/docs/#core/components/${s}`,
  },
  ariakit: {
    base: "https://ariakit.org",
    pattern: (s) => `https://ariakit.org/components/${s}`,
  },
  "ark-ui": {
    base: "https://ark-ui.com",
    pattern: (s) => `https://ark-ui.com/react/docs/components/${s}`,
  },
  "fluent-ui": {
    base: "https://react.fluentui.dev",
    pattern: (s) => `https://react.fluentui.dev/?path=/docs/components-${s}--default`,
  },
  "carbon-design-system": {
    base: "https://carbondesignsystem.com",
    pattern: (s) => `https://carbondesignsystem.com/components/${s}/usage/`,
  },
  polaris: {
    base: "https://polaris.shopify.com",
    pattern: (s) => `https://polaris.shopify.com/components/${s}`,
  },
  quasar: {
    base: "https://quasar.dev",
    pattern: (s) => `https://quasar.dev/vue-components/${s}`,
  },
  "park-ui": {
    base: "https://park-ui.com",
    pattern: (s) => `https://park-ui.com/docs/components/${s}`,
  },
  "bits-ui": {
    base: "https://bits-ui.com",
    pattern: (s) => `https://bits-ui.com/docs/components/${s}`,
  },
  skeleton: {
    base: "https://www.skeleton.dev",
    pattern: (s) => `https://www.skeleton.dev/components/${s}`,
  },
  "angular-material": {
    base: "https://material.angular.io",
    pattern: (s) => `https://material.angular.io/components/${s}/overview`,
  },
  kobalte: {
    base: "https://kobalte.dev",
    pattern: (s) => `https://kobalte.dev/docs/core/components/${s}`,
  },
  "shadcn-svelte": {
    base: "https://www.shadcn-svelte.com",
    pattern: (s) => `https://www.shadcn-svelte.com/docs/components/${s}`,
  },
  rsuite: {
    base: "https://rsuitejs.com",
    pattern: (s) => `https://rsuitejs.com/components/${s}/`,
  },
  "arco-design": {
    base: "https://arco.design",
    pattern: (s) => `https://arco.design/react/components/${s}`,
  },
  "semi-design": {
    base: "https://semi.design",
    pattern: (s) => `https://semi.design/en-US/show/${s}`,
  },
};

function toSlug(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export function getComponentUrl(
  systemSlug: string,
  systemUrl: string,
  componentName: string
): string {
  const slug = toSlug(componentName);
  const entry = urlPatterns[systemSlug];

  if (entry) {
    return entry.pattern(slug);
  }

  // Fallback: link to the system's base URL
  return systemUrl;
}
