import type { ComponentSystem } from "../schema";

const themeUi: ComponentSystem = {
  slug: "theme-ui",
  name: "Theme UI",
  url: "https://theme-ui.com/",
  github: "https://github.com/system-ui/theme-ui",
  description:
    "A library for creating themeable React applications using constraint-based design tokens and CSS-in-JS, following the System UI theme specification.",
  frameworks: ["react"],
  styling: ["css-in-js", "design-tokens"],
  category: ["general", "primitives"],
  maturity: "stable",
  components: [],
  tags: ["theming", "design-tokens", "system-ui"],
  featured: false,
  sponsored: false,
};

export default themeUi;
