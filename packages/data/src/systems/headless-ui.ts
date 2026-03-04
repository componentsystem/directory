import type { ComponentSystem } from "../schema";

const headlessUi: ComponentSystem = {
  slug: "headless-ui",
  name: "Headless UI",
  url: "https://headlessui.com/",
  github: "https://github.com/tailwindlabs/headlessui",
  description:
    "Completely unstyled, fully accessible UI components for React and Vue, designed to integrate seamlessly with Tailwind CSS.",
  frameworks: ["react", "vue"],
  styling: ["headless"],
  category: ["primitives"],
  maturity: "stable",
  components: [],
  tags: ["accessible", "tailwind"],
  featured: false,
  sponsored: false,
  company: "Tailwind Labs",
};

export default headlessUi;
