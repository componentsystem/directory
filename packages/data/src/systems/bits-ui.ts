import type { ComponentSystem } from "../schema";

const bitsUi: ComponentSystem = {
  slug: "bits-ui",
  name: "Bits UI",
  url: "https://www.bits-ui.com/",
  github: "https://github.com/huntabyte/bits-ui",
  description:
    "A headless component library for Svelte providing unstyled, accessible, and composable primitives that serve as building blocks for custom design systems.",
  frameworks: ["svelte"],
  styling: ["headless"],
  category: ["primitives", "general"],
  maturity: "active",
  components: ["Accordion", "Alert Dialog", "Aspect Ratio", "Avatar", "Calendar", "Checkbox", "Collapsible", "Combobox", "Context Menu", "Date Field", "Date Picker", "Date Range Field", "Date Range Picker", "Dialog", "Dropdown Menu", "Label", "Link Preview", "Menubar", "Navigation Menu", "Pagination", "Pin Input", "Popover", "Progress", "Radio Group", "Range Calendar", "Scroll Area", "Select", "Separator", "Slider", "Switch", "Tabs", "Toggle", "Toggle Group", "Toolbar", "Tooltip"],
  tags: ["headless", "accessible", "primitives", "composable"],
  featured: false,
  sponsored: false,
};

export default bitsUi;
