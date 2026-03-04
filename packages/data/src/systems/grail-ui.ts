import type { ComponentSystem } from "../schema";

const grailUi: ComponentSystem = {
  slug: "grail-ui",
  name: "Grail UI",
  url: "https://grail-ui.vercel.app/",
  github: "https://github.com/grail-ui/grail-ui",
  description:
    "A headless UI component library for Svelte, providing accessible, unstyled primitives that give developers full control over styling.",
  frameworks: ["svelte"],
  styling: ["headless"],
  category: ["primitives"],
  maturity: "active",
  components: ["Accordion", "Checkbox", "ClickOutside", "Clipboard", "Collapsible", "DismissibleLayer", "FloatingUI", "FocusTrap", "Listbox", "Menu", "Modal", "Pagination", "Popover", "ProgressBar", "Radio", "Select", "Slider", "Switch", "Tabs", "Toast", "Toggle", "Tooltip"],
  tags: [],
  featured: false,
  sponsored: false,
};

export default grailUi;
