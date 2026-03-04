import type { ComponentSystem } from "../schema";

const patternfly: ComponentSystem = {
  slug: "patternfly",
  name: "PatternFly",
  url: "https://www.patternfly.org/",
  github: "https://github.com/patternfly/patternfly",
  description:
    "An open-source design system with web components and React implementations, providing enterprise-grade UI patterns and guidelines by Red Hat.",
  frameworks: ["web-components", "react"],
  styling: ["vanilla-css", "design-tokens"],
  category: ["general", "enterprise", "design-system"],
  maturity: "stable",
  components: [],
  tags: ["enterprise", "red-hat", "patterns"],
  featured: false,
  sponsored: false,
};

export default patternfly;
