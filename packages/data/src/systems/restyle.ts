import type { ComponentSystem } from "../schema";

const restyle: ComponentSystem = {
  slug: "restyle",
  name: "Restyle",
  url: "https://github.com/Shopify/restyle",
  github: "https://github.com/Shopify/restyle",
  description:
    "A type-enforced system for building UI components in React Native with TypeScript, developed by Shopify, using design tokens for consistent theming.",
  frameworks: ["native"],
  styling: ["design-tokens"],
  category: ["mobile", "primitives"],
  maturity: "active",
  components: ["Box", "Text", "ThemeProvider", "createRestyleComponent", "createVariant"],
  tags: ["react-native", "design-tokens", "theming", "typescript"],
  featured: false,
  sponsored: false,
  company: "Shopify",
};

export default restyle;
