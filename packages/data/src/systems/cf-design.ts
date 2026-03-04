import type { ComponentSystem } from "../schema";

const cfDesign: ComponentSystem = {
  slug: "cf-design",
  name: "cf-design",
  url: "https://cloudflare.github.io/cf-ui/",
  github: "https://github.com/cloudflare/cf-ui",
  description:
    "Cloudflare's React component library used internally to build the Cloudflare dashboard and other web-based products with consistent styling and behavior.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["general", "design-system"],
  maturity: "active",
  components: [],
  tags: ["cloudflare", "internal", "dashboard"],
  featured: false,
  sponsored: false,
  company: "Cloudflare",
};

export default cfDesign;
