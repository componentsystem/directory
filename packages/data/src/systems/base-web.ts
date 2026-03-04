import type { ComponentSystem } from "../schema";

const baseWeb: ComponentSystem = {
  slug: "base-web",
  name: "Base Web",
  url: "https://baseweb.design/",
  github: "https://github.com/uber/baseweb",
  description:
    "Uber's React component library implementing the Base Design System, offering robust and highly customizable components for building accessible enterprise web applications.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["general", "enterprise", "design-system"],
  maturity: "active",
  components: [],
  tags: ["uber", "enterprise", "customizable"],
  featured: false,
  sponsored: false,
  company: "Uber",
};

export default baseWeb;
