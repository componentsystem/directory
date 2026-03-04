import type { ComponentSystem } from "../schema";

const styledComponents: ComponentSystem = {
  slug: "styled-components",
  name: "Styled Components",
  url: "https://styled-components.com/",
  github: "https://github.com/styled-components/styled-components",
  description:
    "A CSS-in-JS styling library for React that uses tagged template literals, allowing you to write actual CSS code to style components with automatic scoping.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["primitives"],
  maturity: "stable",
  components: ["styled", "css", "keyframes", "createGlobalStyle", "ThemeProvider", "ServerStyleSheet"],
  tags: ["css-in-js", "tagged-templates", "styling"],
  featured: false,
  sponsored: false,
};

export default styledComponents;
