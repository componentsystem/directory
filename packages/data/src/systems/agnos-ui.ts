import type { ComponentSystem } from "../schema";

const agnosUi: ComponentSystem = {
  slug: "agnos-ui",
  name: "AgnosUI",
  url: "https://amadeusitgroup.github.io/AgnosUI/latest/",
  github: "https://github.com/AmadeusITGroup/AgnosUI",
  description:
    "A framework-agnostic headless component library supporting Svelte, React, and Angular with Bootstrap styling integration and accessible primitives.",
  frameworks: ["svelte", "react", "angular"],
  styling: ["headless", "bootstrap"],
  category: ["general", "primitives"],
  maturity: "active",
  components: [],
  tags: ["headless", "framework-agnostic", "accessible"],
  featured: false,
  sponsored: false,
};

export default agnosUi;
