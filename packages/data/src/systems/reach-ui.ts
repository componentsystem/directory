import type { ComponentSystem } from "../schema";

const reachUi: ComponentSystem = {
  slug: "reach-ui",
  name: "Reach UI",
  url: "https://reach.tech/",
  github: "https://github.com/reach/reach-ui",
  description:
    "An accessible foundation of React components and hooks focused on WAI-ARIA compliance, designed as low-level building blocks for design systems.",
  frameworks: ["react"],
  styling: ["headless"],
  category: ["primitives"],
  maturity: "active",
  components: ["Accordion", "Alert", "AlertDialog", "Checkbox", "Combobox", "Dialog", "Disclosure", "Listbox", "Menu", "Rect", "SkipNav", "Slider", "Tabs", "Tooltip", "VisuallyHidden", "WindowSize"],
  tags: ["accessible", "headless", "aria", "primitives"],
  featured: false,
  sponsored: false,
};

export default reachUi;
