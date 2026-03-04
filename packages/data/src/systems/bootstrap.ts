import type { ComponentSystem } from "../schema";

const bootstrap: ComponentSystem = {
  slug: "bootstrap",
  name: "Bootstrap",
  url: "https://getbootstrap.com/",
  github: "https://github.com/twbs/bootstrap",
  description:
    "The world's most popular front-end framework for building responsive, mobile-first websites with an extensive library of CSS and JavaScript components.",
  frameworks: ["html"],
  styling: ["bootstrap", "vanilla-css"],
  category: ["general"],
  maturity: "stable",
  components: [],
  tags: ["responsive", "mobile-first", "popular", "css-framework"],
  featured: false,
  sponsored: false,
};

export default bootstrap;
