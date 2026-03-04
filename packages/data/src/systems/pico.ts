import type { ComponentSystem } from "../schema";

const pico: ComponentSystem = {
  slug: "pico",
  name: "Pico CSS",
  url: "https://picocss.com/",
  github: "https://github.com/picocss/pico",
  description:
    "A minimal CSS framework that provides elegant default styles for semantic HTML elements, requiring no classes for basic styling.",
  frameworks: ["html"],
  styling: ["vanilla-css"],
  category: ["general"],
  maturity: "active",
  components: ["Accordion", "Article", "Button", "Card", "Checkbox", "Dialog", "Dropdown", "Form", "Grid", "Group", "Loading", "Modal", "Nav", "Progress", "Radio", "Range", "Select", "Switch", "Table", "Tabs", "Textarea", "Tooltip", "Typography"],
  tags: ["minimal", "classless", "semantic-html", "lightweight"],
  featured: false,
  sponsored: false,
};

export default pico;
