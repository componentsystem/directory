import type { ComponentSystem } from "../schema";

const polymer: ComponentSystem = {
  slug: "polymer",
  name: "Polymer",
  url: "https://www.polymer-project.org/",
  github: "https://github.com/polymer/polymer",
  description:
    "A pioneering web components library by Google that helped shape the web components standard. Now deprecated in favor of Lit.",
  frameworks: ["web-components"],
  styling: ["vanilla-css"],
  category: ["general"],
  maturity: "deprecated",
  components: [],
  tags: ["google", "web-components", "legacy"],
  featured: false,
  sponsored: false,
};

export default polymer;
