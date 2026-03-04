import type { ComponentSystem } from "../schema";

const lit: ComponentSystem = {
  slug: "lit",
  name: "Lit",
  url: "https://lit.dev/",
  github: "https://github.com/lit/lit/",
  description:
    "A simple library for building fast, lightweight web components with declarative templates and reactive properties.",
  frameworks: ["web-components"],
  styling: [],
  category: ["general"],
  maturity: "stable",
  components: ["LitElement", "html", "css", "ReactiveElement", "nothing", "noChange"],
  tags: ["web-standards", "lightweight"],
  featured: false,
  sponsored: false,
};

export default lit;
