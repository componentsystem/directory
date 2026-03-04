import type { ComponentSystem } from "../schema";

const agnosticUi: ComponentSystem = {
  slug: "agnostic-ui",
  name: "AgnosticUI",
  url: "https://www.agnosticui.com/",
  github: "https://github.com/agnosticui/agnosticui",
  description:
    "A truly framework-agnostic UI component library supporting React, Vue, Svelte, Angular, and Astro with accessible, cleanly styled components that work across frameworks.",
  frameworks: ["react", "vue", "svelte", "angular", "astro"],
  styling: ["vanilla-css"],
  category: ["general"],
  maturity: "active",
  components: ["Alert", "Avatar", "Breadcrumb", "Button", "ButtonGroup", "Card", "ChoiceInput", "Close", "Dialog", "Disclose", "Divider", "Drawer", "EmptyState", "Header", "Icon", "Input", "Loader", "Menu", "Pagination", "Progress", "Select", "Spinner", "Switch", "Tab", "Table", "Tag", "Toast", "Tooltip"],
  tags: ["framework-agnostic", "accessible", "multi-framework"],
  featured: false,
  sponsored: false,
};

export default agnosticUi;
