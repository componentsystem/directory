import type { ComponentSystem } from "../schema";

const meltUi: ComponentSystem = {
  slug: "melt-ui",
  name: "Melt UI",
  url: "https://melt-ui.com/",
  github: "https://github.com/melt-ui/melt-ui",
  description:
    "A headless UI component library for Svelte providing accessible, unstyled builder APIs that give full control over markup and styling.",
  frameworks: ["svelte"],
  styling: ["headless"],
  category: ["primitives"],
  maturity: "active",
  components: ["Accordion", "Avatar", "Calendar", "Checkbox", "Collapsible", "Combobox", "Context Menu", "Date Field", "Date Picker", "Date Range Field", "Date Range Picker", "Dialog", "Dropdown Menu", "Label", "Link Preview", "Menubar", "Pagination", "Pin Input", "Popover", "Progress", "Radio Group", "Range Calendar", "Scroll Area", "Select", "Separator", "Slider", "Switch", "Tabs", "Tags Input", "Toggle", "Toggle Group", "Toolbar", "Tooltip", "Tree"],
  tags: ["accessible", "headless", "builders"],
  featured: false,
  sponsored: false,
};

export default meltUi;
